import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tooltip } from 'bootstrap'
import { is } from 'date-fns/locale';
@Component({
  selector: 'rds-button',
  templateUrl: './rds-button.component.html',
  styleUrls: ['./rds-button.component.scss']
})
export class RdsButtonComponent implements AfterViewInit, OnInit ,OnChanges{

  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default' | 'review' | '' = 'default';
  @Input() submit = false;
  static count: number = 0;
  @Input() block: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' | undefined = 'small';
  @Input() isDisabled = false;
  @Input() isOutline = false;
  @Input() isFabIcon = false;
  @Input() isRounded = false;
  @Input() tooltipTitle: string;
  @Input() tooltipPlacement: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
  @Input() id: string = 'rds_buttonId_';
  @Input() buttonId: string = '';
  @Input() isLoading: boolean = false;
  @Input() showLoadingSpinner: boolean = false;
  @Input() iconHeight: string = '';
  @Input() iconWidth: string = '';
  @Input() isIconStroke: boolean = true;
  @Input() isIconFill: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<Event>();

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.tooltipTitle){
      const btnElement: any = document.getElementById(this.id);
      if(btnElement){
        const tooltip = new Tooltip(btnElement, {
          title: this.tooltipTitle,
          placement: this.tooltipPlacement
        });
      }
    }  }

  ngOnInit(): void {
    if (this.buttonId == '') {
      this.id = this.id + RdsButtonComponent.count++;
    }
    else {
      this.id = this.id + this.buttonId;
    }
  }

  ngAfterViewInit(): void {
    if(this.tooltipTitle){
      const btnElement: any = document.getElementById(this.id);
      if(btnElement){
        const tooltip = new Tooltip(btnElement, {
          title: this.tooltipTitle,
          placement: this.tooltipPlacement
        });
      }
    }

    // const tooltipTriggerList: any = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // if (this.tooltipTitle && tooltipTriggerList) {
    //   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl)) || '';
    // }

  }

  public get classes(): string {
    const outline = `${this.isOutline ? ' btn btn-outline-' + this.colorVariant : ' btn btn-' + this.colorVariant}`;
    const mode = this.size ? ` btn-${this.size === 'small' ? 'sm ' : this.size === 'large' ? 'lg ' : 'md '}` : '';
    const icon = `${this.isFabIcon ? ' btn-icon rounded-pill ' : ''}`;
    const icon1 = `${this.isRounded ? ' rounded-pill ' : ''}`;
    const disabledGrey = `${this.isDisabled === true ? 'btn ' : ''}`
    return outline + mode + icon + icon1 + disabledGrey;
  }

  public get blockWidth(): string[] {
    let classes: string[] = [];
    if (this.block === true) {
      classes.push('w-100')
      return classes
    }

    return classes;
  }

  public get submitButton(): string {
    return this.submit ? 'submit' : 'button';
  }

  ngOnDestroy(): void {
    RdsButtonComponent.count = 0;
  }

  buttonClick(evt: any) {
    if (!this.showLoadingSpinner && !this.isDisabled) {
      this.onClick.emit(evt);
    }
  }

}
