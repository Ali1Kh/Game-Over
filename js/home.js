import { loadPage } from "./index.js";
import { gamesUi } from "./ui.js";
import { gameDetailes } from "./details.js";
export class gamesData {
  constructor() {
    this.getData("mmorpg");
    this.ui = new gamesUi();
    $(".nav-link").click((e) => {
      $(".nav-link.active").removeClass("active");
      $(e.target).addClass("active");
      loadPage();
      this.getData($(e.target).attr("data-category"));
    });
  }
  async getData(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8c4f0bdccfmsh2fb7284ac8f25cbp1391a5jsnc44e3a8f48d4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    this.result = await response.json();
    this.ui.displayData(this.result);
    this.sendId();
  }
  sendId() {
    $(".games .row .card").click((e) => {
      loadPage();
      $(".details").addClass("d-block");
      $(".details").removeClass("d-none");
      $(".home").removeClass("d-block");
      $(".home").addClass("d-none");
      this.id = $($(e.target).parents(".card")).attr("data-id");
      console.log(this.id);
      this.details = new gameDetailes(this.id);
    });
  }
}
