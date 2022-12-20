import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Dropdown } from 'bootstrap'

@Component({
  selector: 'rds-dropdownlist',
  templateUrl: './rds-dropdownlist.component.html',
  styleUrls: ['./rds-dropdownlist.component.scss']
})
export class RdsDropdownlistComponent implements OnInit, OnChanges, AfterViewInit {

  title = 'rds-dropdownlist';

  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  @Input() id: string = 'dropdownMenuLink';
  @Input() value: any;
  @Input()
  multiSelect!: boolean;
  @Input()
  selectAll: boolean = true;

  @Input() size: 'small' | 'large' = 'small';

  @Input() iconHeight: string = '10px';
  @Input() iconWidth: string = '10px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() icon: string = '';
  @Input() placeholder = "Filter by user"
  @Input() show: boolean = false;
  @Input() borderDropdown: boolean = false;
  @Input() dropdownHeight!: string; 

  @Input() xOffset: string = '';
  @Input() yOffset: string = '';
  @Input()
  listItems: any = [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export_to_excel', iconWidth: '20px', iconHeight: '25px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: 'download_data', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
  ];
  droparrow = false;
  @Output()
  onSelect = new EventEmitter<{ item: any }>()

  @Input() reset: boolean = false
  @Input() resetPlaceholder: string = ''
  @Input() resetFormSubject: Observable<boolean> = new Observable<boolean>();
  @Input() entity = false;
  badgeList: any[] = [];
  // @Input() height: string='250';
  @Input() iconshow: boolean = true;
  constructor() {
    this.isMasterSel = false;
  }
  ngAfterViewInit(): void {
    const myDropdown = document.getElementById(this.id);
    if (myDropdown) {
      myDropdown.addEventListener('hide.bs.collapse', event => {
        this.show = false;
      })
     
    }

  }


  ngOnInit(): void {
    this.resetFormSubject.subscribe(response => {
      if (response) {
        this.checkedCategoryList = [];
        this.badgeList = [];
        this.placeholder = this.resetPlaceholder;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.reset) {
      this.checkedCategoryList = [];
      this.badgeList = [];
      this.placeholder = this.resetPlaceholder;
    }
  }

  public get button1(): any[] {

    var customClasses = [' form-control', 'dropdown-toggle', 'form-select']

    if (this.size === 'small') {
      customClasses.push('form-control-sm')
    }

    else if (this.size === 'large') {
      customClasses.push('form-control-lg')
    }
    if (this.borderDropdown) {
      customClasses.push('')
    } if (!this.borderDropdown) {
      customClasses.push('border-0')
    }
    if (this.show) {
      customClasses.push(' droparrow')
    }


    //if (this.color !== '') {

    //  var index = customClasses.indexOf(`${this.colorVariant}`)
    //  customClasses.splice(index, 1)
    //}
    return customClasses
  }

  checkUncheckAll() {
    for (var i = 0; i < this.listItems.length; i++) {
      this.listItems[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }


  isAllSelected() {
    this.isMasterSel = this.listItems.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  initAllSelect(event: any, selecteditem: any) {
    if (this.multiSelect) {
      selecteditem.isSelected = !selecteditem.isSelected;
      this.isAllSelected();
      this.onSelect.emit({ item: selecteditem });
    }
    else {
      this.placeholder = selecteditem.some;
      this.onSelect.emit({ item: selecteditem });
    }
  }


  getCheckedItemList() {
    this.checkedCategoryList = [];
    this.badgeList = [];
    for (var i = 0; i < this.listItems.length; i++) {
      if (this.listItems[i].isSelected) {
        this.checkedCategoryList.push(" " + this.listItems[i].value);
        this.badgeList.push(this.listItems[i]);
      }
    }
    if (this.checkedCategoryList.length > 0) {
      this.placeholder = this.checkedCategoryList.toString();
    }
    else {
      this.placeholder = "Filter";
    }

    //this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }
  // public get classes(): string[] {

  //   var border = ['border']
  //   if (this.borderDropdown == true) {

  //     //  border.push('border');
  //     border.push('rounded')
  //   }
  //   else {
  //     border.push('border-1');
  //   }
  //   return border;


  // }



  open(): void {
    this.show = !this.show;
    // this.droparrow = !this.droparrow;
    var element: any = document.getElementById(this.id);
    var dropdown = new Dropdown(element)
    if (this.show) {
      dropdown.show();
    } else {
      dropdown.hide();
    }
  }

}
