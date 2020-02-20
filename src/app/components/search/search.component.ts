import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean = false;

  constructor( private spotify: SpotifyService) {

   }

  ngOnInit(): void {
  }

  search(term: string) {
    this.loading = true;
    this.spotify.getArtists( term )
    .subscribe( data => {
      this.artists = data;
      this.loading = false;
    });
  }

}
