import { UserData } from './models/user-data';

export const USERDATA: UserData[] = [{
  "id": 224401,
  "account": {
    "username": "fredp",
    "name": {
      "first": "Fred",
      "surname": "Pritchard"
    },
    "gender": "male",
    "email": {
      "primary": "fred.pritchard@plus.net"
    },
    "mobile": "+447739428379",
    "security": {
      "question": "Name of first pet",
      "answer": "Sprinkles"
    },
    "contact": {
      "phone": false,
      "email": true,
      "text": false,
      "social": false
    }
  },
  "billing": {
    "startDate": "2016-09-22",
    "endDate": "2018-03-22",
    "paymentMethod": "Direct Debit",
    "frequency": "Monthly",
    "bills": [
      {
        "id": "1",
        "amount": 20.88,
        "date": "2016-10-22"
      },
      {
        "id": "2",
        "amount": 20.88,
        "date": "2016-11-22"
      },
      {
        "id": "3",
        "amount": 20.88,
        "date": "2016-12-22"
      },
      {
        "id": "4",
        "amount": 20.88,
        "date": "2017-01-22"
      },
      {
        "id": "5",
        "amount": 20.88,
        "date": "2017-02-22"
      },
      {
        "id": "6",
        "amount": 20.88,
        "date": "2017-03-22"
      },
      {
        "id": "7",
        "amount": 20.88,
        "date": "2017-04-22"
      },
      {
        "id": "8",
        "amount": 20.88,
        "date": "2017-05-22"
      },
      {
        "id": "9",
        "amount": 20.88,
        "date": "2017-06-22"
      },
      {
        "id": "10",
        "amount": 20.88,
        "date": "2017-07-22"
      },
      {
        "id": "11",
        "amount": 20.88,
        "date": "2017-08-22"
      },
      {
        "id": "12",
        "amount": 20.88,
        "date": "2017-09-22"
      },
      {
        "id": "13",
        "amount": 33.98,
        "date": "2017-10-22"
      }
    ]
  },
  "broadband": {
    "contract": {
      "package": "Unlimited Fibre",
      "contract": "18",
      "monthlyPrice": {
        "first12": 20.88,
        "second6": 33.98
      }
    },
    "details": {
      "phoneNumber": "+441142439782",
      "address": {
        "houseNameNo": "44",
        "road": "South View Cres",
        "city": "Sheffield",
        "county": "South Yorkshire",
        "postcode": "S7 1DJ"
      }
    }
  }
}];


// {
//   "extends": "../tsconfig.json",
//   "compilerOptions": {
//     "outDir": "../out-tsc/app",
//     "baseUrl": "./",
//     "module": "es2015",
//     "types": []
//   },
//   "exclude": [
//     "test.ts",
//     "**/*.spec.ts"
//   ]
// }
