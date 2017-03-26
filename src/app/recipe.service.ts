import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Recipe } from './models/recipe';

@Injectable()
export class RecipeService {

  private baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get(this.baseUrl+"/recipes")
                .toPromise()
                .then(response => response.json() as Recipe[])
                .catch(this.handleError);
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.http.get(this.baseUrl+"/recipe/"+id)
                .toPromise()
                .then(response => response.json() as Recipe)
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
