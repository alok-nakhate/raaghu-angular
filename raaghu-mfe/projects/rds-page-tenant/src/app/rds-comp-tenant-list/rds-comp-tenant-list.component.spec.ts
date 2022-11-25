import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantListComponent } from './rds-comp-tenant-list.component';

describe('RdsCompTenantListComponent', () => {
  let component: RdsCompTenantListComponent;
  let fixture: ComponentFixture<RdsCompTenantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
