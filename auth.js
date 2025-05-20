// auth.js
const BASIC_AUTH_USER = 'demo'
const BASIC_AUTH_PASS = 'sunfit2024'

document.addEventListener('DOMContentLoaded', () => {
  const isAuthenticated = sessionStorage.getItem('auth');
  if (isAuthenticated === 'true') return;

  const entered = prompt('비밀번호를 입력하세요:');
  if (entered === BASIC_AUTH_PASS) {
    sessionStorage.setItem('auth', 'true');
  } else {
    alert('잘못된 비밀번호입니다.');
    window.location.href = 'https://google.com'; // 혹은 접근 차단
  }
});
