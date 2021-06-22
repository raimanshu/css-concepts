import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtrComponent } from './ptr.component';

describe('PtrComponent', () => {
  let component: PtrComponent;
  let fixture: ComponentFixture<PtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
