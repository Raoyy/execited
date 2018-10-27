import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightComponent } from './hightlight.component';

describe('HightlightComponent', () => {
  let component: HightlightComponent;
  let fixture: ComponentFixture<HightlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
