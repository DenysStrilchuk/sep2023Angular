import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import {CarComponent} from "./components/car/car.component";


@NgModule({
  declarations: [
    CarsPageComponent,
    CarsComponent,
    CarFormComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
