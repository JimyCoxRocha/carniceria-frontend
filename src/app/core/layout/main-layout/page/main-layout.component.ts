import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ExpansionPanelInterface } from '../components/expansion-panel/expansion-panel.component';
import { Category } from '../../../interfaces/common/Categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(
      changeDetectorRef: ChangeDetectorRef, 
      media: MediaMatcher,
      private categoriesService: CategoriesService,
      private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  ngOnInit(): void {
    console.log("iniciado");
    this.categoriesService.categories();
  }
  get categories() {
    return this.categoriesService._categories;
  }
  SubCategoriesFormat( category: Category ){
    const subItem: ExpansionPanelInterface[] = 
    category.subCategoria.map(resp => ({
        id: resp.idSubcategoria,
        title: resp.titulo,
        description: ""
      })
    )
    return subItem;
  }

  navPromotion(){
    this.router.navigate(['/', 'promociones']);
  }
}
