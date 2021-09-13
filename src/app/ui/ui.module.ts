import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @import Custom Component 
 */
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';
import { EpisodeComponent } from './episode/episode.component';
import { LoadingComponent } from './loading/loading.component';
import { InputComponent } from './input/input.component';
/**
 * @import Custom Pipe
 */
import { AtSignPipe } from './pipes/at-sign/at-sign.pipe';
/**
 * @import Custom Directive
 */
import { RmColorDirective } from './directive/color/rm-color.directive';


@NgModule({
  declarations: [
    CardComponent,
    IconComponent,
    AtSignPipe,
    ButtonComponent,
    RmColorDirective,
    EpisodeComponent,
    LoadingComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CardComponent,
    IconComponent,
    AtSignPipe,
    ButtonComponent,
    RmColorDirective,
    EpisodeComponent,
    LoadingComponent,
    InputComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UiModule { }
