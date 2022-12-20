import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'rds-alert',
  templateUrl: './rds-alert.component.html',
  styleUrls: ['./rds-alert.component.scss']
})
export class RdsAlertComponent implements OnInit {


  // @Input() size: 'small' | 'medium' | 'large' = 'medium'
  @Input() size: 'small' | 'medium' | 'large' = 'medium'
  @Input() dismissible: boolean = true
  @Input() icon: string = '';
  @Input() label = 'A simple primary alert—check it out!';
  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() delay: number = 0;
  @Input() sticky: boolean = false;;
  @Output() onDismiss = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
    this.hide();
  }


  public get classes(): string {
    const mode = `alert alert-${this.colorVariant}`;
    let mode1: string = '';
    if (this.dismissible) {
      mode1 = ' alert-dismissible'
    }

    if (this.sticky){
       const mode2 = `${this.position === 'top' ? ' position-absolute top-0 start-0 fullWidth ' : ' position-absolute bottom-0 start-0 fullWidth '}`;
       return mode + mode2 + mode;
      }
      else {
        return mode + mode1;
      }
  }


  hide(): void {
    if (this.delay) {
      setTimeout(() => {
        this.closeAlert();
      }, this.delay);
    }
  }


  closeAlert() {
    var element = document.getElementById('alert');
    if(element){
      var alert = new bootstrap.Alert(element);
      if(alert){
        alert.close();
        this.onDismiss.emit();
      }

    }

  }

  public get iconSize(): string {
    const mode2 = `${this.size === 'medium' ? 'fs-4' : this.size === 'large' ? 'fs-3' : this.size === 'small'}`;
    return mode2;
  }

  public get alertSize(): string{
    const mode3 =  `${this.size === 'small' ? 'alert-sm' : this.size === 'large' ? 'alert-lg' : 'alert-md'}`;
    switch (this.size) {
      case 'small':
        this.iconHeight = '15px';
        this.iconWidth = '15px';
        break;
      case 'medium':
        this.iconHeight = '20px';
        this.iconWidth = '20px';
        break;
      case 'large':
        this.iconHeight = '25px';
        this.iconWidth = '25px';
        break;  
      default:
        this.iconHeight = '20px';
        this.iconWidth = '20px';
        break;
    }
    return mode3;

  }
}
