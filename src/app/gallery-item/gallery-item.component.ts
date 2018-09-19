import {Component, OnInit, Input} from '@angular/core';
import {Image} from '../Image';


@Component({
  selector: 'app-gallery-item',
  template: '<mat-card class="example-card">\
        <mat-card-header>\
          <mat-card-title>{{image.title}}</mat-card-title>\
        </mat-card-header>\
        <img mat-card-image [src]="image.url">\
        <button mat-button>DELETE</button>\
      </mat-card>',
  styleUrls: ['./gallery-item.component.css']

})
export class GalleryItemComponent implements OnInit {
  @Input()
  image: Image;


  constructor() {
  }

  ngOnInit() {
  }

}
