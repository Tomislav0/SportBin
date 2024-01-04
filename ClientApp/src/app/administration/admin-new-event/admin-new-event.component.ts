import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ICategoryDTO, IEventDTO } from 'src/app/models';
import { AzureBlobStorageService } from 'src/app/services/azure-blob-storage.service';
import { CategoryService } from 'src/app/services/category.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'admin-new-event',
  templateUrl: './admin-new-event.component.html',
  styleUrls: ['./admin-new-event.component.css'],
})
export class AdminNewEventComponent {
  public pictureUrls: string[] = [];
  private sas =
    'sp=rw&st=2024-01-03T14:37:23Z&se=2024-03-30T22:37:23Z&sv=2022-11-02&sr=c&sig=a5XnMGedtAOkw0Cac7gS00HipUQ0vtEmcsKmzPyOmFU%3D';
  public availableCategories: ICategoryDTO[] = [];
  public newEvent: IEventDTO = {
    id: undefined,
    teamOneName: '',
    teamTwoName: '',
    teamOneScore: 0,
    teamTwoScore: 0,
    shortDescription: '',
    description: '',
    date: new Date(Date.now()),
    photoUrls: [],
    categoryNames: [],
    categoryIds: [],
  };

  constructor(
    public eventsService: EventService,
    private datePipe: DatePipe,
    private blobService: AzureBlobStorageService,
    private categoryService: CategoryService
  ) {
    categoryService.getEventCategories().subscribe((result) => {
      this.availableCategories = result;
    });
  }

  public getFormattedDate() {
    return this.datePipe.transform(this.newEvent.date, 'yyyy-MM-dd');
  }

  public setFormattedDate(date: string) {
    return new Date(date);
  }

  public resetSelections() {
    this.newEvent = {
      id: '',
      teamOneName: '',
      teamTwoName: '',
      teamOneScore: 0,
      teamTwoScore: 0,
      shortDescription: '',
      description: '',
      date: new Date(Date.now()),
      photoUrls: [],
      categoryNames: [],
    };
  }

  public saveEntry() {
    if (this.validateEntries()) {
      this.eventsService.postEvent(this.newEvent).subscribe(
        (response) => {
          alert('Događaj uspješno dodan');
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  validateEntries() {
    if (this.newEvent.teamOneName === '' || this.newEvent.teamTwoName === '') {
      console.log('ime');
      return false;
    }
    if (this.newEvent.date === null) {
      console.log('date');
      return false;
    }
    if (this.newEvent.categoryIds === undefined) {
      return false;
    }
    if (
      this.newEvent.categoryIds !== null &&
      this.newEvent.categoryIds!.length <= 0
    ) {
      console.log('categoryNames');
      return false;
    }
    return true;
  }

  public imageSelected(event: any) {
    const file = event.target.files[0];
    console.log(event.target, file);
    this.blobService.uploadImage(this.sas, file, file.name, (url) => {
      console.log(url);
      this.pictureUrls.push(url);
      this.newEvent.photoUrls = this.pictureUrls;
    });
  }
}
