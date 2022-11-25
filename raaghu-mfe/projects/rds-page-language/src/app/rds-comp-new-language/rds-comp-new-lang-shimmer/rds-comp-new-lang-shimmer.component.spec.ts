import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewLangShimmerComponent } from './rds-comp-new-lang-shimmer.component';

describe('RdsCompNewLangShimmerComponent', () => {
  let component: RdsCompNewLangShimmerComponent;
  let fixture: ComponentFixture<RdsCompNewLangShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewLangShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewLangShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
