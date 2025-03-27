import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com3Component } from './com-3.component';

describe('Com3Component', () => {
  let component: Com3Component;
  let fixture: ComponentFixture<Com3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Com3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Com3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
