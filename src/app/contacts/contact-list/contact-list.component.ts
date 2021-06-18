import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/contact';
import { map } from 'rxjs/operators';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  providers: [],
})

export class ContactListComponent implements OnInit {
  contacts: Array<Contact> = [];
  updatedContacts: Array<any> = [];
  contactString: string;
  contactBlob: string;

  // @Output()
  // addDetails = new EventEmitter<string>();

  constructor(
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.contactService.getContacts()
      .subscribe(res => {
        console.log('here2');
        const url = window.URL.createObjectURL(res.data);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = res.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
      }, error => {
        console.log(error);
      });
  }

}
