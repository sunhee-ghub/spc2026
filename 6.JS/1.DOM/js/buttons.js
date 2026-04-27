// 버튼 요소 가져오기
const incButton = document.getElementById('incButton');
const decButton = document.getElementById('decButton');

// 결과 영역 가져오기
const result = document.getElementById('result');


// +1 기능
function increment() {
    let value = parseInt(result.textContent);
    value = value + 1;
    result.textContent = value;
}

// -1 기능
function decrement() {
    let value = parseInt(result.textContent);
    value = value - 1;
    result.textContent = value;
}


// 버튼에 기능 연결 (중요!)
incButton.addEventListener('click', increment);
decButton.addEventListener('click', decrement);