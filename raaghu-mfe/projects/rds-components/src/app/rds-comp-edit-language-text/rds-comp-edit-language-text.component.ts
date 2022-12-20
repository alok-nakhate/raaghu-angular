import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LanguageText } from 'projects/rds-page-language-text/src/modal/language-text';
import { Store } from '@ngrx/store';
import { getLanguageTexts } from 'projects/libs/state-management/src/lib/state/language-text/language-text.actions';


@Component({
  selector: 'app-rds-comp-edit-language-text',
  templateUrl: './rds-comp-edit-language-text.component.html',
  styleUrls: ['./rds-comp-edit-language-text.component.scss']
})
export class RdsCompEditLanguageTextComponent implements OnInit {
  @Input() buttonSpinner: boolean = true;
  constructor(public translate:TranslateService, private store: Store) { }

  @Input() Languagetext: LanguageText = {
    baseValue: '',
    baseLanguageName: '',
    languageName: '',
    sourceName: '',
    value: '',
    key: '',
    resourceName: '', 
    cultureName:'', 
    name:''
  }
  @Output() onLanguageTextSave = new EventEmitter<any>()


  ngOnInit(): void {
  }

  updateLanguageText(languagetextForm: NgForm): void {
    if (languagetextForm.invalid) {
      return;
    }
    const languageTextDataParams: any = {
      name:this.Languagetext.languageName,
      sourceName:this.Languagetext.sourceName,
      key:this.Languagetext.key,
      value:this.Languagetext.value,
      resourceName:this.Languagetext.resourceName ,
      cultureName:this.Languagetext.cultureName,
      getOnlyEmptyValues: false,
      Sorting: '',
      MaxResultCount: 10,
      skipCount: 0,
      baseLanguageName:this.Languagetext.languageName
    }
    this.onLanguageTextSave.emit(languageTextDataParams); 
    this.store.dispatch(getLanguageTexts(languageTextDataParams));
  }
  back(){
    this.buttonSpinner=false;
  }
}
