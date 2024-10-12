import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { WebcamModule } from 'ngx-webcam';
import { MycommonModule } from './mycommon/mycommon.module';
import { CommonModule } from '@angular/common';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AdduserrolepopupComponent } from './components/adduserrolepopup/adduserrolepopup.component';
import { AlertComponent } from './components/alert/alert.component';
import { AuthorizationpopupComponent } from './components/authorizationpopup/authorizationpopup.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { GenericComponent } from './components/generic/generic.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { LoginpopupComponent } from './components/loginpopup/loginpopup.component';
import { MultiplepagesComponent } from './components/multiplepages/multiplepages.component';
import { PagepopupComponent } from './components/pagepopup/pagepopup.component';
import { PayupopupComponent } from './components/payupopup/payupopup.component';
import { UserpopupComponent } from './components/userpopup/userpopup.component';
import { WebcamComponent } from './components/webcam/webcam.component';
import { JwtInterceptor } from 'src/interceptors/JwtInterceptor';
import { ThreejsModule } from './libs/threejs/threejs.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ConfirmComponent,
    GenericComponent,
    AdduserrolepopupComponent,
    UserpopupComponent,
    LoginpopupComponent,
    AuthorizationpopupComponent,
    PagepopupComponent,
    MultiplepagesComponent,
    IndicatorComponent,
    WebcamComponent,
    PayupopupComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MycommonModule,
    WebcamModule,
    ThreejsModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
