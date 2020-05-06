import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movies } from '../../models';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-winners',
  templateUrl: './movie-winners.component.html',
  styleUrls: ['./movie-winners.component.css']
})
export class MovieWinnersComponent implements OnInit {

  movies: Observable<Movies>;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DashboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      year: ['', [Validators.required]]
    });
  }

  getMovies() {
    let year = this.form.get('year').value;

    this.service.getMovies(year)
      .subscribe(
        data => {
          this.movies = data;
        },
        err => {
          this.toastr.error("Error to load the data.");
          console.error(err);
        }
      );
  }

}
