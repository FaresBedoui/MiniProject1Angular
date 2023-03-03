// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SeulArticleComponent } from './seul-article/seul-article.component';
import { FilterPipe } from './filter.pipe';
import { ErrorsComponent } from './errors/errors.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';

import { NgModule } from '@angular/core';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
