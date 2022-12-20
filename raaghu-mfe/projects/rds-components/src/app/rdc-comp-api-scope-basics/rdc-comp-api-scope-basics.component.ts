import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rdc-comp-api-scope-basics',
  templateUrl: './rdc-comp-api-scope-basics.component.html',
  styleUrls: ['./rdc-comp-api-scope-basics.component.scss']
})
export class RdcCompApiScopeBasicsComponent implements OnInit, AfterViewInit, OnChanges {
  scopeBasics: any = {};
  numberPattern: any = /^[0-9]+$/;
  @Input() scopeInfo: any = undefined;
  @ViewChild('scopeBasicsForm') basicInfo: NgForm;
  @Output() scopeBasicInfo = new EventEmitter<any>();
  constructor(public translate:TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.scopeInfo) {
      this.scopeBasics.name = this.scopeInfo.name;
      this.scopeBasics.displayName = this.scopeInfo.displayName;
      this.scopeBasics.enables = this.scopeInfo.enables;
      this.scopeBasics.required = this.scopeInfo.required;
      this.scopeBasics.emphasize = this.scopeInfo.emphasize;
      this.scopeBasics.discoveryDocuments = this.scopeInfo.discoveryDocuments;
      this.scopeBasics.description = this.scopeInfo.description;

    }
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    if (this.basicInfo) {
      this.basicInfo.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.scopeBasicInfo.emit(this.scopeBasics);
        } else {
          this.scopeBasicInfo.emit(undefined);
        }
      });
    }
  }

}
