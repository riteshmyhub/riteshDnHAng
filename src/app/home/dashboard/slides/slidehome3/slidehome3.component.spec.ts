import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidehome3Component } from './slidehome3.component';

describe('Slidehome3Component', () => {
  let component: Slidehome3Component;
  let fixture: ComponentFixture<Slidehome3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slidehome3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slidehome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
