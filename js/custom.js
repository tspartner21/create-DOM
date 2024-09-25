const frame = document.querySelector("section");

// const data = ["title1", "title2", "title3"];

// let tags = "";

// data.forEach((el) => {
//   tags += `
//     <article>
//     <h1>${el}</h1>
//     </article>`;
// });


const data = ["하하", "호호"];

let tags = "";

data.forEach((el) => {
  tags += `<article><h2>${el}</h2></article>`;
});

console.log(tags);

frame.innerHTML = tags;

//append로 동적 DOM 생성
//기존 선택자 안쪽의 요소들을 유지하면서 뒤쪽에 새롭게 추가
// frame.append("<aside>Modal</aside>");

// const asideEl = document.createElement("aside");
// asideEl.classList.add("modal");
// asideEl.innerText = "Modal";
// console.dir(asideEl);
// frame.append(asideEl);

const asideEl = document.createElement("aside");
asideEl.classList.add("test-nam");
asideEl.innerText = "Modal창 만들기";
console.dir(asideEl);
frame.append(asideEl);


// const btnEl = document.createElement("button");
// btnEl.innerHTML = "CLOSE";
// asideEl.append(btnEl);

asideEl.innerHTML = `
  <button>CLOSE</button>`;

frame.append(asideEl);


