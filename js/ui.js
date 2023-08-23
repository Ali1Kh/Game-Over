import { pageLoaded } from "./index.js";
export class gamesUi {
  constructor() {}
  displayData(data) {
    this.uiData = ``;
    for (let i = 0; i < data.length; i++) {
      this.uiData += `
  <div class="col-md-6 col-lg-4 col-xl-3">
                  <div class="card mainBg border-1 shadow h-100" data-id="${data[i].id}">
                      <div class="inner p-3 rounded-4">
                      <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                      <div class="card-body px-0">
                          <div class="title d-flex justify-content-between">
                          <h6 class="card-title">${data[i].title}</h6>
                          <p class="px-3 fw-semibold fs-7 rounded-3">Free</p>
                      </div>
                          <p class="card-text textGray fs-7">${data[i].short_description}</p>
                      </div>
                      <div class="card-footer py-3 d-flex justify-content-between">
                          <small class="p-1 rounded-3">${data[i].genre}</small>
                          <small class="p-1 rounded-3">${data[i].platform}</small>
                      </div>
                  </div>
                  </div>
              </div>`;
    }
    $(".games .container .row").html(this.uiData);
    $(".games .container .row .col .card").ready(() => {
      pageLoaded();
    });
  }
  displayDetails(details) {
    this.detailsData = `
   <div class="innerDetials">
  <div class="col-md-4">
                    <div class="gameImage p-2">
                        <img class="w-100" src="${details.thumbnail}" alt="">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="inner p-2">
                        <h4>Title: ${details.title}</h4>
                        <p>Category: <span class="p-1 fw-semibold fs-7 rounded-3">${details.genre}</span></p>
                        <p>Platform: <span class="fw-semibold  p-1 fs-7 rounded-3">${details.platform}</span></p>
                        <p>Status: <span class="fw-semibold fs-7 p-1 rounded-3">${details.status}</span></p>
                        <p class="fs-7">${details.description}</p>
                        <button id="showGame" class="btn border-2"><a class="text-white text-decoration-none" href="${details.game_url}" target="_blank">Show Game</a></button>
                    </div>
                </div>
                </div>
  `;
    $(".details .row").html(this.detailsData);
    $(".details .row .innerDetials").ready(() => {
      pageLoaded();
    });
  }
}
