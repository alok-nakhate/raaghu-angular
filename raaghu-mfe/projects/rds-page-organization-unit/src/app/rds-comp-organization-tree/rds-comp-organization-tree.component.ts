import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
// import { AlertPopupData } from 'projects/rds-components/src/app/rds-comp-alert-popup/rds-comp-alert-popup.component';
declare var bootstrap: any;
@Component({
  selector: 'rds-organization-tree',
  templateUrl: './rds-comp-organization-tree.component.html',
  styleUrls: ['./rds-comp-organization-tree.component.scss']
})
export class RdsOrganizationTreeComponent implements OnInit {
  // public alertData: AlertPopupData = {
  //   iconUrl: "delete",
  //   colorVariant: "danger",
  //   alertConfirmation: "Are you sure ?",
  //   messageAlert: "The record will be deleted permanently",
  //   CancelButtonLabel: "Cancel",
  //   DeleteButtonLabel: "Delete"
  // }
  private deleteNodeId: any;
  @Input() organizationTreeData;
  @Input() mutable: boolean;
  @Input() nodeColor: string[] = ['#BDCEFC', '#0D79AE', '#14A94B', '#FBA919'];
  @Output() onSelectnode = new EventEmitter<{ item: any }>()
  @Output() onDeleteNode = new EventEmitter<{ id: any }>()
  @Output() onNodeEdit = new EventEmitter<any>()
  @Output() getSelectedParent = new EventEmitter<any>();
  @Output() onCreateNode = new EventEmitter<any>();
  public showDeleteModal: boolean = false;
  constructor(public translate: TranslateService,) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  cancelDelete(): void {
    this.deleteNodeId = undefined;
    this.showDeleteModal = false;
  }

  addNode(nodeArray) {
    if (nodeArray && nodeArray[0].data) {
      this.getSelectedParent.emit(nodeArray[0].data.parentId);
    }
  }

  addNestedNode(node) {
    if (node && node.data) {
      this.getSelectedParent.emit(node.data.id);
    }
  }

  getNodeColor(level: number) {
    return this.nodeColor[(level - 1) % 4];
  }

  setStateBasedOnMutable(lastNode: boolean, node) {
    if (!this.mutable && lastNode && node.children.length === 0) {
      return false;
    }
    return true;
  }

  onClicknode(node: any) {
    this.onSelectnode.emit({ item: node })
  }

  deleteNode() {
    this.onDeleteNode.emit({ id: this.deleteNodeId });
    var myModalEl = document.getElementById('deleteTreeNode');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
    this.showDeleteModal = false;
  }

  deleteConfirmation(node: any) {
    this.showDeleteModal = true;
    setTimeout(() => {
      this.deleteNodeId = node.data.id;
      var myModalEl = document.getElementById('deleteTreeNode');
      var modal = new bootstrap.Modal(myModalEl);
      modal.show();
    }, 100);

  }

  onEdit(node: any) {
    this.onNodeEdit.emit(node);
  }


  setMaximumuserButton(index: number, length: number) {
    let place = length / 2;
    place = Math.floor(place);
    if (index === place) {
      return true;

    } else {
      return false;
    }
  }
}
