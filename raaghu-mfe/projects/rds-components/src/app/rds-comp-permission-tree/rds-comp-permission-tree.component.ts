import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { PermissionGroupDto } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { Permission, PermissionNode, TreeType } from '../../models/pemission.model';

@Component({
  selector: 'rds-comp-permission-tree',
  templateUrl: './rds-comp-permission-tree.component.html',
  styleUrls: ['./rds-comp-permission-tree.component.scss']
})
export class RdsCompPermissionTreeComponent implements OnInit {

  // Input Decorators
  @Input() treeData: PermissionNode[] = [];
  @Input() selectAllLabel: string = 'Select All';
  @Input() roleName!: string;
  @Input() isEdit: boolean = false;

  // Output Decorators
  @Output() onSelectAll = new EventEmitter<{ item: any }>();
  @Output() onSelectnode = new EventEmitter<{ item: any }>();
  @Output() getAllSelectedNodes = new EventEmitter<any>();
  @Output() getAllselectedPermissions = new EventEmitter<any>();

  // Properties
  modifiedtreeData: PermissionNode[] = [];

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    // Convert data into editable format
    if (this.treeData) {
      const resPermission: any[] = [];
      this.treeData.forEach(element => {
        const item = {
          name: element.name,
          displayName: element.displayName,
          permissions: element.permissions
        };
        resPermission.push(item);
      });
      for (let i = 0; i < resPermission.length; i++) {
        const eachPermission: any[] = [];
        resPermission[i].permissions.forEach(element => {
          const eachPermissionItem = {
            referParentIndex: i,
            allowedProviders: element.allowedProviders,
            displayName: element.displayName,
            grantedProviders: element.grantedProviders,
            isGranted: this.roleName == 'admin' && this.isEdit === false ? false : element.isGranted,
            name: element.name,
            parentName: element.parentName,
          }
          eachPermission.push(eachPermissionItem);
        });
        resPermission[i].permissions = eachPermission;
      }
      this.modifiedtreeData = resPermission;
    }
  }

  // Parent checkbox selection based on child
  tickCheckbox(node: any): boolean {
    if (node.parentName == undefined && node.isGranted == undefined) return node.permissions.filter((x: Permission) => x.isGranted == true).length > 0 ? true : false;
    else return node.isGranted;
  }

  // Select and Deselect all on main checkbox selection
  selectAllFeature(event: any) {
    for (let i = 0; i < this.modifiedtreeData.length; i++) {
      this.modifiedtreeData[i].permissions.forEach(element => element.isGranted = event);
      const mainParentElement = document.getElementById(this.modifiedtreeData[i].name) as HTMLInputElement;
      this.modifiedtreeData[i].permissions.filter(x => x.isGranted == true).length > 0 ? mainParentElement.checked = true : mainParentElement.checked = false;
    }
    this.getSelectedNodes();
  }

  // Selection of the particular checkbox
  selectNode(node: any, event: any) {
    if (node.isGranted == undefined) node.permissions.forEach((element: Permission) => event ? element.isGranted = true : element.isGranted = false);
    else {
      node.isGranted = event;
      const treeNodePermissions = this.modifiedtreeData[node.referParentIndex].permissions;
      const mainParentElement = document.getElementById(this.modifiedtreeData[node.referParentIndex].name) as HTMLInputElement;
      const nodeChildern = treeNodePermissions.filter(x => x.parentName == node.name);
      if (nodeChildern.length > 0) {
        nodeChildern.forEach(element => event ? element.isGranted = true : element.isGranted = false);
        treeNodePermissions.filter(x => x.isGranted == true).length > 0 ? mainParentElement.checked = true : mainParentElement.checked = false;
      }
      else {
        const similarNodes = treeNodePermissions.filter(x => x.parentName == node.parentName);
        if (similarNodes.filter(x => x.isGranted == true).length > 0) {
          const findParent = treeNodePermissions.find(x => x.name == node.parentName);
          findParent != undefined ? findParent.isGranted = true : null;
          mainParentElement.checked = true;
        }
        else {
          const findParent = treeNodePermissions.find(x => x.name == node.parentName);
          findParent != undefined ? findParent.isGranted = false : null;
          treeNodePermissions.filter(x => x.isGranted == true).length > 0 ? mainParentElement.checked = true : mainParentElement.checked = false;
        }
      }
    }
    this.getSelectedNodes(node);
  }

  // Emit data
  getSelectedNodes(node?: any) {
    // Emit all selected nodes
    let allSelectedNodes: any[] = [];
    for (let i = 0; i < this.modifiedtreeData.length; i++) {
      const getSelected = this.modifiedtreeData[i].permissions.filter(x => x.isGranted == true);
      if (getSelected.length > 0) {
        const concatedSelectedNodes = allSelectedNodes.concat(getSelected);
        allSelectedNodes = concatedSelectedNodes;
      };
    };
    this.getAllSelectedNodes.next(allSelectedNodes);
    // Emit particular selected node
    if (node != undefined || node != null) this.onSelectnode.next({ item: node });
    // Emit Selected Permission for value and name
    const selectedPermissionsNames: any[] = [];
    allSelectedNodes.forEach(element => {
      const itemselected: any = {
        name: element.name,
        isGranted: element.isGranted
      };
      selectedPermissionsNames.push(itemselected);
    });
    this.getAllselectedPermissions.next(selectedPermissionsNames);
  }

  // Get custom height for vertical dotted line at last checkbox
  customHeight(node: any): string {
    const lastElement = this.modifiedtreeData[this.modifiedtreeData.length - 1];
    return lastElement.name == node.name ? (lastElement.permissions.length * 50).toString() + '%' : '100%';
  }

  // Show-hide vertical dotted line
  verticalLine(node: any): boolean {
    if (this.modifiedtreeData.length > 0) {
      if (node.parentName == null && node.permissions == undefined) return this.modifiedtreeData[node.referParentIndex].permissions.filter(x => x.parentName == node.name).length > 0 ? true : false;
      else if (node.parentName == undefined) {
        if (this.modifiedtreeData[this.modifiedtreeData.length - 1].name == node.name) return node.permissions.length > 0 ? true : false;
        return true;
      }
      else if (node.parentName.length > 0) return this.modifiedtreeData[node.referParentIndex].permissions.filter(x => x.parentName == node.parentName).length > 0 ? false : null;
    }
  }

  // Show-hide vertical extraa dotted line
  verticalLineExtraa(node: any): boolean {
    if (this.modifiedtreeData.length > 0) {
      if (node.parentName == null && node.permissions == undefined) return false;
      else if (node.parentName == undefined) return false;
      else if (node.parentName.length > 0) {
        const childArray = this.modifiedtreeData[node.referParentIndex].permissions.filter(x => x.parentName == node.parentName);
        if (childArray.length > 0) return childArray.indexOf(node, 0) == (childArray.length - 1) ? false : true;
      }
    }
  }

  // On cliking on label of particular checkbox node
  onClicknode(node: string) {
    this.onSelectnode.emit({ item: node })
  }
}
