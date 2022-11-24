import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LanguageText } from 'projects/rds-page-language-text/src/modal/language-text';

@Component({
  selector: 'rds-comp-edit-language-text',
  templateUrl: './rds-comp-edit-language-text.component.html',
  styleUrls: ['./rds-comp-edit-language-text.component.scss']
})
export class RdsCompEditLanguageTextComponent implements OnInit {
  @Input() buttonSpinner: boolean = false;
  constructor(public translate:TranslateService) { }

  @Input() Languagetext: LanguageText = {
    baseValue: '',
    baseLanguageName: '',
    languageName: '',
    sourceName: '',
    value: '',
    key: ''
  }
  @Output() onLanguageTextSave = new EventEmitter<any>()


  ngOnInit(): void {
  }

  updateLanguageText(languagetextForm: NgForm): void {
    if (languagetextForm.invalid) {
      return;
    }
    this.onLanguageTextSave.emit({ languageName:this.Languagetext.languageName,sourceName:this.Languagetext.sourceName,key:this.Languagetext.key,value:this.Languagetext.value });
   
  }
  back(){
    this.buttonSpinner=false;
  }
}
