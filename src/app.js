import { plus } from "./plus.js";
import tiger from "./tiger.png";
import andriod from "./android.png";
console.log(plus(3, 7));

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${tiger}"/><img src="${andriod}"/>`;
});
