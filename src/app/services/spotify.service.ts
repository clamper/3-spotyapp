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
      Authorization: 'Bearer BQD3u5wJ85ZJc1HpT3IL3FPtTLRNnZ7HENUcN3-g0ZqBM1A4Jr4qcVms5F5NANe9KImryO0PtPnMbvoj8xs'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases(): any {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map(data => data.albums.items ));
  }

  getArtists(term: string): any {

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe( map(data => data['artists'].items ));
  }

  getArtist(id: string): any {

    return this.getQuery(`artists/${id}`);
      //.pipe( map(data => data['artists'].items ));
  }

  getTopTracksForArtist(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map(data => data.tracks ));
  }

}
