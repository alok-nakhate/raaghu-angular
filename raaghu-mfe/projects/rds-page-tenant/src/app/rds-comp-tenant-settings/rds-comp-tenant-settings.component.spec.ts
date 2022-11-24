import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantSettingsComponent } from './rds-comp-tenant-settings.component';

describe('RdsCompTenantSettingsComponent', () => {
  let component: RdsCompTenantSettingsComponent;
  let fixture: ComponentFixture<RdsCompTenantSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
