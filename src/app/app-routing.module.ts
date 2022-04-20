import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './Components/recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes', component: RecipesComponent, children:[
      {path:'new', component: RecipeEditComponent},
      {path:':id', component: RecipeDetailComponent},
      {path:':id/edit', component: RecipeEditComponent},
      
    ] },
    
    {path:'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
