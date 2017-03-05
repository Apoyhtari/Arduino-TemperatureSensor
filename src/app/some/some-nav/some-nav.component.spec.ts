/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SomeNavComponent } from './some-nav.component';

describe('SomeNavComponent', () => {
  let component: SomeNavComponent;
  let fixture: ComponentFixture<SomeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
