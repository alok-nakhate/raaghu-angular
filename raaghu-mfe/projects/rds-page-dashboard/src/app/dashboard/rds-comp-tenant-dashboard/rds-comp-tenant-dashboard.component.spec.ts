import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard.component';

describe('RdsCompTenantDashboardComponent', () => {
  let component: RdsCompTenantDashboardComponent;
  let fixture: ComponentFixture<RdsCompTenantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
