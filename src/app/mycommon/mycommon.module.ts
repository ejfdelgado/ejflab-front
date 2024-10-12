import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ImagepickerComponent } from './components/imagepicker/imagepicker.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FechaCardPipe } from './pipes/fecha-card.pipe';
import { TxtfileeditorComponent } from './components/txtfileeditor/txtfileeditor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import { BlobeditorComponent } from './components/blobeditor/blobeditor.component';
import { FileordevicepopupComponent } from './components/fileordevicepopup/fileordevicepopup.component';
import { FilepickerComponent } from './components/filepicker/filepicker.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CanvaseditorComponent } from './components/canvaseditor/canvaseditor.component';
import { MatSliderModule } from '@angular/material/slider';
import { ScrollnavComponent } from './components/scrollnav/scrollnav.component';
import { ScrollfilesComponent } from './components/scrollfiles/scrollfiles.component';
import { PrejsonComponent } from './components/prejson/prejson.component';
import { ScrollfileComponent } from './components/scrollfile/scrollfile.component';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { NgInit } from './directives/NgInit';
import { JsonColorPipe } from './pipes/json-color.pipe';
import { Json2svg } from './pipes/json2svg.pipe';
import { Epoch2datePipe } from './pipes/epoch2date.pipe';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    CardComponent,
    ImagepickerComponent,
    StatusbarComponent,
    FechaCardPipe,
    TxtfileeditorComponent,
    BlobeditorComponent,
    FileordevicepopupComponent,
    FilepickerComponent,
    CanvaseditorComponent,
    ScrollnavComponent,
    ScrollfilesComponent,
    PrejsonComponent,
    ScrollfileComponent,
    SortByNamePipe,
    JsonColorPipe,
    Epoch2datePipe,
    TranslatePipe,
    Json2svg,
    NgInit,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ContenteditableValueAccessorModule,
    MatProgressBarModule,
    MatSliderModule,
  ],
  exports: [
    CardComponent,
    ImagepickerComponent,
    StatusbarComponent,
    TxtfileeditorComponent,
    BlobeditorComponent,
    FilepickerComponent,
    FileordevicepopupComponent,
    CanvaseditorComponent,
    ScrollnavComponent,
    ScrollfilesComponent,
    PrejsonComponent,
    SortByNamePipe,
    JsonColorPipe,
    FechaCardPipe,
    Epoch2datePipe,
    TranslatePipe,
    Json2svg,
    NgInit,
  ],
  providers: [TranslatePipe],
})
export class MycommonModule {}
