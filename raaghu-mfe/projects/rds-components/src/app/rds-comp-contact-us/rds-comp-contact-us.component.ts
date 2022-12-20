import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rds-comp-contact-us',
  templateUrl: './rds-comp-contact-us.component.html',
  styleUrls: ['./rds-comp-contact-us.component.scss']
})
export class RdsCompContactUsComponent implements OnInit {
  @Input() info: any = { emailID: '', message: '', fullName: '' };


  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() onSendMessage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(contactForm: NgForm): void {
    if (!contactForm.valid) {
      return;
    }
    this.onSendMessage.emit(this.info);
    console.log(this.info);
    contactForm.reset();
  }
}
