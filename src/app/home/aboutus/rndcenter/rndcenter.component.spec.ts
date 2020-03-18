import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RndcenterComponent } from './rndcenter.component';

describe('RndcenterComponent', () => {
  let component: RndcenterComponent;
  let fixture: ComponentFixture<RndcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RndcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RndcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
