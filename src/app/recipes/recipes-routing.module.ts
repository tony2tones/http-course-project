import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { CommonModule } from "@angular/common";

const recipesRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
      ] },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}