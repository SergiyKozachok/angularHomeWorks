import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Image} from '../Image';


@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']

})
export class GalleryItemComponent implements OnInit {
  @Input()
  image: Image;

  @Output() onDelete: EventEmitter<void> = new EventEmitter();

  public deleteImage() {
    this.onDelete.emit();
  }


  constructor() {
  }

  ngOnInit() {
  }
}
