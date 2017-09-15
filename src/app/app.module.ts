// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    EmailComponent,
    DocumentComponent,
    MenuComponent,
    NotificationComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShareButtonsModule.forRoot(),
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [EmailService, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
