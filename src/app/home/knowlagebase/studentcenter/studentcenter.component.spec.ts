import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcenterComponent } from './studentcenter.component';

describe('StudentcenterComponent', () => {
  let component: StudentcenterComponent;
  let fixture: ComponentFixture<StudentcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
