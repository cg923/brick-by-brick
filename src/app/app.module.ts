// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
