import { Injectable } from '@angular/core';

export interface Article {
  title: string;
  content: string;
  auteur: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = JSON.parse(localStorage.getItem('articles')!) || [];

  constructor() {}

  getArticles(): Article[] {
    return this.articles;
  }

  addArticle(article: Article) {
    this.articles.push(article);
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
