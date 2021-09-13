import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @import servicio e interface
 */
import { CharacterService } from 'src/app/service/character/character.service';
import { CharacterInterface } from 'src/app/interfaces/character.interface'


@Component({
  selector: 'rm-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {

  /**
   * @property Array caracteres
   */
  characters$: Observable<CharacterInterface[]>;


  constructor(private service: CharacterService)
  {
    this.characters$ = new Observable<CharacterInterface[]>();
  }

  ngOnInit(): void {
    this.characters$ = this.service.getAllCharacter()
  }

}
