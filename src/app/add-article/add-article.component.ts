import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;
  articleTitle = '';
  articleContent = '';
  articleAuteur = '';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      auteur: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.articleForm.invalid) {
      return;
    }
    const title = this.articleForm.value.title;
    const content = this.articleForm.value.content;
    const auteur = this.articleForm.value.auteur;
    this.articleService.addArticle({ title, content, auteur });
    alert('Article Successfully Added');
    this.router.navigate(['../articles']);
  }
}
