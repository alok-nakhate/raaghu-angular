import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information.component';

describe('RdsCompTenantInformationComponent', () => {
  let component: RdsCompTenantInformationComponent;
  let fixture: ComponentFixture<RdsCompTenantInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
