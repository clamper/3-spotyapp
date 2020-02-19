import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): any {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBAue9mHzGeZBkLwKrzoGpwz2-YySK417rSgNnTsnja3HKx0-CmOBfukcTVNfzu4lhqVf9_s-ICyYhyS5U'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtist(term: string): any {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBAue9mHzGeZBkLwKrzoGpwz2-YySK417rSgNnTsnja3HKx0-CmOBfukcTVNfzu4lhqVf9_s-ICyYhyS5U'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

}
