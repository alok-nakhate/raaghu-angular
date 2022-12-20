import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Modal } from 'bootstrap'
export interface notificationData {
  status: any;
  title: any;
  url?: any;
  urlTitle?: any;
  time: any;
  state: number;
  creationTime: any;
  userNotificationId: any;
  selected: boolean;

}


@Component({
  selector: 'rds-notification',
  templateUrl: './rds-comp-notification.component.html',
  styleUrls: ['./rds-comp-notification.component.scss'],
})
export class RdsNotificationComponent implements OnInit {
  @Input() unreadCount: any = 0;
  @Input() notifications: notificationData[] = [];
  @Input() backgroundColor?: string;
  @Input() borderRadious?: number;
  @Input() Paddig?: number;
  @Input() width?: number;
  
  @Output() setAllReadOutput = new EventEmitter<boolean>();
  @Output() setAsReadOutput = new EventEmitter<any>();
  constructor(public translate: TranslateService) { }


  ngOnInit(): void {
   }

  getColor(notification: notificationData, isIcon: boolean = false): any {
    if (isIcon) {
      if (notification.status == 'info') {
        return 'notification-sub-text';
      }
      if (notification.status == 'error') {
        return 'danger';
      }
      return notification.status;
    } else {
      if (notification.selected) {
        if (notification.status == 'info') {
          return 'text-primary';
        }
        if (notification.status == 'error') {
          return 'text-danger';
        }
        return 'text-' + notification.status;
      }

    }

  }




  getIcon(notification: notificationData): string {
    if (notification.status == 'success') {
      return 'tick_circle';
    }
    if (notification.status == 'warn') {
      return 'exclamation_circle';
    }
    if (notification.status == 'error') {
      return 'close_circle';
    }
    if (notification.status == 'info') {
      return 'information';
    }
    return '';
  }



  setAsRead(notification: notificationData): void {
    this.setAsReadOutput.emit(notification);
  }


  onNotificationSelect(notification: notificationData, event: any): void {
    this.notifications.forEach((_notification: notificationData) => {
      _notification.selected = false;
    })
    notification.selected = true;
    event.stopPropagation();
  }

  checkUnreadMessage(): boolean {
    if (this.notifications && this.notifications.length > 0) {
      if (this.notifications.find((x: any) => x.state == 0)) {
        return true;
      }
      return false;
    }
    return false;
  }

  showNotificationSettingsModal(){

    var myModalEl = document.getElementById('notification-settings');

      var modal = new Modal(myModalEl)

      modal.show();

  }
  
}
