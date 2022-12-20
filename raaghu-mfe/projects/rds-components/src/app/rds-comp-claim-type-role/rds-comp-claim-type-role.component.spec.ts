import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompClaimTypeRoleComponent } from './rds-comp-claim-type-role.component';

describe('RdsCompClaimTypeRoleComponent', () => {
  let component: RdsCompClaimTypeRoleComponent;
  let fixture: ComponentFixture<RdsCompClaimTypeRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClaimTypeRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClaimTypeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
