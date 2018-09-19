import { Component, Input } from '@angular/core';
import {Image} from '../image';


@Component({
  selector: 'app-gallery-container',
  template: '<app-gallery-item *ngFor="let image of images" [image]="image">\
        </app-gallery-item>',
  styleUrls: ['./gallery.component.css']
})
export class GalleryContainerComponent  {
  @Input()
  images: Image[];
}
