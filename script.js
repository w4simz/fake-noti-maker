function takeScreenshot() {
  const btn = document.querySelector('.screenshot-btn');
  const inputSection = document.querySelector('.username-input');
  btn.style.display = 'none';
  inputSection.style.display = 'none';

  html2canvas(document.body).then(canvas => {
    const link = document.createElement('a');
    link.download = 'instagram_report.png';
    link.href = canvas.toDataURL();
    link.click();
    btn.style.display = 'block';
    inputSection.style.display = 'flex';
  });
}

function changeUsername() {
  const newUser = document.getElementById('newUsername').value.trim();
  if(newUser) {
    document.getElementById('username-display').innerText = newUser;
    document.getElementById('newUsername').value = '';
  }
}