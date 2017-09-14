// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

// Services
import { EmailService } from './email-service.service';
import { DocumentService } from './document.service';

// Components
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { EmailComponent } from './email/email.component';
import { DocumentComponent } from './document/document.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    EmailComponent,
    DocumentComponent,
    MenuComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [EmailService, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
