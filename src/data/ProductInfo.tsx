export const productInfo = [
  { id: 1, title: "pen", price: 10, description: "A ink pain" },
  { id: 2, title: "laptop", price: 50000, description: "An HP Laptop" },
  { id: 3, title: "mobile", price: 10000, description: "A Samsung Phone" },
];

export interface ISeller {
  name: string;
  rating: number;
  description: string;
  updateRating?: (rating: number) => void;
}

export const sellerInfo: ISeller = {
  name: "smartErp",
  rating: 4,
  description: "smartErp seller",
  updateRating: (rating: number) => {
    sellerInfo.rating = rating;
  },
};
