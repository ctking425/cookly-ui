import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRecipesComponent } from './my-recipes/my-recipes.component'
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipies',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: MyRecipesComponent
  },
  {
    path: 'recipe/:id',
    component: MyRecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
