import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-tags',
  templateUrl: './rds-tags.component.html',
  styleUrls: ['./rds-tags.component.scss']
})
export class RdsTagsComponent implements OnInit {
  @Input() tagType: 'square' | 'round' = 'square';
  inputText!: string;
  tagArray!: any[];
  @Input() role: 'basic' | 'tagWithScroll' = 'basic';
  @Input() colorVariant: 'primary'| 'secondary'| 'danger'| 'success'| 'warning'|'info'| 'light'| 'dark'='light';
  // @Input() borderColorVariant: 'primary'| 'secondary'| 'danger'| 'success'| 'warning'|'info'| 'light'| 'dark'='light';
  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    var classes = ['bd-example']
    const tagColor = 'tag-' + `${this.colorVariant}`;
    const borderColor = 'border border-' + `${this.colorVariant}`
    classes.push(tagColor);
    
    if (this.tagType === 'square') {
      classes.push('bd-example');
      classes.push('square-tags');
      classes.push('border border-2');
      classes.push(borderColor);
      return classes
    }
    if (this.tagType === 'round') {
      classes.push('bd-example')
      classes.push('rounded-tags')
      classes.push('border border-2');
      classes.push(borderColor);    
      return classes
    }
    return classes
  }
  // newly added 1
  // public get borderclass(): any[]{
  //   var borderclass = ['']
  //   const borderColor = 'border border-' + `${this.borderColorVariant}`
  //   borderclass.push('border border-1');
  //   borderclass.push(borderColor);
  //   return borderclass
  // }

  // newly added 2 and for text-color
  public get tagbodytext(): any[]{
    var tagbodytext = ['']
    const tagtextcolor = 'text-' + `${this.colorVariant}`
    tagbodytext.push(tagtextcolor);
    return tagbodytext
  }

  addTag() {
    if (this.inputText.length > 0) {
      this.tagArray = this.tagArray ? this.tagArray : [];
      this.tagArray.push(this.inputText);
      this.inputText = '';
    }
  }
  deleteTag(index: number) {
    this.tagArray.splice(index, 1);
  }

}
