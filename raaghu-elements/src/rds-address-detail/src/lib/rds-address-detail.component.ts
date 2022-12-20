import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-address-detail',
  templateUrl: './rds-address-detail.component.html',
  styleUrls: ['./rds-address-detail.component.scss']
})
export class RdsAddressDetailComponent implements OnInit {
  @Input() header!: string;
  @Input() addressLine1!: string;
  @Input() addressLine2!: string;
  @Input() addressLine3!: string;
  @Input() withIcon: boolean = false;
  @Input() Cardborder : boolean =false;
  @Input() cardbody : boolean= false;

  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): string[] {
    let classes: string[] = [];
    if (this.withIcon) {
      classes.push('block');
    }

    return classes;
  }

   public get cardClasses(): string[] {
    let custClasses:string[] = []
    if (this.Cardborder === true) {
      custClasses.push('card');
    }else(this.Cardborder === false)
    {
      custClasses.push('');
    }
    return custClasses
  }

    public get cardbodyClass(): string[] {
      let custbodyClasses:string[] = []
      if (this.cardbody === true) {
        custbodyClasses.push('card-body');
      }else(this.cardbody === false)
      {
        custbodyClasses.push('');
      }
      return custbodyClasses
  }

}
