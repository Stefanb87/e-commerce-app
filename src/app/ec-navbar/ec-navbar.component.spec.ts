import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcNavbarComponent } from './ec-navbar.component';

describe('EcNavbarComponent', () => {
  let component: EcNavbarComponent;
  let fixture: ComponentFixture<EcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
