import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListMoviesComponent, ListComponent } from './../../components';
import { ListService } from '../../services';
import { ReactiveFormsModule } from '@angular/forms';
import { List, Pageable } from '../../models';
import { ToastrModule } from 'ngx-toastr';

const ListRoutes: Routes = [
  {
    path: 'list',
    component: ListMoviesComponent,
    children: [{ path: '', component: ListComponent}]
  }
];

let testList: List;

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviesComponent, ListComponent ],
      imports: [
        CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(ListRoutes)
      ],
      providers: [ ListService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get text winner (true - Yes / No - false)', () => {    
    expect(component.getTextWinner(true)).toEqual("Yes");
    expect(component.getTextWinner(false)).toEqual("No");
  });

  it('should disable the back and first page buttons', () => {
    testList = new List([], null, 20, false, true, false);
    component.list = testList;
    expect(component.disablePrevious()).toEqual(true);
  });

  it('should disable the next and last page buttons', () => {
    testList = new List([], null, 20 , true, false, false);
    component.list = testList;
    expect(component.disableNext()).toEqual(true);
  });

  it('should check if a given page is the current page', () => {
    let pageable = new Pageable(null, 10, 3, 0, true, false);
    testList = new List([], pageable, 20, true, false, false);
    component.list = testList;
    expect(component.isActive(4)).toBe(true);
  });

  it('must verify that the conversion of the front end page to the back end is correct', () => {
    expect(component.getPage(10)).toBe(9);
  });

  it('validate list of integers that will be used to assemble the pagination', () => {
    let pageable = new Pageable(null, 10, 3, 0, true, false);
    testList = new List([], pageable, 20, true, false, false);
    component.list = testList;

    component.createListOfPages(1, 5);
    expect(component.pageIndex).toEqual([1, 2, 3, 4, 5]);

    component.createListOfPages(16, 5);
    expect(component.pageIndex).toEqual([16, 17, 18, 19, 20]);


    component.createListOfPages(18, 5);
    expect(component.pageIndex).toEqual([16, 17, 18, 19, 20]);

    pageable = new Pageable(null, 10, 3, 0, true, false);
    testList = new List([], pageable, 3, true, false, false);
    component.list = testList;

    component.createListOfPages(1, 5);
    expect(component.pageIndex).toEqual([1, 2, 3]);
  });
});
