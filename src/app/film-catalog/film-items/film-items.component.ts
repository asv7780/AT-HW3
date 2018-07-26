import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Film, FilmService} from "../film.service";

@Component({
  selector: 'app-film-items',
  templateUrl: './film-items.component.html',
  styleUrls: ['./film-items.component.css']
})
export class FilmItemsComponent implements OnInit {

  @Input('data') film: Film;
  @Output() favor = new EventEmitter();

  constructor(private filmsService: FilmService) { }

  ngOnInit() {
  }
  cutDescription(description) {
    return this.filmsService.newDescription(description);
  }
  addToFavor() {
    this.film.isFavorite = !this.film.isFavorite;
    this.favor.emit(this.film.isFavorite);
  }

}
