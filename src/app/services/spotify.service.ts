import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBAue9mHzGeZBkLwKrzoGpwz2-YySK417rSgNnTsnja3HKx0-CmOBfukcTVNfzu4lhqVf9_s-ICyYhyS5U'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases(): any {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map(data => data['albums'].items ));
  }

  getArtist(term: string): any {

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe( map(data => data['artists'].items ));
  }

}
