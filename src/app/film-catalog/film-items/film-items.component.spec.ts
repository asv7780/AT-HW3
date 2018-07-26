import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemsComponent } from './film-items.component';

describe('FilmItemsComponent', () => {
  let component: FilmItemsComponent;
  let fixture: ComponentFixture<FilmItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
