export interface Product {
    title:string;
    _id: string;
    category: { name: string }; 
    imageCover: string; 
    price: number; 
    ratingsAverage: number;
}
