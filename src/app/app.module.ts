import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { MaterialModule } from 'src/material.module';

import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SeulArticleComponent } from './seul-article/seul-article.component';
import { FilterPipe } from './filter.pipe';
import { ErrorsComponent } from './errors/errors.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'articles', component: ListeArticlesComponent },
  { path: 'ajout', component: AddArticleComponent, canActivate: [AuthGuard] },
  { path: 'articles/edit/:i', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'articles/:i', component: SeulArticleComponent },
  { path: '404', component: ErrorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    AddArticleComponent,
    SeulArticleComponent,
    FilterPipe,
    ErrorsComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArticleService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }












// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { AppComponent } from './app.component';
// import { ArticleService } from './article.service';
// import { MaterialModule } from 'src/material.module';
// import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

// import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
// import { AddArticleComponent } from './add-article/add-article.component';
// import { SeulArticleComponent } from './seul-article/seul-article.component';
// import { FilterPipe } from './filter.pipe';
// import { ErrorsComponent } from './errors/errors.component';
// import { EditComponent } from './edit/edit.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

// const appRoutes: Routes = [
//   { path: '', redirectTo: '/articles', pathMatch: 'full' },
//   { path: 'articles', component: ListeArticlesComponent },
//   { path: 'ajout', component: AddArticleComponent },
//   { path: 'articles/edit/:i', component: EditComponent },
//   { path: 'articles/:i', component: SeulArticleComponent },
//   { path: '404', component: ErrorsComponent },
//   { path: '**', redirectTo: '/404' }
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     ListeArticlesComponent,
//     AddArticleComponent,
//     FilterPipe,
//     ErrorsComponent,
//     EditComponent,
//     LoginComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MaterialModule,
//     AppRoutingModule,
//     RouterModule.forRoot(appRoutes)
//   ],
//   providers: [ArticleService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
