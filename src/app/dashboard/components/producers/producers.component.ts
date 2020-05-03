import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { Producer } from '../../models';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {
  min: Producer;
  max: Producer;

  constructor(
    private service: DashboardService
  ) { }

  ngOnInit(): void {
    this.getMaxMinWinIntervalForProducers();
  }

  getMaxMinWinIntervalForProducers() {
    this.service.getMaxMinWinIntervalForProducers()
      .subscribe(
        data => {
          this.min = data.min[0];
          this.max = data.max[0];
        },
        err => {
          console.error("Erro load producers.");
        }
      );
  }

}
