const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$DA6CZd.0VN5qka2Gih0tVOvHyhd0ZbrsyhjbvOWvQUvtmwRjP.di2'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
