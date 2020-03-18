import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudetestComponent } from './aptitudetest.component';

describe('AptitudetestComponent', () => {
  let component: AptitudetestComponent;
  let fixture: ComponentFixture<AptitudetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptitudetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
