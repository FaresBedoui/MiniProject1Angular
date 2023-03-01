import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeulArticleComponent } from './seul-article.component';

describe('SeulArticleComponent', () => {
  let component: SeulArticleComponent;
  let fixture: ComponentFixture<SeulArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeulArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeulArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
