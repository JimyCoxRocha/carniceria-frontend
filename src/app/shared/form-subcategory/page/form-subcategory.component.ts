import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-form-subcategory',
  templateUrl: './form-subcategory.component.html',
  styleUrls: ['./form-subcategory.component.css']
})
export class FormSubcategoryComponent implements OnInit {

  @Input() subCategory : SubCategory = {} as SubCategory;
  @Input() selectedCategories : Category[] = [];
  @Input() isExistPhoto : boolean = false;
  @Input() isEdit : boolean = false;
  @Input() labelButton : string = ""

  isLoading : boolean = true;
  
  fileTmp : any;
  photoSelected? : string | ArrayBuffer | null;

  constructor(
    private categoryService : CategoriesService,
    private primengConfig: PrimeNGConfig,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  buttonBack(){
    this._router.navigate(['admin/sub-categoria/administrar']);
  }


  getPhotoSelected($event : any){
    if($event.target.files && $event.target.files[0]){
      const [ file ] = $event.target.files;

      this.fileTmp = {
          fileRaw : file,
          fileName : file.name,
          fileSize : file.size,
      }

      const reader = new FileReader;
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.fileTmp.fileRaw);
      this.isExistPhoto = true;
    }
  }

  selectFunctionCategory(){
    
  }

  clearImage(){
    this.subCategory.urlImage = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    this.isEdit = false;
  }
}
