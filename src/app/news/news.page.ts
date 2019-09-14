import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
 private nome: string;
  constructor() { 
  this.nome = "assets/anao.jpg";

  }

  ngOnInit() {
  }

}
