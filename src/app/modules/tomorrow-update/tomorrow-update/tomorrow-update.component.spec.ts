import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowUpdateComponent } from './tomorrow-update.component';

describe('TomorrowUpdateComponent', () => {
  let component: TomorrowUpdateComponent;
  let fixture: ComponentFixture<TomorrowUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomorrowUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
