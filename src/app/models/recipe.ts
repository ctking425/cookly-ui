import { Ingredient } from './ingredient';
import { Step } from './step';

export class Recipe {
    id: number;
    name: String;
    description: String;
    ingredients: Ingredient[];
    steps: Step[];
}
