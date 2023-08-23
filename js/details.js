import { loadPage, pageLoaded } from "./index.js";
import { gamesUi } from "./ui.js";
export class gameDetailes {
  constructor(id) {
    $(".close").click(() => {
      loadPage();
      $(".details").addClass("d-none");
      $(".details").removeClass("d-block");
      $(".home").removeClass("d-none");
      $(".home").addClass("d-block");
      pageLoaded();
    });
    this.ui = new gamesUi();
    this.getDetails(id);
  }
  async getDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8c4f0bdccfmsh2fb7284ac8f25cbp1391a5jsnc44e3a8f48d4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    this.ui.displayDetails(result);
  }
}
