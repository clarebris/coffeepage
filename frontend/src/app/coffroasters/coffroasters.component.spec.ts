import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffroastersComponent } from './coffroasters.component';

describe('CoffroastersComponent', () => {
  let component: CoffroastersComponent;
  let fixture: ComponentFixture<CoffroastersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffroastersComponent]
    });
    fixture = TestBed.createComponent(CoffroastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
