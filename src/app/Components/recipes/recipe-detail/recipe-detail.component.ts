import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/Model/recipe.model';
import { RecipeService } from 'src/app/Services/recipe.service';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeData:Recipe
  id:number
  constructor(private slService:ShoppingListService,private route:ActivatedRoute,private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.id = +params['id'];
      this.selectedRecipeData = this.recipeService.getRecipeById(this.id);
    })

  }
  addIngredientToShoppingList() {
    this.selectedRecipeData.ingredients.map(ing =>{
      this.slService.addIngredient(ing)
    })
  }
  

}
