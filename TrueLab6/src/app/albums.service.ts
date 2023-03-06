import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL="https://jsonplaceholder.typicode.com"

  constructor(private client:HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }
}
