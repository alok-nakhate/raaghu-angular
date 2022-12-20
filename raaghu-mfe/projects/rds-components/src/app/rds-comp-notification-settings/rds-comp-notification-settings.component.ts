import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Modal } from 'bootstrap'
declare var bootstrap: any;
@Component({
  selector: 'rds-comp-notification-settings',
  templateUrl: './rds-comp-notification-settings.component.html',
  styleUrls: ['./rds-comp-notification-settings.component.scss']
})
export class RdsCompNotificationSettingsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() receiveNotifications: any = false;
  @Input() notificationTypes: any = [];
  @Input() show: boolean = false;
  @Input() backdrop:any='static'
  @Output() onUpdateNotificationSettings = new EventEmitter<any>();
  constructor(public translate: TranslateService) { }

  ngAfterViewInit(): void {
    if (this.show) {
      var myModalEl = document.getElementById('notification-settings');
      var modal = new Modal(myModalEl)
      modal.show();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }

  updateSettings(): void {

    const data: any = {
      receiveNotifications: this.receiveNotifications,
      notifications: []
    };
    this.notificationTypes.forEach((notification: any) => {
      const _notification: any = {
        name: notification.name,
        isSubscribed: notification.isSubscribed
      };
      data.notifications.push(_notification);
    });
    this.onUpdateNotificationSettings.emit(data);
  };

  onNotificationTypeChange(value: any, notification: any): void {
    notification.isSubscribed = value;
  };

  onReceiveNotificationsChange(value: any): void {
    this.receiveNotifications = value;
  }
  cancel(): void {
    var myModalEl = document.getElementById('notification-settings');
    if (myModalEl) {
      var modal = Modal.getInstance(myModalEl)
      modal.hide();
    }
  }
  ngOnDestroy(): void {
    this.cancel();
    this.show = false;
  }

}
