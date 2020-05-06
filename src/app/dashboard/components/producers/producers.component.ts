import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { Producer } from '../../models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {
  min: Producer;
  max: Producer;

  constructor(
    private service: DashboardService,
    private toastr: ToastrService
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
          this.toastr.error("Error to load the data.");
          console.error(err);
        }
      );
  }

}
