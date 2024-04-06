import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { LoginComponent } from './login/login.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ApiservicesService } from './apiservices.service';
import { FieldsetModule } from 'primeng/fieldset';

// import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    ButtonModule,
    CardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    SlickCarouselModule,
    MultiSelectModule,
    ImageModule,
    FieldsetModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
