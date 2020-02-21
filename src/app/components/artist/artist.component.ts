import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styles: []
})
export class ArtistComponent implements OnInit {

	artistId: string;
	artist: any = {};
	loading: boolean;
	tracks: any[] = [];

	constructor(private route: ActivatedRoute,
		private spotify: SpotifyService
	) {

		this.loading = true;
		this.route.params.subscribe(params => {
			this.getArtist(params.id);
			this.getTopTracks( params.id);
		});

	}

	ngOnInit(): void {
	}

	getArtist(id: string) {
		this.spotify.getArtist(id)
			.subscribe(artist => {
				console.log(artist);
				this.artist = artist;
				this.loading = false;
			});
	}

	getTopTracks(id: string) {
		this.spotify.getTopTracksForArtist( id )
			.subscribe( topTracks => {
				this.tracks = topTracks;
			});

	}

}
