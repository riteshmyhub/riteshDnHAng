import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidehome4Component } from './slidehome4.component';

describe('Slidehome4Component', () => {
  let component: Slidehome4Component;
  let fixture: ComponentFixture<Slidehome4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slidehome4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slidehome4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
