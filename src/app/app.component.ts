import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CarFormComponent} from "./components/car-form/car-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent, CarFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sep2023Angular';
}
