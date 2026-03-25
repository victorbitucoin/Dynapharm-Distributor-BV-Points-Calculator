export interface Product {
  id: string;
  name: string;
  bv: number;
  category: string;
}

export const PRODUCTS: Product[] = [
  // 1. CLEANSING / DETOXIFYING
  { id: "1", name: "DI LIQUID CHLOROPHYLL 500ml", bv: 5, category: "CLEANSING / DETOXIFYING" },
  { id: "2", name: "INST. CHOC W/ GANO 30's x 30g", bv: 3.5, category: "CLEANSING / DETOXIFYING" },
  { id: "3", name: "INST. COFFEE W/ GANO 20's x 21g", bv: 2, category: "CLEANSING / DETOXIFYING" },
  { id: "4", name: "INST. WHEATGRASS 20's x 10g", bv: 3, category: "CLEANSING / DETOXIFYING" },
  { id: "5", name: "INST. CAPPUCCINO W/ GANO 15's x 35g", bv: 3, category: "CLEANSING / DETOXIFYING" },
  { id: "6", name: "YEEGANO CAPSULE 90's", bv: 5, category: "CLEANSING / DETOXIFYING" },
  { id: "7", name: "YEEGARLIC CAPSULE 90's", bv: 4, category: "CLEANSING / DETOXIFYING" },
  { id: "8", name: "SOYBEAN MIXTURE WITH GINGER 20's", bv: 3, category: "CLEANSING / DETOXIFYING" },
  { id: "9", name: "INST ARABICA COFFEE W/GOAT'S MILK 20's 6 in 1", bv: 3, category: "CLEANSING / DETOXIFYING" },
  { id: "10", name: "COFFEE W/ PEGAGA & GINKGO 25g x 15's", bv: 2.5, category: "CLEANSING / DETOXIFYING" },
  { id: "11", name: "PRESIDENT'S CHOICE 4 IN 1 & CHOC 20's", bv: 3.5, category: "CLEANSING / DETOXIFYING" },

  // 2. NUTRITIONAL SUPPLEMENTS
  { id: "12", name: "GOAT'S MILK TABLET 150's", bv: 3.5, category: "NUTRITIONAL SUPPLEMENTS" },
  { id: "13", name: "SEA WATER SPIRULINA POWDER 500g", bv: 3.5, category: "NUTRITIONAL SUPPLEMENTS" },
  { id: "14", name: "SOYBEAN POWDER 454g", bv: 3, category: "NUTRITIONAL SUPPLEMENTS" },
  { id: "15", name: "SPIRULINA TABLET 1,000's", bv: 10, category: "NUTRITIONAL SUPPLEMENTS" },
  { id: "16", name: "SPIRULINA TABLET 300's", bv: 5, category: "NUTRITIONAL SUPPLEMENTS" },
  { id: "17", name: "PRO- LSB TABLET 150's", bv: 5, category: "NUTRITIONAL SUPPLEMENTS" },

  // 3. IMMUNE BOOSTERS/ANTI-AGING
  { id: "18", name: "GANO, GREEN TEA 20's x 21g", bv: 2.5, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "19", name: "COFFEE W/ GANO, COLLAGEN & KACIP 15's", bv: 2.5, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "20", name: "BEE POLLEN CAPSULE 100's", bv: 5, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "21", name: "DYNA TONIC 780ml", bv: 8, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "22", name: "GREEN TEA CAPSULE 60's", bv: 6, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "23", name: "PROLINK 30's x 20g", bv: 10, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "24", name: "BLACK COFFEE MIXTURE W/Gano 2 in 1", bv: 1.8, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "25", name: "BLACK COFFEE MIXTURE W/Gano 3 in 1", bv: 2, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "26", name: "INST.GOAT's MILK POWDER PREMIX", bv: 3.5, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "27", name: "RED COFFEE W/ GINSENG 12's x 25g", bv: 2, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "28", name: "DYNA C- 250 TABLET 90's", bv: 2, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "29", name: "DYNA C- 100 TABLET 150's", bv: 2, category: "IMMUNE BOOSTERS/ANTI-AGING" },
  { id: "30", name: "YEEYANGYEN TABLET 90's", bv: 5, category: "IMMUNE BOOSTERS/ANTI-AGING" },

  // 4. MENTAL, SEXUAL AND PHYSICAL
  { id: "31", name: "GINALI CAPSULE 100's", bv: 8, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "32", name: "TONGKAT ALI CAPSULE 100's", bv: 5, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "33", name: "GINSENG HONEY GINGER 20g x 20's", bv: 3, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "34", name: "INSTANT GINSENG HONEY GINGER 500g", bv: 3, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "35", name: "MILK THISTLE TABLET 120's", bv: 8, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "36", name: "GINSENG CAPSULE 9 x 10's", bv: 8, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "37", name: "INST. COFFEE W/ TONGKAT ALI 20's x 21g", bv: 2, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "38", name: "INST.COFFEE W/GINGKO & GINSENG COFFEE", bv: 2.5, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "39", name: "MILK TEA WITH TONGKAT 21G×20'S", bv: 3, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "40", name: "TONGKAT ALI WITH BLACK COFFEE 30's X 5g", bv: 4, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "41", name: "YEEGINKGO TABLETS 300's", bv: 18, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "42", name: "YEEGINKGO TABLETS 90's", bv: 5, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "43", name: "YEEGINKGO TABLETS 30's", bv: 2, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "44", name: "SEA CUCUMBER JELLY 500ml", bv: 7, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "45", name: "DYNA SERENOA TABLET 100's", bv: 8, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "46", name: "HERBA WARISAN MAHARANI 6 x 10g", bv: 8, category: "MENTAL, SEXUAL AND PHYSICAL" },
  { id: "47", name: "INS.COFFEE W/TONGKAT & MACA POWDER", bv: 2.5, category: "MENTAL, SEXUAL AND PHYSICAL" },

  // 5. DIET AND WEIGHT MANAGEMENT
  { id: "48", name: "DYNA 'S' TABLET 120's", bv: 6, category: "DIET AND WEIGHT MANAGEMENT" },
  { id: "49", name: "HIGH FIBER NUTRITION FOOD 30's x 25g", bv: 8, category: "DIET AND WEIGHT MANAGEMENT" },
  { id: "50", name: "INSTANT CEREAL 30's x 32g", bv: 7, category: "DIET AND WEIGHT MANAGEMENT" },
  { id: "51", name: "NONI PLUS TEA 30's x 3g", bv: 4, category: "DIET AND WEIGHT MANAGEMENT" },
  { id: "52", name: "DI NONI 500ml", bv: 8, category: "DIET AND WEIGHT MANAGEMENT" },
  { id: "53", name: "D.I. NONI 30ml*30's", bv: 15, category: "DIET AND WEIGHT MANAGEMENT" },
  { id: "54", name: "INSTANT FIBERICH N- MEAL 32gm x 30's", bv: 10, category: "DIET AND WEIGHT MANAGEMENT" },

  // 6. NATURAL RELIEF
  { id: "55", name: "DYNA - RH CAPSULE 100's", bv: 5, category: "NATURAL RELIEF" },
  { id: "56", name: "NUTMEG OINTMENT 2's x 20g", bv: 1, category: "NATURAL RELIEF" },

  // 7. COSMETICS/PERSONAL CARE
  { id: "57", name: "E-VITA CREAM 50g", bv: 10, category: "COSMETICS/PERSONAL CARE" },
  { id: "58", name: "GANODERMA LOTION 150ml", bv: 2, category: "COSMETICS/PERSONAL CARE" },
  { id: "59", name: "TEA TREE OIL FACIAL CLEANSER 150ml", bv: 2.5, category: "COSMETICS/PERSONAL CARE" },
  { id: "60", name: "TEA TREE OIL LOTION 250ml", bv: 2, category: "COSMETICS/PERSONAL CARE" },
  { id: "61", name: "GANODERMA TOOTHPASTE 150g", bv: 1.5, category: "COSMETICS/PERSONAL CARE" },
  { id: "62", name: "GOAT'S MILK SOAP 100g", bv: 1, category: "COSMETICS/PERSONAL CARE" },
  { id: "63", name: "TEA TREE OIL FEMININE WASH 250ml", bv: 2.5, category: "COSMETICS/PERSONAL CARE" },
  { id: "64", name: "TEA TREE OIL TOOTHPASTE 175g", bv: 1.5, category: "COSMETICS/PERSONAL CARE" },
  { id: "65", name: "GANODERMA SOAP 2 x 100gm", bv: 1.5, category: "COSMETICS/PERSONAL CARE" },
  { id: "66", name: "NANO HOME GAMAT SOAP 100gm", bv: 1, category: "COSMETICS/PERSONAL CARE" },
  { id: "67", name: "NANO HOME PEGAGA SOAP 100gm", bv: 1, category: "COSMETICS/PERSONAL CARE" },
  { id: "68", name: "FEMININE WASH W/ KACIP FATIMAH 60ml", bv: 1, category: "COSMETICS/PERSONAL CARE" },
  { id: "69", name: "FEMININE WASH ANTISEPTIC W/ SIRIH 60ml", bv: 1, category: "COSMETICS/PERSONAL CARE" },
  { id: "70", name: "FEMININE WASH W/ GAMAT 60ml", bv: 1, category: "COSMETICS/PERSONAL CARE" },
  { id: "71", name: "MINERAL POT", bv: 15, category: "COSMETICS/PERSONAL CARE" },
  { id: "72", name: "NEW DISTRIBUTORS REGISTRATION KIT/DI GROW KIT", bv: 10, category: "COSMETICS/PERSONAL CARE" },

  // 8. D.I GROW LIQUID FERTILIZER
  { id: "73", name: "DI GROW GREEN 4 LITRES", bv: 5, category: "D.I GROW LIQUID FERTILIZER" },
  { id: "74", name: "DI GROW GREEN 1 LITRE", bv: 2, category: "D.I GROW LIQUID FERTILIZER" },
  { id: "75", name: "DI GROW RED 4 LITRES", bv: 5, category: "D.I GROW LIQUID FERTILIZER" },
  { id: "76", name: "DI GROW RED 1 LITRE", bv: 2, category: "D.I GROW LIQUID FERTILIZER" },
];
