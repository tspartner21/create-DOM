//innerHTML을 활용한 동적 DOM생성
const frame = document.querySelector("section");

const data = [
  { text: "title", bg: "hotpink" },
  { text: "title2", bg: "aqua" },
  { text: "title3", bg: "orange" }
];
let tags = "";

data.forEach((el) => {
  tags += `
    <article>
    <h1 class='tit' data-bg=${el.bg}>${el.text}</h1>
    </article>`;
});


console.log(tags);

frame.innerHTML = tags;

//append로 동적 DOM생성
//기존 선택자 안쪽의 요소들을 유지하면서 뒤쪽에 새롭게 추가
//appned의 인수값으로는 문자값이 아닌 실제 Element Node형태로 전달
const asideEl = document.createElement("aside");
asideEl.classList.add("modal");
asideEl.innerText = "Modal";

//const btnEl = document.createElement("button");
//btnEl.innerText = "CLOSE";
//asideEl.append(btnEl);

//aside요소 안쪽의 복잡한 자식 요소 구조는 innerHTML로 생성
asideEl.innerHTML = `<div class='con'></div><button class='btnClose'>CLOSE</button>`;

//동적으로 생성된 요소에 이벤트 연결은 이벤트위임 처리
//이벤트 위임 : 항상 존재하는 body 요소에 이벤트를 맡겼다가 위임처리
document.body.addEventListener("click", (e) => {
  console.log(e.target.className);
  //내가 화면상에 출력된 요소가 .tit클래스를 가진 요소일때만 
  if (e.target.className === "tit") {
    document.body.append(asideEl);
    asideEl.style.backgroundColor = e.target.getAttribute('data-bg');
  }
});

document.body.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className === "btnClose") {
    document.querySelector(".modal").remove();
  }
});
//document.body.append(asideEl);
