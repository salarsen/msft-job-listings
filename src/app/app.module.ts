import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { JobComponent } from './jobs/job.component';
import { JobTableComponent } from './jobs/table/job-table.component';
import { JobDetailComponent } from './jobs/table/job-detail/job-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { JobService } from './services/job.service';
import { ContactService } from './services/contact.service';
import { ContactComponent } from './contacts/contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactUploadComponent } from './contacts/contact-upload/contact-upload.component';
import { SafeHtmlPipe } from './safehtml.pipe';
import { ContactReviewComponent } from './contacts/contact-review/contact-review.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobTableComponent,
    JobDetailComponent,
    ContactComponent,
    ContactListComponent,
    ContactUploadComponent,
    SafeHtmlPipe,
    ContactReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [JobService, ContactService],
  bootstrap: [AppComponent],
  entryComponents: [JobDetailComponent],
})
export class AppModule { }
