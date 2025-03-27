import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com1Component } from './com-1.component';

describe('Com1Component', () => {
  let component: Com1Component;
  let fixture: ComponentFixture<Com1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Com1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
