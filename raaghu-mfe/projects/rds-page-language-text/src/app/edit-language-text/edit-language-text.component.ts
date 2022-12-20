import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { updateLanguageText } from 'projects/libs/state-management/src/lib/state/language-text/language-text.actions';
declare var bootstrap: any;

@Component({
  selector: 'app-edit-language-text',
  templateUrl: './edit-language-text.component.html',
  styleUrls: ['./edit-language-text.component.scss']
})
export class EditLanguageTextComponent implements OnInit, OnChanges {
  public rdsEditLanguagetextMfeConfig: ComponentLoaderOptions;
  public rdsLanguagetextTableMfeConfig: ComponentLoaderOptions;
  @Output() onLanguageTextSave = new EventEmitter<boolean>();
  constructor(private store: Store) { }
  @Input() Languagetext: any = {
    baseValue: '',
    resourceName: '',
    baseLanguageName: '',
    languageName: '',
    value: '',
    key: '',
    cultureName:''
  }
  ngOnInit(): void {
    this.rdsEditLanguagetextMfeConfig = {
      name: 'RdsCompEditLanguageText',
      input: {
        Languagetext: this.Languagetext
      },
      output: {
        onLanguageTextSave: (languageTextData: any) => {
          this.store.dispatch(updateLanguageText(languageTextData));
          var offcanvas = document.getElementById('EditlanguageText');
          let openedCanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          openedCanvas.hide();
          this.onLanguageTextSave.emit()
        }
      }
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    // const mfeConfig = this.rdsLanguagetextTableMfeConfig
    // mfeConfig.input.tableData = [... this.Languagetext];
    // this.rdsLanguagetextTableMfeConfig = mfeConfig;

    // this.rdsEditLanguagetextMfeConfig = {
    //   name: 'RdsCompEditLanguageText',
    //   input: {
    //     Languagetext: this.Languagetext
    //   },
    //   output: {
    //     onLanguageTextSave(languageTextData: any) {
    //       const languageTextBody: any = {
    //         languageText: languageTextData
    //       }
    //       var offcanvas = document.getElementById('EditlanguageText');
    //       let openedCanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    //       openedCanvas.hide();
    //     }
    //   }
    // };
  }

}
