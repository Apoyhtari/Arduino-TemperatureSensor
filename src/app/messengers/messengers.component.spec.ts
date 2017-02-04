/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessengersComponent } from './messengers.component';

describe('MessengersComponent', () => {
  let component: MessengersComponent;
  let fixture: ComponentFixture<MessengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
