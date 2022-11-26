import { ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
  sticky:boolean;
}
export enum EventTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

@Component({
  selector: 'rds-comp-alert',
  templateUrl: './rds-comp-alert.component.html',
  styleUrls: ['./rds-comp-alert.component.scss']
})
export class RdsCompAlertComponent implements OnInit {

  @Input() currentAlerts: ToastEvent[] = [];
  @Output() onAlertHide = new EventEmitter<any>();
  @Input() alertPosition: 'top' | 'bottom' = 'top';


  constructor(private cdr: ChangeDetectorRef, public translate: TranslateService) { }

  ngOnInit() {
  }

  getType(currentAlert: ToastEvent) {
    switch (currentAlert.type) {
      case EventTypes.Error:
        return 'danger';
      case EventTypes.Success:
        return 'success';
      case EventTypes.Info:
        return 'info';
      case EventTypes.Warning:
        return 'warning';
      default:
        return 'primary';
    }
  }

  getIcon(currentAlert: ToastEvent) {
    switch (currentAlert.type) {
      case EventTypes.Error:
        return 'destructive';
      case EventTypes.Success:
        return 'successful';
      case EventTypes.Info:
        return 'information';
      case EventTypes.Warning:
        return 'warning';
      default:

    }
  }

  dispose(index: number) {
    this.currentAlerts.splice(index, 1);
    this.onAlertHide.emit(this.currentAlerts);
    this.cdr.detectChanges();
  }
}
