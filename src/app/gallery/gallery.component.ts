import { Component, Input } from '@angular/core';
import {Image} from '../image';


@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryContainerComponent  {
  @Input()
  images: Image[];

  onDeleteImage(index: number) {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].id === index) {
        this.images.splice(i, 1);
      }
    }
  }
}
