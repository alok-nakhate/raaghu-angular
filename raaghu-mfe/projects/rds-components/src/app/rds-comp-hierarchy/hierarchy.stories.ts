
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompHierarchyComponent } from './rds-comp-hierarchy.component';
import { TreeNode,  TreeNodeLabeles, TreeType  } from '../../models/tree-node.model';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Hierarchy',
  component: RdsCompHierarchyComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCheckboxModule, RdsOffcanvasModule, RdsInputModule,
        NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompHierarchyComponent> = (args: RdsCompHierarchyComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
  
Default.args = {
   treeData: [
    new TreeNode("L1N1",'CEO', 1, [
      new TreeNode("L1N2",'Head Of Marketing', 2, [new TreeNode("L1N3",'Head of HR', 2,  [new TreeNode("L1N4",'Senior Manager', 2, [],true)],false)],true)
    ],true),
    new TreeNode("L2N1",'Head of Finance', 1, [new TreeNode("L2N2",'Executive', 2, [new TreeNode("L2N3",'Assistant 1', 2, [],true)],true)],true),
  ],
  
   nodeColors:['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'],
   mutable:true,
   TreeType:{
   IconLabel:true,
   Normal:false,
   checkbox: false,
   
  }, 
  TreeNodeLabeles:{
    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder:  "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder:  "Child label",
    ParentNodeTitle:  "Parent Node Title",
    ChildNodeTitle:  "Child node Title",
  },
  ButtonLabel:'New Node',
};
