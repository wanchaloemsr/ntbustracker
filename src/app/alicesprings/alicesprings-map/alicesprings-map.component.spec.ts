import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlicespringsMapComponent } from './alicesprings-map.component';

describe('AlicespringsMapComponent', () => {
  let component: AlicespringsMapComponent;
  let fixture: ComponentFixture<AlicespringsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlicespringsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlicespringsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
