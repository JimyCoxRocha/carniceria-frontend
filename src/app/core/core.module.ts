import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FixedImageComponent } from './components/fixed-image/fixed-image.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUIModule } from './material-ui.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardSkeletonComponent } from './components/admin-components/card-skeleton/card-skeleton.component';
import { HeaderAdminEditComponent } from './components/admin-components/header-admin-edit/header-admin-edit.component';
import { HeaderDetailSkeletonComponent } from './components/admin-components/header-detail-skeleton/header-detail-skeleton.component';
import { RouterModule } from '@angular/router';
import { ContentAdminEditComponent } from './components/admin-components/content-admin-edit/content-admin-edit.component';
import { ContentDetailSkeletonComponent } from './components/admin-components/content-detail-skeleton/content-detail-skeleton.component';
import { ExpansionPanelComponent } from './components/admin-components/expansion-panel/expansion-panel.component';
import { TabsMixedComponent } from './components/admin-components/tabs-mixed/tabs-mixed.component';
import { TabsComponent } from './components/admin-components/tabs/tabs.component';
import { CardDetailComponent } from './components/admin-components/card-detail/card-detail.component';
import { PrimeNgModule } from './prime-ng.module';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    ModalComponent,
    NavLinkComponent,
    CounterComponent,
    CardSkeletonComponent,
    HeaderAdminEditComponent,
    HeaderDetailSkeletonComponent,
    ContentAdminEditComponent,
    ContentDetailSkeletonComponent,
    ExpansionPanelComponent,
    TabsMixedComponent,
    TabsComponent,
    CardDetailComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule,
    NgxSkeletonLoaderModule,
    RouterModule,
    PrimeNgModule,
    
  ],
  exports: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    NavLinkComponent,
    CounterComponent,
    CardSkeletonComponent,
    HeaderAdminEditComponent,
    HeaderDetailSkeletonComponent,
    ContentAdminEditComponent,
    ContentDetailSkeletonComponent,
    ExpansionPanelComponent,
    TabsMixedComponent,
    TabsComponent,
    CardDetailComponent,
    ItemComponent
  ]
})
export class CoreModule { }
