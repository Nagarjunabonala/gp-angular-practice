import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import  ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit{
  public Editor = ClassicEditor;

  title = new FormControl('', [Validators.required]);
  department = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);
   
  getErrorMessagetitle(){
    if (this.title.hasError('required')){
  
      return 'You must enter Title to proceed'
    }
    return
  } 
  getErrorMessagedept(){
    if (this.department.hasError('required')){
  
      return 'You must choose department to proceed'
    }
    return
  }
  getErrorMessageckeditor(){
    if (this.content.hasError('required')){
  
      return 'You must enter content to proceed'
    }
    return
  }
  
  checkCkEditor: any = false;
  
  submitButtonClicked(){
    if (!this.content.valid){
      this.checkCkEditor = true
      this.title.markAllAsTouched()
  
      this.content.markAllAsTouched()
      this.department.markAllAsTouched()
  
      console.log('submit button clicked')
      return
    }
  }
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }

