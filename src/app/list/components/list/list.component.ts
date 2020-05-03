import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services';
import { List, Pageable } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Observable<List>;

  constructor(
    private service: ListService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.service.getMovies(1, 10)
      .subscribe(
        data => {
          this.list = data;
          console.log(this.list);
        },
        err => {
          console.log(err);
        }
      );
  }

}
