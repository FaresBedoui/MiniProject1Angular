import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { MaterialModule } from 'src/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SeulArticleComponent } from './seul-article/seul-article.component';
import { FilterPipe } from './filter.pipe';
import { ErrorsComponent } from './errors/errors.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ListeArticlesComponent },
  { path: 'ajout', component: AddArticleComponent },
  { path: 'articles/:i', component: SeulArticleComponent },
  { path: '404', component: ErrorsComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    AddArticleComponent,
    FilterPipe,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
