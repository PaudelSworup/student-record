export interface PermanentAddressProps {
  onPermanentAddressChange: (val: any) => void;
}

export interface Address {
  province: string;
  district: string;
  municipality: string;
  ward: string;
  tole: string;
}
