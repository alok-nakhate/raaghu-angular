import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-input-group',
  templateUrl: './rds-input-group.component.html',
  styleUrls: ['./rds-input-group.component.scss']
})
export class RdsInputGroupComponent implements OnInit {
  @Input() colorVariant: 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' | undefined = 'secondary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: string = 'Field Label';
  @Input() outlineButton = false;
  @Input() position: 'top' | 'bottom' = 'top'
  @Input() value: any;
  @Input() placeholder: string = '';
  @Output() onClick = new EventEmitter<any>();
  @Input() buttonLabel: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? 'btn btn-outline-' + this.colorVariant : 'btn btn-' + this.colorVariant}`;

    return outline;
  }

  onClickEvent(): void {
    this.onClick.emit(this.value);
  }
}
