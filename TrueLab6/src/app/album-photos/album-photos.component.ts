import { Component,OnInit } from '@angular/core';
import {Photo} from "../Photo";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  photos: Photo[];
  loaded: boolean;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) {
    this.photos = [] as Photo[];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPhotos()

  }

  getPhotos() {
    console.log(this.route.paramMap)
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbumPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });

    })
  }
}
