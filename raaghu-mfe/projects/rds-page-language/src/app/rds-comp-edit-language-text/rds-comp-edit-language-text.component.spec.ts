import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text.component';

describe('RdsCompEditLanguageTextComponent', () => {
  let component: RdsCompEditLanguageTextComponent;
  let fixture: ComponentFixture<RdsCompEditLanguageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEditLanguageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEditLanguageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
