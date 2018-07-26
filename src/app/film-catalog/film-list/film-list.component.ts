import {Component, OnInit} from '@angular/core';
import {Film, FilmService} from '../film.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  private films: Film[];
  favorite;
  private filteredFilms: Film[];
  private filmsOnPage: number = 3;
  selected: string;
  sorting = [
    {value: 'default', viewValue: 'По умолчанию'},
    {value: 'asc', viewValue: 'По алфавиту: A-Я'},
    {value: 'desc', viewValue: 'По алфавиту: Я-А'}
  ];

  constructor(private filmsService: FilmService) {
  }

  filter(query?: string) {
    this.filteredFilms = (query) ?
      this.films.filter(film => film.name.toLowerCase().includes(query.toLowerCase())) : this.films;
  }

  /* Increment count of displayed films */
  loadFilms(cnt: number = 3) {
    this.filmsOnPage += cnt;
  }

  /* Getter for App Films */
  get Films() {
    return this.filteredFilms.slice(0, this.filmsOnPage);
  }

  ngOnInit() {
    // this.films = this.filmsService.getFilms();
    this.films = this.filteredFilms = this.filmsService.getFilms();
    this.favorite = this.films.filter(f => f.isFavorite).length;
  }

  onAddToFavor(value: boolean, film: Film) {
    film.isFavorite = value;
    this.favorite = this.films.filter(f => f.isFavorite).length;
  }

  doSorting() {
    (this.selected === 'default' || this.selected === '') ?
      (this.filteredFilms.sort(this.compareValues('id', this.selected)) , this.selected = '') : this.filteredFilms.sort(this.compareValues('name', this.selected));
  }

  /*  Unique comparison function for sorting */
  compareValues(key, order = 'asc') {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      }
      else if (varA < varB) {
        comparison = -1;
      }
      return ((order === 'desc') ? (comparison * -1) : comparison);
    };
  }
}



