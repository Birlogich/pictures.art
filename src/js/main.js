import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize,js";
import accordion from "./modules/accordion";
import burger from "./modules/burger";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  sliders(".main-slider-item", "vertical");
  forms();
  mask('[name="phone"]');
  showMoreStyles(".button-styles", ".styles-2");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pictureSize(".sizes-block");
  accordion(".accordion-heading");
  burger(".burger-menu", ".burger");
});
