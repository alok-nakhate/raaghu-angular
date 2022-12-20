import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-search-input',
  templateUrl: './rds-search-input.component.html',
  styleUrls: ['./rds-search-input.component.scss']
})
export class RdsSearchInputComponent implements OnInit {

  @Input() value = ''
  @Input() placeholder?: string;
  @Input() size: 'medium' | 'small' | 'large' = 'small';
  @Input() label = '';
  @Input() position: 'top' | 'bottom' = 'top';
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  send(event: any) {
    // console.log(event.target.value)
    this.onClick.emit(event.target.value);
  }
  sendkeyup(event: any) {
    // console.log(event.target.value)
    this.value = event.target.value
    // this.onClick.emit(event.target.value);
  }
  search() {
    this.onClick.emit(this.value);
  }

  public get classes(): string[] {
    var inputClass = ['form-group']
    if (this.size == 'small') {
      inputClass.push('input-group-sm');
    }
    if (this.size == "large") {
      inputClass.push('input-group-lg');
    }
    if (this.size == "medium") {
      inputClass.push('input-group-md');
    }
    return inputClass;
  }




}
