import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooDetailComponent } from './tattoo-detail.component';

describe('TattooDetailComponent', () => {
  let component: TattooDetailComponent;
  let fixture: ComponentFixture<TattooDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattooDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
