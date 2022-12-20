import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-checkbox-parent-child',
  templateUrl: './rds-checkbox-parent-child.component.html',
  styleUrls: ['./rds-checkbox-parent-child.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsCheckboxParentChildComponent,
    multi: true
  }]
})
export class RdsCheckboxParentChildComponent implements OnInit, ControlValueAccessor {
  title = 'rds-checkbox-parent-child';
  onChange = (event: any) => {};
  onTouched = () => {};
  @Input() itemList: any;
  @Input() switch?: boolean;
  @Input() inline?: boolean;
  @Input() isInputGroup?: boolean;
  @Input() state: 'checkbox' | 'errorcheckbox' = 'checkbox';
  checked = false;

  @Output() onClick = new EventEmitter<{ evnt: any, item: string }>();

  constructor() {}

  ngOnInit(): void {
  }

  writeValue(obj: any) {
    this.checked = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public get classes(): string[] {
    var classes = ['form-check']
    if (this.isInputGroup) {
      classes = ['input-group-text'];
    }
    if (this.switch) {
      classes.push('form-switch ps-5')
      return classes
    }
    if (this.inline) {
      classes.push('form-check-inline')
      return classes
    }
    if (this.state == 'errorcheckbox') {
      classes.push('errorche')
      return classes
    }
    if (this.isInputGroup && this.switch && this.inline) {
      classes = ['input-group-text form-switch ps-5 form-check-inline'];
    }
    return classes
  }

  getValueParent(event: any) {
    this.onClick.emit({ evnt: event, item: event.target.value });
    this.onChange(event.target.click)
    this.onTouched();
  }

  getValueChild(event: any) {
    this.onClick.emit({ evnt: event, item: event.target.value });
    this.onChange(event.target.click)
    this.onTouched();
  }

  parentCheck(parentObj: any, event: boolean) {
    parentObj.isIntermediate = false;
    for (var i = 0; i < parentObj.childList.length; i++) {
      parentObj.childList[i].isSelected = parentObj.isSelected;
    }
    parentObj.isSelected = event
    this.onTouched(); // <-- mark as touched
    this.onChange(event);
  }

  //Click event on Child Checkbox checkbox  
  childCheck(parentObj: any, childObj: any, event: boolean) {
    parentObj.isSelected = false;
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      return itemChild.isSelected == true;
    });
    const childObjLength = childObj.filter((x: any) => x.isSelected).length;
    if (parentObj.isSelected) {
      parentObj.isSelected = true;
      if (childObjLength == childObj.length) {
        parentObj.isIntermediate = false;
      } else {
        parentObj.isIntermediate = true;
      }
    }
    else if (!parentObj.isSelected) {
      parentObj.isSelected = false;
      if (childObjLength >= 1) {
        parentObj.isSelected = true;
        parentObj.isIntermediate = true;
      } else if (childObjLength === 0) {
        parentObj.isIntermediate = false;
        parentObj.isSelected = false;
      }
    }
    // childObj.isSelected = event
    this.onTouched(); // <-- mark as toucheds
    this.onChange(event);
  }

  //Just to show updated JSON object on view
  // stringify(obj: any) {
  //   return JSON.stringify(obj);
  // }
}
