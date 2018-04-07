import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipes} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipes>();
  recipe: Recipes[]=[
    new Recipes('Test recipe','trying aa recipe','https://www.youngisthan.in/wp-content/uploads/cmsimported/img-5487b66f98c81-posts-10000.jpg'),
    new Recipes('Test recipe','trying aa recipe','https://www.youngisthan.in/wp-content/uploads/cmsimported/img-5487b66f98c81-posts-10000.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipes:Recipes){
    this.recipeWasSelected.emit(recipes);
  }

}
