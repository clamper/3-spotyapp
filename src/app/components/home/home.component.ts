import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;

  error: boolean;
  errorMsg: string = "";

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe(data => {
        this.newReleases = data;
        this.loading = false;
      }, (errorservicio) => {

        this.error = true;
        this.loading = false;

        this.errorMsg = errorservicio.error.error.message;

        console.log(this.errorMsg);
      }

      );

  }

  ngOnInit(): void {
  }

}
