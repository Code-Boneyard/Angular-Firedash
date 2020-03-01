/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndustryNewsComponent } from './industry-news.component';

describe('IndustryNewsComponent', () => {
  let component: IndustryNewsComponent;
  let fixture: ComponentFixture<IndustryNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
