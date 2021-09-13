import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** */
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';


const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
