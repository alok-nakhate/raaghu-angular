import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contact-us';
  contactUs: any = { phone: '+91 9087654321', location: 'Pune, Maharashtra', mail: 'name@domain.com' };
  // rdsContactMfeConfig: ComponentLoaderOptions;

  ngOnInit(): void {
    // this.rdsContactMfeConfig = {
    //   name: 'RdsCompContactUs'
    // }
  }
}
