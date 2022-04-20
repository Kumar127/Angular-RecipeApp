import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/recipe.model';
import { RecipeService } from 'src/app/Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipeData :Recipe
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipeData.subscribe(recipe =>{
      this.selectedRecipeData = recipe;
    })
  }
 
}
