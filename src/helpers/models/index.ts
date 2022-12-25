export interface Item<T> {
    id: number;
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
  
  
  export interface Size {
    size: string;
    avalible: boolean;
  }

  export interface Categories {
    id: number;
    title: string;
}