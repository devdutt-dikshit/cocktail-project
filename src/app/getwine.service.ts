import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { WineData, Single_WineData } from './wine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetwineService {

  public link = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";
  public searchLink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  public x = "Ordinary_Drink";
  constructor(private http: HttpClient) { }

  public getWine(): Observable<WineData[]>{
    return this.http.get<WineData[]>("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
  }

  public SearchWine(y): Observable<WineData[]>{
    return this.http.get<WineData[]>(this.searchLink + y);
  }

  public SearchWineById(y): Observable<Single_WineData[]>{
    return this.http.get<Single_WineData[]>("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + y);
  }

  public SearchIngredientByName(y): Observable<WineData[]>{
    return this.http.get<WineData[]>("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + y);
  }

  public Alcoholic(y): Observable<WineData[]>{
    return this.http.get<WineData[]>("https://www.thecocktaildb.com/api/json/v1/1/filter.php?" + y);
  }
}
