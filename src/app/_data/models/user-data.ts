// export interface UserData {
//   type: string;
//   name: string;
//   user: User[];
// }

// interface User {
//   username: string;
//   fullName: string;
//   email: string;
//   security?: Security[];
//   contact?: Contact[];
// }
//
// interface Security {
//   question: string;
//   answer: string;
// }
//
// interface Contact {
//   phone?: boolean;
//   email?: boolean;
//   text?: boolean;
//   socialMedia?: boolean;
// }

export class UserData {
  constructor(
    public id: number,
    public account: object,
    public billing: object,
    public broadband: object
  ) { }
}

interface Account {
  username: string;
  name: Name[];
  gender: string;
  email: string;
  security?: Security[];
  contact?: Contact[];
}

interface Name {
  first: string;
  surname: string;
}

interface Security {
  question: string;
  answer: string;
}

interface Contact {
  phone?: boolean;
  email?: boolean;
  text?: boolean;
  socialMedia?: boolean;
}
