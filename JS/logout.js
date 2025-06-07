import { session_del } from './session.js';

const check_input = () => {
    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
    logout();
}

function logout() {
    session_del(); // 세션 삭제
    location.href='lol_index_7주차.html';
}

document.getElementById("logout_btn").addEventListener('click', check_input);