import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent  implements OnInit {

  constructor() { }

@Input() GTA: string=" "; 
@Input() danny: string=" "; 
@Input() jorge: string=" "; 

  ngOnInit() {}

}
