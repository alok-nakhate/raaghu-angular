import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TableAction } from '../../models/table-action.model';
declare let bootstrap: any;
@Component({
  selector: 'app-rds-comp-dynamic-properties',
  templateUrl: './rds-comp-dynamic-properties.component.html',
  styleUrls: ['./rds-comp-dynamic-properties.component.scss'],
})
export class RdsCompDynamicPropertiesComponent implements OnInit, OnChanges {
  actions: TableAction[] = [{ id: 'edit', displayName: 'Edit' }, { id: 'delete', displayName: 'Delete' }]
  @Input()
  DynamicPropertiesTableHeader: any;
  @Input() DynamicPropertiesTableData: any;
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() editPropertyTableRowData = new EventEmitter<any>();
  @Output() createOrUpdateDynamic = new EventEmitter<any>();
  @Input() permissionsList: any = [];
  @Input() DynamicProperyData: any = {};
  @Input() IsEdit: boolean = false;
  @Input() selectedPermissionList: any = [];
  @Input() inputTypeList: any;
  @Input() viewCanvas: boolean = false;
  resetFormSubject: Subject<boolean> = new Subject<boolean>();
  selectedPermissions: string = '';
  DynamicProperyInfo: any = undefined;
  activePage: number = 0;
  @Input() isShimmer: boolean = false;
  @Input() editShimmer: boolean = false;
  canvasTitle: string = this.translate.instant('NEW DYNAMIC PROPERTY');
  id: number | undefined = undefined;
  DynamicPropertiesModal: any = [
    {
      label: this.translate.instant('Information'),
      tablink: '#information',
      ariacontrols: 'information',
    },
    {
      label: this.translate.instant('Permission'),
      tablink: '#permission',
      ariacontrols: 'permission',
    },
  ];


  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.DynamicProperyData = undefined;
    var myOffcanvas = document.getElementById('AddDynamic');
    if (myOffcanvas) {
      myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
        this.viewCanvas = false;
      });
    }

  }
  ngOnInit(): void {
    this.activePage = 0;
  }

  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }

  openDynamicCanvas(event): void {
    this.activePage = 0;
    if (event) {
      this.IsEdit = false;
      this.id = undefined;
      this.canvasTitle = this.translate.instant('NEW DYNAMIC PROPERTY');
      event.stopPropagation();
      this.DynamicProperyData = undefined;
    } else {
    }
  }
  closeCanvas(): void {
    this.activePage = 0;
    this.DynamicProperyData = {};
    this.DynamicProperyInfo = undefined;
    this.selectedPermissionList = [];
    this.resetFormSubject.next(true);
    this.canvasTitle = this.translate.instant('NEW DYNAMIC PROPERTY');
    this.IsEdit = false;
    this.selectedPermissionList = [];
    this.viewCanvas = false;
  }
  editTableRow(event): void {
    this.activePage = 0;
    this.IsEdit = true;
    this.canvasTitle = this.translate.instant('EDIT DYNAMIC PROPERTY');
    this.selectedPermissionList = [];
    this.editPropertyTableRowData.emit(event.id);
    this.id = event.id;
    this.viewCanvas = true;
  }
  addDynamic(event) {
    this.activePage = 0;
    if (this.IsEdit) {
      if (this.DynamicProperyInfo && this.DynamicProperyInfo.length) {
        const DynamicPropery: any = {
          displayName: this.DynamicProperyInfo.dynamicProperties.displayName,
          inputType: this.DynamicProperyInfo.dynamicProperties.inputType[0],
          permission: this.selectedPermissions,
          propertyName: this.DynamicProperyInfo.dynamicProperties.propertyName,
          tenantId: null,
          id: this.id,
        };
        this.createOrUpdateDynamic.emit(DynamicPropery);
        this.closeCanvas();
        this.editShimmer = true;
      } else {
        const DynamicPropery: any = {
          displayName: this.DynamicProperyData.displayName,
          inputType: this.DynamicProperyData.inputType,
          permission: this.selectedPermissions,
          propertyName: this.DynamicProperyData.propertyName,
          tenantId: null,
          id: this.id,
        };
        this.closeCanvas();
        this.createOrUpdateDynamic.emit(DynamicPropery);

      }
    } else {
      if (this.DynamicProperyInfo.dynamicProperties?.propertyName && this.DynamicProperyInfo.dynamicProperties.propertyName != "") {
        const DynamicPropery: any = {
          displayName: this.DynamicProperyInfo.dynamicProperties.displayName,
          inputType: this.DynamicProperyInfo.dynamicProperties.inputType,
          permission: this.selectedPermissions,
          propertyName: this.DynamicProperyInfo.dynamicProperties.propertyName,
          tenantId: null,
        };
        this.createOrUpdateDynamic.emit(DynamicPropery);
        this.closeCanvas();
      }
      else {
        this.resetFormSubject.next(true);
      }
    }
    this.id = undefined;
    this.DynamicProperyData = {};
    this.selectedPermissionList = [];
  }
  getDynamicPropertyInfo(eventData) {
    this.DynamicProperyInfo = eventData;
  }
  getSelectedPermissionList(event: any): void {
    if (event) {
      this.selectedPermissions = event.name;
    }
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'edit') {
      this.editTableRow(event.selectedData);
    } else if (event.actionId === 'delete') {
      this.deleteEvent.emit(event.selectedData);
    }
  }

  getNavTabItems(): any {
    this.DynamicPropertiesModal[0].label = this.translate.instant('Information');
    this.DynamicPropertiesModal[1].label = this.translate.instant('Permission');
    return this.DynamicPropertiesModal;
  }
}
