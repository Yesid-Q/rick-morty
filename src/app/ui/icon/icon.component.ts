import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {

  /** 
   * @param string text
   * determina el mensaje que compañara el icono, puede ser nulo
   */ 
  @Input() text: string;
  /** 
   * @param string icon
   * clase para icono, es requerido
   */ 
  @Input() icon: string;

  constructor()
  {
    this.text = '';
    this.icon = '';
  }
}
