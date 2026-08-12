import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'brasil',
    loadChildren: () => import('./brasil/brasil.module').then( m => m.BrasilPageModule)
  },
  {
    path: 'russia',
    loadChildren: () => import('./russia/russia.module').then( m => m.RussiaPageModule)
  },
  {
    path: 'india',
    loadChildren: () => import('./india/india.module').then( m => m.IndiaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
