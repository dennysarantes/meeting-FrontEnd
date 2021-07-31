/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidermenuOldComponent } from './sidermenu-old.component';

describe('SidermenuOldComponent', () => {
  let component: SidermenuOldComponent;
  let fixture: ComponentFixture<SidermenuOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidermenuOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidermenuOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
