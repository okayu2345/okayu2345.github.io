"use strict";

// JavaScriptが無効でも、作品紹介やページ移動はそのまま利用できます。
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
