import banner1 from "/img/banner1.jpg";
import banner2 from "/img/banner2.jpg";
import banner3 from "/img/banner3.jpg";

import model1 from "/img/model-1.jpg";
import model2 from "/img/model2.jpg";
import model3 from "/img/model3.jpg";
import model4 from "/img/model4.jpg";
import model5 from "/img/model-5.jpg";

export const bannersForSlider = [
  {
    id: "1",
    src: banner1
  },
  {
    id: "2",
    src: banner2,
  },
  {
    id: "3",
    src: banner3
  }
];

export const imagesForFeaturedProducts = [
  {
    id: 1,
    img: model1,
    img2: model3,
    isNew: true,
    oldPrice: 19,
    price: 12,
    productName: "T-shirt blue"
  },
  {
    id: 2,
    img: model2,
    img2: model5,
    isNew: false,
    oldPrice: 19,
    price: 12,
    productName: "Coat"
  },
  {
    id: 3,
    img: model3,
    img2: model1,
    isNew: true,
    oldPrice: 19,
    price: 12,
    productName: "Skirt"
  },
  {
    id: 4,
    img: model4,
    img2: model3,
    isNew: false,
    oldPrice: 19,
    price: 12,
    productName: "Hat"
  }
]
