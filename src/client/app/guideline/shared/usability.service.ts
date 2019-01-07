import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UsabilityService {

  private static USABILITY_REST_URL : string = `http://localhost:8080`;

  constructor(private http:Http) {
  }

  evaluateByCategory(category:string, url:string):Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('url', url);

    let url:string = `${UsabilityService.USABILITY_REST_URL}/usability/evaluation/${category}`;

    return this.http.get(url, {search: params}).map(resp => resp.json());
  }

  getUsabilityCategory():Observable<any> {
    let url:string = `${UsabilityService.USABILITY_REST_URL}/usability/categories`;
    return this.http.get(url).map(resp => resp.json());
  }

  getUsabilityGuidelinesByCategory(category:string):Observable<any> {
    let url:string = `${UsabilityService.USABILITY_REST_URL}/usability/categories/` + category;
    return this.http.get(url).map(resp => resp.json());
  }

}
