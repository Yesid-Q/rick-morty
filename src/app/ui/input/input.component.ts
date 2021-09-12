import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'rm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  /** 
   * @param string type
   * determina el tipo de input a usar, por defecto es text
   */ 
  @Input() type: string;
  /** 
   * @param string label 
   * determina el mensaje para input, por defecto es vacio
   */
  @Input() label: string;
  /** 
   * @param string placeholder 
   * determina el mensaje dentro input, por defecto es vacio
   */
  @Input() placeholder: string;
  /** 
   * @param any value 
   * variable que asigna,
   * se puede pasar con formcontrolname o con value
   * no se puede pasar valor en plano
   */
  @Input('value') innerValue: any;
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

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor()
  {
    this.type = 'text';
    this.label = '';
    this.placeholder = '';
    this.innerValue = '';
    this.iconRight = '';
    this.iconLeft = '';
  }

  /**
   * @function implementacion ControlValueAccessor
   */
  writeValue(value: any)
  {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  /**
   * @function implementacion ControlValueAccessor
   */
  registerOnChange(fn: any): void
  {
    this.onChange = fn;
  }
  /**
   * @function implementacion ControlValueAccessor
   */
  registerOnTouched(fn: any): void
  {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  get value(): any
  {
    return this.innerValue;
  }

  set value(v: any)
  {
    if(v !== this.innerValue)
    {
      this.innerValue = v;
      this.onChange(v);
    }
  }
}
