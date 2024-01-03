export class EventDTO implements IEventDTO {
  id: string;
  teamOneName: string;
  teamTwoName: string;
  teamOneScore: number;
  teamTwoScore: number;
  shortDescription: string;
  description: string;
  date: Date;
  photoUrls: string[];
  categoryNames: string[];

  constructor(
    id: string,
    teamOneName: string,
    teamTwoName: string,
    teamOneScore: number,
    teamTwoScore: number,
    shortDescription: string,
    description: string,
    date: Date,
    photoUrls: string[],
    categoryNames: string[]
  ) {
    this.id = id;
    this.teamOneName = teamOneName;
    this.teamTwoName = teamTwoName;
    this.teamOneScore = teamOneScore;
    this.teamTwoScore = teamTwoScore;
    this.shortDescription = shortDescription;
    this.description = description;
    this.date = date;
    this.photoUrls = photoUrls;
    this.categoryNames = categoryNames;
  }
}

export interface IEventDTO {
  id?: string;
  teamOneName?: string;
  teamTwoName?: string;
  teamOneScore?: number;
  teamTwoScore?: number;
  shortDescription?: string;
  description?: string;
  date?: Date;
  photoUrls?: string[];
  categoryIds?: string[];
  categoryNames?: string[];
}

export interface IEventCategoryDTO {
  eventId: string;
  categoryId: string;
  event: IEventDTO;
  category: ICategoryDTO;
}

export interface ICategoryDTO {
  id: string;
  name: string;
}
