import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services';
import { List, Pageable } from '../../models';
import { Observable } from 'rxjs';
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

  private readonly NUMBER_OF_PAGE_ITENS = 5;
  private readonly START_ARRAY_PAGES = 0;
  private readonly END_ARRAY_PAGES = (this.NUMBER_OF_PAGE_ITENS - 1);
  private readonly START = 1;
  private readonly SIZE = 10;
  private readonly AUX_PAGE = 1;

  constructor(
    private service: ListService
  ) { }

  ngOnInit(): void {
    this.createListOfPages(this.START, this.NUMBER_OF_PAGE_ITENS);
    this.getMovies(this.START, this.SIZE);
  }

  setFirstPage() {
    this.createListOfPages(this.START, this.NUMBER_OF_PAGE_ITENS);
    this.getMovies(this.START, this.SIZE);
  }

  getActualPage(): number {
    return this.list
      && this.list.pageable
      ? (this.list.pageable.pageNumber + this.AUX_PAGE)
      : 0;
  }

  next() {
    let next = this.getActualPage() + 1;
    this.createListOfPages(next, this.NUMBER_OF_PAGE_ITENS);
    this.getMovies(next, this.SIZE);
  }

  previous() {
    let previous = this.getActualPage() - 1;
    this.createListOfPages(previous, this.NUMBER_OF_PAGE_ITENS);
    this.getMovies(previous, this.SIZE);
  }

  setLastPage() {
    this.createListOfPages(this.getTotalPages(), this.NUMBER_OF_PAGE_ITENS);
    this.getMovies(this.getTotalPages(), this.SIZE);
  }

  setPage(page: number) {
    if (page == this.pageIndex[this.START_ARRAY_PAGES] 
      || page == this.pageIndex[this.END_ARRAY_PAGES]) {
      this.createListOfPages(page, this.NUMBER_OF_PAGE_ITENS);
    }
    
    this.getMovies(page, this.SIZE);
  }

  isActive(page): boolean {
    let actual = this.list 
      && this.list.pageable 
      && this.list.pageable.pageNumber 
      ? this.list.pageable.pageNumber : 0;

    return (page - this.AUX_PAGE) == actual;
  }

  getTotalPages() {
    return this.list 
      && this.list.totalPages 
      ? this.list.totalPages : this.NUMBER_OF_PAGE_ITENS;
  }

  createListOfPages(page, max) {
    let total = this.getTotalPages();
    let remainingPages = total - page;
    let initialPage = page;

    if (remainingPages < this.NUMBER_OF_PAGE_ITENS) {
      initialPage = total - 4;
    }

    this.pageIndex = [];
    max = initialPage + max;
  
    for (let i = initialPage; i < max; i++) {
      this.pageIndex.push(i);
    }
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
    this.service.getMovies(this.getPage(page), size)
      .subscribe(
        data => {
          this.list = data;
          this.movies = this.list.content;
        },
        err => {
          console.log(err);
        }
      );
  }

}
