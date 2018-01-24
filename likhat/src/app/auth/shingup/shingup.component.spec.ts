import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShingupComponent } from './shingup.component';

describe('ShingupComponent', () => {
  let component: ShingupComponent;
  let fixture: ComponentFixture<ShingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
