export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img_url: string;
  url: string;
  rating: number;
}
const cleansers=[
  {
    id: 1,
    name: 'Heimish All Clean Balm бальзам 120 мл',
    price: 5761,
    description:
      'тип: бальзам\n'+
      'объем: 120 мл\n'+
      'тип кожи: для всех типов\n'+
      'страна производства: Корея\n',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/h03/32773970559006/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000',
    rating: 4.89,
  },
  {
    id: 2,
    name: 'Dr.Ceuracle Pro Balance Pure Cleansing гидрофильное масло',
    price: 6714,
    description:
      'тип: гидрофильное масло\n'+
      'объем: 155 мл\n'+
      'тип кожи: для всех типов\n'+
      'страна производства: Корея\n',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h4e/51067154464798/dr-ceuracle-pro-balance-pure-cleansing-gidrofil-noe-maslo-150-ml-101481415-1.jpg',
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-pure-cleansing-gidrofil-noe-maslo-155-ml-101481415/?c=750000000',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Heimish All Clean Green Foam пенка 150 мл',
    price: 3187,
    description:
      'тип: пенка\n'+
      'объем: 150 мл\n'+
      'тип кожи: для всех типов\n' +
      'страна производства: Корея\n',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he1/hf2/49838117650462/heimish-all-clean-green-foam-150-ml-100397062-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/heimish-all-clean-green-foam-penka-150-ml-100397062/?c=750000000',
    rating: 4.79,
  },

  {
    id: 4,
    name: 'Dr.Ceuracle Pro Balance Creamy Cleansing Foam пенка для лица',
    price: 4292,
    description:
      'тип: пенка\n'
       +'объем: 150 мл\n'+
        'тип кожи: для всех типов\n'+
         'страна производства: Корея\n',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h27/33085968613406/dr-ceuracle-pro-balance-creamy-cleansing-foam-150-ml-100904391-1-Container.jpg',
    url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h27/33085968613406/dr-ceuracle-pro-balance-creamy-cleansing-foam-150-ml-100904391-1-Container.jpg',
    rating: 4.77,
  },
  {
    id: 5,
    name: 'MEDI-PEEL Algo-Tox Deep Clear пенка 150 мл',
    price: 4397,
    description:
      'тип: пенка\n'+
      'объем: 150 мл\n'+
      'тип кожи: для всех типов\n'+
      'страна производства: Корея\n',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0a/he1/32765916545054/medi-peel-algo-tox-deep-clear-150-ml-100272231-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/medi-peel-algo-tox-deep-clear-penka-150-ml-100272231/?c=750000000',
    rating: 4.8,
  },

]

const creams=[
  {
    id: 1,
    name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer крем 100 мл',
    price: 7199,
    description:
      'тип: крем\n' +
      'действие: увлажнение\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h6d/33032604221470/dr-ceuracle-pro-balance-biotics-moisturizer-100-ml-100675870-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=750000000',
    rating: 4.89,
  },
  {
    id: 2,
    name: 'A\'pieu Madecassoside крем 50 мл',
    price: 3649,
    description:
      'тип: крем\n' +
      'действие: питание, ,увлажнение\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h92/32556827934750/a-pieu-madecassoside-cream-50-ml-100396850-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/a-pieu-madecassoside-krem-50-ml-100396850/?c=750000000',
    rating: 4.89,
  },
  {
    id: 3,
    name: 'A\'pieu Madecassoside крем 50 мл',
    price: 3649,
    description:
      'тип: крем\n' +
      'действие: питание, ,увлажнение\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h92/32556827934750/a-pieu-madecassoside-cream-50-ml-100396850-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/a-pieu-madecassoside-krem-50-ml-100396850/?c=750000000',
    rating: 4.89,
  },


]
export const products = [
  cleansers
];
