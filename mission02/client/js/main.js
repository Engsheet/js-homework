/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { attr, getNode, getNodes, removeClass, addClass } from "../lib/index.js";

/* -------------------------------------------------------------------------- */
const body = getNode("body");
const nav = getNode(".nav");
const posterImg = getNode(".visual img");
const nickName = getNode(".nickName");
/* -------------------------------------------------------------------------- */

// Set Background-Color (linear-gradient)
function setBgColor(node, colorA, colorB = "#000") {
  if (typeof node === "string") node = getNode(node);

  node.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// Set Image
function setImg(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof prop !== "string") {
    throw new TypeError("setImg 함수의 두 번째 전달인자는 문자열이어야 합니다.");
  }
  node.setAttribute(prop, value);
}

// Set NameText
function setNameText(node, value) {
  node.textContent = value;
}

// Change Poster
function handleChangePoster(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  if (!target) return;
  const listNodes = getNodes("li");
  const index = attr(target, "data-index");

  listNodes.forEach((item) => removeClass(item, "is-active"));
  addClass(target, "is-active");

  setBgColor(body, data[index - 1].color[0], data[index - 1].color[1]);
  setImg(posterImg, "src", `./assets/${data[index - 1].name}.jpeg`);
  setImg(posterImg, "alt", data[index - 1].alt);
  setNameText(nickName, data[index - 1].name);
}

nav.addEventListener("click", handleChangePoster);