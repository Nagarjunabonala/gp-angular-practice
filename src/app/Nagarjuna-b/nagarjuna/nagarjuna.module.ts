import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CkeditorComponent } from '../components/ckeditor/ckeditor.component';
import { MaterialModule } from 'src/app/material.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular/ckeditor.module';




@NgModule({
  declarations: [CkeditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CKEditorModule
  ]
})
export class NagarjunaModule { }
