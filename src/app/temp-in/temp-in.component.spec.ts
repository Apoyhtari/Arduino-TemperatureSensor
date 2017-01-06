/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempInComponent } from './temp-in.component';

describe('TempInComponent', () => {
  let component: TempInComponent;
  let fixture: ComponentFixture<TempInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
