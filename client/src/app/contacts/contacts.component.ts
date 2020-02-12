import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  first_name: any = '';
  last_name: any = '';
  phone: any = '';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact()
    .subscribe((contact: Contact[]) => {
      this.contacts = contact
    })
  }

  // delete contacts
  deleteContacts(id:any){
    var contacts = this.contacts;
    this.contactService.deleteContacts(id)
    .subscribe((data: any) => {
      if(data.length == 1){
        for(let i = 0; i < this.contacts.length;i++){
          if(contacts[i]._id == id){
            contacts.splice(i,1);
          }
        }
      }
    })
  }

  // add contacts
  addContact() {
    const newContact ={
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }
    this.contactService.addContact(newContact)
    .subscribe((response => {
     console.log(response)
    }))
  }
}
