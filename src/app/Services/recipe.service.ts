import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../Model/ingredients.model';
import { Recipe } from '../Model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipeData = new EventEmitter<Recipe>();
  private recipes:Recipe[]= [
    new Recipe('Cornflakes','A veggie Delight breakfast','https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-scaled.jpg',[
      new Ingredients('Meat',5),
      new Ingredients('Bread',2),
    ]
    ),
    new Recipe('Salad','Healthy Salad for a yummy Day','https://www.inspiredtaste.net/wp-content/uploads/2020/07/Bean-Salad-Recipe-2-1200.jpg',[
      new Ingredients('Egg',5),
      new Ingredients('Chicken',2),
    ]
    ),
    new Recipe('Fish Chilly','A brainy food for Brainy people','https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',[
      new Ingredients('Paneer',5),
      new Ingredients('cream',2),
    ]
    )
  ]
  constructor() { }
  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeById(index) {
    return this.recipes[index]
  }
}
