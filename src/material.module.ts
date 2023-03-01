import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



const Material =[MatToolbarModule,MatFormFieldModule,MatButtonModule];
@NgModule({
  imports:[Material],
  exports:[Material]
})

export class MaterialModule{}
