import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // retreive contact
  getContact() {
    return this.http.get('http://localhost:3000/api/contacts');
  }

  // add contact 
  addContact(newContact){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/sjson');
    return this.http.post('http://localhost:3000/api/contacts', newContact, {headers: headers})
  }

  // delete contacts
  deleteContacts(id){
    return this.http.delete('http://localhost:3000/api/contacts/'+ id);
  }
}
