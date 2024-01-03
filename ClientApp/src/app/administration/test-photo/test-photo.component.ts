import { Component } from '@angular/core';
import { AzureBlobStorageService } from 'src/app/services/azure-blob-storage.service';

@Component({
  selector: 'app-test-photo',
  templateUrl: './test-photo.component.html',
  styleUrls: ['./test-photo.component.css'],
})
export class TestPhotoComponent {
  public pictureUrls: string[] = [];
  private sas =
    'sp=rw&st=2024-01-03T14:37:23Z&se=2024-03-30T22:37:23Z&sv=2022-11-02&sr=c&sig=a5XnMGedtAOkw0Cac7gS00HipUQ0vtEmcsKmzPyOmFU%3D';
  constructor(private blobService: AzureBlobStorageService) {}

  public imageSelected(event: any) {
    const file = event.target.files[0];
    console.log(event.target, file);
    this.blobService.uploadImage(this.sas, file, file.name, (url) => {
      console.log(url);
      this.pictureUrls.push(url);
      //this.reloadImages();
    });
  }
}
