import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export class Language {
  public name: string;
  public icon: string;
  public isEnabled: boolean;
  public id: number;
}

@Component({
  selector: 'rds-comp-new-language',
  templateUrl: './rds-comp-new-language.component.html',
  styleUrls: ['./rds-comp-new-language.component.scss'],
  providers: [DatePipe],
})
export class RdsCompNewLanguageComponent implements OnInit, OnChanges {
  constructor(public datepipe: DatePipe, public translate: TranslateService) {}
  @Output() onLanguageSave = new EventEmitter<any>();
  @Output() onCloseCanvas = new EventEmitter<any>();
  @Input() flags: any[] = [];
  // @Input() selectedLanguage: any;
  @Input() languageNames: any[] = [];
  @Input() EditShimmer: boolean = false;
  listLanguage: any;
  listcountrycode: any;
  LanguageData: any;
  name: string = '';
  icon: string = '';
  id: number | undefined = undefined;
  isEnabled: boolean = false;
  @Input() languageName = '';
  @Input() selectedLanguage: any = {
    countryCode: '',
    icon: '',
    isEnabled: false,
    id: undefined,
    name: '',
  };
  @Input() public submitted: boolean = false;
  onChangeIsenabled(event: any) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.submitted = false;
  }

  addLanguage(languageForm: NgForm): void {
    languageForm.form.markAllAsTouched();
    this.submitted = true;
    if (
      languageForm.invalid ||
      !this.selectedLanguage.icon ||
      this.selectedLanguage.icon === ''
    ) {
      return;
    }
    const flag: any = this.flags.find(
      (x: any) => x.some === this.selectedLanguage.icon
    );
    this.onLanguageSave.emit({
      icon: flag.value,
      isEnabled: this.selectedLanguage.isEnabled,
      name: this.selectedLanguage.countryCode,
      id: this.selectedLanguage.id
    });
  }

  onCountryCodeSelect(selectedItem: any): void {
    this.selectedLanguage.icon = selectedItem.item.some;
  }


  onLanguageSelect(selectedItem: any): void {
   
    this.selectedLanguage.countryCode = selectedItem.item.value;
  }
  closeCanvas(): void {
    this.onCloseCanvas.emit(true);
  }
}
