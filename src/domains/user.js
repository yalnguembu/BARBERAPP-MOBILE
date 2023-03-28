export class User {
  isNull = true;
  user;

  constructor(data) {
    if (data) {
      this.isNull = false;
      this.user = data;
    }
  }

  get id() {
    return this.user?.id ?? "0";
  }
  set id(value) {
    this.id = value;
  }

  get username() {
    return this.user?.username ?? "username";
  }
  set username(value) {
    this.username = value;
  }

  get email() {
    return this.user?.email ?? "email@ghost-barber.com";
  }
  set email(value) {
    this.email = value;
  }

  get picture() {
    return this.user?.picture ?? "";
  }
  set picture(value) {
    this.picture = value;
  }

  informations = () => {
    return {
      id: this.id,
      email: this.this.email,
      username: this.username,
    };
  };
}
