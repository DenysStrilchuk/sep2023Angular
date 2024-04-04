import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../../services/car.service";
import {ICar} from "../../../../interfaces/car.interface";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: ICar[]

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }
}
