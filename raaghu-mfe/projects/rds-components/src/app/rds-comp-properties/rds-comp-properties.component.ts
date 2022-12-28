import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';

export class Properties {
  public key: any;
  public value: any;


}
@Component({
  selector: 'rds-comp-properties',
  templateUrl: './rds-comp-properties.component.html',
  styleUrls: ['./rds-comp-properties.component.scss']
})
export class RdsCompPropertiesComponent implements OnInit {

  constructor() { }

  @Input() propertyTableData: any = [];
  @Input() propertyActions: any = [];
  @Output() onPropertyResourceSave = new EventEmitter<{ Property: any }>()
  rdsresourceTableMfeConfig: ComponentLoaderOptions;
  PropertiesData: Properties = {
    key: undefined,
    value: undefined
  }
  @Input() propertyTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'key', dataType: 'text', dataLength: 30, sortable: false, required: true },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, sortable: false, required: true },
  ]

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }
  addProperties() {
    const data: any = { ...this.PropertiesData };
    this.propertyTableData.push(data);
    this.onPropertyResourceSave.emit({ Property: this.propertyTableData });

  }

  onActionSelection(event): void {
    if (event && event.selectedData) {
      if (event.actionId === 'delete') {
        const index = this.propertyTableData.findIndex((x: any) => x.key == event.selectedData.key);
        if (index !== -1) {
          this.propertyTableData.splice(index, 1);
          this.onPropertyResourceSave.emit({ Property: this.propertyTableData });
        }
      }
    }
  }

  SavePropertyData() {


  }
}
