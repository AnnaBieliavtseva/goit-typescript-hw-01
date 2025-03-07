type Status = 'open' | 'close';

type PageData = {
    title: string;
    likes: number;
    accounts: string[];
    status: Status;
    details?: {
        createAt: {};
        updateAt: {};
    }


}

const page1: PageData = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: PageData = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

console.log(page1, page2);

