// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Services
import { EmailService } from './email-service.service';
import { DocumentService } from './document.service';

// Components
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { EmailComponent } from './email/email.component';
import { DocumentComponent } from './document/document.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    EmailComponent,
    DocumentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [EmailService, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
