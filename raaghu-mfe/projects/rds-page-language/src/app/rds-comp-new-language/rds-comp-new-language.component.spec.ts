import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewLanguageComponent } from './rds-comp-new-language.component';

describe('RdsCompNewLanguageComponent', () => {
  let component: RdsCompNewLanguageComponent;
  let fixture: ComponentFixture<RdsCompNewLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
