export interface IItem<T> {
  id: number | string;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  sizes: T[];
}

export interface ISize {
  size: string;
  avalible: boolean;
}

export interface ICategories {
  id: number;
  title: string;
}
