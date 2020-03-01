/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecentModulesComponent } from './recent-modules.component';

describe('RecentModulesComponent', () => {
  let component: RecentModulesComponent;
  let fixture: ComponentFixture<RecentModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
