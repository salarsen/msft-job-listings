import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [],
})

export class ContactComponent implements OnInit {
  contacts: Array<Contact> = [];
  contactPage: number;
  totalPages: number;


  constructor(
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.contactService.getContacts()
      .subscribe(res => {
        console.log(res)
        this.contacts = res;
        console.log(this.contacts.length)
      },
      Error => {
        console.log(Error);
      });
  }

  nextPage(): void {

  }

  prevPage(): void {

  }

  onSubmit(contactId : string, contactName: string): void {
    console.log(`${contactId} - ${contactName}`)

    // this.contactService.updateContacts()
  }
}
