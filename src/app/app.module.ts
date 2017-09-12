// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Services
import { EmailService } from './email-service.service';

// Components
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    //HttpModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
