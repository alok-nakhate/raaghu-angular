import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { selectAllApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.selector';
import { selectA } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';

export class ResourceCheckboxes {
  public id: any;
  public letterRange: string;
  public isAllRangeSelected: boolean;
  public resourcesData: resorceArray[];
}

export class resorceArray {
  description: string;
  displayName: string;
  emphasize: boolean;
  enabled: boolean;
  extraProperties: any;
  id: string;
  name: string;
  properties: any;
  required: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: any;
}

@Component({
  selector: 'rds-comp-client-resources',
  templateUrl: './rds-comp-client-resources.component.html',
  styleUrls: ['./rds-comp-client-resources.component.scss']
})
export class RdsCompClientResourcesComponent implements OnInit {

  // Input Decorators
  @Input() identityResourcesData: any[] = [];
  @Input() apiResourcesData: any[] = [];
  @Input() sample: string;

  // Output Decorators
  @Output() selectedResources = new EventEmitter<any>();

  // Properties
  selectAll: boolean;
  typeData: any[] = [
    { id: 1, value: 'Identity Resources', some: 'Identity Resources' },
    { id: 2, value: 'Api Resources', some: 'Api Resources' }
  ];
  resourcesData: any[] = [];
  finalResourceData: ResourceCheckboxes[] = [
    {
      id: 1,
      letterRange: 'A-E',
      isAllRangeSelected: false,
      resourcesData: []
    },
    {
      id: 2,
      letterRange: 'F-O',
      isAllRangeSelected: false,
      resourcesData: []
    },
    {
      id: 3,
      letterRange: 'P-Z',
      isAllRangeSelected: false,
      resourcesData: []
    },
  ];

  constructor(public translate: TranslateService, private store: Store) { }

  ngOnInit(): void {
    this.selectedResourceType();
    for (let i = 0; i < this.finalResourceData.length; i++) {
      this.finalResourceData[i].resourcesData.filter(x => x.enabled == false).length > 0 ?
        this.finalResourceData[i].isAllRangeSelected = false :
        this.finalResourceData[i].isAllRangeSelected = true;
      this.onChildCheckboxCheck(i);
    }
  }

  selectedResourceType(type?: any) {
    this.getResoucesDataState();
    this.resourcesData = [];
    if (type != undefined) type.item.value == this.typeData[0].value ? this.resourcesData = this.identityResourcesData :
      type.item.value == this.typeData[1].value ? this.resourcesData = this.apiResourcesData : null;
    else this.resourcesData = this.identityResourcesData;
    if (this.resourcesData.length > 0) {
      this.resourcesData.filter(x => x.enabled == false).length > 0 ? this.selectAll = false : this.selectAll = true;
      this.resourcesData.sort((a, z) => {
        const firstLetter = a.displayName.toLowerCase();
        const lastLetter = z.displayName.toLowerCase();
        if (firstLetter < lastLetter) return -1;
        if (firstLetter > lastLetter) return 1;
        return 0;
      });
      this.finalResourceData = [];
      this.finalResourceData = [
        {
          id: 1,
          letterRange: 'A-E',
          isAllRangeSelected: false,
          resourcesData: []
        },
        {
          id: 2,
          letterRange: 'F-O',
          isAllRangeSelected: false,
          resourcesData: []
        },
        {
          id: 3,
          letterRange: 'P-Z',
          isAllRangeSelected: false,
          resourcesData: []
        }
      ];
      for (let i = 0; i < this.finalResourceData.length; i++) {
        const asciiValue = i == 0 ? 102 : i == 1 ? 112 : i == 2 ? 123 : 123
        const sortedValues = this.resourcesData.filter(x => x.displayName.toLowerCase().charCodeAt(0) < asciiValue).pop();
        if (sortedValues != undefined) {
          const index = this.resourcesData.indexOf(sortedValues, 0);
          const sortedAlphaArray = this.resourcesData.slice(0, index + 1);
          this.resourcesData.splice(0, sortedAlphaArray.length);
          const x = this.finalResourceData[i].resourcesData.concat(sortedAlphaArray);
          this.finalResourceData[i].resourcesData = x;
        }
        this.onSelectChild(undefined, undefined, i);
      }
    }
  }

  getResoucesDataState() {
    this.store.select(selectA).subscribe(res => {
      if (res && res.items) {
        const data: any[] = [];
        res.items.forEach(element => {
          const item: any = {
            description: element.description,
            displayName: element.displayName,
            emphasize: element.emphasize,
            enabled: element.enabled,
            extraProperties: element.extraProperties,
            id: element.id,
            name: element.name,
            properties: element.properties,
            required: element.required,
            showInDiscoveryDocument: element.showInDiscoveryDocument,
            userClaims: element.userClaims
          };
          data.push(item);
        });
        this.identityResourcesData = data;
      }
    });
    this.store.select(selectAllApiResource).subscribe(res => {
      const data: any[] = [];
      if (res && res.items) {
        res.items.forEach(element => {
          const item: any = {
            allowedAccessTokenSigningAlgorithms: element.allowedAccessTokenSigningAlgorithms,
            description: element.description,
            displayName: element.displayName,
            enabled: element.enabled,
            extraProperties: element.extraProperties,
            id: element.id,
            name: element.name,
            properties: element.properties,
            scopes: element.scopes,
            secrets: element.secrets,
            showInDiscoveryDocument: element.showInDiscoveryDocument,
            userClaims: element.userClaims
          };
          data.push(item);
        });
        this.apiResourcesData = data;
      }
    })
  }

  selectAllItems(event: any) {
    for (let i = 0; i < this.finalResourceData.length; i++) {
      this.finalResourceData.forEach(element => element.isAllRangeSelected = event.target.checked);
      this.selectAllSectionItems(event, i);
    }
  }

  selectAllSectionItems(event: any, index: number) {
    this.finalResourceData[index].resourcesData.forEach(element => element.enabled = event.target.checked);
    this.onChildCheckboxCheck(index);
  }

  onSelectChild(event?: any, data?: any, parentIndex?: number) {
    this.onChildCheckboxCheck(parentIndex);
  }

  onChildCheckboxCheck(index: number) {
    if (this.finalResourceData[index].resourcesData.filter(x => x.enabled == false).length > 0) {
      this.selectAll = false;
      this.finalResourceData[index].isAllRangeSelected = false;
    } else {
      this.selectAll = true;
      this.finalResourceData[index].isAllRangeSelected = true;
    }
  }

}