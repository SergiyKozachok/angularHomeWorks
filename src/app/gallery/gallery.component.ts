import { Component, Input, ViewChild } from '@angular/core';
import {Image} from '../image';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryContainerComponent  {
  @ViewChild('addImageForm') formValues;
  @Input()
  images: Image[];
  newImage: Image = new Image();
  addImageForm: FormGroup;
  imagesTitle: string;
  imagesUrl: string;
  isRequired = true;

  onDeleteImage(index: number) {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].id === index) {
        this.images.splice(i, 1);
      }
    }
  }

  onAddedImage () {
    this.newImage.title = this.imagesTitle;
    this.newImage.url = this.imagesUrl;
    this.newImage.id = Math.max(0, ...this.images.map(({id}) => id)) + 1;
    this.images.unshift(this.newImage);
    this.formValues.resetForm();
  }
}
