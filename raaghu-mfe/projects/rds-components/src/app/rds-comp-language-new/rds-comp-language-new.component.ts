import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-language-new',
  templateUrl: './rds-comp-language-new.component.html',
  styleUrls: ['./rds-comp-language-new.component.scss']
})
export class RdsCompLanguageNewComponent implements OnInit {

  constructor(public datepipe: DatePipe, public translate: TranslateService) { }
  @Output() onLanguageSave = new EventEmitter<any>();
  @Output() onCloseCanvas = new EventEmitter<any>()
  @Output() LanguageInfo = new EventEmitter<any>();
  @Output() LanguageInfoEdit = new EventEmitter<any>();
@Input() editOffCanvas:boolean =false;
@Input() buttonSpinner : boolean =true;
  // @Input() flags: any[] = []
  @Input() cultureList: any[] = []
  @Input() uiCultureList : any[] = []
  @Input() EditShimmer: boolean = false;

  @Input() selectedLanguageData: any;
  @ViewChild('languageForm') languageInfoForm: NgForm;
  // @Input() public submitted: boolean = false;
  viewCanvas: boolean = false;


  ngOnInit(): void {
    if (!this.selectedLanguageData) {
      this.selectedLanguageData = {};
       this.selectedLanguageData['cultureName'] = [];
      this.selectedLanguageData['displayName'] = '';
       this.selectedLanguageData['uiCultureName'] = [];
      this.selectedLanguageData['isEnabled'] = true ;
    }


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.selectedLanguageData) {
      this.selectedLanguageData = {};
      this.selectedLanguageData['cultureName'] = [];
      this.selectedLanguageData['displayName'] = '';
       this.selectedLanguageData['uiCultureName'] = [];
      this.selectedLanguageData['isEnabled'] = true ;
    }

  }
  // ngOnInit(): void {
  //   this.submitted = false;
 
  // }
  addLanguage(languageForm: NgForm): void {
    languageForm.form.markAllAsTouched();
    this.buttonSpinner=true;
    this.LanguageInfo.emit(this.selectedLanguageData);
  }
  addLanguageEdit(languageForm: NgForm){
    languageForm.form.markAllAsTouched();
    this.buttonSpinner=true;
    this.LanguageInfoEdit.emit(this.selectedLanguageData.id);
  }
//   addLanguage(languageForm: NgForm): void {
//     languageForm.form.markAllAsTouched();
//     this.submitted = true;
//     this.buttonSpinner=true;
//     // this.languageName = []

//     if (languageForm.invalid || !this.selectedLanguageData.icon || this.selectedLanguageData.icon === '') {
//       return;
//     }
//     // const flag: any = this.flags.find((x: any) => x.some === this.selectedLanguageData.icon);
//     this.onLanguageSave.emit(
//       {
//         //  icon: flag.value, 
//         isEnabled: this.selectedLanguageData.isEnabled,
//         name: this.selectedLanguageData.countryCode[0],
//         id: this.selectedLanguageData.id ,
//         displayName : this.selectedLanguageData.displayName,
//         languageName : this.selectedLanguageData.languageName
//       });
// console.log('Language emit ',this.onLanguageSave);

//   }

onCultureSelect(event: any): void {
  debugger
  this.selectedLanguageData.cultureName = event.item.value;
  
}
  onCountryCodeSelect(selectedItem: any): void {
    this.selectedLanguageData.uiCulturename = selectedItem.item.some;
  }

  closeCanvas(): void {
    this.onCloseCanvas.emit(true);
    this.buttonSpinner=false;
    this.viewCanvas = false;

  }

}
