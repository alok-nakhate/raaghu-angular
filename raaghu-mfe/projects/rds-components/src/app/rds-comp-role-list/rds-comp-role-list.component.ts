import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';

import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
import { claims } from '../rds-comp-claim-type-role/rds-comp-claim-type-role.component';
import { Role } from '../rds-comp-new-role/rds-comp-new-role.component';
export class RoleData {
  Roles: Role
  permissions: [];
}

declare let bootstrap: any;
@Component({
  selector: 'rds-comp-role-list',
  templateUrl: './rds-comp-role-list.component.html',
  styleUrls: ['./rds-comp-role-list.component.scss']
})
export class RdsCompRoleListComponent implements OnInit{
//   currentAlerts: any = [];
//   public rdsAlertMfeConfig: ComponentLoaderOptions = {
//     name: 'RdsCompAlert',
//     input: {
//       currentAlerts: this.currentAlerts,
//     },
//     output: {
//       onAlertHide: (event: any) => {
//         this.currentAlerts = event;
//       },
//     },
//   };

//   actionId!: string;
//   rdsClaimTypeRoleMfeConfig: ComponentLoaderOptions;
//   @Input() claimDisplayArray: any[] = [];
//   @Input() roleTreeDataToConvert: any[] = [];

//   actions: TableAction[] = [{ id: 'edit', displayName: 'Edit' }, { id: 'delete', displayName: 'Delete' }];
//   @Input() claimValueData: any[] = [];
//   @Input() RolesData: any;
//   @Input() permissionsList: any = [];
//   @Input() filterPermissionsList: any = [];
//   @Input() SelectedPermissionValues: any = [];
//   @Input() SelectedPermissionList: any = [];
//   @Input() roleHeaders: TableHeader[] = [];
//   @Input() isShimmer: boolean = false;
//   @Input() EditShimmer: boolean = false;
//   @Input() listItems = [
//     { value: 'New Role', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
//     { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
//     { value: 'Filter By Permission', some: 'value', key: 'filterByPermission', icon: 'funnel', iconWidth: '20px', iconHeight: '20px' },
//   ];
//   @Input() roleList: any[] = [];
//   showLoadingSpinner: boolean = false;
//   @Output() onSaveRole = new EventEmitter<any>();
//   @Output() onRefreshRole = new EventEmitter<any>();
//   @Output() onEditRole = new EventEmitter<any>();
//   @Output() onReset = new EventEmitter<any>();
//   @Output() onFilterPermissionReset = new EventEmitter<any>();
//   @Output() deleteEvent = new EventEmitter<any>();
//   @Output() onSavePermission = new EventEmitter<any>();
//   @Output() onnewRole = new EventEmitter<any>();
//   @Output() onFilterPermission = new EventEmitter<any>();
//   public Roles: any = { RolesData: undefined, permissionsList: [] };
//   public FilterByPermissions: any = { filterPermissionsList: [] };
//   isReset: boolean = false;
//   isEdition: boolean = false;
//   activePage: number;
//   selectedId: any;
//   selectedFilterId: any;
//   viewCanvas: boolean = false;
//   viewPermissionCanvas: boolean = false;
//   selectedPermissionList: any = [];
//   selectedFilterPermissionList: any = [];
//   isRoleDataValid: boolean = false;
//   RoleFromNewRole: any;
//   EnableTreeSave: boolean = true;
//   public tableData: any = [];

//   public navtabsItems: any = [
//     {
//       label: this.translate.instant('Role'),
//       tablink: '#Role',
//       ariacontrols: 'Role-information',
//     },
//     {
//       label: this.translate.instant('Permission'),
//       tablink: '#Permission',
//       ariacontrols: 'Permission',

//     },
//     {
//       label: this.translate.instant('Claims'),
//       tablink: '#Claims',
//       ariacontrols: 'Claims',
//     }
//   ];
//   canvasTitle: string;

//   constructor(
//     public translate: TranslateService,
//     private alertService: AlertService,
//   ) { }
 

  ngOnInit(): void {
//     // this.subscribeToAlerts();
//     this.activePage = 0;
//     this.rdsClaimTypeRoleMfeConfig = {
//       name: 'RdsCompClaimTypeRole',
//       input: {
//         claimValueData: this.claimValueData,
//         claimDisplayArray: this.claimDisplayArray
//       },
//       output: {
//         addClaim: (data: any) => {
//           data.roleId = this.RolesData.id;
//           this.claimDisplayArray.push(data);
//           const mfeConfig = this.rdsClaimTypeRoleMfeConfig;
//           mfeConfig.input.claimDisplayArray = this.claimDisplayArray;
//         },
//         deleteClaim: (index: number) => {
//           this.claimDisplayArray.splice(index, 1);
//         }
//       }
//     }
  }
     
//   ngDoCheck(): void {
//     this.tableData = [...this.roleList];
//   }

//   getNavTabItems(): any {
//     return this.navtabsItems;
//   }
//   getSelectedNavTab(event: any): void {
//     this.activePage = event;
//   }
//   save(): void {
//     const data = {
//       role: this.RoleFromNewRole,
//       grantedPermissionNames: this.selectedPermissionList,
//     };
//     this.onSaveRole.emit({ 
//       data: data, 
//       claimData: {
//         claimDataArray: this.claimDisplayArray,
//         roleId: this.RolesData.id
//       }, 
//       actionId: this.actionId 
//     });
//     this.activePage = 0;
//     var offcanvas = document.getElementById('RoleOffcanvas')
//     var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//     bsOffcanvas.hide();
//     this.viewCanvas = false;
//     this.Roles = { RolesData: undefined, permissionsList: [] };
//     this.RolesData = undefined;
//     this.onReset.emit(true);
//     this.isRoleDataValid = false;
//     // this.close();
//   }


//   getSelectedPermissionList(event: any): void {
//     this.selectedPermissionList = [];
//     if (event && event.length > 0) {
//       this.selectedPermissionList = event
//       this.EnableTreeSave = false;
//     }
//     else {
//       this.EnableTreeSave = true;
//     }
//   }

//   newRole(event): void {
//     this.selectedId = '';
//     this.viewCanvas = true;
//     this.SelectedPermissionValues = [];
//     if (event) {
//       // this.buttonSpinnerForNewRole = true;
//       this.canvasTitle = 'NEW ROLE';
//       this.showLoadingSpinner = true;
//       this.canvasTitle =  this.translate.instant('NEW ROLE'),
//       this.Roles = { RolesData: undefined, permissionsList: [] };
//       this.RolesData = undefined;
//       this.onnewRole.emit(true);
//     }
//     setTimeout(() => {
//       var offcanvas = document.getElementById('RoleOffcanvas')
//       var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//       bsOffcanvas.show()
//     }, 100);
//     this.activePage = 0;
//   }

//   getRoleData(eventdata) {
//     if (eventdata.isOnSave) {
//       const data: any = {
//         role: eventdata.role,
//         grantedPermissionNames: this.selectedPermissionList,
//       }
//       this.onSaveRole.emit({ data: data, actionId: this.actionId });
//       if (!eventdata) {
//         this.EnableTreeSave = false;
//       } else {
//         this.EnableTreeSave = true;
//       }
//       this.viewCanvas = false;
//       this.Roles = { RolesData: undefined, permissionsList: [] };
//       this.RolesData = undefined;
//       this.onReset.emit(true);
//       this.isRoleDataValid = false;
//     }
//     else {
//       this.RoleFromNewRole = eventdata.roledata;
//       this.EnableTreeSave = false;
//       if (!eventdata || !eventdata.role) {
//         this.EnableTreeSave = false;
//       } else {
//         this.EnableTreeSave = true;
//       }
//     }

//   }
//   close(): void {
//     this.viewCanvas = false;
//     this.Roles = { RolesData: undefined, permissionsList: [] };
//     this.RolesData = undefined;
//     this.onReset.emit(true);
//     this.isRoleDataValid = false;
//     this.showLoadingSpinner = false;
//   }
//   editTableRowData(event): void {
//     this.newRole(undefined);
//     this.canvasTitle = 'EDIT ROLE';
//     this.onEditRole.emit(event);
//     this.selectedId = event.id;
//   }

//   // Filter by permission canvas
//   // filterByPermission(event): void {
//   //   this.selectedFilterId = '';
//   //   this.SelectedPermissionValues = [];
//   //   //if (event) {
//   //   this.canvasTitle = 'FILTER BY PERMISSIONS';
//   //   //  event.stopPropagation();
//   //   this.RolesData = undefined;
//   //   //}
//   //   this.viewCanvas = true;
//   //   setTimeout(() => {
//   //     var offcanvas = document.getElementById('PermissionOffcanvas')
//   //     var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//   //     bsOffcanvas.show()
//   //   }, 100);
//   //   this.onnewRole.emit(true)
//   //   this.activePage = 0;
//   // }
//     // this.canvasTitle = this.translate.instant('EDIT ROLE');
//     // this.onEditRole.emit(event.id);
//     // this.selectedId = event.roleid;
//   // }

//   // Filter by permission canvas
//   filterByPermission(event): void {
//     this.selectedFilterId = '';
//     this.canvasTitle = this.translate.instant('FILTER BY PERMISSIONS');
//     this.RolesData = undefined;
//     this.viewCanvas = true;
//     setTimeout(() => {
//       var offcanvas = document.getElementById('PermissionOffcanvas')
//       var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//       bsOffcanvas.show()
//     }, 100);
//     this.onnewRole.emit(true)
//     this.activePage = 0;
//   }

//   onSelectMenu(event: any) {
//     if (event.key === 'new') {
//       this.newRole(event);
//     }
//     else if (event.key === 'refresh') {
//       this.getRoles();
//     }
//     else if (event.key === 'filterByPermission') {
//       // this.filterByPermission(event);
//     }
//   }

//   saveFilterPermission(): void {
//     // if (!this.selectedFilterPermissionList.find((x: any) => x.value)) {
//     //   return;
//     // }
//     this.onFilterPermission.emit(this.selectedFilterPermissionList);
//     this.activePage = 0;
//     var offcanvas = document.getElementById('PermissionOffcanvas')
//     var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//     bsOffcanvas.hide();
//     this.viewCanvas = false;
//   }

//   getFilterPermissionList(event: any): void {
//     this.selectedFilterPermissionList = event
//   }

//   disableButton(): boolean {
//     if (this.selectedFilterPermissionList.find((x: any) => x.value)) {
//       return false;
//     }
//     return true
//   }

//   closeFilterPermission(): void {
//     this.viewCanvas = false;
//     this.FilterByPermissions = { filterPermissionsList: [] };
//     this.onFilterPermissionReset.emit(true);
//   }
//   onchangeRoldate(event): void {
//     this.RolesData = event;
//   }
//   getRoles() {
//     this.onRefreshRole.emit();
//   }
//   onActionSelect(event: any) {
//     this.actionId = event.actionId;
//     if (event.actionId === 'delete') {
//       this.deleteEvent.emit(event.selectedData);
//     } else if (event.actionId === 'edit') {
//       this.editTableRowData(event.selectedData);
//     }
//   }

//   subscribeToAlerts() {
//     this.alertService.alertEvents.subscribe((alert) => {
//       this.currentAlerts = [];
//       const currentAlert: any = {
//         type: alert.type,
//         title: alert.title,
//         message: alert.message,
//       };
//       this.currentAlerts.push(currentAlert);
//       this.showLoadingSpinner = false;
//       const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
//       rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
//       this.rdsAlertMfeConfig = rdsAlertMfeConfig;
//     });
//   }

//   filterPermissions(event): void {
//     this.filterPermission(this.permissionsList, event.target.value);
//   }

//   filterPermission(nodes, filterText): any {
//     nodes.forEach((node) => {
//       if (node.data.displayName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) {
//         node.styleClass = '';
//         this.showParentNodes(node);
//       } else {
//         node.styleClass = 'd-none';
//       }

//       if (node.children) {
//         this.filterPermission(node.children, filterText);
//       }
//     });
//   }
//   showParentNodes(_node): void {
//     if (!_node.data.parentName || _node.data.parentName == null) {
//       return;
//     }
//     // findParent
//     // node.parent.styleClass = '';
//     this.permissionsList.forEach((node: any) => {
//         if (node.data.name === _node.data.parentName) {
//           node.styleClass = '';
//         }else{
//           this.findParent(node.children,_node.data.parentName)
//         }
//     })

//   }

//   findParent(permissionsList, parentName) {
//     permissionsList.forEach((node) => {
//       if (node.data.name === parentName) {
//         node.styleClass = '';
//         if (node.data.parentName) {
//           this.findParent(this.permissionsList, node.data.parentName)
//         }
//       } else {
//         this.findParent(node.children, parentName);
//       }
//     })
//   }

}

