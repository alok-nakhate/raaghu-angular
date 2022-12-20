import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-avatar',
  templateUrl: './rds-avatar.component.html',
  styleUrls: ['./rds-avatar.component.scss']
})
export class RdsAvatarComponent implements OnInit, OnChanges {
  @Input() colorVariant: 'light' | 'warning' | 'danger' | 'secondary' | 'primary' | 'success' | 'dark' | 'info' = 'light';
  @Input() withProfilePic: boolean = false;
  @Input() profilePic: string = "https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1";
  @Input() firstName: string = '';
  @Input() lastName: string = '';
 @Input() size: 'small' | 'large' | 'medium'|undefined = undefined;
  @Input() verticallyAlligned: boolean = false;
  @Input() roundedAvatar: boolean = true;
  @Input() roundedPills: boolean = false;
  @Input() height? : string ;
  @Input() width? : string;
  @Input() subTitle:string = ''
  @Input() profileContentAlign:boolean=false
  constructor() { }
  ngOnInit(): void {

  }

  ngOnChanges(changes: any): void {

  }

  public get classes(): string[] {
    let classes: string[] = [];
    const bgColor = 'bg-' + `${this.colorVariant}`;
    classes.push(bgColor);
    if (this.roundedAvatar) {
      if(this.size){
        const size = 'avatar-' + `${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`;
        classes.push(size);
      }
    }
    if (this.roundedPills) {
      classes.push('rounded');
    }
    if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'white') {
      classes.push('text-white');
    }
    if (this.roundedAvatar && this.withProfilePic) {
      classes.push('rounded-circle');
    }
    if(!this.profileContentAlign){
      classes.push('mb-2')
    }
    return classes;
    
  }
  public get profileClass(): string[]{
    let profileClass:string[]= ['flex-grow-0 align-items-center gap-2'];
    if(this.withProfilePic && this.profileContentAlign){
      profileClass.push('d-flex');
    }
    return profileClass;
  }
}
