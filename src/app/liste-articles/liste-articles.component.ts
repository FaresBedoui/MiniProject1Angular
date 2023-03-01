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
  constructor(private ArticleService: ArticleService){}

  ngOnInit(): void {
      this.ArticleSer = JSON.parse(localStorage.getItem('articles')!) || [];
  }
  onDelete(index:any) {
    if (confirm("Are you sure you want to delete this article?")){
      this.ArticleService.deleteArticle(index);
      alert('Article Successfully Deleted');
    }
    this.ngOnInit()
  }

}
