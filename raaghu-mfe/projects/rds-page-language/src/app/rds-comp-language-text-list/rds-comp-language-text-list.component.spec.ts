import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompLanguageTextListComponent } from './rds-comp-language-text-list.component';

describe('RdsCompLanguageTextListComponent', () => {
  let component: RdsCompLanguageTextListComponent;
  let fixture: ComponentFixture<RdsCompLanguageTextListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompLanguageTextListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompLanguageTextListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
