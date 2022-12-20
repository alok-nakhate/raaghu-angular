import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-marketing-website-newsletter',
  templateUrl: './rds-comp-marketing-website-newsletter.component.html',
  styleUrls: ['./rds-comp-marketing-website-newsletter.component.scss']
})
export class RdsCompMarketingWebsiteNewsletterComponent implements OnInit {

  @Input() templateType: 'Template_1' | 'Template_2' | 'Template_3' | 'Template_4';
  @Input() companyLogo?: string;
  @Input() EmailID: string;
  @Output() onFindCare = new EventEmitter<any>();
  @Output() onFindJob = new EventEmitter<any>();
  @Output() onGuide = new EventEmitter<any>();
  @Output() onNotRequired = new EventEmitter<any>();
  @Output() onClaimDiscount = new EventEmitter<any>();
  @Output() onStartFreeTrial = new EventEmitter<any>();

  @ViewChild('discountForm') discountformdata: NgForm;
  @ViewChild('trialForm') trialformdata: NgForm;

  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  ClaimDiscount() {
    this.onClaimDiscount.emit(this.EmailID);
  }
  StartFreeTrial() {
    this.onStartFreeTrial.emit(this.EmailID);
  }
}
