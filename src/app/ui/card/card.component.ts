import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rm-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() species: string;
  @Input() id: number;
  @Input() image: string;
  @Input() created: string;
  @Input() route: string;
  @Input() footer: boolean;


  constructor(private router: Router) 
  {
    this.name = '';
    this.species = '';
    this.id = 0;
    this.image = '';
    this.created = '';
    this.route = '';
    this.footer = true;
  }

  ngOnInit(): void {
  }

  pushRouter()
  {
    this.router.navigate([this.route, this.id])
  }

}
