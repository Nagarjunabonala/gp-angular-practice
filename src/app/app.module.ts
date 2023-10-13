import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
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
<<<<<<< HEAD
import { NagarjunaModule } from './Nagarjuna-b/nagarjuna/nagarjuna.module';
=======
import { NareshModule } from './Naresh/naresh.module';
import { NareshRoutingModule } from './Naresh/naresh-routing.module';
import { DineshModule } from './dinesh/dinesh.module';
import { PranayModule } from './U-Pranay/pranay/pranay.module';
import { NagarjunaModule } from './nagarjuna-b/nagarjuna.module';
import { NagarjunaRoutingModule } from './nagarjuna-b/nagarjuna-routing.module';
import { SrikanthModule } from './t-srikanth/srikanth.module';
import { SrikanthRoutingModule } from './t-srikanth/srikanth/srikanth-routing.module';
import { CreateRegistrationComponent } from './t-srikanth/components/create-registration/create-registration.component';
import { HomeComponent } from './U-Pranay/home/home.component';
import { DineshRoutingModule } from './dinesh/dinesh-routing.module';
import { SandeepModule } from './g-sandeep/Components/sandeep/sandeep.module';

>>>>>>> 74f66cc5e16d26f34fc88d1756c48c74112b95ab
@NgModule({
  declarations: [
    AppComponent,
    YadagiriTestComponent,
    DashboardComponent,
    SandeepTestComponent
    
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
<<<<<<< HEAD
  
=======
    DineshModule,
    PranayModule,
    NareshModule,
    NareshRoutingModule,
    SrikanthModule,
    SrikanthRoutingModule,
    DineshRoutingModule,
    PranayModule,
    NagarjunaModule,
    NagarjunaRoutingModule,
    SandeepModule
>>>>>>> 74f66cc5e16d26f34fc88d1756c48c74112b95ab
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
export class AppModule { }
