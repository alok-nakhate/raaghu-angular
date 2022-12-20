import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AlertService, SharedService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'rds-comp-visual-settings',
  templateUrl: './rds-comp-visual-settings.component.html',
  styleUrls: ['./rds-comp-visual-settings.component.scss'],
})
export class RdsCompVisualSettingsComponent implements OnInit, AfterViewInit {
  constructor(
    public translate: TranslateService,
    private sharedService: SharedService,
    public alertService: AlertService,
    @Inject(DOCUMENT) private document: Document,

  ) {
    this.selectedThemeIndex = localStorage.getItem('themeIndex');
    if (this.selectedThemeIndex == null) {
      this.selectedThemeIndex = '12';
    }
    else {
      if (this.selectedThemeIndex == '12') {
        this.getThemeSettings(this.selectedThemeIndex, 'default', false)
      }
      if (this.selectedThemeIndex == '7') {
        this.getThemeSettings(this.selectedThemeIndex, 'dark', false)
      }
      if (this.selectedThemeIndex == '4') {
        this.getThemeSettings(this.selectedThemeIndex, 'accessible', false)
      }

    }
  }
  ngOnInit(): void {

    if (this.visualsettingsItem && this.visualsettingsItem.length > 0) {
      this.theme = this.visualsettingsItem[this.selectedThemeIndex].theme;
      this.fixedFooter = this.visualsettingsItem[this.selectedThemeIndex].footer.fixedFooter;
      this.desktopFixedHeader =
        this.visualsettingsItem[this.selectedThemeIndex].header.desktopFixedHeader;
      this.mobileFixedHeader =
        this.visualsettingsItem[this.selectedThemeIndex].header.mobileFixedHeader;
      this.darkMode = this.visualsettingsItem[this.selectedThemeIndex].layout.darkMode;
      this.asideSkin = this.visualsettingsItem[this.selectedThemeIndex].menu.asideSkin;
      this.fixedAside = this.visualsettingsItem[this.selectedThemeIndex].menu.fixedAside;
      this.allowAsideMinimizing =
        this.visualsettingsItem[this.selectedThemeIndex].menu.allowAsideMinimizing;
      this.defaultMinimizedAside =
        this.visualsettingsItem[this.selectedThemeIndex].menu.defaultMinimizedAside;
      this.hoverableAside = this.visualsettingsItem[this.selectedThemeIndex].menu.hoverableAside;
      this.submenuToggle = this.visualsettingsItem[this.selectedThemeIndex].menu.submenuToggle;
      this.fixedSubHeader =
        this.visualsettingsItem[this.selectedThemeIndex].subHeader.fixedSubHeader;
    }
    this.alertService.themes.subscribe((theme) => {
      if (theme) {
        if (theme === 'dark') {
          this.selectedThemeIndex = '7';
          this.getThemeSettings(this.selectedThemeIndex, 'dark', false)


        } else if (theme === 'accessible') {
          this.selectedThemeIndex = '4';
          this.getThemeSettings(this.selectedThemeIndex, 'accessible', false)


        } else {
          this.selectedThemeIndex = '12';
          this.getThemeSettings(this.selectedThemeIndex, 'default', false)

        }
        localStorage.setItem('themeIndex', this.selectedThemeIndex);

      }

    })
  }

  ngAfterViewInit(): void {

    if (this.visualsettingsItem && this.visualsettingsItem.length > 0) {
      this.theme = this.visualsettingsItem[this.selectedThemeIndex].theme;
      this.fixedFooter = this.visualsettingsItem[this.selectedThemeIndex].footer.fixedFooter;
      this.desktopFixedHeader =
        this.visualsettingsItem[this.selectedThemeIndex].header.desktopFixedHeader;
      this.mobileFixedHeader =
        this.visualsettingsItem[this.selectedThemeIndex].header.mobileFixedHeader;
      this.darkMode = this.visualsettingsItem[this.selectedThemeIndex].layout.darkMode;
      this.asideSkin = this.visualsettingsItem[this.selectedThemeIndex].menu.asideSkin;
      this.fixedAside = this.visualsettingsItem[this.selectedThemeIndex].menu.fixedAside;
      this.allowAsideMinimizing =
        this.visualsettingsItem[this.selectedThemeIndex].menu.allowAsideMinimizing;
      this.defaultMinimizedAside =
        this.visualsettingsItem[this.selectedThemeIndex].menu.defaultMinimizedAside;
      this.hoverableAside = this.visualsettingsItem[this.selectedThemeIndex].menu.hoverableAside;
      this.submenuToggle = this.visualsettingsItem[this.selectedThemeIndex].menu.submenuToggle;
      this.fixedSubHeader =
        this.visualsettingsItem[this.selectedThemeIndex].subHeader.fixedSubHeader;
    }
  }
  selectedTheme: string = 'default';
  selectedThemeIndex: any = '12';
  dataLoaded = false;
  // @Input() navtabItems: any;
  navtabItems: any = [

    { label: 'Subheader', tablink: '#nav-subheader', ariacontrols: 'nav-subheader', translateKey: 'Subheader' },

    { label: 'Menu', tablink: '#nav-Menu', ariacontrols: 'nav-Menu', translateKey: 'Menu' },

    { label: 'Footer', tablink: '#nav-footer', ariacontrols: 'nav-footer', translateKey: 'Footer' }

  ];
  @Input() listskin: any;
  @Input() listSubmenu: any;
  private theme: string = 'default';
  @Input() visualSettingsHeader: any = {};
  @Input() visualSettingsSubHeader: any = {};
  public darkMode: boolean = false;
  public fixedFooter: boolean = false;
  public fixedSubHeader: boolean = false;
  public desktopFixedHeader: boolean = false;
  public mobileFixedHeader: boolean = false;
  public asideSkin: any = 'light';
  public fixedAside: boolean = true;
  public allowAsideMinimizing: boolean = true;
  public defaultMinimizedAside: boolean = false;
  public hoverableAside: boolean = false;
  public submenuToggle = '';
  selectedTabIndex: number = 0;
  @Input() isShimmer: boolean = false;
  @Input() public visualsettingsItem: any[] = [];
  @Input() visualsetting: any;

  @Output() onSaveVisualsettingsData = new EventEmitter<any>();

  @Output() indexEmitter = new EventEmitter<any>();

  saveVisualSettings() {
    const header: any = {
      mobile: this.mobileFixedHeader,
      desktop: this.desktopFixedHeader,
    };
    localStorage.setItem('themeIndex', this.selectedThemeIndex);
    this.onSaveVisualsettingsData.emit({
      theme: this.theme,
      footer: { fixedFooter: this.fixedFooter },
      header: { minimizeDesktopHeaderType: JSON.stringify(header) },
      layout: { darkMode: this.darkMode },
      menu: {
        asideSkin: this.asideSkin,
        fixedAside: this.fixedAside,
        allowAsideMinimizing: this.allowAsideMinimizing,
        defaultMinimizedAside: this.defaultMinimizedAside,
        hoverableAside: this.hoverableAside,
        submenuToggle: this.submenuToggle,
      },
      subHeader: { fixedSubHeader: this.fixedSubHeader },
    });
  }
  getThemeSettings(index: any, theme: string | undefined, isSet: boolean = true) {

    if (theme) {
      this.selectedTheme = theme;
      if (theme === 'default') {
        localStorage.setItem('THEME', 'light');
      } else {
        localStorage.setItem('THEME', theme);
      }

      this.selectedThemeIndex = index;
      localStorage.setItem('themeIndex', this.selectedThemeIndex);

      // const headEl = this.document.getElementsByTagName('head')[0];
      // const existingLinkEl = this.document.getElementById(
      //   'client-theme'
      // ) as HTMLLinkElement;
      // const newLinkEl = this.document.createElement('link');

      // if (existingLinkEl) {
      //   existingLinkEl.href = theme + '.css';
      // } else {
      //   newLinkEl.id = 'client-theme';
      //   newLinkEl.rel = 'stylesheet';
      //   newLinkEl.href = theme + '.css';
      //   headEl.appendChild(newLinkEl);
      // }
      if (isSet) {
      this.alertService.setTheme(this.selectedTheme);
      }
      if (this.selectedTheme === 'default') {

        this.navtabItems = [

          {
            label: this.translate.instant('Subheader'),
            tablink: '#nav-subheader',
            ariacontrols: 'nav-subheader',
            translateKey: 'Subheader',
          },
          {
            label: this.translate.instant('Menu'),
            tablink: '#nav-Menu',
            ariacontrols: 'nav-Menu',
            translateKey: 'Menu',
          },

          {
            label: this.translate.instant('Footer'),
            tablink: '#nav-footer',
            ariacontrols: 'nav-footer',
            translateKey: 'Footer',
          },
        ];
      } else {
        this.navtabItems = [
          {
            label: 'Header Bar',
            tablink: '#nav-headerbar',
            ariacontrols: 'nav-headerbar',
            translateKey: 'Header Bar',
          },
        ];
      }

      this.selectedTabIndex = 0;
    }

    this.dataLoaded = true;
    this.selectedThemeIndex = index;
    this.indexEmitter.emit(this.selectedThemeIndex);
    if (this.visualsettingsItem.length) {
      this.theme = this.visualsettingsItem[index].theme;
      this.fixedFooter = this.visualsettingsItem[index].footer.fixedFooter;
      this.desktopFixedHeader =
        this.visualsettingsItem[index].header.desktopFixedHeader;
      this.mobileFixedHeader =
        this.visualsettingsItem[index].header.mobileFixedHeader;
      this.darkMode = this.visualsettingsItem[index].layout.darkMode;

      this.asideSkin = this.visualsettingsItem[index].menu.asideSkin;
      this.fixedAside = this.visualsettingsItem[index].menu.fixedAside;
      this.allowAsideMinimizing =
        this.visualsettingsItem[index].menu.allowAsideMinimizing;
      this.defaultMinimizedAside =
        this.visualsettingsItem[index].menu.defaultMinimizedAside;
      this.hoverableAside = this.visualsettingsItem[index].menu.hoverableAside;
      this.submenuToggle = this.visualsettingsItem[index].menu.submenuToggle;
      this.fixedSubHeader =
        this.visualsettingsItem[index].subHeader.fixedSubHeader;
    }

  }
  getNavTabItems(): any {
    this.navtabItems.forEach((ele: any) => {
      ele.label = this.translate.instant(ele.translateKey);
    });

    return this.navtabItems;
  }

  onTabSelect(event: any) {
    this.selectedTabIndex = event;
    if (event > 0) {
      this.sharedService.setTopNavTitle(this.navtabItems[event].label);
    } else {
      this.sharedService.setTopNavTitle('');
    }
  }
  getCheckboxValue(event: boolean, type: string): void {
    switch (type) {
      case 'darkMode':
        this.darkMode = event;
        break;
      case 'fixedFooter':
        this.fixedFooter = event;
        break;
      case 'fixedSubHeader':
        this.fixedSubHeader = event;
        break;
      case 'desktopFixedHeader':
        this.desktopFixedHeader = event;
        break;
      case 'mobileFixedHeader':
        this.mobileFixedHeader = event;
        break;
      case 'fixedAside':
        this.fixedAside = event;
        break;
      case 'allowAsideMinimizing':
        this.allowAsideMinimizing = event;
        break;
      case 'defaultMinimizedAside':
        this.defaultMinimizedAside = event;
        break;
      case 'hoverableAside':
        this.hoverableAside = event;
        break;
    }
  }
}
