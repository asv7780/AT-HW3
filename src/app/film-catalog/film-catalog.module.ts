import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmItemsComponent } from './film-items/film-items.component';
import {
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatTooltipModule
  ],
  declarations: [
    MainComponent,
    DetailsComponent, FilmListComponent, FilmItemsComponent
  ]
})
export class FilmCatalogModule { }
