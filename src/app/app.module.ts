import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginService } from 'src/app/maheshreddy/services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SandeepTestComponent } from './g-sandeep/sandeep-test/sandeep-test.component';
import { LoginpageService } from './loginpage.service';
import { MaheshReddyRoutingModule } from './maheshreddy/maheshreddy-routing.module';
import { MaheshReddyModule } from './maheshreddy/maheshreddy.module';
import { MaterialModule } from './material.module';
import { MohammadModuleRoutingModule } from './mohammad-module/mohammad-module-routing.module';
import { MohammadModuleModule } from './mohammad-module/mohammad-module.module';
import { NavyaModuleRoutingModule } from './navya-module/navya-module-routing.module';
import { NavyaModuleModule } from './navya-module/navya-module.module';
import { TokeninterceptorService } from './navya-module/services/Token-interceptor/tokeninterceptor.service';
import { AdityaModule } from './AdityaChandra/aditya/aditya.module';
import { NagarjunaModule } from './Nagarjuna-b/nagarjuna/nagarjuna.module';
@NgModule({
  declarations: [
    AppComponent,
    YadagiriTestComponent,
    DashboardComponent,
    SandeepTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaheshReddyModule,
    MaterialModule,
    MaheshReddyRoutingModule,
    NavyaModuleModule,
    NavyaModuleRoutingModule,
    MohammadModuleRoutingModule,
    MohammadModuleModule,
    AdityaModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true,
    },
    LoginService,
    LoginpageService,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
