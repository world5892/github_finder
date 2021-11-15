const input = document.querySelector('input[type=text]');
const github = new GitHub();
const ui = new UI();

input.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User Not Found');
        } else {
          ui.showUser(data.profile);
        }
      });
  } else {
    ui.clearUser();
  }
});