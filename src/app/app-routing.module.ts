import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobComponent } from './jobs/job.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactUploadComponent } from './contacts/contact-upload/contact-upload.component';
import { ContactComponent } from './contacts/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'jobs',
        component: JobComponent,
      },
      {
        path: 'jobs/:page',
        component: JobComponent,
      },
      // {
      //   path: 'jobs/:page/:filter',
      //   component: JobComponent,
      // },
      // {
      //   path: 'contacts',
      //   component: ContactComponent,
      // },
      // {
      //   path: 'contacts-list',
      //   component: ContactListComponent,
      // },
      // {
      //   path: 'contacts-upload',
      //   component: ContactUploadComponent,
      // },
      {
        path: '**',
        redirectTo: 'jobs',
        pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule {}
