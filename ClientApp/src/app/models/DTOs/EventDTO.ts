export class EventDTO {
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
