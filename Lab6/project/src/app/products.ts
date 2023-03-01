export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img_url: string;
  url: string;
  rating: number;
}


export const creams: Product[] =[
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


export const serums=[
  {
    id: 1,
    name: 'The Ordinary Niacinamide 10%+Zinc 1% сыворотка 30 мл',
    price: 4723 ,
    description:
      'тип: сыворотка\n' +
      'действие: матирование, ,противовоспалительное, ,выравнивание, ,регенерация\n' +
      'область нанесения: для лица\n' +
      'тип кожи: проблемная\n' +
      'страна производства: Канада',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h05/33287281410078/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg',

    url: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000',
    rating: 5.5,
  },
  {
    id: 2,
    name: 'MEDI-PEEL Luxury 24K Gold Ampoule сыворотка 100 мл',
    price: 4349,
    description:
      'тип: сыворотка\n' +
      'действие: питание, ,увлажнение, ,повышение упругости\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/hc4/49884106522654/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778-1.jpg',

    url: 'https://kaspi.kz/shop/p/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778/?c=750000000',
    rating: 4.5,
  },
  {
    id:3 ,
    name: 'Cos De BAHA RS Retinol 2.5 Serum сыворотка 30 ml',
    price: 4000,
    description:
      'тип: сыворотка\n' +
      'действие: разглаживание, ,противовоспалительное, ,выравнивание, ,тонизирование\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/hcc/52052688502814/cos-de-baha-rs-retinol-2-5-serum-30-ml-101844504-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/cos-de-baha-rs-retinol-2-5-serum-syvorotka-30-ml-101844504/?c=750000000',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Cos De BAHA сыворотка Vitamin C 15% для лица 30 мл',
    price: 3847,
    description:
      'тип: сыворотка\n' +
      'действие: сияние, ,выравнивание, ,регенерация\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/hcc/52052688502814/cos-de-baha-rs-retinol-2-5-serum-30-ml-101844504-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/cos-de-baha-rs-retinol-2-5-serum-syvorotka-30-ml-101844504/?c=750000000',
    rating: 4.5 ,
  },
  {
    id:5 ,
    name: 'The Ordinary Retinol 0.5% in Squalane сыворотка 30 мл',
    price:6447 ,
    description:
      'тип: сыворотка\n' +
      'действие: разглаживание, ,выравнивание\n' +
      'область нанесения: для лица\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/had/32844452921374/the-ordinary-retinol-0-5-in-squalane-30-ml-100999150-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/the-ordinary-retinol-0-5-in-squalane-syvorotka-30-ml-100999150/?c=750000000#!/item',
    rating: 4.5,
  },
]


export const patches=[
  {
    id: 1,
    name: 'MEDI-PEEL гидрогелевые Hyaluron Cica Peptide 9 для глаз',
    price: 4903,
    description:
      'вид патчей: гидрогелевые\n' +
      'зона нанесения: для глаз\n' +
      'действие: повышение упругости, ,лифтинг, ,освежающий\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h55/61703205781534/medi-peel-hyaluron-dark-benone-peptide-9-ampoule-eye-patch-60-st-100378906-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/medi-peel-gidrogelevye-hyaluron-dark-benone-peptide-9-dlja-glaz-60-sht-100378906/?c=750000000',
    rating:4.5 ,
  },
  {
    id: 2,
    name: 'Патчи Bioaqua гидрогелевые с экстрактом золота для глаз 60 шт',
    price: 2600 ,
    description:
      'вид патчей: гидрогелевые\n' +
      'зона нанесения: для глаз\n' +
      'действие: увлажнение, ,осветление, ,освежающий, ,от отеков\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Китай',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h13/51069195911198/bioaqua-patci-s-ekstraktom-zolota-60-ml-102211025-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/bioaqua-gidrogelevye-s-ekstraktom-zolota-dlja-glaz-60-sht-102211025/?c=750000000',
    rating:4.5 ,
  },
  {
    id:3 ,
    name: 'Патчи MEDI-PEEL гидрогелевые Hyaluron Rose Peptide 9 для глаз 60 шт',
    price:4394 ,
    description:
      'вид патчей: гидрогелевые\n' +
      'зона нанесения: для глаз\n' +
      'действие: питание, ,повышение упругости, ,увлажнение, ,освежающий\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/hac/49949314580510/medi-peel-hyaluron-rose-peptide-9-ampoule-eye-patch-100371520-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/medi-peel-gidrogelevye-hyaluron-rose-peptide-9-dlja-glaz-60-sht-100371520/?c=750000000',
    rating:4.5 ,
  },
  {
    id:4 ,
    name: 'Патчи Images гидрогелевые Golden Seaweet Moisturizing для глаз 60 шт',
    price:2700 ,
    description:
      'вид патчей: гидрогелевые\n' +
      'зона нанесения: для глаз\n' +
      'действие: питание, ,увлажнение, ,восстановление, ,от отеков, ,от темных кругов\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Китай',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h74/63052026642462/golden-seaweet-moisturizing-105322733-1.jpg',

    url: 'https://kaspi.kz/shop/p/images-gidrogelevye-golden-seaweet-moisturizing-dlja-glaz-60-sht-105322733/?c=750000000',
    rating:4.5 ,
  },
  {
    id: 5,
    name: 'Патчи Farmstay гидрогелевые Vitamin для глаз 60 шт',
    price:3420,
    description:
      'вид патчей: гидрогелевые\n' +
      'зона нанесения: для глаз\n' +
      'действие: увлажнение, ,сияние\n' +
      'тип кожи: для всех типов\n' +
      'страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hc7/32215723802654/farm-stay-vitamin-hydrogel-eye-patch-60-st-19600504-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/farmstay-gidrogelevye-vitamin-dlja-glaz-60-sht-19600504/?c=750000000',
    rating:4.5 ,
  },
]


export const cleansers = [
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


