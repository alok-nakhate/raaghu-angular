import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';
export class webhookadditonal {
  public additionalheaderKey: string;
  public additionalheadervalue: string;
  public name: string;
}
export class subscription {
  public WebhookEndpoint: string;
  public WebhookEvents: string;
}

export class Webhooksubscription {
  public subscriptionData: subscription;
  public additionalHeaders: webhookadditonal[];
}
@Component({
  selector: 'rds-comp-webhook-subscription',
  templateUrl: './rds-comp-webhook-subscription.component.html',
  styleUrls: ['./rds-comp-webhook-subscription.component.scss']
})
export class RdsCompWebhookSubscriptionComponent implements OnInit {
  @Output() onSubcriptionSave = new EventEmitter<Webhooksubscription>();
  @Output() onCloseCanvas = new EventEmitter<any>();


  rdswebhookheaderTableMfeConfig: ComponentLoaderOptions;
  urlPattern: any = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  constructor(public translate: TranslateService) { }
  additionalheader: webhookadditonal = {
    additionalheaderKey: '',
    additionalheadervalue: '',
    name: ''
  }
  subscriptionData: subscription = {
    WebhookEndpoint: '',
    WebhookEvents: ''
  }
  additionalheaders: any = [];

  webhookSubscriptionData: Webhooksubscription = {
    subscriptionData: new subscription,
    additionalHeaders: []
  };
  @Input() HeaderTableHeader: TableHeader[] = [
    { displayName: this.translate.instant('Header key'), disabled: true, key: 'additionalheaderKey', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: this.translate.instant('Header value'), key: 'additionalheadervalue', dataType: 'text', dataLength: 30, required: true, sortable: true },

  ]
  ngOnInit(): void {



  }
  onActionSelect(event: any): void {
    if (event.actionId === 'delete' && event.selectedData) {
      const index: number = this.additionalheaders.findIndex((x => x.additionalheaderKey === event.selectedData.additionalheaderKey))
      if (index !== -1) {
        this.additionalheaders.splice(index, 1);;
      }
    }
  }
  addWebhookHeaders(headerForm: NgForm) {
    if (this.additionalheader && this.additionalheader.additionalheaderKey && this.additionalheader.additionalheaderKey.length > 0 && this.additionalheader.additionalheadervalue.length > 0) {
      this.additionalheader.name = this.additionalheader.additionalheaderKey
      this.additionalheaders.push(this.additionalheader)
      this.additionalheader = {
        additionalheaderKey: '',
        additionalheadervalue: '',
        name: ''
      }

    }
    headerForm.resetForm();

  }

  AddWebhooSubscription(webhookForm: NgForm) {
    if (webhookForm.invalid || this.additionalheaders.length === 0) {
      return;
    }
    this.webhookSubscriptionData.subscriptionData = this.subscriptionData;
    this.webhookSubscriptionData.additionalHeaders = this.additionalheaders;
    this.onSubcriptionSave.emit(this.webhookSubscriptionData);
    this.close(webhookForm);
  }
  close(webhookForm: NgForm) {
    webhookForm.resetForm();
    this.additionalheaders = [];
    this.onCloseCanvas.emit();
  }

}
