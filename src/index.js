import App from "./js/controllers/app.js";
import polyfill1 from "./js/utils/customEventPolyfill.js";
import polyfill2 from "./js/utils/arrayMehtodPolyfill.js";
import "ie-array-find-polyfill";
import "custom-event-polyfill";
import style from "./css/app.css";

App.init();