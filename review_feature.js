// 這個檔案有幾個值得 review 的地方，試著找找看！

// 問題一：變數命名不清楚
function a(x) {
  var d = document.getElementById('chat-box');
  var m = document.createElement('div');
  m.textContent = x;
  d.appendChild(m);
}

// 問題二：重複的程式碼
function addUserMessage(text) {
  var chatBox = document.getElementById('chat-box');
  var div = document.createElement('div');
  div.className = 'message user';
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(text) {
  var chatBox = document.getElementById('chat-box');
  var div = document.createElement('div');
  div.className = 'message bot';
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;  // 這行和上面一樣
}

// 問題三：沒有處理空白輸入
function send(input) {
  addUserMessage(input);
  addBotMessage('收到：' + input);
}
