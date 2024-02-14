import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TemperatureControllerComponent } from './temperature-controller.component';

describe('TemperatureControllerComponent', () => {
  let component: TemperatureControllerComponent;
  let fixture: ComponentFixture<TemperatureControllerComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureControllerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TemperatureControllerComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show current temperature', () => {
    component.currentValue = 52
    component.maxValue = 103
    component.minValue = 3
    fixture.detectChanges();

    expect(element.query(By.css('.min-temp')).nativeElement.textContent).toBe('3')
    expect(element.query(By.css('.max-temp')).nativeElement.textContent).toBe('103')
    expect(element.query(By.css('.roll')).nativeElement.textContent).toBe('52')

    expect(element.query(By.css('li:nth-child(1)')).nativeElement.textContent).toBe('79.5')
    expect(element.query(By.css('li:nth-child(2)')).nativeElement.textContent).toBe('53')
    expect(element.query(By.css('li:nth-child(3)')).nativeElement.textContent).toBe('26.5')
  });
});
