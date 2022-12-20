import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompLanguageNewComponent } from './rds-comp-language-new.component';

describe('RdsCompLanguageNewComponent', () => {
  let component: RdsCompLanguageNewComponent;
  let fixture: ComponentFixture<RdsCompLanguageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompLanguageNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompLanguageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
