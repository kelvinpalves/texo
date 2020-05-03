import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { Studio } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-studios',
  templateUrl: './top-studios.component.html',
  styleUrls: ['./top-studios.component.css']
})
export class TopStudiosComponent implements OnInit {

  studioList: Observable<Studio>;

  constructor(
    private service: DashboardService
  ) { }

  ngOnInit(): void {
    this.getStudiosWithWinCount();
  }

  getStudiosWithWinCount() {
    this.service.getStudiosWithWinCount()
      .subscribe(
        data => {
          this.studioList = data.studios.splice(0,3);
        },
        err => {
          console.error("Erro load studios list.");
        }
      );
  }

}
