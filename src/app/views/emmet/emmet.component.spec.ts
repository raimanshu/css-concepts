import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmetComponent } from './emmet.component';

describe('EmmetComponent', () => {
  let component: EmmetComponent;
  let fixture: ComponentFixture<EmmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
