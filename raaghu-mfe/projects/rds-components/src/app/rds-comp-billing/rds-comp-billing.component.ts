import { Component, Input, OnInit } from '@angular/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-billing',
  templateUrl: './rds-comp-billing.component.html',
  styleUrls: ['./rds-comp-billing.component.scss']
})
export class RdsCompBillingComponent implements OnInit {
  @Input() emailId: string = 'admin@aspnetzero.com';
  @Input() alternativeEmail: string = '';
  @Input() cardList: any = [];
  @Input() subscriptionData: any = [{
    name: "Basic",
    price: "23",
    duration: "2",
    iconurl: "basic_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  },
  {
    name: "Standard",
    price: "23",
    duration: "2",
    iconurl: "standard_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  },
  {
    name: "Premium",
    price: "23",
    duration: "2",
    iconurl: "premium_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  },
  {
    name: "Professional",
    price: "23",
    duration: "2",
    iconurl: "professional_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  }];
  @Input() public billingHeaders: TableHeader[] = [
    { key: 'invoice', displayName: 'Invoice', dataType: 'text',filterable: true, },
     { key: 'amount', displayName: 'Amount', dataType: 'text',filterable: true, }, 
     { key: 'date', displayName: 'Date', dataType: 'text',filterable: true, },
      { key: 'status', displayName: 'Status', dataType: 'html',filterable: true, }
    ];
  @Input() public billingData: any = [
    {
      invoice: 'Standard Plan - Jan 2022',
      amount: 'USD $ 250.00',
      date: 'Jan 23, 2022',
      status: `<div> <span class="badge badge-success">Paid</span></div>`
    },
    {
      invoice: 'Standard Plan - Dec 2021',
      amount: 'Dec 23, 2021',
      date: 'Jan 23, 2022',
      status: `<div> <span class="badge badge-success">Paid</span></div>`
    },
    {
      invoice: 'Standard Plan - Nov 2021',
      amount: 'USD $ 250.00',
      date: 'Nov 23, 2021',
      status: `<div> <span class="badge badge-success">Paid</span></div>`
    },
    {
      invoice: 'Standard Plan - Oct 2021',
      amount: 'USD $ 250.00',
      date: 'Oct 23, 2022',
      status: `<div> <span class="badge badge-success">Paid</span></div>`
    }
  ];
  @Input() actions: TableAction[] = [{ id: 'download', displayName: 'Download' }];
  @Input() radioItem: any = [{ label: 'Send to my account email', checked: true, name: "Send to my account email" }];
  @Input() radioItem1: any = [{ label: 'Send to an alternative email', checked: false, name: 'Send to an alternative email' }];
  constructor() { }

  ngOnInit(): void {
  }

  onActionSelect(event: any): void {

  }

  setInvoiceMail(event: any): void {
    this.radioItem1[0].checked = false
  }

  setAlternativeMail(event: any): void {
    this.radioItem[0].checked = false
  }

}
