import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlagebaseComponent } from './knowlagebase.component';

describe('KnowlagebaseComponent', () => {
  let component: KnowlagebaseComponent;
  let fixture: ComponentFixture<KnowlagebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowlagebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowlagebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
