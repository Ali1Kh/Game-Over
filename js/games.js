export class gamesUi {
  constructor() {}
  displayData(data) {
    this.uiData = ``;
    for (let i = 0; i < data.length; i++) {
      this.uiData += `
  <div class="col">
                  <div class="card mainBg border-1 shadow h-100">
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
  }
  displayDetailes() {}
}
