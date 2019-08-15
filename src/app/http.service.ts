import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  getJoke() {
    return this._httpClient.get("https://official-joke-api.appspot.com/random_joke");
  }

}
