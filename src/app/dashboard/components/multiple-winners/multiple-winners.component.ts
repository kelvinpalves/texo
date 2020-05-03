import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { MultipleWinners } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html',
  styleUrls: ['./multiple-winners.component.css']
})
export class MultipleWinnersComponent implements OnInit {

  multipleWinnersList: Observable<MultipleWinners>;

  constructor(
    private service: DashboardService
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
          console.error("Erro load multiple winners list.");
        }
      );
  }

}
