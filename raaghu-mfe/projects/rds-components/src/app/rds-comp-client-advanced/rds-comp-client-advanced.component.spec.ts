import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompClientAdvancedComponent } from './rds-comp-client-advanced.component';

describe('RdsCompClientAdvancedComponent', () => {
  let component: RdsCompClientAdvancedComponent;
  let fixture: ComponentFixture<RdsCompClientAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClientAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClientAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
