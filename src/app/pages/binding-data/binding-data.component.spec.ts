import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDataComponent } from './binding-data.component';

describe('BindingDataComponent', () => {
  let component: BindingDataComponent;
  let fixture: ComponentFixture<BindingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
