import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export class success {
  filename !: string;
  filesize: number | undefined;
  iserror: boolean | undefined;
}

@Component({
  selector: 'rds-file-uploader',
  templateUrl: './rds-file-uploader.component.html',
  styleUrls: ['./rds-file-uploader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RdsFileUploaderComponent,
      multi: true,
    },
  ]
})
export class RdsFileUploaderComponent implements OnInit, ControlValueAccessor {

  title = "rds-file-uploader";
  onChange!: (value: string[]) => void;
  onTouched!: () => void;
  message: any = [];

  value: any;
  @Input() size?: string;

  @Input() label!: string;

  @Input() multipleFiles = false;

  @Input() maxfilesize?: any = 5;

  result: string = '';

  errorMsg: boolean = false;

  fileName: string = "";

  fileSize?: number;

  errorSizeInKb?: number;

  @Input() role: 'default' | 'fileUpload' = 'fileUpload';

  @Output() click = new EventEmitter<any>();

  @Output() onItemClick = new EventEmitter<any>();

  closeFile: boolean = false;

  fileArray: any = [];

  @Input() extensions!: string;

  fileIncorrectMsg: boolean = false;

  index: any;

  constructor() { }

  ngOnInit(): void {
    this.message = [];
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  getValue(event: any) {
    this.closeFile = true;
    const fileArray: any = []
    if (event.target && event.target.files) {
      const files: any = [...event.target.files];
      files.forEach(element => {
        fileArray.push(element.name);
      });
    }
    this.fileArray = fileArray;
  }

  public get classes(): string[] {
    var classList = ['form-control']

    if (this.size === 'small') {
      var selectSize = 'form-control-sm'
      classList.push(selectSize)
    }
    else if (this.size === 'large') {
      var selectSize = 'form-control-lg'
      classList.push(selectSize)
    }
    else {
      var selectSize = ''
      classList.push(selectSize)
    }

    return classList
  }

  public get changeSize(): string[] {

    var classList = ['form-group my-2']

    if (this.size === 'small') {
      var selectSize = 'small'
      classList.push(selectSize)
    }
    else if (this.size === 'medium') {
      var selectSize = 'medium'
      classList.push(selectSize)
    }
    else if (this.size === 'large') {
      var selectSize = 'large'
      classList.push(selectSize)
    }
    else {
      var selectSize = ''
      classList.push(selectSize)
    }

    return classList
  }

  checkFileSize(event: any): void {
    if (this.message === '[]') {
      this.message = [];

    }

    var data = event.target.files;

    var sizeInMB = (data.size / (1024 * 1024)).toFixed(2);
    for (let i = 0; i < data.length; i++) {
      this.result += 'File Size(byte): ' + data.size;
      var sizeInMB = (data[i].size / (1024 * 1024)).toFixed(2);
      var fileSize = +sizeInMB;
      this.fileSize = fileSize;

      let items = new success();

      if (fileSize > this.maxfilesize) {
        items.filename = data[i].name;
        items.filesize = fileSize;
        items.iserror = false;
        this.message.push(items);
      } else {
        items.filename = data[i].name;
        items.filesize = fileSize;
        items.iserror = true;
        this.message.push(items);
      }
      if (data) {
        this.onItemClick.emit(data);
      }
    }
  }

  checkExtension(event: any): void {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (file.type == "application/pdf" || file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {
        // console.log("correct");
        this.fileIncorrectMsg = false;
      }
      else {
        // console.log('wrong');
        this.fileIncorrectMsg = true;
        this.closeFile = false;
      }
    }
  }

  removeFileFromList(index: any) {
    this.fileArray.splice(index, 1);
  }

  clearFileUploaded(event: any) {
    event.target.value = null;
  }

}
