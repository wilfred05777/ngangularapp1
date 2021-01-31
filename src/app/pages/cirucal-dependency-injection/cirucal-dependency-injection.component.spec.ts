import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirucalDependencyInjectionComponent } from './cirucal-dependency-injection.component';

describe('CirucalDependencyInjectionComponent', () => {
  let component: CirucalDependencyInjectionComponent;
  let fixture: ComponentFixture<CirucalDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirucalDependencyInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirucalDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
