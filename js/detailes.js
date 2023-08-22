// https://www.freetogame.com/api/game?id=540

export class gameDetailes {
  constructor(title, image, status, fullDescription, gameUrl, category) {
    this.title = title;
    this.image = image;
    this.status = status;
    this.fullDescription = fullDescription;
    this.gameUrl = gameUrl;
    this.category = category;
  }
}
