let logged;

// 작성 후 바로 호출을 받았기 때문에 오류 인식
function sendAnalytics(data: string) {
  console.log(data);
  logged = true; // 작성 후 아직 사용되지 않았기 때문에 any
  console.log(logged); // boolean
}

sendAnalytics('The data');
