export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img_url: string;
  url: string;
  rating: number;
}
/*const cleansers=[
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
    name: 'MEDI-PEEL крем Volume Tox Peptide 9 для лица 50 мл',
    price: 5860,
    description:
     'тип: крем\n' +
      'действие: увлажнение, ,регенерация, ,повышение упругости\n' +
      'область нанесения: для лица\n' +
      'тип кожи: проблемная\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/h55/32401916592158/medi-peel-peptide-9-volume-tox-50-ml-100106918-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/medi-peel-krem-volume-tox-peptide-9-dlja-litsa-50-ml-100106918/?c=750000000',
    rating: 4.89,
  },
  {
    id: 4,
    name: 'La Roche-Posay Effaclar Duo(+) крем для лица 40 мл',
    price: 7690,
    description:
      'тип: крем\n' +
      'действие: разглаживание, ,противовоспалительное\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Франция',
    img_url:
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h3b/50968279318558/la-roche-posay-effaclar-duo-40-ml-101855566-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/la-roche-posay-effaclar-duo-krem-dlja-litsa-40-ml-101855566/?c=750000000',
    rating: 4.89,
  },

  {
    id: 5,
    name: 'ENOUGH крем Collagen Moisture Essential для лица, для шеи 50 мл',
    price: 1587,
    description:
      'тип: крем\n' +
      'действие: питание, ,лифтинг, ,разглаживание, ,увлажнение, ,сияние, ,выравнивание, ,регенерация\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h92/49919536365598/enough-collagen-moisture-essential-cream-50-g-101095567-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/enough-krem-collagen-moisture-essential-dlja-litsa-dlja-shei-50-ml-101095567/?c=750000000',
    rating: 4.89,
  },



]


const serums=[
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
]


const serums=[
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
  {
    id: ,
    name: '',
    price: ,
    description:
      '',
    img_url:
      '',

    url: '',
    rating: ,
  },
]
export const products = [
  cleansers
];

 */
export const products = [
  {
    id: 1,
    name: 'Heimish All Clean Balm бальзам 120 мл',
    price: 5761,
    description:
      'тип: бальзам,объем: 120 мл,тип кожи: для всех типов,страна производства: Корея',
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
      'тип: гидрофильное масло,объем: 155 мл,тип кожи: для всех типов,sстрана производства: Корея',
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
      'тип: пенка, объем: 150 мл,тип кожи: для всех типов чувствительная,страна производства: Корея',
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
      'тип: пенка,объем: 150 мk, тип кожи: для всех типов,страна производства: Корея',
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
      'тип: пенка,объем: 150 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0a/he1/32765916545054/medi-peel-algo-tox-deep-clear-150-ml-100272231-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/medi-peel-algo-tox-deep-clear-penka-150-ml-100272231/?c=750000000',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Dr. Jart Dermaclear Micro pH Foam гель 120 мл',
    price: 4899,
    description:
      'тип: гель,объем: 120 мл,тип кожи: чувствительная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h84/31800017420318/dr-jart-dermaclear-micro-ph-foam-21900269-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/dr-jart-dermaclear-micro-ph-foam-gel-120-ml-21900269/?c=750000000',
    rating: 4.79,
  },
  {
    id: 7,
    name: 'By Wishtrend Green Tea & Enzyme Powder Wash энзимная',
    price: 8880,
    description:
      'тип: энзимная пудра,объем: 110 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/hde/50536185757726/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaa-pudra-110-ml-104744971-1.jpg',
    url: 'https://kaspi.kz/shop/p/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaja-pudra-110-ml-104744971/?c=750000000',
    rating: 4.85,
  },
  {
    id: 8,
    name: 'Dr. Jart Ctrl A Teatreement Cleansing Foam гель-пенка 120',
    price: 5817,
    description:
      'тип: энзимная пудра,объем: 110 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h5e/had/32920034607134/dr-jart-teatreement-cleansing-foam-mousse-nettoyante-100670034-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/dr-jart-ctrl-a-teatreement-cleansing-foam-gel--penka-120-ml-100670034/?c=750000000',
    rating: 4.78,
  },
  {
    id: 9,
    name: 'COSRX Low pH Good Morning Gel Cleanser гель-пенка 150 мл',
    price: 3328,
    description:
      'тип: гель-пенка,объем: 150 мл,тип кожи: жирная, ,комбинированная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h88/32617832644638/cosrx-low-ph-good-morning-gel-cleanser-150-ml-100375636-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/cosrx-low-ph-good-morning-gel-cleanser-gel--penka-150-ml-100375636/?c=750000000',
    rating: 4.73,
  },
  {
    id: 10,
    name: 'Sulwhasoo Gentle cleansing oil гидрофильное масло 50 мл',
    price: 1969,
    description:
      'тип: гидрофильное масло,объем: 50 мл,тип кожи: зрелая, ,нормальная, ,сухая чувствительная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/img/m/p/h09/hb9/64368900014110.jpg?format=preview-medium',
    url: 'https://kaspi.kz/shop/p/sulwhasoo-gentle-cleansing-oil-gidrofil-noe-maslo-50-ml-103287184/?c=750000000',
    rating: 4.74,
  },
];

export const  categories=[
  {
    id:1,
    productList:products
  }

]
