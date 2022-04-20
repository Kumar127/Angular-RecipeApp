import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/Model/ingredients.model';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') name:ElementRef;
  @ViewChild('inputAmount') amount:ElementRef;

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {  
  }
  onAddItem(){
    const newIngredient = new Ingredients(this.name.nativeElement.value, this.amount.nativeElement.value)
    this.slService.addIngredient(newIngredient);
  }
}
