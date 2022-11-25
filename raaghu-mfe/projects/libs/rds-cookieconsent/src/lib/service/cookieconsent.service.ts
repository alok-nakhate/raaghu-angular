import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { RdsCookieConsentStatus } from '../model/common-interfaces';
import { RdsStatusChangeEvent } from '../event/status-change.event';
import { RdsNoCookieLawEvent } from '../event/no-cookie-law.event';
import { RdsInitializingEvent } from '../event/initializing.event';
import { RdsInitializationErrorEvent } from '../event/public-api';
import { RdsCookieConsentConfig } from './cookieconsent-config';
import { WindowService } from './window.service';

/**
 * Basic interface to represent `cookieconsent` object.
 */
export interface RdsCookieConsent {
  hasTransition: boolean;
  status: RdsCookieConsentStatus;
  getStatus(): RdsCookieConsentStatus;
  initialise(
    config: RdsCookieConsentConfig,
    successCallback?: (popup: RdsCookieConsentPopup) => void,
    errorCallback?: (error: Error, popup: RdsCookieConsentPopup) => void
  ): void;
}

/**
 * Basic interface to represent `cookieconsent.Popup` object.
 */
export interface RdsCookieConsentPopup {
  setStatus(status: RdsCookieConsentStatus): void;
  getStatus(): RdsCookieConsentStatus;
  clearStatus(): void;
  open(): RdsCookieConsentPopup;
  close(showRevoke: boolean): RdsCookieConsentPopup;
  destroy(): void;
  fadeIn(): void;
  fadeOut(): void;
  isOpen(): boolean;
  toggleRevokeButton(show: boolean): void;
  hasAnswered(): boolean;
  hasConsented(): boolean;
}

/**
 * Marker interface to indicate that an object (typically `window`) has `cookieconsent` property.
 */
export interface RdsHasCookieConsent {
  cookieconsent: RdsCookieConsent;
}

/**
 * Service to interact with Cookie Consent API.
 */
@Injectable()
export class RdsCookieConsentService {
  // the Magic Maker !
  // this objet is added to window scope when linking the cookieconsent.js library
  private cookieconsent!: RdsCookieConsent;

  // the current instance of the cookie consent popup
  private popupInstance!: RdsCookieConsentPopup;

  // Window Object
  private window: Window & RdsHasCookieConsent;

  private config!: RdsCookieConsentConfig;

  // Observable  sources
  private popupOpenSource: Subject<void>;
  private popupCloseSource: Subject<void>;
  private initializingSource: Subject<RdsInitializingEvent>;
  private initializedSource: Subject<void>;
  private initializationErrorSource: Subject<RdsInitializationErrorEvent>;
  private statusChangeSource: Subject<RdsStatusChangeEvent>;
  private revokeChoiceSource: Subject<void>;
  private noCookieLawSource: Subject<RdsNoCookieLawEvent>;

  /**
   * Observable to subscribe to and get notified when Cookie Consent popup opens.
   */
  popupOpen$: Observable<void>;
  /**
   * Observable to subscribe to and get notified when Cookie Consent popup closes.
   */
  popupClose$: Observable<void>;
  /**
   * Observable to subscribe to and get notified when Cookie Consent is initializing.
   */
  initializing$: Observable<RdsInitializingEvent>;
  /**
   * Observable to subscribe to and get notified when Cookie Consent has been successfully initialized.
   */
  initialized$: Observable<void>;
  /**
   * Observable to subscribe to and get notified when Cookie Consent has failed to initialize.
   */
  initializationError$: Observable<RdsInitializationErrorEvent>;
  /**
   * Observable to subscribe to and get notified when Cookie Consent status changes.
   */
  statusChange$: Observable<RdsStatusChangeEvent>;
  /**
   * Observable to subscribe to and get notified when Cookie is revoked.
   */
  revokeChoice$: Observable<void>;
  /**
   * Observable to subscribe to and get notified when no Cookie Law is applicable.
   */
  noCookieLaw$: Observable<RdsNoCookieLawEvent>;

  constructor(windowService: WindowService, config: RdsCookieConsentConfig) {
    // Observable  sources
    this.popupOpenSource = new Subject<void>();
    this.popupCloseSource = new Subject<void>();
    this.initializingSource = new Subject<RdsInitializingEvent>();
    this.initializedSource = new Subject<void>();
    this.initializationErrorSource = new Subject<RdsInitializationErrorEvent>();
    this.statusChangeSource = new Subject<RdsStatusChangeEvent>();
    this.revokeChoiceSource = new Subject<void>();
    this.noCookieLawSource = new Subject<RdsNoCookieLawEvent>();

    // Observable  streams
    this.popupOpen$ = this.popupOpenSource.asObservable();
    this.popupClose$ = this.popupCloseSource.asObservable();
    this.initializing$ = this.initializingSource.asObservable();
    this.initialized$ = this.initializedSource.asObservable();
    this.initializationError$ = this.initializationErrorSource.asObservable();
    this.statusChange$ = this.statusChangeSource.asObservable();
    this.revokeChoice$ = this.revokeChoiceSource.asObservable();
    this.noCookieLaw$ = this.noCookieLawSource.asObservable();

    this.window = windowService.nativeWindow;
    this.init(config);
  }

  private checkPopupInstantiated(method: string) {
    if (this.popupInstance == null) {
      throw new Error(
        `Cookie popup has not yet been instantiated. Cannot invoke ${method}()`
      );
    }
  }

  /**
   * Initializes Cookie Consent with the provided configuration.
   * @param config the configuration object
   */
  init(config: RdsCookieConsentConfig): void {
    if (this.window && this.window.cookieconsent) {
      // For Angular Universal suport
      this.cookieconsent = this.window.cookieconsent;

      this.config = config;
      // Set callbacks hooks:
      this.config.onPopupOpen = () => this.popupOpenSource.next();

      this.config.onPopupClose = () => this.popupCloseSource.next();

      this.config.onInitialise = (status: 'allow' | 'deny' | 'dismiss') => {
        this.initializingSource.next({ status: status });
      };

      this.config.onStatusChange =
       (status: 'allow' | 'deny' | 'dismiss',chosenBefore: boolean) => {
        this.statusChangeSource.next({status: status,chosenBefore: chosenBefore });
      };

      this.config.onRevokeChoice = () => this.revokeChoiceSource.next();

      this.config.onNoCookieLaw = (countryCode: string, country: string) => {
        this.noCookieLawSource.next({
          countryCode: countryCode,
          country: country,
        });
      };

      // Init the cookieconsent library with injected config
      this.cookieconsent.initialise(
        this.config,
        (popup: RdsCookieConsentPopup) => {
          this.popupInstance = popup;
          this.initializedSource.next(); //notify of successful initialization
        
        
        },
        
        (error: Error, popup: RdsCookieConsentPopup) => {
          this.initializationErrorSource.next({ error: error }); //notify of failed initialization
        }
        
      );
    }
    // else if (){
    //   this.destroy(); 
    // }
  }

  /**
   * Gets the current configuration  used by the Cookie Consent.
   */
  getConfig(): RdsCookieConsentConfig {
    return this.config;
  }

  /**
   * Gets the current cookie status.
   */
  getStatus(): RdsCookieConsentStatus {
    return this.cookieconsent.status;
  }

  /**
   * Gets the current browser support for translations
   */
  getTransition(): boolean {
    return this.cookieconsent.hasTransition;
  }

  /**
   * Clears the current cookie status.
   */
  clearStatus(): void {
    this.checkPopupInstantiated('clearStatus');
    return this.popupInstance.clearStatus();
  }

  open(): RdsCookieConsentPopup {
    this.checkPopupInstantiated('open');
    return this.popupInstance.open();
  }

  close(showRevoke: boolean): RdsCookieConsentPopup {
    this.checkPopupInstantiated('close');
    return this.popupInstance.close(showRevoke);
  }

  destroy(): void {
    this.checkPopupInstantiated('destroy');
    this.popupInstance.destroy();
  }

  fadeIn(): void {
    this.checkPopupInstantiated('fadeIn');
    this.popupInstance.fadeIn();
  }

  fadeOut(): void {
    this.checkPopupInstantiated('fadeOut');
    this.popupInstance.fadeOut();
  }

  isOpen(): boolean {
    this.checkPopupInstantiated('isOpen');
    return this.popupInstance.isOpen();
  }

  toggleRevokeButton(show: boolean): void {
    this.checkPopupInstantiated('toggleRevokeButton');
    this.popupInstance.toggleRevokeButton(show);
  }

  hasAnswered(): boolean {
    this.checkPopupInstantiated('hasAnswered');
    return this.popupInstance.hasAnswered();
  }

  hasConsented(): boolean {
    this.checkPopupInstantiated('hasConsented');
    return this.popupInstance.hasConsented();
  }
}
