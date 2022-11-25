import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree.component';

describe('RdsOrganizationTreeComponent', () => {
  let component: RdsOrganizationTreeComponent;
  let fixture: ComponentFixture<RdsOrganizationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsOrganizationTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsOrganizationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
