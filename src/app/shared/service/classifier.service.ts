import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseClassifier } from '../model/responseClassifier.model';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {

  apiURL = "http://localhost:4000/predict";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }


  public classify(text: any): Observable<ResponseClassifier> {
    return this.httpClient.post<ResponseClassifier>(this.apiURL, text, this.httpOptions)
  }

}
