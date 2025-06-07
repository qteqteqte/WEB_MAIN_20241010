# 2025-1학기 자바웹프로그래밍(1)
## 개요
2025-1 자바웹프로그래밍(1) 수업 프로젝트
- 기간: 2025/3/12~2025/5/28, 매주 수요일
- [프로젝트 메인 주소](https://github.com/qteqteqte/WEB_MAIN_20241010)

# 중간 (2주차~7주차)
## 2주차
**개발환경 준비(VS code 설치) 및 HTML 기초**
---
- VS code 설치
- Github 연동
- HTML 기초

### HTML 기초
```html
<!DOCTYPE html>
<!--이 부분은 주석문입니다. 웹 브라우저는 주석을 화면에 출력하지 않습니다.-->
<html>
<head><title> 타이틀 테스트</title>
문서제목, 자바스크립트 코드, CSS 스타일 정의, 메타데이터정의
</head>
<body>
문서의 본문 텍스트, 이미지, 테이블, 자바스크립트 코드, 동영상 등
</body>
</html>
```
- html의 태그 구성
    - `<html>` : 페이지 시작
    - `<head>` : 문서의 메타데이터(전역)
    - `<script>` : 자바 스크립트
    - `<body>` : 주요 컨텐츠(문자, 이미지, 영상 등)
    - `<div>` : 레이아웃 구분
    - `<iframe>` : 다른 HTML 문서 포함 (일반적으로 숨겨진다.)

- html의 레이아웃 구성
    - HEADER : TOP(상단)
    - SECTION, ARTICLE(중간)
    - NAV (네비 포함)
    - FOOTER (하단)

## 3주차
**메타데이터와 하이퍼링크, 테이블(HTML) 및 부트스트랩 적용**
---
- 프레임워크, 라이브러리 설명
- 부트스트랩 프레임워크 소개
- 메타데이터, 하이퍼링크

### 메타데이터
- <head> 내부에 삽입
    - 페이지 로딩에 필요한 표준 데이터 로딩
    - 외부에 노출할 페이지의 전역 정보(검색 엔진 등)

```html
<html>
    <head>
        <meta chatset="UTF-8">
        <title>lol 메인화면</title>
    </head>
    <body>
        <div style="display: flex;">
        </div>
    </body>
```

### 하이퍼링크
- 주로 `<body>` 내부에 삽입
    - 외부 페이지 연결

```html
<a href="index.html" target="_blank"> 기존 메인이미지 </a>
```

## 4주차
**JavaScript(JS) 소개 및 부트스트랩 적용(2)-JavaScript 기초**
---
- JavaScript(JS) 소개
- 부트스트랩 연동
- JS - 검색 창 기능 구현

### JavaScript
- 고전 HTML4 + CSS 한계인 정적 웹페이지
    - 동적 기능을 추가할 수 있는 JavaScript 로 해결
- `<script>`, `function` 함수를 통해 동적 스크립트 생성
- 객체/이벤트 기반 언어 (따라서 JAVA랑 언어가 비슷하면서도 다름)

```Javascript
document.getElementById("btn").addEventListener("click", function() {
  alert("버튼이 클릭되었습니다!");
});
```

### HTML에서 JavaScript 파일 불러오기
- `<head>`에 `<script>`를 삽입하면 된다.
```html
<script type="text/javascript" src="js/basic_js_test.js"></script>
```

### Basic_js.test.js
```Javascript
/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/
if (true) {
let c = 'let 접근';
var c_1 = 'var 접근';
}
//console.log(c); // Error?
console.log(c_1);
let d = 5;
//let d = '값 재할당'; // Error?
console.log(d);
const e = '상수1 접근';
//e = 5;
//const f // Error?
console.log(e);
```

- ES6 표준 이후 권장 변수 선언
    - let 변수명 = 값 (일반 = 추천)
    - { } 안에 변수 외부 접근 X
    - const 변수명 = 값 (상수)
    - 재할당 및 재선언 X

### search.js
```Javascript
document.getElementById("search_btn").addEventListener('click', search_message);
function search_message(){
alert("검색을 수행합니다!");
}
```
- .js 요소
    - 최상위 문서 : document
    - getElementById : 문서의 특정 id를 가져온다
    - addEventListener로 이벤트를 등록한다
    - click 은 마우스 이벤트의 한 종류
    - search_message() 는 함수 (`function` 으로 선언)

## 5주차
**JavaScript 기초(2)-데이터 타입과 함수(function)**
---
- JS 데이터 타입
- JS - 팝업 창 구현
- JS - 이미지 호버

### MAP과 SET
- MAP : 키와 값(쌍), 고유 키, 순서 X
- 키 값 제한 없음, 메모리 사용량 증가
- SET : 중복 제거(집합), 순서 유지,
- 키 값 제한 없음, 속도가 빠름

### Basic_js.test.js (이어서)
- 원시 타입
    - 원시 타입: 숫자, 문자, Boolean 등
    - `undefi` 와 `null`은 반드시 직접 값 확인
```Javascript
let number = 5;
let str = ‘문자열 입력’; // “ “도 묶음 가능
let prime = 1.5123;
let is_ok = true; // 참
let is_not = false; // 거짓
let undefi; // 변수 이름만, 초기화 x
let empty = null; // 비어 있음
console.log(undefi, empty); // 여러 개 출력
```

- 객체 타입
    - 객체 타입: 객체, 배열
    - 객체는 참조 타입이다
        - 데이터와 주소는 분리됨, 즉 주소만 저장하는 변수
        - 함수도 객체로 분류
```Javascript
const sym1 = Symbol('test'); // 심볼 함수로 값 생성
let symbolVar1 = sym1; // 변수 초기화
const airline = ["비행기", 320, "airbus", ["V1", true]];
// 다양한 데이터 배열
// 빈 객체 생성
const obj1 = {};
// 속성을 추가하여 객체 생성
const obj2 = {
name: "John Doe",
age: 30,
isMale: true,
};
console.log(symbolVar1.toString()); // 문자열 변환 출력
console.log(obj1, obj2, airline); // 여러 개 출력
```

- MAP, SET
    - MAP : 이름은 키, 아이디와 패스워드 조합
    - SET : 이름 중복 X
```Javascript
const users = new Map(); // 사용자 정보 Map 객체 생성
users.set("user1", { // 사용자 정보 추가
id: 1, password: "password123",
});
users.set("user2", {
id: 2, password: "password456",
});
// Map 객체의 모든 사용자 정보 반복 출력
for (const [username, user] of users) {
console.log(`사용자 이름: ${username}`, `ID: ${user.id}`);
console.log(`비밀번호: ${user.password}`);
}
// Set 객체 활용 (예), 이름만 저장할 Set 객체 생성
const usernames = new Set();
usernames.add("user1"); // 사용자 이름 추가
usernames.add("user2");
// Set 객체의 모든 사용자 이름 반복 출력
for (const username of usernames) {
console.log(`사용자 이름: ${username}`);
}
```

## 6주차-7주차
**함수(function) 심화 및 폼(form)**
---
- HTTP/HTTPS 설명
- 폼(form)을 통한 데이터 전송
    - JS - 로그인 폼 구현
- JS - 이미지 호버

### ES6 이후 Javascript -> 화살표 함수
- 화살표 함수(arrow function)
    - 장점: 간결하고 명확한 표현, 괄호 생략 O
    - 단점: NEW 연산자 불가능(객체 생성 X)

```Javascript
const over = (obj) => {
obj.src = "image/LOGO.png";
};
const search_message = () => {
const c = '검색을 수행합니다';
alert(c);
}
```

### 화살표 함수 이용한 Check_Input.js (공백 체크)
```Javascript
const check_input = () => {
const loginForm = document.getElementById('login_form');
const loginBtn = document.getElementById('login_btn');
const emailInput = document.getElementById('typeEmailX');
const passwordInput = document.getElementById('typePasswordX');
const c = '아이디, 패스워드를 체크합니다';
alert(c);
const emailValue = emailInput.value.trim();
const passwordValue = passwordInput.value.trim();
if (emailValue === '') {
alert('이메일을 입력하세요.');
return false;
}
if (passwordValue === '') {
alert('비밀번호를 입력하세요.');
return false;
}
console.log('이메일:', emailValue);
console.log('비밀번호:', passwordValue);
loginForm.submit();
};
document.getElementById("login_btn").addEventListener('click', check_input);
```

- 폼, 버튼, 이메일, 패스워드 식별
- 이메일, 패스워드의 공백 제거
- 공백이면 함수 중단
- 마지막으로 폼을 submit

# 기말 (9주차~13주차)
## 9주차
**입력 필터링 및 데이터 저장(쿠키)**
---
- CSRP, XSS 설명
- JS - 입력 필터링(로그인)
    - 입력 길이/특수문자 제한
    - XSS 방지
- 데이터 저장(쿠키)
    - JS - 쿠키 설정(팝업창 - X일 보지 않기)

### CSRP, XSS
- CSRF: 사용자 인증 정보를 악용하여 비정상 요청을 웹 서버에 전송
    - 인증 정보 탈취: 로그인된 상태 정보 등
    - 해결책: REFERER 검증, CSRF 토큰 구현, 서버 보안 설정

- XSS: 악성 코드를 페이지에 삽입하여 웹 브라우저를 공격
    - 사용자 정보 탈취: 개인정보, 로그인 정보 등
    - 해결책: 입력 데이터 검증, 서버 보안 설정
 
### Check_Input.js 수정 (입력 길이, 특수문자 체크)
- if문으로 조건의 순차 처리
    - 문자열의 길이 length 함수 처리
    - 특수 문자 및 대/소문자 체크
- match 함수는 없으면 null 리턴
    - / / 범위의 문자열 찾는 정규표현식

```Javascript
if (emailValue.length < 5) {
alert('아이디는 최소 5글자 이상 입력해야 합니다.');
return false;
}
if (passwordValue.length < 12) {
alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
return false;
}
const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-
=\[\]{};':"\\|,.<>\/?]+/) !== null;
if (!hasSpecialChar) {
alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
return false;
}
const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
if (!hasUpperCase || !hasLowerCase) {
alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
return false;
}
```

### login.js 수정 (DOMPuirfy 라이브러리 활용하여 XSS 방지)
- Sanitized 함수
    - 특수문자를 안전한 문자형태로 변환
    - `<script>` `<iframe>` `<svg>` 태그 제거 등
    - 스타일 속성, url 형식 등 다양한 정보 제거

```Javascript
const check_xss = (input) => {
// DOMPurify 라이브러리 로드 (CDN 사용)
const DOMPurify = window.DOMPurify;
// 입력 값을 DOMPurify로 sanitize
const sanitizedInput = DOMPurify.sanitize(input);
// Sanitized된 값과 원본 입력 값 비교
if (sanitizedInput !== input) {
// XSS 공격 가능성 발견 시 에러 처리
alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
return false;
}
// Sanitized된 값 반환
return sanitizedInput;
};
```

- 이후 Check_Input.js 도 수정 (Sanitized 과정)
```Javascript
const sanitizedPassword = check_xss(passwordInput);
// check_xss 함수로 비밀번호 Sanitize
const sanitizedEmail = check_xss(emailInput);
// check_xss 함수로 비밀번호 Sanitize
if (!sanitizedEmail) {
// Sanitize된 비밀번호 사용
return false;
}
if (!sanitizedPassword) {
// Sanitize된 비밀번호 사용
return false;
}
```

### 쿠키
- 서버 → 클라이언트로 전송되어 브라우저에 저장되는 일종의 데이터
- 세션 상태 유지, 사용자 식별, 설정 저장 등을 위해 사용

### 쿠키의 유무를 체크
```Javascript
function pop_up() {
var cookieCheck = getCookie("popupYN");
if (cookieCheck != "N"){
window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
}
}
```

### 쿠키를 SET/GET
- 쿠키를 SET
    - 현재 시간 기준 – date
    - setDate 함수는 시간을 설정
    - Expiredays 시간 설정 추가
    - getDate 함수는 UtC 표준 날짜 리턴

- 쿠키를 GET
    - 쿠키를 얻는다. 존재하면
    - 배열 반복하여 내부에 =을 제외한
    - popupYN 을 찾아 값을 리턴
    - 참고: 쿠키는 키, 값 으로 이루어짐
    - 즉, 값은 인덱스 [1]이 된다.

```Javascript
function setCookie(name, value, expiredays) {
var date = new Date();
date.setDate(date.getDate() + expiredays);
document.cookie = escape(name) + "=" + escape(value) + ";
expires=" + date.toUTCString() + "; path=/";
}

function getCookie(name) {
var cookie = document.cookie;
console.log("쿠키를 요청합니다.");
if (cookie != "") {
var cookie_array = cookie.split("; ");
for ( var index in cookie_array) {
var cookie_name = cookie_array[index].split("=");
if (cookie_name[0] == "popupYN") {
return cookie_name[1];
}
}
}
return;
}
```

## 10주차
**데이터 저장(쿠키) 심화 및 데이터 저장(세션)**
---
- 세션 설명
- 데이터 저장(쿠키) (이어서)
    - JS - 쿠키 설정(id 저장)
- 데이터 저장(세션)
    - JS - 세션 설정(로그인 유무)
 
### 세션
- 사용자가 서버에 접속하면 얻게 되는 데이터, 혹은 사용자가 접속한 하나의 상태
- 브라우저(로컬)에 저장되는 쿠키와 달리 서버에서 저장되어 비교적 안전하다

### 쿠키 삭제
-  기존의 쿠키 set/get 함수를 재사용
```Javascript
// 전역 변수 추가, 맨 위 위치
const idsave_check = document.getElementById('idSaveCheck’);
// 검사 마무리 단계 쿠키 저장, 최하단 submit 이전
if(idsave_check.checked == true) { // 아이디 체크 o
alert("쿠키를 저장합니다.", emailValue);
setCookie("id", emailValue, 1); // 1일 저장
alert("쿠키 값 :" + emailValue);
}
else{ // 아이디 체크 x
setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
}
```

### ID 저장 (쿠키)
```Javascript
function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
const emailInput = document.getElementById('typeEmailX');
const idsave_check = document.getElementById('idSaveCheck');
let get_id = getCookie("id");
if(get_id) {
emailInput.value = get_id;
idsave_check.checked = true;
}
}
```

### 세션 SET/GET
- sessionStorage 객체를 활용
- 이후 기존의 함수에 `session_set();`을 호출해준다

```Javascript
function session_set() { //세션 저장
let session_id = document.querySelector("#typeEmailX");
if (sessionStorage) {
sessionStorage.setItem("Session_Storage_test", session_id.value);
} else {
alert("로컬 스토리지 지원 x");
}
}

function session_get() { //세션 읽기
if (sessionStorage) {
return sessionStorage.getItem("Session_Storage_test");
} else {
alert("세션 스토리지 지원 x");
}
}
```

### 세션 체크 
```Javascript
function session_check() { //세션 검사
if (sessionStorage.getItem("Session_Storage_test")) {
alert("이미 로그인 되었습니다.");
location.href=‘../login/index_login.html’; // 로그인된 페이지로 이동
}
}
```

## 11주차
**세션 암호화 및 보안 토큰(JWT_token) 적용**
---
- 암호화와 보안 토큰(JWT_token)
- 데이터 저장(세션)
    - JS - 세션 암호화/복호화 처리(crypto-js 라이브러리)
    - JS - JWT_token 적용

### JWT (JSON Web Token)
- JSON 형식의 보안 토큰
    - 사용자 인증, 확장성과 빠른 인증 제공
- OAuth2.0, 로그인 세션 등에서 사용됨

### JWT의 내부 구조
- Header
- Payload
- Signature (서명)

### JWT 토큰 생성
- 전역 변수 생성 (최상단)
```Javascript
const payload = {
id: emailValue,
exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
};
const jwtToken = generateJWT(payload);
```

- JWT_token.js
```Javascript
// JWT 비밀 키 (실제 운영 환경에서는 복잡한 키 사용 필수)
const JWT_SECRET = "your_secret_key_here";
function generateJWT(payload) {
// 1. 헤더 생성 및 Base64 인코딩
const header = { alg: "HS256", typ: "JWT" };
const encodedHeader = btoa(JSON.stringify(header));
// 2. 페이로드 Base64 인코딩
const encodedPayload = btoa(JSON.stringify(payload)); // JSON 형태로 변환 후 인코딩
// 3. 서명 생성 (HMAC-SHA256 알고리즘 사용)
const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
const encodedSignature = CryptoJS.enc.Base64.stringify(signature);
// 4. 최종 토큰 조합
return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}
```

```Javascript
function verifyJWT(token) { // 토큰 검증
try {
// 1. 토큰을 헤더, 페이로드, 서명으로 분할
const parts = token.split('.');
if (parts.length !== 3) return null; // 형식 오류 체크
const [encodedHeader, encodedPayload, encodedSignature] = parts;
// 2. 서명 재계산 및 비교
const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
const calculatedSignature = CryptoJS.enc.Base64.stringify(signature);
if (calculatedSignature !== encodedSignature) return null; // 서명 불일치
// 3. 페이로드 파싱 및 만료 시간 검증
const payload = JSON.parse(atob(encodedPayload)); // 디코딩 후 해석
if (payload.exp < Math.floor(Date.now() / 1000)) { // 밀리초 단위
console.log('보안 토큰이 만료되었습니다');
return null;
}
return payload; // 검증 성공
} catch (error) {
return null; // 파싱 오류 또는 기타 예외 처리
}
}
```

```Javascript
function isAuthenticated() { // 사용자 인증 상태 확인
const token = localStorage.getItem('jwt_token');
if (!token) return false; // 토큰 없음
const payload = verifyJWT(token);
console.log(payload);
return !!payload; // 페이로드 유무로 인증 상태 판단
}
function checkAuth() { // 인증 검사 수행
const authenticated = isAuthenticated(); // 한 번만 검증 호출
if (authenticated) {
alert('정상적으로 토큰이 검증되었습니다.');
} else {
alert('토큰 검증 에러!! 인증되지 않은 접근입니다.');
window.location.href = '../login/login.html'; // 로그인 페이지 이동
}
}
```

## 12주차
**클래스 및 모듈화**
---
- 클래스 및 모듈 설명
- JS - 세션 내 객체 저장하기
- JS - 회원가입 구현

### Javascript 에서 클래스
- 생성자 : constructor 지원
    - 객체 생성과 동시에 실행
- 속성(필드), 행동(메서드) 정의
    - SET/GET 함수 등
- New 연산자 – 객체 인스턴스 생성

### 모듈화 (Import/Export)
- `module` 기능을 이용하여 특정 파일을 하나로 로딩
- 호출 되는 함수만 `import`로 .js 최상단에서 처리

```html
<script type="module" src="../js/login.js" defer></script>
```

```Javascript
import { session_set, session_get, session_check } from './session.js';
import { encrypt_text, decrypt_text } from './crypto.js';
import { generateJWT, checkAuth } from './jwt_token.js';
```

- 호출 되는 함수는 모두 `export` 처리 필요

### 회원가입 (객체 저장, 클래스 사용)
```Javascript
class SignUp {
constructor(name, email, password, re_password) {
// 생성자 함수: 객체 생성 시 회원 정보 초기화
this._name = name;
this._email = email;
this._password = password;
this._re_password = re_password;
}

// 전체 회원 정보를 한 번에 설정하는 함수
setUserInfo(name, email, password, re_password) {
this._name = name;
this._email = email;
this._password = password;
this._re_password = re_password;
}
// 전체 회원 정보를 한 번에 가져오는 함수
getUserInfo() {
return {
name: this._name,
email: this._email,
password: this._password,
re_password: this._re_password
};
}
}
```

```Javascript
const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value); // 회원가입 정보 객체 생성
session_set2(newSignUp); // 세션 저장 및 객체 전달
```

## 13주차
**웹 오픈 API(카카오맵) 사용**
---
- 웹 오픈 API 소개
    - 지도 서비스(카카오맵)
- JS - 지도 API 구현(카카오맵)
