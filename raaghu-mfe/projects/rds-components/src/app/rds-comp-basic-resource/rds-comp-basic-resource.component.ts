import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
export class Resource {
  public Name: string;
  public Displayname: string;
  public Description: string;
  public enables:boolean
  public required:boolean
  public emphasize:boolean
  public showindiscovery:boolean
}
@Component({
  selector: 'rds-comp-basic-resource',
  templateUrl: './rds-comp-basic-resource.component.html',
  styleUrls: ['./rds-comp-basic-resource.component.scss']
})
export class RdsCompBasicResourceComponent implements OnInit {
  scopeBasics: any = {};
  constructor(public translate:TranslateService) { }
  @Output()
  onBsicResourceSave = new EventEmitter<{BasicResource:any}>()
  @ViewChild('resourceForm') resourceForm: NgForm;
  name:string;
  ngOnInit(): void {
    this.ResourceData=new Resource()
  }
  @Input() ResourceData:Resource={
    Name: '',
    Displayname: '',
    Description: '',
    enables: false,
    required: false,
    emphasize: false,
    showindiscovery: false
  }
  saveResource(resourceForm: NgForm) {
    if (resourceForm.invalid) {
      return;
    }else{
      this.onBsicResourceSave.emit({ BasicResource: this.ResourceData });
      this.ResourceData=new Resource();
    }
    
  }

}
