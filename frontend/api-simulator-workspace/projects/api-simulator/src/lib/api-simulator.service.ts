import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSimulatorService {

  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

   connect(USER){
    this.http.get(this.API_URL, {}).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
   }


}
