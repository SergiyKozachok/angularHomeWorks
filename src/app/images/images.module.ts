import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GalleryItemComponent } from '../gallery-item/gallery-item.component';
import {GalleryContainerComponent} from '../gallery/gallery.component';

import { MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    GalleryItemComponent,
    GalleryContainerComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    GalleryItemComponent,
    GalleryContainerComponent
  ],
})
export class ImagesModule { }
