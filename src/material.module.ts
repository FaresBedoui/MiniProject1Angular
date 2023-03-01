import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';



const Material =[MatToolbarModule,MatFormFieldModule,MatButtonModule, MatListModule,MatGridListModule];
@NgModule({
  imports:[Material],
  exports:[Material]
})

export class MaterialModule{}
