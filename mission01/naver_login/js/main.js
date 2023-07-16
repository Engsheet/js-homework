
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}


/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* -------------------------------------------------------------------------- */

const userId = document.querySelector("#userEmail");
const userPw = document.querySelector("#userPassword");
const loginBtn = document.querySelector(".btn-login")
let idPass = false
let pwPass = false

/* -------------------------------------------------------------------------- */

function handleIdCheck() {
  if (emailReg(this.value) || this.value === "") {
    this.classList.remove("is--invalid");
    idPass = true
  } else {
    this.classList.add("is--invalid");
    idPass = false;
  }
}

function handlePwCheck() {
  if (pwReg(this.value) || this.value === "") {
    this.classList.remove("is--invalid");
    pwPass = true
  } else {
    this.classList.add("is--invalid");
    pwPass = false
  }
}

function handleBtnClick(e) {
  e.preventDefault();

  if (idPass && pwPass) {
    if (userId.value === user.id && userPw.value === user.pw) {
      window.location.href = "welcome.html";
    } else {
      alert("입력하신 아이디와 비밀번호를 다시 확인하십시오.");
      window.location.href = "index.html";
    }
  } else {
    alert("입력하신 아이디와 비밀번호 형식을 확인하십시오.");
  }
}

/* -------------------------------------------------------------------------- */

userId.addEventListener("input", handleIdCheck);
userPw.addEventListener("input", handlePwCheck);
loginBtn.addEventListener("click", handleBtnClick);
