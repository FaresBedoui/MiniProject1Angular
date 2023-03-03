// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { ArticleService, Article } from '../article.service';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {

//   public ActualId: any;
//   public articleForm: FormGroup;
//   public ListeArticles: Article[] = JSON.parse(localStorage.getItem('articles')!) || [];

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private fb: FormBuilder
//   ) {
//     this.articleForm = this.fb.group({
//       title: ['', Validators.required],
//       content: ['', Validators.required],
//       auteur: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params: ParamMap) => {
//       let ID = parseInt(params.get('i')!);
//       this.ActualId = ID;


//       const article = this.ListeArticles[this.ActualId];
//       this.articleForm.setValue({
//         title: article.title,
//         content: article.content,
//         auteur: article.auteur
//       });
//     });
//   }

//   onSubmit(): void {

//     const article = this.ListeArticles[this.ActualId];
//     article.title = this.articleForm.value.title;
//     article.content = this.articleForm.value.content;
//     article.auteur = this.articleForm.value.auteur;

//     localStorage.setItem('articles', JSON.stringify(this.ListeArticles));

//     this.router.navigate(['/']);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService, Article } from '../article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public ActualId: any;
  public articleForm: FormGroup;
  public ListeArticles: Article[] = JSON.parse(localStorage.getItem('articles')!) || [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private articleService: ArticleService // Ajouter ici
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      auteur: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let ID = parseInt(params.get('i')!);
      this.ActualId = ID;


      const article = this.ListeArticles[this.ActualId];
      this.articleForm.setValue({
        title: article.title,
        content: article.content,
        auteur: article.auteur
      });
    });
  }

  onSubmit(): void {

    const updatedArticle: Article = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      auteur: this.articleForm.value.auteur
    };

    this.articleService.editArticle(this.ActualId, updatedArticle);

    this.router.navigate(['/articles']);
  }

}
