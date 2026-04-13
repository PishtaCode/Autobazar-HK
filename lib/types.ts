export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  imageUrl: string;
  sautoUrl?: string;
  description?: string;
  color?: string;
  engineSize?: string;
  power?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
