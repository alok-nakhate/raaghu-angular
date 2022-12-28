import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DownloadData, LinkedAccount, UserDeligates, LoginAttempts, success, Account, Deligates, Login } from '../../models/profile.model';
import { Router } from '@angular/router';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/internal/operators/finalize';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'rds-comp-profile',
  templateUrl: './rds-comp-profile.component.html',
  styleUrls: ['./rds-comp-profile.component.scss'],
  providers: [DatePipe]
})

export class RdsCompProfileComponent extends MfeBaseComponent implements OnInit {
  @Input() userList: any = [{ some: 'Niphy', userId: 1 }, { userId: 2, some: 'Anupriya' }, { some: 'Pratheesh', userId: 3 }, { userId: 4, some: 'shreekanth' }];
  @Input() rdsDeligateTableHeader: TableHeader[] = [
    { displayName: 'User name', dataLength: 30, dataType: 'text', sortable: true, key: 'username', required: false },
    { displayName: 'Start time', dataType: 'date', sortable: false, key: 'starttime' },
    { displayName: 'End time', dataType: 'date', sortable: false, key: 'endtime' }];

  @Input() rdsDeligateTableData: any = [];
  @Input() recordsPerpage: number = 5;
  @Input() pagination: boolean = false;
  @Input() tableWidth: string = '100%';
  @Input() tableStyle: string = 'light';
  @Output() onSaveDelegate = new EventEmitter<any>();
  @Input() languageItems = [];
  @Input() selectedLanguage: any = { language: '', icon: '' };
  @Input() defaultLanguage: string = '';
  selectedData: any;
  deleteConfirmationData: any = {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Are you sure ?",
    messageAlert: "The record will be deleted permanently",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
  showConfirmationPopup: boolean = false;

  delegateTabopened: boolean = false;
  manageLinkedAccountsTabOpened: boolean = false;

  @Output() onLanguageSelection = new EventEmitter<any>();
  @Output() onDeleteDeligate = new EventEmitter<any>();

  activePage: number;
  public rdsAlertMfeConfig: ComponentLoaderOptions;
  alertData: any = {
    iconUrl: "download_data",
    colorVariant: "success",
    alertConfirmation: "Downloading Data",
    messageAlert: "We are preaparing your data For Downloading",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "OK"
  }
  uploadProgress: number;
  uploadSub: any;
  profilePicture: string;
  @Input() Profileurl: string;
  @Input() MenuItems: any[] = [];
  @Input() DownloadTable: DownloadData[] = []
  @Input() linkedAccountHeaders: any = [];
  @Input() linkedAccountData: any = [];
  @Input() LoginAttempts: any = {};
  @Input() backgroundColor: string;
  @Input() id: string = 'ProfileCanvas';
  @Output() onLogout = new EventEmitter<{ islogout: any }>()
  @Output() onImageupload = new EventEmitter<any>();
  @Output() ondeleteLinkaccount = new EventEmitter<any>();
  @Output() onLinkToUser = new EventEmitter<any>();
  @Output() onLoginAttempts = new EventEmitter<any>();
  @Output() onDownloadLink = new EventEmitter<any>();
  @Output() onProfileData = new EventEmitter<any>();
  @Input() showLoadingSpinner: boolean = false;
  @Input() tenancy: string = 'Host Admin';
  public Profileform = new FormGroup({})
  offCanvasWidth = 304;
  profileMenu = 1000 + "px";
  profileMenuContent: any;
  @Input() isAnyProfileMenuSelected?: boolean = false;

  @Input() ProfileData: any = {
    ProfileName: 'Wai Technologies',
    emailAddress: 'contact@waiin.com',
    userName: 'admin',
    CurrentPassword: '',
    NewPassword: '',
    ConFNewPassword: '',
    name: ''
  }
  tabisVisible: boolean = false;

  @Output() onProfileSave = new EventEmitter<any>();
  @Output() onProfilePicUpdate = new EventEmitter<any>();


  @Input() viewCanvas: boolean = false;

  DefaulttabFlag: boolean = false;
  fileArray: any[] = [];
  fileSize?: number;
  maxfilesize: any = 5;
  result: string = '';
  message: success[] = [];
  islogout: boolean = false;
  navtabcontentClass: string = "d-none";
  firstcontent: boolean = false;
  cancelbutton: boolean = true;
  public classlists = [];
  @Input()
  listItemsResult: any[] = []
  @Input()
  Usernamefilter: any[] = []
  DatasetDeligate: any = [];
  @Input() showDelegationButtonSpinner: boolean = true;
  url: any;

  @Input()
  requiredFileType: string;

  fileName = '';
  ngOnInit(): void {
    this.on('tenancyData').subscribe(res => {
      this.emitEvent('tenancyDataAgain', res);
    })
    // this.rdsAlertMfeConfig = {
    //   name: 'RdsCompAlertPopup',
    //   input: {
    //     alertID: 'DownloadDatamodal',
    //     alertData: this.alertData
    //   },
    //   output: {
    //     onDelete: (event) => {
    //       this.downloadText();
    //     },

    //   }
    // }
    this.getProfilePicture();

  }
  constructor(private injector: Injector,
    public translate: TranslateService,
    private router: Router,
    private http: HttpClient) {
    super(injector);
  }
  ngOnChanges(changes: SimpleChanges): void {

  }


public getProfilePicture():void{
  
}

  onclickMenu(item: any) {

    if (this.MenuItems[item]?.showoffcanvas == false) {
      this.onClickCloseTabContent();
      this.onDownloadLink.emit(item)
      $('#DownloadDatamodal').modal('show');
    } else {
      this.offCanvasWidth = 1000;
      this.tabisVisible = true;
      this.firstcontent = true
      this.cancelbutton = false;
      this.isAnyProfileMenuSelected = true;

    }
    if (this.MenuItems[item].translationKey == 'Manage Authority Delegation') {
      this.delegateTabopened = true;
    } else {
      this.delegateTabopened = false;
    }

    if (this.MenuItems[item].translationKey == 'Manage Authority Delegation') {
      this.manageLinkedAccountsTabOpened = true;
    } else {
      this.manageLinkedAccountsTabOpened = false;
    }
  }
  onClickCloseTabContent() {
    this.offCanvasWidth = 304;
    this.isAnyProfileMenuSelected = false;
  }
  onclickCancel() {
    this.cancelbutton = true;
    this.NavtabcontentClass()
  }
  public get NavtabClass(): string {
    var classList = '';
    if (this.offCanvasWidth == 1000) {
      classList = 'w-100';
    } else {
      classList = 'profileMenu';
    }
    return classList;
  }
  public NavtabcancelClass(): string[] {
    this.classlists.push('');
    if (this.cancelbutton === true) {
      this.classlists.push('d-none');
    }
    return this.classlists;

  }
  public NavtabcontentClass() {
    const div = document.getElementById("nav-Attempts");
    div.classList.remove('show');
    div.classList.remove('active');
    // var classList = '';
    // if (this.firstcontent === false) {
    //   classList = 'd-none';
    // }
    // return classList;

  }
  getValue(event: any) {
    this.fileArray.push(event.target.files.name);
  }
  checkFileSize(event: any): void {
    this.message = [];
    var data = event.target.files;
    var sizeInMB = (data.size / (1024 * 1024)).toFixed(2);
    for (let i = 0; i < data.length; i++) {
      this.result += '<br>File Size(byte): ' + data.size;
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
        this.onImageupload.emit(data);
      }
    }
  }
  // checkExtension(event: any): void {
  //   if (event.target.files && event.target.files[0]) {
  //     let file = event.target.files[0];

  //     if (file.type == "application/pdf" || file.type == "image/png" || file.type == "image/jpg" || file.type == "image/jpeg") {

  //     }
  //     else {


  //     }

  //   }
  // }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {

      const file: File = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileType', file.type);
      formData.append('fileName', 'ProfilePicture');
      formData.append('fileToken', this.guid());
  
      const upload$ = this.http.post("https://anzdemoapi.raaghu.io/Profile/UploadProfilePicture", formData);
      this.uploadSub = upload$.subscribe((result: any) => {
        this.updateProfilePicture(result.result.fileToken);
       this.onProfileData.emit(result);
       console.log(result)

      });

    }
  }

  updateProfilePicture(fileToken: string): void {
  
}


  reset(): void {
    throw new Error('Method not implemented.');
  }

  guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  logout() {
    this.showLoadingSpinner = true;
    this.islogout = true;
    this.emitEvent('logout', {
      islogout: true
    });
  }


  onLinkAccountSave(event: any) {
  }
  deleteLinkaccount(event: any) {
    this.ondeleteLinkaccount.emit(event);
  }
  linkToUser(event: any) {
    this.onLinkToUser.emit(event);
  }


  cancelDelegate(event: any): void {
    let myOffCanvas = document.getElementById(this.id);
    let openedCanvas = bootstrap.Offcanvas.getInstance(myOffCanvas);
    // $(".offcanvas-backdrop").remove();
    openedCanvas.hide();
    this.activePage = 8;
  }
  close(): void {
    this.onClickCloseTabContent();
    this.activePage = 8;
    let myOffCanvas = document.getElementById(this.id);
    let openedCanvas = bootstrap.Offcanvas.getInstance(myOffCanvas);
    openedCanvas.hide();
    this.viewCanvas = false;
    this.delegateTabopened = true;
    this.rdsDeligateTableData = [];
  }

  // language ts

  onLanguageSelect(lan: any): void {
    if (lan && lan.item) {
      this.selectedLanguage.language = lan.item.some;
      this.selectedLanguage.icon = lan.item.icon;
      this.onLanguageSelection.emit(lan.item.name)
    }
  }
  redirectToSettings() {
    this.router.navigateByUrl('/pages/settings');
  }


  downloadText() {
    let showUserData = JSON.parse(localStorage.getItem('userNameInfo'));
    console.log("Hello");
    // this.userEmailOrName = this.showUserData.username;
    const data: any = {
      Tenancy_name: JSON.parse(localStorage.getItem('tenantInfo')),
      User_name: showUserData.username,
      Surname: '',
      Email_address: showUserData.username,
      Phone_number: '',
    }
    const element = document.createElement('a');
    const fileType = 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`);
    element.setAttribute('download', 'textdocument');
    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }

  getMenuItems(): any {
    this.MenuItems.forEach((res: any) => {
      res.label = this.translate.instant(res.translationKey);
      res.subText = this.translate.instant(res.subtextTranslationKey)
    });
    return this.MenuItems;
  }

  deleteDelegate(event): void {
    this.selectedData = event;
    this.showConfirmationPopup = true;
    setTimeout(() => {
      var element: any = document.getElementById('deleteDelegationModal');
      var modal = new bootstrap.Modal(element);
      modal.show();
    }, 100);
  }

  delete(): void {
    this.onDeleteDeligate.emit(this.selectedData);

  }
  closeModal(): void {
    var element: any = document.getElementById('deleteDelegationModal');
    if (element) {
      var modal = new bootstrap.Modal(element);
      modal.hide();
    }
    this.selectedData = undefined;
    this.showConfirmationPopup = false;
  }

}
