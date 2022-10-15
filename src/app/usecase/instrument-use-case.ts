import {Instrument} from "../instruments/interfaces/Instrument";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstrumentUseCase {
  private BASE_URL = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  searchInstruments(query: string): Observable<Instrument[]> {
    const params = new HttpParams()
      .set('q', query)

    return this.http.get<Instrument[]>(`${this.BASE_URL}/instruments/search`, { params })
  }

  getInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(`${this.BASE_URL}/instruments`)
  }
}
