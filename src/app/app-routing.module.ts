import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tile-page', loadChildren: './tile-page/tile-page.module#TilePagePageModule' },
  { path: 'animation', loadChildren: './animation/animation.module#AnimationPageModule' },
  { path: 'http', loadChildren: './http/http.module#HttpPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
