import { gamesUi } from "./games.js";
// import { loadPage } from "./index.js";
export class gamesData {
  constructor() {
    this.getData("mmorpg");
    this.games = new gamesUi();
    $(".nav-link").click((e) => {
      $(".nav-link.active").removeClass("active");
      $(e.target).addClass("active");
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
    const result = await response.json();
    this.games.displayData(result);
  }
}
