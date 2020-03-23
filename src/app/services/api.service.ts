import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable()
export class Apis {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "5ac3fafademsh1a8ef1b0741135dp158e82jsn6c5887e81b38"
    })
  };

  Countries(): Observable<any> {
    const url =
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php";

    return this.http.get(url, this.httpOptions);
  }

  TotalCases(): Observable<any> {
    const url =
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php";

    return this.http.get(url, this.httpOptions);
  }

  TotalCasesByCountry(): Observable<any> {
    const url =
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php";

    return this.http.get(url, this.httpOptions);
  }

  TotalCasesBySpecificCountry(): Observable<any> {
    const url =
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=Germany";

    return this.http.get(url, this.httpOptions);
  }

  MaskUsageInstructions(): Observable<any> {
     const url =
       "https://coronavirus-monitor.p.rapidapi.com/coronavirus/masks.php";
 
     return this.http.get(url, this.httpOptions);
   }
}
