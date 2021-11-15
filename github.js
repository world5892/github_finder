class GitHub {
  constructor() {
    this.client_id = '8cb2db0887cba18d1552';
    this.secret = '5edfe8d84c37f1bb3440373456849ae9a7b27bc6';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret}`);

    const profile = await profileResponse.json();

    return { profile };
  }
}