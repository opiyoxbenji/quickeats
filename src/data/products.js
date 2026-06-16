// // Local product data — replaces MongoDB fetch
// // Images are served from /products/ (public folder → Vercel static)

// const food_list = [
//   // ─── PIZZA ───────────────────────────────────────────────────
//   {
//     _id: "pizza_001",
//     name: "Margherita Pizza",
//     description:
//       "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, and fragrant basil leaves on a thin crispy base.",
//     price: 89,
//     category: "Pizza",
//     image: "/products/20220211142754-margherita-9920.jpg",
//   },
//   {
//     _id: "pizza_002",
//     name: "Baked Potato Pizza",
//     description:
//       "Loaded baked potato meets pizza — creamy potato topping, sour cream drizzle, cheddar, bacon bits and chives.",
//     price: 99,
//     category: "Pizza",
//     image: "/products/Baked-Potato-Renatos-Pizza-Masters-Jersey-City.jpg",
//   },
//   {
//     _id: "pizza_003",
//     name: "BBQ Chicken Pizza",
//     description:
//       "Smoky BBQ base topped with grilled chicken strips, red onion, mozzarella and fresh coriander.",
//     price: 109,
//     category: "Pizza",
//     image: "/products/l-intro-1606849151.jpg",
//   },

//   // ─── BURGERS ─────────────────────────────────────────────────
//   {
//     _id: "burger_001",
//     name: "Hunger Buster",
//     description:
//       "A towering double-patty burger with lettuce, tomato, pickles, caramelised onion, cheese and our signature sauce.",
//     price: 95,
//     category: "Burgers",
//     image: "/products/hunga-busta.webp",
//   },
//   {
//     _id: "burger_002",
//     name: "Classic Cheeseburger",
//     description:
//       "Juicy beef patty, American cheese, fresh lettuce, tomato, onion and mustard-mayo on a toasted brioche bun.",
//     price: 79,
//     category: "Burgers",
//     image: "/products/DjwapyRXsAAz2cw.jpg",
//   },
//   {
//     _id: "burger_003",
//     name: "Checkers Burger",
//     description:
//       "The legendary Checkers-style burger — flame-grilled patty, signature seasoning, pickles and a perfectly toasted sesame bun.",
//     price: 75,
//     category: "Burgers",
//     image: "/products/EA-checkers515Wx515H.png",
//   },

//   // ─── RIBS & STEAKS ───────────────────────────────────────────
//   {
//     _id: "steak_001",
//     name: "Prime Rib",
//     description:
//       "Slow-roasted prime rib with a herb crust, served with au jus and creamy horseradish sauce.",
//     price: 189,
//     category: "Ribs & Steaks",
//     image: "/products/Outback-PrimeRib.webp",
//   },
//   {
//     _id: "steak_002",
//     name: "Beef Brisket Stew",
//     description:
//       "Fall-apart tender brisket slow-cooked in a rich tomato and red wine sishebo, served with pap or rice.",
//     price: 149,
//     category: "Ribs & Steaks",
//     image: "/products/brisketnew-sishebo-hero.png",
//   },
//   {
//     _id: "steak_003",
//     name: "Lamb Chops",
//     description:
//       "Grilled Karoo lamb chops marinated in rosemary, garlic and lemon — tender, smoky and full of flavour.",
//     price: 179,
//     category: "Ribs & Steaks",
//     image: "/products/1719502805806lamb-chops (1).jpg",
//   },

//   // ─── CHICKEN ─────────────────────────────────────────────────
//   {
//     _id: "chicken_001",
//     name: "Chicken Schnitzel",
//     description:
//       "Golden-crumbed chicken breast fillet, lightly seasoned and pan-fried to perfection. Served with lemon wedge.",
//     price: 99,
//     category: "Chicken",
//     image: "/products/chicken-style-schnitzel.jpg",
//   },
//   {
//     _id: "chicken_002",
//     name: "Cheddar Melt Schnitzel",
//     description:
//       "Our classic schnitzel topped with melted cheddar and a smoky mushroom sauce — comfort food elevated.",
//     price: 115,
//     category: "Chicken",
//     image: "/products/cheddamelt-chicken-schnitzel.jpg",
//   },
//   {
//     _id: "chicken_003",
//     name: "Grilled Chicken Fajitas",
//     description:
//       "Sizzling strips of marinated grilled chicken with peppers and onions, wrapped in warm flour tortillas with salsa and sour cream.",
//     price: 119,
//     category: "Chicken",
//     image:
//       "/products/1719505148698281448-grilled-chicken-fajitas-mfs-4-6c901272e8e34755bf0c5a535c8cb9fa.jpg",
//   },

//   // ─── SEAFOOD ─────────────────────────────────────────────────
//   {
//     _id: "seafood_001",
//     name: "Grilled Hake",
//     description:
//       "Fresh hake fillet grilled to flaky perfection, served with lemon butter sauce, chips and garden salad.",
//     price: 119,
//     category: "Seafood",
//     image: "/products/hake1_1_1_2_1_1_1.jpg",
//   },
//   {
//     _id: "seafood_002",
//     name: "Calamari",
//     description:
//       "Tender rings of calamari lightly battered and deep-fried, served with tartare sauce and a squeeze of fresh lemon.",
//     price: 109,
//     category: "Seafood",
//     image:
//       "/products/ghows-LK-eb102a7b-eb4b-4be5-8303-a751bf5a53fe-b61d0f14.webp",
//   },
//   {
//     _id: "seafood_003",
//     name: "Prawn Skewers",
//     description:
//       "Juicy king prawns marinated in garlic, chilli and butter, char-grilled on skewers and served with rice.",
//     price: 159,
//     category: "Seafood",
//     image: "/products/1719505252403photo1jpg.jpg",
//   },

//   // ─── PASTA ───────────────────────────────────────────────────
//   {
//     _id: "pasta_001",
//     name: "Spaghetti Bolognese",
//     description:
//       "Al dente spaghetti tossed in a slow-cooked beef and tomato Bolognese ragu, finished with Parmesan.",
//     price: 99,
//     category: "Pasta",
//     image: "/products/1719516252746spaghetti.bolognese-4-480x270.jpg",
//   },
//   {
//     _id: "pasta_002",
//     name: "Creamy Pesto Pasta",
//     description:
//       "Penne in a rich basil pesto cream sauce with sun-dried tomatoes, pine nuts and shaved Parmesan.",
//     price: 95,
//     category: "Pasta",
//     image: "/products/1719516569630creamy-pesto-pasta-9-of-15.jpg",
//   },
//   {
//     _id: "pasta_003",
//     name: "Pasta Gorgonzola",
//     description:
//       "Silky gorgonzola dolce cream sauce with walnuts and fresh thyme over rigatoni — bold, rich and indulgent.",
//     price: 109,
//     category: "Pasta",
//     image: "/products/Pasta-gorgonzola_.webp",
//   },
//   {
//     _id: "pasta_004",
//     name: "Garlic Spaghetti",
//     description:
//       "Simple and stunning — spaghetti aglio e olio with toasted garlic, chilli flakes, olive oil and parsley.",
//     price: 79,
//     category: "Pasta",
//     image: "/products/Garlic-Spaghetti_EXPS_TOHD24_10671_DianaRattray_8.jpg",
//   },
//   {
//     _id: "pasta_005",
//     name: "Spicy Chicken Pasta",
//     description:
//       "Penne with tender chicken pieces in a spicy tomato and cream sauce with roasted peppers.",
//     price: 105,
//     category: "Pasta",
//     image: "/products/Spicy-Chicken-and-Tomato-Pasta_FT21_15767_F_0528_1.jpg",
//   },
//   {
//     _id: "pasta_006",
//     name: "Tortellini with Sausage",
//     description:
//       "Cheese-filled tortellini in a creamy mascarpone and Italian sausage sauce with a hint of nutmeg.",
//     price: 115,
//     category: "Pasta",
//     image:
//       "/products/Tortellini-with-Sausage-and-Mascarpone_EXPS_5ING20MINBZ23_245880_P2_MD_09_20_2b.jpg",
//   },

//   // ─── STARTERS ────────────────────────────────────────────────
//   {
//     _id: "starter_001",
//     name: "Cacio e Uova",
//     description:
//       "A Southern Italian classic — soft scrambled eggs finished with Pecorino Romano and black pepper. Rustic and deeply satisfying.",
//     price: 65,
//     category: "Starters",
//     image: "/products/1738660534960cacio_e_uova.webp",
//   },
//   {
//     _id: "starter_002",
//     name: "Mostaccioli",
//     description:
//       "Traditional Italian spiced biscuits with a dark chocolate and honey glaze — a perfect sweet starter or snack.",
//     price: 55,
//     category: "Starters",
//     image: "/products/1738661495022mostaccioli.webp",
//   },

//   // ─── DESSERTS ────────────────────────────────────────────────
//   {
//     _id: "dessert_001",
//     name: "Peppermint Crisp Tart",
//     description:
//       "The beloved South African classic — layers of caramel, whipped cream and crushed Peppermint Crisp on a Tennis biscuit base.",
//     price: 59,
//     category: "Desserts",
//     image: "/products/Peppermint Crisp Tart.jpg",
//   },
//   {
//     _id: "dessert_002",
//     name: "Salted Chocolate Sundae",
//     description:
//       "Rich vanilla ice cream drenched in warm salted chocolate fudge sauce, topped with whipped cream and chocolate shards.",
//     price: 65,
//     category: "Desserts",
//     image:
//       "/products/Salted-Chocolate-Sundae-XL-RECIPE0823-9f70ed1a63414093a8ad8deb77c5b92b.jpg",
//   },
//   {
//     _id: "dessert_003",
//     name: "Cannoli",
//     description:
//       "Crispy pastry tubes filled with sweetened ricotta, chocolate chips and a dusting of icing sugar. Imported Sicilian recipe.",
//     price: 69,
//     category: "Desserts",
//     image: "/products/1719518601670cannoli.jpg",
//   },
//   {
//     _id: "dessert_004",
//     name: "Churros",
//     description:
//       "Hot golden churros dusted with cinnamon sugar, served with a pot of rich dark chocolate dipping sauce.",
//     price: 55,
//     category: "Desserts",
//     image: "/products/1719518659032churros-3.jpg",
//   },
//   {
//     _id: "dessert_005",
//     name: "Oreo Milkshake",
//     description:
//       "Thick and creamy milkshake blended with Oreo cookies and vanilla ice cream, topped with whipped cream.",
//     price: 49,
//     category: "Desserts",
//     image: "/products/Oreo-Milkshake-Square.jpg",
//   },
//   {
//     _id: "dessert_006",
//     name: "Classic Milkshake",
//     description:
//       "Your choice of vanilla, chocolate or strawberry — thick, cold and made the old-fashioned way.",
//     price: 45,
//     category: "Desserts",
//     image: "/products/How-to-Make-a-Milkshake-Square.jpg",
//   },

//   // ─── BEVERAGES ───────────────────────────────────────────────
//   {
//     _id: "bev_001",
//     name: "Coca-Cola",
//     description:
//       "Ice-cold Coca-Cola served in a chilled glass with ice. The perfect companion to any meal.",
//     price: 25,
//     category: "Beverages",
//     image: "/products/1719519069050coca-cola-glass-soda-nrdvoxB-600.jpg",
//   },
//   {
//     _id: "bev_002",
//     name: "Sprite",
//     description:
//       "Crisp, refreshing lemon-lime Sprite poured over ice. Light and effervescent.",
//     price: 25,
//     category: "Beverages",
//     image:
//       "/products/Header_MediumSprite_Glass_832x472_1-3-product-tile-desktop.jfif",
//   },
//   {
//     _id: "bev_003",
//     name: "Iced Coffee Latte",
//     description:
//       "Smooth cold brew poured over ice with a splash of milk — energising and refreshing.",
//     price: 45,
//     category: "Beverages",
//     image:
//       "/products/1719519449566coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg",
//   },
//   {
//     _id: "bev_004",
//     name: "Ballantine's Ginger Ale",
//     description:
//       "Ballantine's Finest blended Scotch whisky paired with ginger ale, fresh mint and lemon. A cocktail classic.",
//     price: 89,
//     category: "Beverages",
//     image:
//       "/products/1719519522165ballantines-finest-ginger-ale-mint-lemon-scaled.jpg",
//   },
//   {
//     _id: "bev_005",
//     name: "Stella Artois",
//     description:
//       "Premium Belgian lager, crisp and clean with a subtle hoppy finish. Served ice-cold.",
//     price: 49,
//     category: "Beverages",
//     image: "/products/1719519705276stellachalice_can_1200x1200.webp",
//   },
//   {
//     _id: "bev_006",
//     name: "White Russian",
//     description:
//       "Vodka, coffee liqueur and fresh cream over ice. Smooth, rich and decadent.",
//     price: 95,
//     category: "Beverages",
//     image: "/products/1719519757063White_Russian_16x9.avif",
//   },
//   {
//     _id: "bev_007",
//     name: "Freshly Brewed Tea",
//     description:
//       "A pot of your choice — English Breakfast, green, chamomile or rooibos. Served with milk and honey.",
//     price: 29,
//     category: "Beverages",
//     image: "/products/1738916400677Tea-Most-consumed-beverages.jpg",
//   },
//   {
//     _id: "bev_008",
//     name: "Lemonade",
//     description:
//       "House-made freshly squeezed lemonade with a hint of mint. Sweet, tart and perfectly chilled.",
//     price: 35,
//     category: "Beverages",
//     image: "/products/1738916617815Lemonade.jpg",
//   },
// ];

// export default food_list;

// Local product data — replaces MongoDB fetch
// Images served from /products/ (Vercel static from public/)

const food_list = [
  // ─── PIZZA ───────────────────────────────────────────────────
  {
    _id: "pizza_001",
    name: "Margherita Pizza",
    description:
      "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, and fragrant basil leaves on a thin crispy base.",
    price: 89,
    category: "Pizza",
    image: "/products/172042825135120220211142754-margherita-9920.jpg",
    badge: "Classic",
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "pizza_002",
    name: "Baked Potato Pizza",
    description:
      "Loaded baked potato meets pizza — creamy potato topping, sour cream drizzle, cheddar, bacon bits and chives.",
    price: 99,
    category: "Pizza",
    image:
      "/products/1720428907825Baked-Potato-Renatos-Pizza-Masters-Jersey-City.jpg",
    badge: null,
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "pizza_003",
    name: "BBQ Chicken Pizza",
    description:
      "Smoky BBQ base topped with grilled chicken strips, red onion, mozzarella and fresh coriander.",
    price: 109,
    category: "Pizza",
    image: "/products/1720428341854l-intro-1606849151.jpg",
    badge: "Popular",
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 1,
    prepTime: "15–20 min",
  },

  // ─── BURGERS ─────────────────────────────────────────────────
  {
    _id: "burger_001",
    name: "Hunger Buster",
    description:
      "A towering double-patty burger with lettuce, tomato, pickles, caramelised onion, cheese and our signature sauce.",
    price: 95,
    category: "Burgers",
    image: "/products/1719505402204hunga-busta.webp",
    badge: "Best Seller",
    allergens: ["Gluten", "Dairy", "Egg"],
    spiceLevel: 1,
    prepTime: "10–15 min",
  },
  {
    _id: "burger_002",
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty, American cheese, fresh lettuce, tomato, onion and mustard-mayo on a toasted brioche bun.",
    price: 79,
    category: "Burgers",
    image: "/products/1719505057307DjwapyRXsAAz2cw.jpg",
    badge: null,
    allergens: ["Gluten", "Dairy", "Egg"],
    spiceLevel: 0,
    prepTime: "10–15 min",
  },
  {
    _id: "burger_003",
    name: "Checkers Burger",
    description:
      "The legendary Checkers-style burger — flame-grilled patty, signature seasoning, pickles and a perfectly toasted sesame bun.",
    price: 75,
    category: "Burgers",
    image: "/products/171951961877910718268EA-checkers515Wx515H.png",
    badge: null,
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "10–15 min",
  },

  // ─── RIBS & STEAKS ───────────────────────────────────────────
  {
    _id: "steak_001",
    name: "Prime Rib",
    description:
      "Slow-roasted prime rib with a herb crust, served with au jus and creamy horseradish sauce.",
    price: 189,
    category: "Ribs & Steaks",
    image: "/products/1719502953607Outback-PrimeRib.webp",
    badge: "Chef's Pick",
    allergens: ["Dairy"],
    spiceLevel: 0,
    prepTime: "25–30 min",
  },
  {
    _id: "steak_002",
    name: "Beef Brisket Stew",
    description:
      "Fall-apart tender brisket slow-cooked in a rich tomato and red wine sishebo, served with pap or rice.",
    price: 149,
    category: "Ribs & Steaks",
    image: "/products/1719503125034brisketnew-sishebo-hero.png",
    badge: null,
    allergens: [],
    spiceLevel: 1,
    prepTime: "20–25 min",
  },
  {
    _id: "steak_003",
    name: "Lamb Chops",
    description:
      "Grilled Karoo lamb chops marinated in rosemary, garlic and lemon — tender, smoky and full of flavour.",
    price: 179,
    category: "Ribs & Steaks",
    image: "/products/1719502805806lamb-chops (1).jpg",
    badge: "Popular",
    allergens: [],
    spiceLevel: 0,
    prepTime: "20–25 min",
  },

  // ─── CHICKEN ─────────────────────────────────────────────────
  {
    _id: "chicken_001",
    name: "Chicken Schnitzel",
    description:
      "Golden-crumbed chicken breast fillet, lightly seasoned and pan-fried to perfection. Served with lemon wedge.",
    price: 99,
    category: "Chicken",
    image: "/products/1719503504341chicken-style-schnitzel.jpg",
    badge: null,
    allergens: ["Gluten", "Egg"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "chicken_002",
    name: "Cheddar Melt Schnitzel",
    description:
      "Our classic schnitzel topped with melted cheddar and a smoky mushroom sauce — comfort food elevated.",
    price: 115,
    category: "Chicken",
    image: "/products/1719503706978cheddamelt-chicken-schnitzel.jpg",
    badge: "Popular",
    allergens: ["Gluten", "Dairy", "Egg"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "chicken_003",
    name: "Grilled Chicken Fajitas",
    description:
      "Sizzling strips of marinated grilled chicken with peppers and onions, wrapped in warm flour tortillas with salsa and sour cream.",
    price: 119,
    category: "Chicken",
    image:
      "/products/1719505148698281448-grilled-chicken-fajitas-mfs-4-6c901272e8e34755bf0c5a535c8cb9fa.jpg",
    badge: null,
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 2,
    prepTime: "15–20 min",
  },

  // ─── SEAFOOD ─────────────────────────────────────────────────
  {
    _id: "seafood_001",
    name: "Grilled Hake",
    description:
      "Fresh hake fillet grilled to flaky perfection, served with lemon butter sauce, chips and garden salad.",
    price: 119,
    category: "Seafood",
    image: "/products/1719503864536hake1_1_1_2_1_1_1.jpg",
    badge: null,
    allergens: ["Fish"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "seafood_002",
    name: "Calamari",
    description:
      "Tender rings of calamari lightly battered and deep-fried, served with tartare sauce and a squeeze of fresh lemon.",
    price: 109,
    category: "Seafood",
    image:
      "/products/1719505465365ghows-LK-eb102a7b-eb4b-4be5-8303-a751bf5a53fe-b61d0f14.webp",
    badge: "Popular",
    allergens: ["Gluten", "Fish"],
    spiceLevel: 0,
    prepTime: "10–15 min",
  },
  {
    _id: "seafood_003",
    name: "Prawn Skewers",
    description:
      "Juicy king prawns marinated in garlic, chilli and butter, char-grilled on skewers and served with rice.",
    price: 159,
    category: "Seafood",
    image: "/products/1719505252403photo1jpg.jpg",
    badge: "Chef's Pick",
    allergens: ["Shellfish"],
    spiceLevel: 2,
    prepTime: "15–20 min",
  },

  // ─── PASTA ───────────────────────────────────────────────────
  {
    _id: "pasta_001",
    name: "Spaghetti Bolognese",
    description:
      "Al dente spaghetti tossed in a slow-cooked beef and tomato Bolognese ragu, finished with Parmesan.",
    price: 99,
    category: "Pasta",
    image: "/products/1719516252746spaghetti.bolognese-4-480x270.jpg",
    badge: "Classic",
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "pasta_002",
    name: "Creamy Pesto Pasta",
    description:
      "Penne in a rich basil pesto cream sauce with sun-dried tomatoes, pine nuts and shaved Parmesan.",
    price: 95,
    category: "Pasta",
    image: "/products/1719516569630creamy-pesto-pasta-9-of-15.jpg",
    badge: null,
    allergens: ["Gluten", "Dairy", "Nuts"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "pasta_003",
    name: "Pasta Gorgonzola",
    description:
      "Silky gorgonzola dolce cream sauce with walnuts and fresh thyme over rigatoni — bold, rich and indulgent.",
    price: 109,
    category: "Pasta",
    image: "/products/1719516638607Pasta-gorgonzola_.webp",
    badge: null,
    allergens: ["Gluten", "Dairy", "Nuts"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },
  {
    _id: "pasta_004",
    name: "Garlic Spaghetti",
    description:
      "Simple and stunning — spaghetti aglio e olio with toasted garlic, chilli flakes, olive oil and parsley.",
    price: 79,
    category: "Pasta",
    image:
      "/products/1738668251693Garlic-Spaghetti_EXPS_TOHD24_10671_DianaRattray_8.jpg",
    badge: null,
    allergens: ["Gluten"],
    spiceLevel: 1,
    prepTime: "10–15 min",
  },
  {
    _id: "pasta_005",
    name: "Spicy Chicken Pasta",
    description:
      "Penne with tender chicken pieces in a spicy tomato and cream sauce with roasted peppers.",
    price: 105,
    category: "Pasta",
    image:
      "/products/1738668355394Spicy-Chicken-and-Tomato-Pasta_FT21_15767_F_0528_1.jpg",
    badge: "Spicy",
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 3,
    prepTime: "15–20 min",
  },
  {
    _id: "pasta_006",
    name: "Tortellini with Sausage",
    description:
      "Cheese-filled tortellini in a creamy mascarpone and Italian sausage sauce with a hint of nutmeg.",
    price: 115,
    category: "Pasta",
    image:
      "/products/1738668185056Tortellini-with-Sausage-and-Mascarpone_EXPS_5ING20MINBZ23_245880_P2_MD_09_20_2b.jpg",
    badge: null,
    allergens: ["Gluten", "Dairy", "Egg"],
    spiceLevel: 0,
    prepTime: "15–20 min",
  },

  // ─── STARTERS ────────────────────────────────────────────────
  {
    _id: "starter_001",
    name: "Cacio e Uova",
    description:
      "A Southern Italian classic — soft scrambled eggs finished with Pecorino Romano and black pepper. Rustic and deeply satisfying.",
    price: 65,
    category: "Starters",
    image: "/products/1738660534960cacio_e_uova.webp",
    badge: null,
    allergens: ["Dairy", "Egg"],
    spiceLevel: 0,
    prepTime: "10 min",
  },
  {
    _id: "starter_002",
    name: "Mostaccioli",
    description:
      "Traditional Italian spiced biscuits with a dark chocolate and honey glaze — a perfect sweet starter or snack.",
    price: 55,
    category: "Starters",
    image: "/products/1738661495022mostaccioli.webp",
    badge: null,
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },

  // ─── DESSERTS ────────────────────────────────────────────────
  {
    _id: "dessert_001",
    name: "Peppermint Crisp Tart",
    description:
      "The beloved South African classic — layers of caramel, whipped cream and crushed Peppermint Crisp on a Tennis biscuit base.",
    price: 59,
    category: "Desserts",
    image: "/products/1719518080235Peppermint Crisp Tart.jpg",
    badge: "SA Favourite",
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "dessert_002",
    name: "Salted Chocolate Sundae",
    description:
      "Rich vanilla ice cream drenched in warm salted chocolate fudge sauce, topped with whipped cream and chocolate shards.",
    price: 65,
    category: "Desserts",
    image:
      "/products/1719518388842Salted-Chocolate-Sundae-XL-RECIPE0823-9f70ed1a63414093a8ad8deb77c5b92b.jpg",
    badge: null,
    allergens: ["Dairy", "Gluten"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "dessert_003",
    name: "Cannoli",
    description:
      "Crispy pastry tubes filled with sweetened ricotta, chocolate chips and a dusting of icing sugar. Sicilian recipe.",
    price: 69,
    category: "Desserts",
    image: "/products/1719518601670cannoli.jpg",
    badge: null,
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "dessert_004",
    name: "Churros",
    description:
      "Hot golden churros dusted with cinnamon sugar, served with a pot of rich dark chocolate dipping sauce.",
    price: 55,
    category: "Desserts",
    image: "/products/1719518659032churros-3.jpg",
    badge: "Popular",
    allergens: ["Gluten", "Dairy"],
    spiceLevel: 0,
    prepTime: "10 min",
  },
  {
    _id: "dessert_005",
    name: "Oreo Milkshake",
    description:
      "Thick and creamy milkshake blended with Oreo cookies and vanilla ice cream, topped with whipped cream.",
    price: 49,
    category: "Desserts",
    image: "/products/1719518862396Oreo-Milkshake-Square.jpg",
    badge: null,
    allergens: ["Dairy", "Gluten"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "dessert_006",
    name: "Classic Milkshake",
    description:
      "Your choice of vanilla, chocolate or strawberry — thick, cold and made the old-fashioned way.",
    price: 45,
    category: "Desserts",
    image: "/products/1719518995764How-to-Make-a-Milkshake-Square.jpg",
    badge: null,
    allergens: ["Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },

  // ─── BEVERAGES ───────────────────────────────────────────────
  {
    _id: "bev_001",
    name: "Coca-Cola",
    description:
      "Ice-cold Coca-Cola served in a chilled glass with ice. The perfect companion to any meal.",
    price: 25,
    category: "Beverages",
    image: "/products/1719519069050coca-cola-glass-soda-nrdvoxB-600.jpg",
    badge: null,
    allergens: [],
    spiceLevel: 0,
    prepTime: "2 min",
  },
  {
    _id: "bev_002",
    name: "Sprite",
    description:
      "Crisp, refreshing lemon-lime Sprite poured over ice. Light and effervescent.",
    price: 25,
    category: "Beverages",
    image:
      "/products/1719519243520Header_MediumSprite_Glass_832x472_1-3-product-tile-desktop.jfif",
    badge: null,
    allergens: [],
    spiceLevel: 0,
    prepTime: "2 min",
  },
  {
    _id: "bev_003",
    name: "Iced Coffee Latte",
    description:
      "Smooth cold brew poured over ice with a splash of milk — energising and refreshing.",
    price: 45,
    category: "Beverages",
    image:
      "/products/1719519449566coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg",
    badge: "Popular",
    allergens: ["Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "bev_004",
    name: "Ballantine's Ginger Ale",
    description:
      "Ballantine's Finest blended Scotch whisky paired with ginger ale, fresh mint and lemon. A cocktail classic.",
    price: 89,
    category: "Beverages",
    image:
      "/products/1719519522165ballantines-finest-ginger-ale-mint-lemon-scaled.jpg",
    badge: null,
    allergens: [],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "bev_005",
    name: "Stella Artois",
    description:
      "Premium Belgian lager, crisp and clean with a subtle hoppy finish. Served ice-cold.",
    price: 49,
    category: "Beverages",
    image: "/products/1719519705276stellachalice_can_1200x1200.webp",
    badge: null,
    allergens: ["Gluten"],
    spiceLevel: 0,
    prepTime: "2 min",
  },
  {
    _id: "bev_006",
    name: "White Russian",
    description:
      "Vodka, coffee liqueur and fresh cream over ice. Smooth, rich and decadent.",
    price: 95,
    category: "Beverages",
    image: "/products/1719519757063White_Russian_16x9.avif",
    badge: null,
    allergens: ["Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "bev_007",
    name: "Freshly Brewed Tea",
    description:
      "A pot of your choice — English Breakfast, green, chamomile or rooibos. Served with milk and honey.",
    price: 29,
    category: "Beverages",
    image: "/products/1738916400677Tea-Most-consumed-beverages.jpg",
    badge: null,
    allergens: ["Dairy"],
    spiceLevel: 0,
    prepTime: "5 min",
  },
  {
    _id: "bev_008",
    name: "Lemonade",
    description:
      "House-made freshly squeezed lemonade with a hint of mint. Sweet, tart and perfectly chilled.",
    price: 35,
    category: "Beverages",
    image: "/products/1738916617815Lemonade.jpg",
    badge: null,
    allergens: [],
    spiceLevel: 0,
    prepTime: "5 min",
  },
];

export default food_list;
