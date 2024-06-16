import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const api:string = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class CatogoriesService {

  constructor(private http:HttpClient) { }

  listCategories() {
    return this.http.get(`${api}categories`);
  }

  listProduct() {
    return this.http.get(`${api}products`);
  }




}
