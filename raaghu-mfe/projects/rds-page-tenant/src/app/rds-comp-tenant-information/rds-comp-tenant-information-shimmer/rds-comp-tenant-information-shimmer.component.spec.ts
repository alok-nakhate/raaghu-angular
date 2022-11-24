import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantInformationShimmerComponent } from './rds-comp-tenant-information-shimmer.component';

describe('RdsCompTenantInformationShimmerComponent', () => {
  let component: RdsCompTenantInformationShimmerComponent;
  let fixture: ComponentFixture<RdsCompTenantInformationShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantInformationShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantInformationShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
