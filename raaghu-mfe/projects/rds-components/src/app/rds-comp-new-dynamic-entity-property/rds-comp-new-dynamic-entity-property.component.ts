import { isNgTemplate } from '@angular/compiler';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'rds-comp-new-dynamic-entity-property',
  templateUrl: './rds-comp-new-dynamic-entity-property.component.html',
  styleUrls: ['./rds-comp-new-dynamic-entity-property.component.scss'],
})
export class RdsCompNewDynamicEntityPropertyComponent implements OnInit, OnChanges {
  entityFullName: string = '';
  Placeholder: string = 'Select Property Name';
  PropertyID: any = '';
  resetDropdown = false;
  placeholderReset: string = 'Select Property Name';
  @Input() entityNames: any[] = [];
  @Input() reset: boolean = false;
  @Input() parameterList: any[] = [];
  dynamicEntityData: any = { entityFullName: '', PropertyID: '' };
  @Output() createOrUpdateDynamicEntity = new EventEmitter<any>();
  @ViewChild('dynamicEntityForm') dynamicEntityInfoForm: NgForm;
  resetFormSubject: Subject<boolean> = new Subject<boolean>();
  dynamicEntityDataSelect: any[] = [];
  // isHostLogin: boolean = true;
  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.resetDropdown = this.reset;
    this.dynamicEntityData = { entityFullName: '', PropertyID: '' };
  }
  targetId = undefined;
  ngOnInit(): void {
    // const tenantInfo = JSON.parse(localStorage.getItem('tenantInfo'));
    // if (tenantInfo !== null && tenantInfo.name) {
    //   this.isHostLogin = false;
    // } else {
    //   this.isHostLogin = true;
    // }
    this.resetDropdown = this.reset;
    this.Placeholder = "Select Property Name";

    if (this.targetId) {
      this.entityNames.forEach((res: any) => {
        if (res && +res.value === +this.targetId) {
          this.dynamicEntityData.entityFullName = res.some;
        }
      })
    }
  }

  addEntity(dynamicEnityForm) {
    let Data = this.dynamicEntityDataSelect;
    if (Data.length > 0) {
      this.createOrUpdateDynamicEntity.emit(Data);
    }
    else {
      this.createOrUpdateDynamicEntity.emit(this.dynamicEntityData);
      // this.dynamicEntityInfoForm.form.markAllAsTouched();
    }
    this.dynamicEntityData = { entityFullName: '', PropertyID: '' };
    this.dynamicEntityDataSelect = [];
    dynamicEnityForm.resetForm();
    this.resetDropdownList();
    this.Placeholder = "Select Property Name";

  }

  onPropertySelect(prop: any) {
    if (prop && prop.item) {
      const data: any = {
        entityFullName: this.dynamicEntityData.entityFullName,
        PropertyID: prop.item.id
      }
      if (prop.item.isSelected) {
        this.dynamicEntityDataSelect.push(data);
      }
      else {
        this.dynamicEntityDataSelect.forEach((element, index) => {
          if (JSON.stringify(element) == JSON.stringify(data)) {
            this.dynamicEntityDataSelect.splice(index, 1);
          }
        });
      }
    }
  }

  closeCanvas(): void {
    this.Placeholder = "Select Property Name";
    this.dynamicEntityData = { entityFullName: '', PropertyID: '' };
    this.resetDropdownList();
  }

  resetDropdownList() {
    let parameter = this.parameterList
    parameter.forEach((element: any) => {
      element.isSelected = false;
    })
    this.resetDropdown = true;
    this.Placeholder = "Select Property Name";

  }

  onEntitySelect(selectedItem: any): void {
    this.dynamicEntityData.entityFullName = selectedItem.item.some;
    this.targetId = selectedItem.item.value;
  }
}
