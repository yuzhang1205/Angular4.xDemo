import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterbarComponent} from './footerbar/footerbar.component';
import {SearchComponent} from './search/search.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {CarouselComponent} from './carousel/carousel.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductService} from './share/product.service';
import {FilterPipe} from './pipe/filter.pipe';

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  /*{path: 'gg/', component: HomeComponent},*/
  {path: 'products/:productId', component: ProductDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterbarComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    ProductDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
