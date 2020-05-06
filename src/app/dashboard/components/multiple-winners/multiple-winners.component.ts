import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { MultipleWinners } from '../../models';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html',
  styleUrls: ['./multiple-winners.component.css']
})
export class MultipleWinnersComponent implements OnInit {

  multipleWinnersList: Observable<MultipleWinners>;

  constructor(
    private service: DashboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getYearsWithMultipleWinners();
  }

  getYearsWithMultipleWinners() {
    this.service.getYearsWithMultipleWinners()
      .subscribe(
        data => {
          this.multipleWinnersList = data.years;
        },
        err => {
          this.toastr.error("Error to load the data.");
          console.error(err);
        }
      );
  }

}
