type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

const newForm: Params = {
  email: 'ann@gmail.com',
  firstName: 'Anna',
  lastName: 'Mann',
  phone: '+38063000000',
  
};
console.log(newForm);
