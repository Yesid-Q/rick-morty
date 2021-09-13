import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CharacterInterface } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/service/character/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent implements OnInit {

  character$: Observable<CharacterInterface>;
  
  constructor(
    private service: CharacterService,
    private route: ActivatedRoute
  ){
    this.character$ = new Observable<CharacterInterface>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.character$ = this.service.getDetailCharacter(res.id)
    })

  }

}
