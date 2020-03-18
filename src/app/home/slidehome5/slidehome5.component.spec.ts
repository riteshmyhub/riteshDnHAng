import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidehome5Component } from './slidehome5.component';

describe('Slidehome5Component', () => {
  let component: Slidehome5Component;
  let fixture: ComponentFixture<Slidehome5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slidehome5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slidehome5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
