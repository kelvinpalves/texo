import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services';
import { List, Pageable } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Movies } from 'src/app/dashboard';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: List;
  movies: Movies[];
  pageable: Pageable;
  pageIndex: number[];
  form: FormGroup;

  private readonly AUX_PAGE = 1;
  private readonly NUMBER_OF_PAGE_ITENS = 5;
  private readonly SIZE = 10;
  private readonly START = 1;

  constructor(
    private fb: FormBuilder,
    private service: ListService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getMovies(this.START, this.SIZE);
  }

  createForm() {
    this.form = this.fb.group({
      year: ['', []],
      winner: ['', []],
    });
  }

  reloadMovies() {    
    this.getMovies(this.START, this.SIZE);
  }

  setFirstPage() {
    this.getMovies(this.START, this.SIZE);
  }

  getActualPage(): number {
    return this.list
      && this.list.pageable
      ? (this.list.pageable.pageNumber + this.AUX_PAGE)
      : 0;
  }

  next() {
    if (!this.disableNext()) {
      let next = this.getActualPage() + 1;
      this.getMovies(next, this.SIZE);
    }
  }

  previous() {
    if (!this.disablePrevious()) {
      let previous = this.getActualPage() - 1;
      this.getMovies(previous, this.SIZE);
    }
  }

  setLastPage() {
    this.getMovies(this.getTotalPages(), this.SIZE);
  }

  setPage(page: number) {
    this.getMovies(page, this.SIZE);
  }

  isActive(page): boolean {
    let actual = this.list 
      && this.list.pageable 
      && this.list.pageable.pageNumber 
      ? this.list.pageable.pageNumber : 0;

    return (page - this.AUX_PAGE) == actual;
  }

  showPagination() {
    return this.list && !this.list.empty;
  }

  getTotalPages() {
    return this.list 
      && this.list.totalPages 
      ? this.list.totalPages : this.NUMBER_OF_PAGE_ITENS;
  }

  createListOfPages(page, max) {
    this.pageIndex = [];
    
    let total = this.getTotalPages();
    let remainingPages = total - page;
    let initialPage = page;

    initialPage = remainingPages < this.NUMBER_OF_PAGE_ITENS ? (total - 4) : initialPage;
    max = initialPage + (--max);
    max = total < this.NUMBER_OF_PAGE_ITENS ? total : max;
    initialPage = initialPage < 0 ? this.START : initialPage;
    
    for (let i = initialPage; i <= max; i++) {
      this.pageIndex.push(i);
    }
  }

  getList() {
    return this.list;
  }

  disablePrevious(): boolean {
    if (!this.list) 
      return false;

    return this.list.first;
  }

  disableNext(): boolean {
    if (!this.list)
      return false;

    return this.list.last;
  }

  getTextWinner(winner: boolean): string {
    return winner ? 'Yes' : 'No';
  }

  getPage(page):number {
    return page > 0 ? page - this.AUX_PAGE : 0;
  }

  getMovies(page: number, size: number) {
    let year = this.form.get('year').value;
    let winner = this.form.get('winner').value;

    this.service.getMovies(this.getPage(page), size, year, winner)
      .subscribe(
        data => {
          this.list = data;
          this.movies = this.list.content;
          this.createListOfPages(this.getActualPage(), this.NUMBER_OF_PAGE_ITENS);
        },
        err => {
          console.log(err);
        }
      );
  }

}
