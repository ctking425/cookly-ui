import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRecipesComponent } from './my-recipes/my-recipes.component'
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: MyRecipesComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
