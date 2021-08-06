import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  //atributo
  uri = environment.apiUrl + "/enderecos";
  headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {

    var auth = localStorage.getItem('AUTH') as string;
    var accessToken = JSON.parse(auth).accessToken;

    this.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  post(endereco: any) {
    return this.httpClient.post(this.uri, endereco,
      { headers: this.headers })
  }

  put(endereco: any) {
    return this.httpClient.put(this.uri, endereco,
      { headers: this.headers })
  }

  remove(id: string) {
    return this.httpClient.delete(this.uri + "/" + id,
      { headers: this.headers })
  }

  getAll() {
    return this.httpClient.get(this.uri,
      { headers: this.headers })
  }
}
