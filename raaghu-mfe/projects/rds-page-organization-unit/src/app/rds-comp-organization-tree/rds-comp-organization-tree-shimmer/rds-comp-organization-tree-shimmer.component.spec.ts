import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOrganizationTreeShimmerComponent } from './rds-comp-organization-tree-shimmer.component';

describe('RdsCompOrganizationTreeShimmerComponent', () => {
  let component: RdsCompOrganizationTreeShimmerComponent;
  let fixture: ComponentFixture<RdsCompOrganizationTreeShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOrganizationTreeShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOrganizationTreeShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
