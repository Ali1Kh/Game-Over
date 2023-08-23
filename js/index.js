import { gamesData } from "./home.js";
new gamesData();
export function loadPage() {
  $(".loading").fadeIn();
  $(".spinner").fadeIn();
  $(".loading").addClass("d-flex");
  $(".loading").removeClass("d-none");
  $("body").css("overflow", "hidden");
}
export function pageLoaded() {
  $(".spinner").fadeOut(1000, function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").removeClass("d-flex");
      $(".loading").addClass("d-none");
    });
  });
}
$("document").ready(() => {
  pageLoaded();
});
