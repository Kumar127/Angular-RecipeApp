import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/Model/ingredients.model';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Ingredients[];
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.Ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(ing =>{
        this.Ingredients = ing
    })
  }
  deleteIngredient(value){
    // this.Ingredients = this.Ingredients.filter((ingr)=> ingr.name != value.name);
    this.slService.deleteIngredient(value)
  }

}
