import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces";
import {urls} from "../../constants";
import {CarComponent} from "../car/car.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    NgFor
  ],
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
