import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { IProductAdminDetail } from '../../interfaces/product-admin.interface';
import { IAdminElementExtraDetail, IAdminElementExtraDetailMixed } from '../../interfaces/product-detail.interface';
import { ProductoAdminService } from '../../services/producto-admin.service';

interface RouteParams {
  id: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: IProductAdminDetail | null = null;
  productDetail!: IAdminElementExtraDetail;
  productCategory!: IAdminElementExtraDetailMixed;

  constructor(private route: ActivatedRoute, 
    private detailService : ProductoAdminService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    try{
      const idProduct = parseInt(id!);
      idProduct && this.detailService.getDetailToTable(idProduct).subscribe(data => {
        this.product = data;
        this.productExtraDetail();
        console.log(this.productDetail);
      });
    }catch(Err){}
  }

  addDetail(){

  }

  deleteSubCategory(idProductDetail: number){
    console.log("Click en delete category: ");
  }

  deleteDetail(idProductDetail: number){
    console.log("Click en delete detalle: ");
  }

  editDetail(idProductDetail: number){
    console.log("Click on edit detail: ");
  }

  detail(){
    const detail = this.product?.detail || [];

    const productDetail: IAdminElementExtraDetail | undefined = {
        title: 'Detalles del Producto',
        actionAdd: {
          title: 'Agregar Detalle',
          action: () => this.addDetail()
        },
        card: detail.map(detail => ({
          image: detail.urlImg,
          title: detail.tituloDetalle,
          description: detail.descripcion,
          actionDelete: () => this.deleteDetail(detail.idDetalleProducto),
          actionEdit: () => this.editDetail(detail.idDetalleProducto)
      }))
    };

    return productDetail;
  }
  
  getCategory(category: Category){

    const valore = {
        title: category.titulo,
        card: category.subCategoria.map(subCategory => ({
          image: subCategory.urlImage,
          title: subCategory.titulo,
          description: subCategory.descripcion,
          actionDelete: () => this.deleteSubCategory(subCategory.idSubcategoria)
      }))
    } as IAdminElementExtraDetail;
    console.log(valore);
    return valore;
  }

  categories(){
    const categories = this.product?.categories;

    const productDetail: IAdminElementExtraDetail[]  = 
      (categories && categories.length > 0) ? 
      categories.map( category => (
        this.getCategory(category)
      )) : [];

      return {
        title: "Categorias",
        elements: productDetail,
        actionAdd: {
          title: 'Agregar Sub Categoria',
          action: () => this.addDetail()
        }
      } as IAdminElementExtraDetailMixed
  }


  productExtraDetail(){
      if(!this.product) return;

      const detail = this.detail();
      if(detail !== undefined) 
        this.productDetail = detail;


      this.productCategory = this.categories();
  }


  get isLoading(){
    return this.product == null || this.detailService.errorLoadingData;
  }
}
