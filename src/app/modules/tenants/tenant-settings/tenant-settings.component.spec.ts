import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantSettingsComponent } from './tenant-settings.component';

describe('TenantSettingsComponent', () => {
  let component: TenantSettingsComponent;
  let fixture: ComponentFixture<TenantSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
