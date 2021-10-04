export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  status: string;
  _id: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: Array<BankTypes>;
}

export interface NominalTypes {
  _id: string;
  price: number;
  coinName: string;
  coinQuantity: number;
}

export interface GameCategoryTypes {
  _id: string;
  name: string;
  __v: number;
}
