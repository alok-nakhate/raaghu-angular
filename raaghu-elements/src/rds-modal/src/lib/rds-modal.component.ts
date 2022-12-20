import { Component, EventEmitter, Input, AfterViewInit, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-modal',
  templateUrl: './rds-modal.component.html',
  styleUrls: ['./rds-modal.component.scss']
})
export class RdsModalComponent implements OnInit, AfterViewInit {

  onChange!: (value: string) => void;
  onTouched!: () => void
  @Input() showModalHeader: boolean = true;
  @Input() showModalFooter: boolean = true;
  @Input() modalId: string = 'modalId';
  @Input() modalBackdrop: boolean | 'static' = false;
  @Output() onShow = new EventEmitter<Event>();
  @Output() onClose = new EventEmitter<Event>();
  @Input() size: 'small' | 'large' | 'extra-large' | 'fullscreen' | 'default' = 'default';
  @Input() scrollable: boolean = false;
  @Input() verticallyCenterd: boolean = false;
  @Input() modalAnimation: 'modal fade' | 'modal fade-scale' | 'modal fade-rotate' | 'modal fade-flip' = 'modal fade';
  @Input() preventEscapeKey: boolean = false;



  constructor() { }


  ngAfterViewInit(): void {
    if (this.modalId) {
      var myModalEl = document.getElementById(this.modalId);
      if (myModalEl) {
        const that = this;
        // myModalEl.addEventListener('hidden.bs.modal', function (event) {
        //   that.onClose.emit();
        // });
        // myModalEl.addEventListener('show.bs.modal', function (event) {
        //   that.onShow.emit();
        // })
      }
    }
  }


  ngOnInit(): void {
    if (this.modalId) {
      var myModalEl = document.getElementById(this.modalId);
      if (myModalEl) {
        const that = this;
        // myModalEl.addEventListener('hidden.bs.modal', function (event) {
        //   that.onClose.emit();
        // });
        // myModalEl.addEventListener('show.bs.modal', function (event) {
        //   that.onShow.emit();
        // })
      }
    }
  }



  public get classes(): string[] {
    const styleClasses: string[] = ['modal-dialog'];
    if (this.scrollable) {
      styleClasses.push('modal-dialog-scrollable');
    }
    if (this.verticallyCenterd) {
      styleClasses.push('modal-dialog-centered');
    }
    if (this.size === 'small') {
      styleClasses.push('modal-sm');
    }
    if (this.size === 'large') {
      styleClasses.push('modal-lg');
    }
    if (this.size === 'extra-large') {
      styleClasses.push('modal-xl');
    }
    if (this.size === 'fullscreen') {
      styleClasses.push('modal-fullscreen');
    }
    return styleClasses;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }



  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  public get modalAnimationClass(): string {
    var modalAnimations = `modal ${this.modalAnimation === 'modal fade-rotate' ? 'fade-rotate' :
      this.modalAnimation === 'modal fade' ? 'modal fade' : this.modalAnimation === 'modal fade-scale' ? 'fade-scale' :
        this.modalAnimation === 'modal fade-flip' ? 'fade-flip' : 'modal fade'}`;
    return modalAnimations;
  }

}
