import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
declare let bootstrap: any;
@Component({
  selector: 'app-rds-comp-dynamic-enity-properties',
  templateUrl: './rds-comp-dynamic-enity-properties.component.html',
  styleUrls: ['./rds-comp-dynamic-enity-properties.component.scss'],
})
export class RdsCompDynamicEnityPropertiesComponent implements OnInit, OnChanges {
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];

  @Input()
  DynamicEntityPropertiesTableHeader: any;

  @Input() reset: boolean = true;
  @Input() DynamicEntityPropertiesTableData: any;
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() editEntityTableRowData = new EventEmitter<any>();
  @Output() createOrUpdateDynamicEntitydata = new EventEmitter<{ dynamicEntity: any;}>();
  @Input() entityNames: any[] = [];
  @Input() parameterList: any[] = [];
  @Input() DynamicEntityData: any = {};
  @Input() isShimmer: boolean = false;
  @Input() EditShimmer: boolean = false;
  public viewCanvas: boolean = false;
  canvasTitle: string = this.translate.instant('NEW DYNAMIC ENTITY PROPERTY');
  id: string | undefined = undefined;
  isEdit: boolean = false;
  constructor(public translate: TranslateService) { }
  ngOnInit(): void { }
  closeCanvas(): void {
    this.viewCanvas = false;
    this.DynamicEntityData = {};
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.DynamicEntityData = undefined;
  }
  createorupdatedynamicEntityproperty(event) {
    this.createOrUpdateDynamicEntitydata.emit({ dynamicEntity: event });
  }
  onActionSelect(event): void {
    if (event.actionId === 'delete') {
      this.deleteEvent.emit(event.selectedData);
    }
  }
}


