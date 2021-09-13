import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'rm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  /**
   * @param boolean load
   * agrega la clase load en caso de tener un valor TRUE
   */
  @HostBinding('class.load') @Input() load: boolean;
  /**
   * @param string text
   * determina msj a mostrar 
   */
  @Input() text: string;
  /**
   * @param string color
   * enviar clase css bulma
   */
  @Input() color: string;
  /**
   * @param string type
   * determina el tipo de boton
   */
  @Input() type: string;
  /** 
   * @param string icon-left 
   * determina icono a la izquierda, no es oblicatorio,
   * se pone el nombre del icono con el prefijo fa-
   */
  @Input('icon-left') iconLeft: string;
  /** 
   * @param string icon-right 
   * determina icono a la derecha, no es oblicatorio,
   * se pone el nombre del icono con el prefijo fa-
   */
  @Input('icon-right') iconRight: string;

  constructor() 
  {
    this.load = false;
    this.text = '';
    this.color = '';
    this.type = 'button';
    this.iconLeft = '';
    this.iconRight = '';
  }

  ngOnInit(): void {}

}
