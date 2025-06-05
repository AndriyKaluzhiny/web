function getSystemInfo() {
  return {
    platform: navigator.userAgent
  };
}

function saveSystemInfoToLocalStorage() {
  const systemInfo = getSystemInfo();
  localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

  document.getElementById('platform').textContent = systemInfo.platform;
}

function closeModal() {
  const modal = document.getElementById('feedbackModal');
  modal.style.display = 'none';
}

setTimeout(() => {
    document.getElementById('feedbackModal').style.display = 'block'},
     60000);


function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');;
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}

function autoApplyTheme() {
    const currentHour = new Date().getHours();
    const body = document.body;

    if (currentHour >= 7 && currentHour < 21) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}

window.onload = function() { 
    const variantNumber = 10;
    const url = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;

     fetch(url)
      .then(response => response.json())
      .then(comments => {
        const list = document.getElementById('comments-list');
        comments.forEach(comment => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${comment.name}</strong> (${comment.email}):<br>${comment.body}`;
          list.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Помилка при отриманні коментарів:', error);
      });
}