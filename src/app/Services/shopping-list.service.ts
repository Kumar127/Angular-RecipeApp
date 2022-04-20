import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../Model/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  Ingredients:Ingredients[] = [
    (new Ingredients('Apple',5)),
    (new Ingredients('Tomatoes',4)),
    (new Ingredients('Chikoo',15)),
  ];

  constructor() { }
  getIngredients() {
    return this.Ingredients.slice();
  }
  addIngredient(newIngredient:Ingredients) {
    //  [...this.Ingredients, newIngredient]
     this.Ingredients.push(newIngredient)
     this.ingredientsChanged.emit(this.Ingredients.slice());
  }
  deleteIngredient(value){
    this.Ingredients = this.Ingredients.filter((ingr)=> ingr.name != value.name);
    this.ingredientsChanged.emit(this.Ingredients.slice());
  }
}
