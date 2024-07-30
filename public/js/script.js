function sendMessage(type) {
    const url = type === 'Career' ? '/button/career' : '/button/skill';
    const messageText = type === 'Career' ? '내 경력에 대해 이야기합니다.' : '내 기술에 대해 이야기합니다.';
    const imageUrl = '/resource/response.jpg'; // 사용할 이미지 URL
    const chat_bot_image = '/resource/image1.jpg'; // 사용할 이미지 URL

    // 선택한 항목에 대한 메시지를 표시
    displayMessage('상대방', messageText, imageUrl);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: '버튼 클릭됨' }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.response); // 서버에서 받은 응답 처리
        displayMessage('chat_bot',data.response,chat_bot_image)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// 메시지를 화면에 추가하는 함수
function displayMessage(sender, message, imageUrl) {

    if(sender === '상대방')
    {
        const responseArea = document.getElementById('responseArea');
        const messageElement = document.createElement('div');
        messageElement.className = 'response-message';
    
        const textElement = document.createElement('p');
        textElement.textContent = `${message}`;
    
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl; // 이미지 URL 설정
    
        messageElement.appendChild(textElement);
        messageElement.appendChild(imgElement);
        responseArea.appendChild(messageElement);
    }
    else
    {
        const responseArea = document.getElementById('responseArea');
        const messageElement = document.createElement('div');
        messageElement.className = 'response-message_1';
    
        const textElement = document.createElement('p');
        textElement.textContent = `${message}`;
    
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl; // 이미지 URL 설정
    
        messageElement.appendChild(textElement);
        messageElement.appendChild(imgElement);
        responseArea.appendChild(messageElement);
    }
}
