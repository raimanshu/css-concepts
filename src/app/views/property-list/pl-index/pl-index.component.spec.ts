import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlIndexComponent } from './pl-index.component';

describe('PlIndexComponent', () => {
  let component: PlIndexComponent;
  let fixture: ComponentFixture<PlIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
