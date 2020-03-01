export interface IUsers {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Comp;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatsLongs;
}

interface LatsLongs {
  lat: string;
  lng: string;
}

interface Comp {
  name: string;
  catchPhrase: string;
  bs: string;
}
