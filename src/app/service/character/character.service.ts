import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @import variable de entorno e interface
 */
import { environment as env} from 'src/environments/environment';
import { CharacterInterface, CharacterResponse } from 'src/app/interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  /**
   * @function getAllCharacter 
   * obtiene todos los personajes que nos suministra la api
   * @returns Array CharacterInterface
   */
  getAllCharacter(): Observable<CharacterInterface[]>
  {
    return this.http.get<CharacterResponse>(`${env.baseUrl}character`).pipe(map(res => res.results))
  }

  /**
   * @function getDetailCharacter
   * obtiene la informacion de un solo personaje
   * @param int id 
   * llave del principal del usuario  
   * @returns 
   */
  getDetailCharacter(id: number): Observable<CharacterInterface>
  {
    return this.http.get<CharacterInterface>(`${env.baseUrl}character/${id}`)
  }
}
