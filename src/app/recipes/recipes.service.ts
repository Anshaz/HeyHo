import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'AMOS',
            imageUrl: 'https://static.wixstatic.com/media/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.png/v1/fill/w_560,h_274,al_c,q_85,usm_0.66_1.00_0.01/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.webp',
            ingredients: ['User Stories', 'Sprint Meet', 'Lecture']
            
        },
        {
            id: 'r2',
            title: 'SOSY3',
            imageUrl: 'https://static.wixstatic.com/media/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.png/v1/fill/w_560,h_274,al_c,q_85,usm_0.66_1.00_0.01/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.webp',
            ingredients: ['Exam', 'Exercise', 'Lecture']

        },
        {
            id: 'r3',
            title: 'KonzMod',
            imageUrl: 'https://static.wixstatic.com/media/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.png/v1/fill/w_560,h_274,al_c,q_85,usm_0.66_1.00_0.01/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.webp',
            ingredients: ['Exam', 'Exercise', 'Lecture']

        },
        {
            id: 'r4',
            title: 'BI',
            imageUrl: 'https://static.wixstatic.com/media/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.png/v1/fill/w_560,h_274,al_c,q_85,usm_0.66_1.00_0.01/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.webp',
            ingredients: ['Exam', 'Exercise', 'Lecture']

        },
        {
            id: 'r5',
            title: 'Intro C',
            imageUrl: 'https://static.wixstatic.com/media/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.png/v1/fill/w_560,h_274,al_c,q_85,usm_0.66_1.00_0.01/7c1dce_f14bdeddcdca4471b48daaab42984317~mv2.webp',
            ingredients: ['Exam', 'Exercise', 'Lecture']

        }
    ];

    constructor() { }

    getAllRecipes() {

        return [...this.recipes];
    }

    getRecipe(recipeId: string) {

        return {...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string) {

        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;


        });
    }
}
