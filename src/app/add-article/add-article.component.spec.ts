import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      auteur: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addArticle() {
    if (this.articleForm.valid) {
      this.articleService.addArticle(this.articleForm.value);
      alert('Article Successfully Added')
      this.router.navigate(['../articles']);
    }
  }
}










// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddArticleComponent } from './add-article.component';

// describe('AddArticleComponent', () => {
//   let component: AddArticleComponent;
//   let fixture: ComponentFixture<AddArticleComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AddArticleComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AddArticleComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
