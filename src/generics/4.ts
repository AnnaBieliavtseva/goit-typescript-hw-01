type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
    const newValues = {
      id: crypto.randomUUID(),
    }
    return {...newValues, ...initialValues }
}

console.log(createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
}))
