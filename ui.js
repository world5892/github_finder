class UI {
  constructor() {
    this.profile = document.querySelector('.output');
  }

  showUser(user) {
    this.profile.innerHTML = `
      <div class="info"><img alt="" src="${user.avatar_url}"/></div>
      <div class="info">Repos: ${user.public_repos}</div>
      <div class="info">Gists: ${user.public_gists}</div>
      <div class="info">Followers: ${user.followers}</div>
      <div class="info">Following: ${user.following}</div>
      <div class="info">Blog: ${user.blog}</div>
      <div class="info">Location: ${user.location}</div>
      <div class="info">Member since: ${user.created_at}</div>
    `;
  }

  clearUser() {
    this.profile.innerHTML = '';
  }

  showAlert(message) {
    this.clearAlert();
    const container = document.querySelector('.container');
    const article = document.querySelector('article');
    const div = document.createElement('div');
    div.textContent = message;
    div.className = 'clear';
    container.insertBefore(div, article);

    setTimeout(() => div.remove(), 3000);
  }

  clearAlert() {
    const div = document.querySelector('.clear');

    if (div) {
      div.remove();
    }
  }
}