import { Component, OnInit } from '@angular/core';
import { PressureMeasurementsService } from '../../services/pressure-measurements.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  measurements: any;

  constructor(private measurementsService: PressureMeasurementsService) { }

  ngOnInit(): void {
    this.retrieveMeasurements();
  }

  retrieveMeasurements(): void {
    this.measurementsService.getAll()
      .subscribe(
        data => {
          this.measurements = data;
          console.log(data);          
        }
      )
  }

}
