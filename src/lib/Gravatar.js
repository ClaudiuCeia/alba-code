import md5 from 'md5';

class Gravatar {
  constructor(emailAddress = '') {
    this.hash = md5(emailAddress.toLowerCase().trim());
  }

  get(size = 80) {
    return 'https://www.gravatar.com/avatar/' + this.hash + '?s=' + size;
  }
}

export default Gravatar;
