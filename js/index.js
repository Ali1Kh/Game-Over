import { gamesData } from "./home.js";
import { gameDetailes } from "./details.js";
new gamesData();
export function loadPage() {
  $(".loading").fadeIn(1000, function () {
    $(".loading").addClass("d-flex");
      $(".loading").removeClass("d-none");
      $("body").css("overflow", "hidden");
    $(".spinner").fadeIn(1000, function () {
    
    });
  });
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

