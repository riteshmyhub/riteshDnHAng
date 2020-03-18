import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidehome1Component } from './slidehome1.component';

describe('Slidehome1Component', () => {
  let component: Slidehome1Component;
  let fixture: ComponentFixture<Slidehome1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slidehome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slidehome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
