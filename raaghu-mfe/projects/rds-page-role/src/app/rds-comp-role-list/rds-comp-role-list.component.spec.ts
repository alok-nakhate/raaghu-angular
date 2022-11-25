import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompRoleListComponent } from './rds-comp-role-list.component';

describe('RdsCompRoleListComponent', () => {
  let component: RdsCompRoleListComponent;
  let fixture: ComponentFixture<RdsCompRoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompRoleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
