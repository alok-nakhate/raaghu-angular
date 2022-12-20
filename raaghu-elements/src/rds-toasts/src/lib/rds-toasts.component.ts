import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import * as bootstrap from 'bootstrap';
import { Toast } from 'bootstrap'

declare var bootstrap: any;

@Component({
  selector: 'rds-toasts',
  templateUrl: './rds-toasts.component.html',
  styleUrls: ['./rds-toasts.component.scss']
})
export class RdsToastsComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() message = 'Hello, world! This is a toast message.';
  @Input() role: string = 'basic';
  @Input() delay: number = 1000;
  @Input() autohide: boolean = false;
  @Input() toastId: string = 'toastId';
  @Input() colorVariant: 'primary' | 'success' | 'secondary' | 'light' | 'dark' | 'danger' | 'warning' | 'info' | undefined = undefined;
  @Input() showHeader: boolean = true
  @Input() headerColorVariant: 'primary' | 'success' | 'secondary' | 'light' | 'dark' | 'danger' | 'warning' | 'info' | undefined = undefined;

  @Input() headerTitle: string = ''
  @Input() position: 'Top-Left' | 'Top-Center' | 'Top-Right' | 'Middle-Left' | 'Middle-Center' | 'Middle-Right' | 'Bottom-Left' | 'Bottom-Center' | 'Bottom-Right' = 'Top-Left';
  @Input() show: boolean = false;
  @Input() showButton: boolean = false;
  @Input() border: 'primary' | 'success' | 'secondary' | 'light' | 'dark' | 'danger' | 'warning' | 'info' | undefined = undefined;
  @Input() closebtn: boolean = false
  // @Input() iconName: string = 'check';
  // @Input() iconHeight: string = '16px'
  // @Input() iconWidth: string = '18px'
  // @Input() iconColorVariant: string = '';
  // @Input() iconFill: boolean = false;
  // @Input() iconStroke: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new Toast(toastEl);
        toast.show();
        this.show = false;
      }
    }
  }

  ngOnInit(): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new Toast(toastEl);
        toast.show();
        this.show = false;
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new Toast(toastEl);
        toast.show();
        this.show = false;
      }
    }
  }

  close(): void {
    var toastEl: any = document.getElementById(this.toastId);
    if (toastEl) {
      var toast = new Toast(toastEl);
      toast.hide();
      this.show = false;
    }
  }
  // main fun
  // public get backgroudClass(): any {
  //   var backgroudClass = ''
  //   if (this.colorVariant && this.border) {
  //     return backgroudClass = 'bg-' + `${this.colorVariant}` + 'border border-'+`${this.border}`
  //   }
  //   return backgroudClass;
  // }

  
  public get backgroudClass(): any {
      var backgroudClass = ['']
      const borderColor = 'border border-' + `${this.border}`
      backgroudClass.push(borderColor)
      return backgroudClass;
    }





  // newly added
  public get backgroud(): any {
    var backgroud = ''
    if (this.headerColorVariant) {
      // return backgroud = 'bg-' + `${this.headerVariant}` + ' border border-'+`${this.border}`
      return backgroud = 'toast-' + `${this.headerColorVariant}`
    }
    return backgroud;
  }

  // newly added 2
  public get bodycolor(): any {
    // var bodycolor = ['']
    // const borderColor = 'border border-' + `${this.border}`
    // bodycolor.push('border border-1');
    // bodycolor.push(borderColor);


    var backgroudClass = ''
    if (this.colorVariant) {
      return backgroudClass = 'toast-' + `${this.colorVariant}`
    }
    return 
  }

  // newly added 3
  // public get messageColor(): any {
  //   var messageColor = ''
  //   if(this.headerColorVariant == 'primary' || this.headerColorVariant== 'secondary' || this.headerColorVariant== 'success' || this.headerColorVariant== 'danger' || this.headerColorVariant== 'dark'){
  //     messageColor = 'text-white'
  //     return messageColor;
  //   }
  //   else{
  //     messageColor = 'text-dark';
  //     return messageColor
  //   }
  // }

  // newly added 4 
  public get toastoutlinebtn(): any {
    var toastoutlinebtn = ['']
    const outlineprimbtn = 'btn btn-outline-' + `${this.border}`
    toastoutlinebtn.push(outlineprimbtn)
    return toastoutlinebtn
  }


  public get positionClass(): any[] {
    var positionClasses = ['']
    if (this.position === "Top-Left") {
      positionClasses.push('start-0')
    }
    else if (this.position === "Top-Center") {
      positionClasses.push('top-0 start-50 translate-middle-x')
    }
    else if (this.position === "Top-Right") {
      positionClasses.push('top-0 end-0')
    }
    else if (this.position === "Middle-Left") {
      positionClasses.push('top-50 start-0 translate-middle-y')
    }
    else if (this.position === "Middle-Center") {
      positionClasses.push('top-50 start-50 translate-middle')
    }
    else if (this.position === "Middle-Right") {
      positionClasses.push('top-50 end-0 translate-middle-y')
    }
    else if (this.position === "Bottom-Left") {
      positionClasses.push('bottom-0 start-0')
    }
    else if (this.position === "Bottom-Center") {
      positionClasses.push('bottom-0 start-50 translate-middle-x')
    }
    else if (this.position === "Bottom-Right") {
      positionClasses.push('bottom-0 end-0')
    }
    return positionClasses;
  }

  public get getborder(): string | string {
    if (this.getborder) {
      return 'text-bg-' + `${this.getborder}`
    }
    return '';
  }
}
