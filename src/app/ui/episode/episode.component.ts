import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rm-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: string;

  constructor()
  {
    this.episode = '';
  }

  ngOnInit(): void 
  {
    this.episode = this.episode;
  }

  setImage(): string
  {
    let list = this.episode.split('/')
    return list[list.length -1]
  }
}
