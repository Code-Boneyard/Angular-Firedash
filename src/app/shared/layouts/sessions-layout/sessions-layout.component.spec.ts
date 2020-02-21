import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsLayoutComponent } from './sessions-layout.component';

describe('SessionsLayoutComponent', () => {
  let component: SessionsLayoutComponent;
  let fixture: ComponentFixture<SessionsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
