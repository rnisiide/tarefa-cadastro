import { Injectable } from '@angular/core';
import { Contacts } from '../Contacts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() { 
  }

  public salvar(data: Contacts) {
    localStorage.setItem(data.numDoc.toString(), JSON.stringify(data));
  }
}
