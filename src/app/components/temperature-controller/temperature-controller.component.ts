import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-temperature-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temperature-controller.component.html',
  styleUrl: './temperature-controller.component.scss'
})
export class TemperatureControllerComponent implements OnInit, OnChanges {


  @Input() maxValue: number = 100
  @Input() minValue: number = 0
  @Input() currentValue: number = 50

  rotationValue = '';


  ngOnInit(): void {
    this.setRotationValue();
  }

  ngOnChanges(): void {
    this.setRotationValue();
  }

  private setRotationValue() {
    const middle = (this.maxValue + this.minValue) / 2
    const percentage = this.currentValue / ((this.maxValue + this.minValue))
    if (this.currentValue < middle) {
      const rotation = 90 - (90 * percentage)
      console.log(rotation);
      this.rotationValue = `transform: rotate(${rotation}deg);`
    } else if (this.currentValue > middle) {
      const rotation = 0 - (90 * percentage)
      this.rotationValue = `transform: rotate(${rotation}deg);`
    } else {
      this.rotationValue = `transform: rotate(0deg);`
    }
  }
}



