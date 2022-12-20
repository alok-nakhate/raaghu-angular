import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  Injectable,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  endOfWeek,
  addMinutes,
} from 'date-fns';
import { fromEvent, Subject } from 'rxjs';
//  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarView,
} from '@libs/rds-elements';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { WeekViewHourSegment } from 'projects/libs/rds-elements/src/rds-calendar/src/calendar-utils';
import { finalize, takeUntil } from 'rxjs/operators';

function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}

function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  weekTooltip(event: CalendarEvent, title: string) {
    if (!event.meta.tmpEvent) {
      return super.weekTooltip(event, title);
    }
  }

  dayTooltip(event: CalendarEvent, title: string) {
    if (!event.meta.tmpEvent) {
      return super.dayTooltip(event, title);
    }
  }
}


declare let bootstrap: any;
@Component({
  selector: 'rds-comp-calendar',
  templateUrl: './rds-comp-calendar.component.html',
  styleUrls: ['./rds-comp-calendar.component.scss'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ],
  styles: [
    `
      .disable-hover {
        pointer-events: none;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class RdsCompCalendarComponent implements OnInit {
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @Output() onContinue = new EventEmitter<any>();

  view: CalendarView = CalendarView.Month;
  viewCanvas: boolean = false;
  canvasTitle: string = '';
  CalendarView = CalendarView;
  selectedId: any = '';
  viewDate: Date = new Date();

  dragToCreateActive = false;
  weekStartsOn: 0 = 0;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

   refreshed = new Subject<void>();
  eventData: CalendarEvent = {
    start: new Date(),
    end:  new Date(),
    title: '',
    color: this.colors,
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
  };

  @Input() events: CalendarEvent[] = [
  ];

  activeDayIsOpen: boolean = true;

  constructor(public translate: TranslateService , private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      // this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.refreshed.next();
    }
  

  handleEvent(action: string, event: CalendarEvent): void {
    this.viewCanvas = true;
    this.selectedId = event.id;

    if (event) {
      this.canvasTitle = 'EDIT EVENT';
      this.eventData.title = event.title;
      this.eventData.start =new Date(event.start);
      debugger
      this.eventData.end = new Date(event.end);
    } else {
    }
    console.log('event', event);

    setTimeout(() => {
      var offcanvas = document.getElementById('calendarOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  addEvent(eventCreationForm: NgForm): void {
    eventCreationForm.form.markAllAsTouched();
      const event = this.events.find((x: any) => +x.id === +this.selectedId);
      event.title = this.eventData.title;
      event.draggable = true;
    this.onContinue.emit(this.events);
    eventCreationForm.reset();
    this.viewCanvas = false;
  }

  deleteEvent(eventCreationForm: NgForm) {
    const index: number = this.events.findIndex(
      (event) => +event.id === this.selectedId
    );
    this.events.splice(index, 1);
    this.events = [
      ...this.events
    ];
    this.selectedId = '';
    eventCreationForm.reset();
    this.viewCanvas = false;
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  close(eventCreationForm: NgForm): void {
    this.viewCanvas = false;
    eventCreationForm.reset();

  }

  startDragToCreate(
    segment: WeekViewHourSegment,
    mouseDownEvent: MouseEvent,
    segmentElement: HTMLElement
  ) {
    const dragToSelectEvent: CalendarEvent = {
      id: this.events.length,
      title: 'New event',
      start: segment.date,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      meta: {
        tmpEvent: true,
      },
    };
    this.events = [...this.events, dragToSelectEvent];
    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true; 
    const endOfView = endOfWeek(this.viewDate, {
      weekStartsOn: this.weekStartsOn,
    });
    fromEvent(document, 'mousemove')
    .pipe(
      finalize(() => {
        delete dragToSelectEvent.meta.tmpEvent;
        this.dragToCreateActive = false;
        this.refresh();
      }),
      takeUntil(fromEvent(document, 'mouseup'))
    )
    .subscribe((mouseMoveEvent: MouseEvent) => {
      const minutesDiff = ceilToNearest(
        mouseMoveEvent.clientY - segmentPosition.top,
        30
      );
      const daysDiff =
      floorToNearest(
        mouseMoveEvent.clientX - segmentPosition.left,
        segmentPosition.width
      ) / segmentPosition.width;
      const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
      if (newEnd > segment.date && newEnd < endOfView) {
        dragToSelectEvent.end = newEnd;
      }
      this.refresh();
    });
  }
  private refresh() {
    this.events = [...this.events];
    this.cdr.detectChanges();
  }
}
