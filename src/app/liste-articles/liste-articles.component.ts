import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../article.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit{
  public ArticleSer: any;
  filterValue: string = '';
  constructor(){}

  ngOnInit(): void {
      this.ArticleSer = JSON.parse(localStorage.getItem('articles')!) || [];
  }

}
