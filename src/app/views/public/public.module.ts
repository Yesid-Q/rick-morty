import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { PublicRoutingModule } from './public-routing.module';

/**
 * @import services
 */
import { CharacterService } from 'src/app/service/character/character.service';
import { LocationService } from 'src/app/service/location/location.service';

/**
 * @import component views
 */
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterListComponent } from './character/character-list/character-list.component';

/**
 * @import module ui
 */
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    UiModule
  ],
  providers: [
    CharacterService,
    LocationService
  ]
})
export class PublicModule { }
