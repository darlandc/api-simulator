import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSimulatorComponent } from './api-simulator.component';

describe('ApiSimulatorComponent', () => {
  let component: ApiSimulatorComponent;
  let fixture: ComponentFixture<ApiSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
