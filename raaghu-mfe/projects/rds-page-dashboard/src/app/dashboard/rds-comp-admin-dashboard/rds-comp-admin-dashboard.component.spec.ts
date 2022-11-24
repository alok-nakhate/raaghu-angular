import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAdminDashboardComponent } from './rds-comp-admin-dashboard.component';

describe('RdsCompAdminDashboardComponent', () => {
  let component: RdsCompAdminDashboardComponent;
  let fixture: ComponentFixture<RdsCompAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
