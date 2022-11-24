import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompFeaturesComponent } from './rds-comp-features.component';

describe('RdsCompFeaturesComponent', () => {
  let component: RdsCompFeaturesComponent;
  let fixture: ComponentFixture<RdsCompFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
