import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router , ParamMap} from '@angular/router';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  articleTitle = "";
  articleContent ="";
  articleAuteur ="";

  constructor(private articleService: ArticleService,private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
  
  }

  addArticle( title: string, content: string, auteur: string) {

    this.articleService.addArticle({ title: title, content: content, auteur: auteur});
    alert ('Article Successfully Added')
    this.router.navigate(['../articles'])
    

  }
}
