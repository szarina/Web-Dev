import { Component,OnInit } from '@angular/core';
import {Album} from "../Album";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums:Album[];
  loaded:boolean;

  constructor(private albumsService:AlbumsService) {
    this.albums=[];
    this.loaded=true;
  }

  ngOnInit():void{
  this.getAlbums()
  }

  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums)=>{
      this.albums = albums;
      this.loaded  = true;
    })
  }
}
