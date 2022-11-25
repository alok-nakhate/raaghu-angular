import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompUserBasicsShimmerComponent } from './rds-comp-user-basics-shimmer.component';

describe('RdsCompUserBasicsShimmerComponent', () => {
  let component: RdsCompUserBasicsShimmerComponent;
  let fixture: ComponentFixture<RdsCompUserBasicsShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompUserBasicsShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompUserBasicsShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
