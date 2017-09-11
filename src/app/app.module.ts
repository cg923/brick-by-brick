// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
