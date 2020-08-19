const button = document.querySelector('button');

// a comment
button.addEventListener('click', () => {
  console.log('Clicked!');
});

// noEmitOnError: false를 설정하면 문제가 있든 없든 output을 생성함(에러는 발생)
