import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDemoStarterComponent } from './auth-demo-starter.component';

describe('AuthDemoStarterComponent', () => {
  let component: AuthDemoStarterComponent;
  let fixture: ComponentFixture<AuthDemoStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDemoStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDemoStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
