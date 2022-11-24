import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewRoleComponent } from './rds-comp-new-role.component';

describe('RdsCompNewRoleComponent', () => {
  let component: RdsCompNewRoleComponent;
  let fixture: ComponentFixture<RdsCompNewRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
