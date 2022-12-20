import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TreeNode, TreeNodeLabeles, TreeType } from '../../models/tree-node.model';

@Component({
  selector: 'rds-comp-hierarchy',
  templateUrl: './rds-comp-hierarchy.component.html',
  styleUrls: ['./rds-comp-hierarchy.component.scss']
})
export class RdsCompHierarchyComponent implements OnInit, OnChanges {
  @Input() isReset: boolean = false;
  @Input() selectedItems: TreeNode[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.nodeForm = this.formBuilder.group({
      itemCodeData: ['', Validators.required],
      ItemDescription: ['', Validators.required]
    })
    this.nodeEditForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required]
    })
    this.NetednodeForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required]
    })

  }
  elementUrls: string[];

  ngOnChanges(changes: SimpleChanges): void {

    if (this.TreeType.checkbox) {
      this.SelectAll = this.checkAllSelectorNot()
    }
    if (this.isReset) {
      this.selectAllFeature(false);
      this.isReset = false;
    }
    if (this.selectedItems) {
      this.selectedItems.forEach((item: any) => {
        this.checkSelectedNodes(item, this.treeData);
      })
    }
  }

  checkSelectedNodes(node: any, treeData: TreeNode[]) {
    const item: TreeNode = treeData.find(x => x.ItemCode === node.ItemCode);
    if (item) {
      item.selected = true;
      if (node.selectedChildren) {
        node.selectedChildren.forEach((child: any) => {
          this.checkSelectedNodes(child, item.children);
        })
      }
    }
  }


  public nodeForm = new FormGroup({})
  public nodeEditForm = new FormGroup({})
  public NetednodeForm = new FormGroup({})
  disableSaveButton: boolean;
  disableSaveButtonfromDes: boolean
  disableSaveButtonfromCode: boolean
  @Input() selectAllLabel: string = 'Select All';
  @Input() treeData: TreeNode[];
  @Input() mutable: boolean;
  @Input() ButtonLabel: string;
  @Input()
  TreeNodeLabeles: TreeNodeLabeles = {
    ParentItemPlaceholder: "",
    ChildItemPlaceholder: "",
    ParentDescriptionPlaceholder: "",
    ChildDescriptionPlaceholder: "",
    ParentNodeTitle: "",
    ChildNodeTitle: "",
  }
  @Input()
  TreeType: TreeType = {
    IconLabel: false,
    Normal: false,
    checkbox: true
  }
  @Input() nodeColors: string[] = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  @Output() onParentSave = new EventEmitter<{ item: any }>();
  @Output() onChildSave = new EventEmitter<{ item: any, ParentNode: any }>();
  @Output() onSelectAll = new EventEmitter<{ item: any }>();
  @Output() onSelectnode = new EventEmitter<{ item: any }>();
  @Output() getAllSelectedNodes = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<{ item: any }>();
  @Output() onEdit = new EventEmitter<{ item: any }>();

  selectedNodeList: TreeNode[] | null;
  selectedNestedNode: TreeNode | null;
  SelectAll: boolean = false;
  nodeLabel!: string;
  itemCode: any;
  ItemDescription: any;
  itemcodeRequiredMessage: boolean;
  DescriptionRequiredMessage: boolean;
  addNode(nodeArray: TreeNode[]) {
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNodeList = nodeArray;
    //this.checkSavebuttonEnable(false,false)
  }

  addNestedNode(node: TreeNode) {
    this.disableSaveButton = true
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNestedNode = node;
  }


  pushNode() {
    let arr = this.selectedNodeList as TreeNode[];
    arr.push(new TreeNode(this.itemCode, this.ItemDescription, arr[0].level, [], false, arr.length + 1));
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNodeList = null;
    this.onParentSave.emit({ item: arr });
  }

  pushNestedNode() {
    this.selectedNestedNode?.children.unshift(
      new TreeNode(this.itemCode, this.ItemDescription, this.selectedNestedNode?.level + 1, [], false, '', this.selectedNestedNode.id)
    );
    this.onChildSave.emit({ item: this.selectedNestedNode?.children, ParentNode: this.selectedNestedNode });
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNestedNode = null;
  }

  getNodeColor(level: number) {
    return this.nodeColors[(level - 1) % 4];
  }

  setStateBasedOnMutable(lastNode: boolean, node: TreeNode) {
    if (!this.mutable && lastNode && node.children.length === 0) {
      return false;
    }
    return true;
  }

  selectNode(node: TreeNode, event: any) {
    node.selected = event;
    this.selectAllNode(node, event);
    this.SelectAll = this.checkAllSelectorNot();
    if (node.parentId) {
      this.checkForParent(this.treeData, node, event);
    }
    const selectedNodes: TreeNode[] = this.getSelectedNodes(this.treeData);
    this.getAllSelectedNodes.emit(selectedNodes);
    this.onSelectnode.emit({ item: node });
  }
  getSelectedNodes(treeData: any): TreeNode[] {
    const selectedNodes: any = [];
    treeData.forEach((tree: any) => {
      if (tree.selected) {
        tree.selectedChildren = this.getSelectedNodes(tree.children);
        selectedNodes.push(tree);
      }
    })
    return selectedNodes;
  }

  checkForParent(treeData: TreeNode[], node: any, event: boolean): void {
    treeData.forEach((tree: any) => {
      if (tree.id === node.parentId) {
        const exist: any = tree.children.find((x: any) => x.selected && x.id !== node.id);
        if (!exist) {
          tree.selected = event;
        }
      } else {
        this.checkForParent(tree.children, node, event);
      }
    })
  }

  onClicknode(node: string) {
    this.onSelectnode.emit({ item: node })
  }
  selectAllNode(node: TreeNode, checked: boolean) {
    node.selected = checked;
    for (const n of node.children) {
      this.selectAllNode(n, checked);
    }
  }

  deleteNode(node: TreeNode) {
    let index: number;
    index = this.treeData.findIndex(x => x.ItemCode === node.ItemCode);
    if (index !== -1) {
      this.treeData.splice(index, 1);
      this.onDelete.emit({ item: node });
    } else {
      for (const n of this.treeData) {
        this.deleteChildenode(n.children, node)
      }

    }
  }



  deleteChildenode(data: TreeNode[], node: TreeNode) {
    let index;
    index = data.findIndex(x => x.ItemCode === node.ItemCode);
    if (index !== -1) {
      data.splice(index, 1);
      this.onDelete.emit({ item: node });
    } else {
      for (const n of data) {
        this.deleteChildenode(n.children, node)
      }
    }
  }

  selectAllFeature(event: any) {
    for (const n of this.treeData) {
      this.selectAllNode(n, event);
    }
    this.SelectAll = event;
    if (event) {
      this.onSelectAll.emit({ item: this.treeData });
    } else {
      this.onSelectAll.emit({ item: [] });

    }

  }
  checkAllSelectorNot(): boolean {
    for (const n of this.treeData) {
      this.SelectAll = this.checkNodSelectOrnot(n);
      if (this.SelectAll == false) {
        return this.SelectAll;

      }
    }
    return this.SelectAll;
  }
  checkNodSelectOrnot(node: TreeNode): boolean {
    if (node.selected == false) {
      return false;
    } else {
      for (const n of node.children) {
        let checked = this.checkNodSelectOrnot(n);
        if (!checked) {
          return false;
        }
      }
    }
    return true;
  }
  getNodeByID(node: TreeNode) {
    this.NetednodeForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required]
    })

    this.ItemDescription = node.ItemDescription;
    this.itemCode = node.ItemCode;

  }
  EditnodeModal() {

    for (const n of this.treeData) {
      this.EditChildenode(n, this.itemCode);

    }
  }
  EditChildenode(data: TreeNode, itemCode: string) {
    if (data.ItemCode == itemCode) {
      data.ItemDescription = this.ItemDescription;
      this.onDelete.emit({ item: data });
    } else {
      for (const n of data.children) {
        this.EditChildenode(n, itemCode);

      }
    }

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
  checkSavebuttonEnable(disableSaveButton: boolean, disableSaveButtonfromDes: boolean) {
    if (disableSaveButton === true || disableSaveButtonfromDes === true) {
      this.disableSaveButton = true;
    } else {
      this.disableSaveButton = false
    }

  }
  checkItemcodeValidation() {
    if (this.itemCode === '' || this.itemCode === undefined) {
      this.itemcodeRequiredMessage = true;
      this.disableSaveButtonfromCode = true
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
    else {
      this.itemcodeRequiredMessage = false;
      this.disableSaveButtonfromCode = false
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
  }
  checkDescriptionValidation() {
    if (this.ItemDescription === '' || this.ItemDescription === undefined) {
      this.DescriptionRequiredMessage = true;
      this.disableSaveButtonfromDes = true
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
    else {
      this.DescriptionRequiredMessage = false;
      this.disableSaveButtonfromDes = false
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
  }
}
