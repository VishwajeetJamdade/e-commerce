import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public prduct: any[] = [
    { id: 1, name: "All Product", img: "assets/images/electronic.png" },
    { id: 2, name: "Fashion", img: "assets/images/fashion.png" },
    { id: 3, name: "Electronic", img: "assets/images/electronic.png" },
    { id: 4, name: "Product C", img: "assets/images/fashion.png" },
  ];


  public list: any[] = [
    {
      id: 1,
      title: "Sample Product",
      img: "assets/images/electronic.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor.",
      price: 2000
    },
    {
      id: 2,
      title: "Sample Product",
      img: "assets/images/fashion.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor.",
      price: 1500
    },
    {
      id: 3,
      title: "Sample Product",
      img: "assets/images/electronic.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor.",
      price: 15000
    },
    {
      id: 4,
      title: "Sample Product",
      img: "assets/images/fashion.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor.",
      price: 149
    },
    {
      id: 5,
      title: "Sample Product",
      img: "assets/images/electronic.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor.",
      price: 800
    },
    {
      id: 6,
      title: "Sample Product",
      img: "assets/images/fashion.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor.",
      price: 1200
    }
  ]

  cartItem: any;

  constructor() { }

  

}
