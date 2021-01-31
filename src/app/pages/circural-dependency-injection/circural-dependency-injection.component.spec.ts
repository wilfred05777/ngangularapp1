import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuralDependencyInjectionComponent } from './circural-dependency-injection.component';

describe('CircuralDependencyInjectionComponent', () => {
  let component: CircuralDependencyInjectionComponent;
  let fixture: ComponentFixture<CircuralDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuralDependencyInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuralDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
