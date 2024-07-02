import add_icon from './add-icon.png';
import green_plus from './green-plus.jpg';
import red_minus from './red-minus.png';

const assets = {
    add_icon,
    green_plus,
    red_minus
};

export default assets;
/*export const food_list = [
    {
        _id: 1,
        name: "Margherita Pizza",
        Category: "Pizza",
        image: "https://www.dominos.jp/ManagedAssets/JP/product/1604/JP_1604_en_hero_10375.png?v1926120634",
        ingredients: ["Italian Bocconcini, Basil, Cherry Tomatoes, Tomato Sauce"],
        price: 11.99
    },
    {
        _id: 2,
        name: "American Pizza",
        Category: "Pizza",
        image: "https://www.dominos.jp/ManagedAssets/JP/product/1601/JP_1601_en_hero_10151.png?v-400852966",
        ingredients: ["Pepperoni, Tomato Sauce"],
        price: 14.99
    },
    {
        _id: 3,
        name: "Tropical Pizza",
        Category: "Pizza",
        image: "https://www.dominos.jp/ManagedAssets/JP/product/1603/JP_1603_en_hero_10151.png?v-475862174",
        ingredients: ["Ham, Pineapple, Tomato Sauce"],
        price: 12.99
    },
    {
        _id: 4,
        name: "ASPARAGUS AND BACON PIZZA",
        Category: "Pizza",
        image: "https://www.dominos.jp/ManagedAssets/JP/product/2560/JP_2560_en_hero_12749.png?v1059614107",
        ingredients: ["Sliced Asparagus, Bacon, White Sauce"],
        price: 12.99
    },
    {
        _id: 5,
        name: "GARLIC MASTER",
        Category: "Pizza",
        image: "https://www.dominos.jp/ManagedAssets/JP/product/1729/JP_1729_en_hero_9698.png?v-1039717748",
        ingredients: ["Garlic (Double), Pork Sausage, Bacon, Black Pepper, Tomato Sauce"],
        price: 15.99
    },
    {
        _id: 6,
        name: "Al Capone",
        Category: "Pizza",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1d/1b/be/43/la-creole.jpg",
        ingredients: ["Chourico, pork spare rib, Peppadew, feta, avocado, hot honey sauce"],
        price: 18.99
    },
    {
        _id: 7,
        name: "Alla Pappa",
        Category: "Pizza",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXrakaK4XJTX9LKZ5qFX9_eFlD40A1kGJ1KKnuoHPdSMZ6v9A_",
        ingredients: ["Bacon, Feta, Avocado"],
        price: 16.99
    },
    {
        _id: 8,
        name: "WHITE PIZZA",
        Category: "Pizza",
        image: "https://slice-menu-assets-prod.imgix.net/11380/1595427244_a36bc46ce4?fit=crop&w=2000&h=1250",
        ingredients: ["spinach, tomatoes, provolone, mozzarella cheese"],
        price: 14.49
    },
    {
        _id: 9,
        name: "Chicken Bacon Ranch Pizza",
        Category: "Pizza",
        image: "https://slice-menu-assets-prod.imgix.net/11380/1594213691_a1c57929f7?fit=crop&w=2000&h=1250",
        ingredients: ["chicken, mozzarella, provolone, cheddar cheese, bacon strips, Ranch sauce"],
        price: 14.99
    },
    {
        _id: 10,
        name: "Meat Lover's Pizza",
        Category: "Pizza",
        image: "https://slice-menu-assets-prod.imgix.net/11380/1610556441_2b8378fe1a?fit=crop&w=2000&h=1250",
        ingredients: ["pepperoni, sausage, ham, meatballs, steak, bacon"],
        price: 15.49
    },
    {
        _id: 11,
        name: "BBQ Pork Ribs 300G",
        Category: "Ribs & Steaks",
        image: "https://wikideals.co.za/media/catalog/product/p/p/ppp39059830598.jpg",
        ingredients: ["Chips, Onion Rings, 300G Pork Ribs"],
        price: 13.50
    },
    {
        _id: 12,
        name: "Cheddamelt Steak",
        Category: "Ribs & Steaks",
        image: "https://res.cloudinary.com/spur-group/image/upload/w_600,h_420,c_fill,fl_lossy/spurcorp/929A3144-DBD9-4DC5-91E4-BE49978F5983",
        ingredients: ["Chips, Onion Rings, Rump or Sirloin, Cheese, Mushroom Sauce"],
        price: 15.50
    },
    {
        _id: 13,
        name: "Peppermelt Steak",
        Category: "Ribs & Steaks",
        image: "https://img-global.cpcdn.com/recipes/d54f2c349aa983bd/1200x630cq70/photo.jpg",
        ingredients: ["Chips, Onion Rings, Rump or Sirloin, Cheese, Creamy pepper Sauce"],
        price: 15.50
    },
    {
        _id: 14,
        name: "Chargrilled Rump",
        Category: "Ribs & Steaks",
        image: "https://res.cloudinary.com/spur-group/image/upload/w_600,h_420,c_fill,fl_lossy/spurcorp/83A84392-419F-4618-8B01-B2070F88252B",
        ingredients: ["Chips or Mashed potatoes, Onion Rings, 300G Rump"],
        price: 14.20
    },
    {
        _id: 15,
        name: "Lamb Chops",
        Category: "Ribs & Steaks",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/27/6c/e7/lamb-chops.jpg",
        ingredients: ["Chips or Mashed potatoes, Onion Rings, 400G Lamb Chops"],
        price: 14.22
    },
    {
        _id: 16,
        name: "Ribs on Wheels",
        Category: "Ribs & Steaks",
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/70835edecc1a25319eafad538ef08d23/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
        ingredients: ["Chips, Full Rack Ribs, Tomato Salad, Cole slaw"],
        price: 15.99
    },
    {
        _id: 17,
        name: "Outback-Style Prime Rib",
        Category: "Ribs & Steaks",
        image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/07/Outback-PrimeRib.jpg?resize=640,468&quality=82&strip=all",
        ingredients: ["Prime rib, Chips, Steamed Vegetables"],
        price: 15.90
    },
    {
        _id: 18,
        name: "Grilled Ribey",
        Category: "Ribs & Steaks",
        image: "https://tatyanaseverydayfood.com/wp-content/uploads/2019/06/Ribeye-Steak-Dinner-4-of-4-768x1024.jpg",
        ingredients: ["Ribey Steak, Onion, Baked Potato, Broccoli"],
        price: 15.90
    },
    {
        _id: 19,
        name: "Steak & Pap",
        Category: "Ribs & Steaks",
        image: "https://www.thechow.co.za/wp-content/uploads/2023/04/DSC_7796-scaled.jpg",
        ingredients: ["Sirloin Steak, Pap, Boerie Relish Sauce"],
        price: 16.80
    },
    {
        _id: 20,
        name: "Ribey Steak",
        Category: "Ribs & Steaks",
        image: "https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/fnjyzptb/d214a00e-412c-4ce9-af56-e2f7d08a568b.jpg",
        ingredients: ["Ribey steak, Garden salad, Mashed Potatoes, Garlic Bead"],
        price: 16.99
    },
    {
        _id: 21,
        name: "Chicken Scnhitzel",
        Category: "Chicken",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/27/6c/b1/chicken-style-schnitzel.jpg",
        ingredients: ["chips, Onion Rings, Crumbed Chicken Breast Fillet, Sweet Chilli Sauce"],
        price: 15.99
    },
    {
        _id: 22,
        name: "Cheddamelt Chicken Scnhitzel",
        Category: "Chicken",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/27/6c/98/cheddamelt-chicken-schnitzel.jpg",
        ingredients: ["chips, Onion Rings, Crumbed Chicken Breast Fillet, Mushroom Sauce"],
        price: 15.99
    },
    {
        _id: 23,
        name: "Chicken Strips",
        Category: "Chicken",
        image: "https://wikideals.co.za/media/catalog/product/h/a/hake1_1_1_2_1_1_1.jpg",
        ingredients: ["Crumbed Chicken Strips, Sweet chilli Mayo dressing, Chips, Onion Rings"],
        price: 25.99
    },
    {
        _id: 24,
        name: "1/4 Chicken & Hotpot Rice",
        Category: "Chicken",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIk4tEWfw7WuO7He-cENUkSjHOsCKVh2bx1vUTaUGvOMlFDIK8",
        ingredients: ["1/4 Chicken, Spicy Rice, Pulled Chicken, veg, tomato relish"],
        price: 14.99
    },
    {
        _id: 25,
        name: "Roasted Corn & Red Pepper Boujee",
        Category: "Chicken",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYclwbzd9P1ZO9E5elgsPue1gDGuhllRF52akyLorZ20u8WrC3",
        ingredients: ["Spicy Rice, Chicken Strips, Corn, Red Pepper"],
        price: 14.99
    },
    {
        _id: 26,
        name: "Full Chicken",
        Category: "Chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAt8YMlZWwssAfYFCb77Bed_9XXhWkFKAPOEKxgkcz4G6TgBig",
        ingredients: ["Full Chicken, Salad, 4 Rolls"],
        price: 16.99
    },
    {
        _id: 27,
        name: "Chicken wraps",
        Category: "Chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Hzapqh1bIsiQ9EQjuCivd5P06FWd3NpLqqHKRAY9UvsuD2BN",
        ingredients: ["Crumbed chicken strips, Chips"],
        price: 14.50
    },
    {
        _id: 28,
        name: "Chicken Trinchado",
        Category: "Chicken",
        image: "https://pbs.twimg.com/media/DjwapyRXsAAz2cw.jpg",
        ingredients: ["Cubed Chicken, Peri-Peri Creamy Sauce, Chips, Pizza Basket"],
        price: 15.50
    },
    {
        _id: 29,
        name: "Grilled Chicken Fajitas",
        Category: "Chicken",
        image: "https://www.allrecipes.com/thmb/AyLWtvRuldcbNvGk5rs7cKCF3fk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/281448-grilled-chicken-fajitas-mfs-4-6c901272e8e34755bf0c5a535c8cb9fa.jpg",
        ingredients: ["Grilled Peppers, Tortillas, Chicken Breasts"],
        price: 15.99
    },
    {
        _id: 30,
        name: "Spicy Grilled Chicken",
        Category: "Chicken",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/11/ef/a9/3b/photo1jpg.jpg",
        ingredients: ["Grilled Chicken, Rice, Maranera Sauce"],
        price: 15.50
    },
    {
        _id: 31,
        name: "Bacon, Cheese & Guacamole Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzcFCHTUNaFAAxAk583TPSDfSH6w3gPwh_Q&s",
        ingredients: ["Melted Cheese, Grilled Bacon, Guacamole, Beef Patty, Chips, Onion Rings"],
        price: 14.99
    },
    {
        _id: 32,
        name: "Goodie Burger",
        Category: "Burgers",
        image: "https://deelishlifeandstyle.wordpress.com/wp-content/uploads/2015/05/hunga-busta.jpg?w=640",
        ingredients: ["Melted Cheese, Chips, Onion Rings, Pineapple Ring, Creamy Mushroom Sauce"],
        price: 15.99
    },
    {
        _id: 33,
        name: "Baby Back Rib Burger",
        Category: "Burgers",
        image: "https://www.jacksonville.com/gcdn/authoring/2017/04/14/NFTU/ghows-LK-eb102a7b-eb4b-4be5-8303-a751bf5a53fe-b61d0f14.jpeg",
        ingredients: ["Boneless Ribs, BBQ Sauce, Onion Strings, Pickles, Chips"],
        price: 15.55
    },
    {
        _id: 34,
        name: "Chilli Cheese Schnitz Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjdT_8BYq5zX_UX78ZbqNZOcy3vvAOKuCs6UM8e7xCskvRpDZN",
        ingredients: ["Chicken Breast, Chilli Relish, Gouda Cheese, Mayo, Yellow Mustard, Chips"],
        price: 15.55
    },
    {
        _id: 35,
        name: "Bento Cheese & Bacon Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudIkJjdNM43zDdbm4uqTaxvDqrmlyKY7_WA5fCTSybD2yACm3",
        ingredients: ["Beef Patty, Bacon, Gouda Cheese, BBQ Sauce, Fries"],
        price: 14.55
    },
    {
        _id: 36,
        name: "Big Daddy Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlDugX3KkoMvPKHEhWAq5kSFv9XM-ICpMXN1cZjivcV_mK6Pmm",
        ingredients: ["beef patty, fried egg, back bacon, hickory ham, cheddar, gherkins, tomato, burger mayo, red onion"],
        price: 17.55
    },
    {
        _id: 37,
        name: "Atomic Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYBV2FFbpYPYlkaSzAFK5qEBwzZxNXw7uMa2u3TFv3RMXhgbrK",
        ingredients: ["Beef patty, Chips, Onion Rings, Bacon, Cheese, Gherkins"],
        price: 16.55
    },
    {
        _id: 38,
        name: "Wagyu Truffle Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnMbPUrKsGASLTBhizxI4qIpFFuor512vH_gqVXlGgKCjkSt5",
        ingredients: ["Wagyu patty, bacon, lettuce, truffle aïoli"],
        price: 17.55
    },
    {
        _id: 39,
        name: "Wagyu Royale",
        Category: "Burgers",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwRbqzCSoa7K9kunCXA3lcapzqbcq6WSUiGQXfyPyFk5gIpJpX",
        ingredients: ["Wagyu patty, american cheese, special sauce, pickles, lettuce, beer battered onion ring"],
        price: 17.55
    },
    {
        _id: 40,
        name: "Crispy Chicken Burger",
        Category: "Burgers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCABGFNj1yljQ9RGeoi-MxoW0afsre4VWQn6W9QDf5WwKJCQM",
        ingredients: ["Crispy chicken breast, tomato, onion, slaw, house mayo, BBQ sauce"],
        price: 15.55
    },
    {
        _id: 41,
        name: "Hake & Chips",
        Category: "Seafood",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaZQziP99PTM1CilBZgySqMpYTarSgD1KXREFYstmNh0sR8_a",
        ingredients: ["Hake, Chips, Tartare Sauce"],
        price: 17.99
    },
    {
        _id: 42,
        name: "Calamari Strips",
        Category: "Seafood",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSt2jDI1uEI8Us2PZPxJAQEcRNwev6lqUc5IE-cNnvQg7XyJrsn",
        ingredients: ["Calamari Strips, Chips, Tartare Sauce"],
        price: 17.99
    },
    {
        _id: 43,
        name: "Hake Hot Pot",
        Category: "Seafood",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcc60w3UErAfWRsL3QdnM1eM1KbHkNKfOH1-fUAyB9RrzWuHM5",
        ingredients: ["Hake, Rice, Mushrooms"],
        price: 18.55
    },
    {
        _id: 44,
        name: "Nuggets and chips",
        Category: "Seafood",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIsMUebVDhmoQcLpS0gEP0fHQGX3GhplacJBu9C_C8ca5OJKoQ",
        ingredients: ["Hake, Chips, Tartare Sauce"],
        price: 17.99
    },
    {
        _id: 45,
        name: "Pop prawns, Hake & Calamari",
        Category: "Seafood",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjE2R_8DvENfSnh58OqY9wPtsX_f2o66PAFPi03-lEEXExEqbv",
        ingredients: ["Hake, Prawns, Calamari, Tartare Sauce"],
        price: 17.99
    },
    {
        _id: 46,
        name: "Villain's Seafood Platter",
        Category: "Seafood",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWup1a0n5VAClRZFvIg145DEVz0za1rkOt6P_gwho6UzdQfsp",
        ingredients: ["medium prawns, hake, calamari, squid heads"],
        price: 18.55
    },
    {
        _id: 47,
        name: "Platter for Two",
        Category: "Seafood",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTc3mNARBFDRw1mGp2B262klzSVW1s1d9Em3vwnskt_9CHADgG0",
        ingredients: ["prince prawns, calamari, calamari heads, Cajun Fish, 6 mussels, Chips/Rice/Salad"],
        price: 20.99
    },
    {
        _id: 48,
        name: "Lemon, Garlic Mussle",
        Category: "Seafood",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzjA0hvpJNB6sr4aRc5-A9tAruAkNOUNxSU9FQQoEdfUoc87iB",
        ingredients: ["Half shell mussels, creamy lemon garlic sauce"],
        price: 12.99
    },
    {
        _id: 49,
        name: "Saucy Calamari",
        Category: "Seafood",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPnGpPUTBUBv7890fMJlZLxz87eqYntvTVA4Y5DyVeib90Gv2g",
        ingredients: ["Fried Calamari Tubes, Mediterranean/Spicy Summer sauce, Chips, 2 Rolls"],
        price: 16.99
    },
    {
        _id: 50,
        name: "Panko Prawns",
        Category: "Seafood",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUYRvhH6mPlYkEGQqxvwVtglkhQM3wBm-NOpXhsLvPxmcQryx",
        ingredients: ["Crumbed Prawns, Zesty Mayo, Chips"],
        price: 14.99
    },
    {
        _id: 51,
        name: "Napoli Pasta",
        Category: "Pasta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoFlR7w6tayTEa1BdKKz4q-zkJeIOJH9kraZ7UW9XPf-eH9StecZfnkAc6bAVrfgQbXM&usqp=CAU",
        ingredients: ["Napoli Sauce, Basil, pasta, Beef"],
        price: 12.99
    },
    {
        _id: 52,
        name: "Zingara Pasta",
        Category: "Pasta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbm-mmSgdPMvxnAKzIpAfOHfv3wOEhovzo6yk2mmOa_aqCdBd",
        ingredients: ["Bacon, mushrooms, creamy Napoli sauce, garlic, chilli"],
        price: 14.55
    },
    {
        _id: 53,
        name: "Bolognaise Pasta",
        Category: "Pasta",
        image: "https://workweeklunch.com/wp-content/uploads/2022/10/spaghetti.bolognese-4-480x270.jpg",
        ingredients: ["Beef ragu, pork ragù, Cream, mozzarella"],
        price: 15.99
    },
    {
        _id: 54,
        name: "Gnocchi De Sol Pasta",
        Category: "Pasta",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXF7lZRhrXqbxfszVIBEd3y0uP-NLYfRnosMa5e3OoURWe7WwR",
        ingredients: ["chorizo, prawns, Napoli sauce, white wine, chilli, garlic, cream"],
        price: 18.55
    },
    {
        _id: 55,
        name: "Marinara Pasta",
        Category: "Pasta",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbjMjjEyoRG_NPuPLTdPEgjKYnoaUsfbfIW6FN0N_1j7WVeMvu",
        ingredients: ["calamari, mussels, prawns, white wine, Napoli sauce, garlic, chilli, fennel"],
        price: 17.99
    },
    {
        _id: 56,
        name: "Creamy Pesto Pasta",
        Category: "Pasta",
        image: "https://richanddelish.com/wp-content/uploads/2023/02/creamy-pesto-pasta-9-of-15.jpg",
        ingredients: ["Parmesan Cheese, Pesto, Cream"],
        price: 16.55
    },
    {
        _id: 57,
        name: "Gorgonzola Pasta",
        Category: "Pasta",
        image: "https://www.eefkooktzo.nl/wp-content/uploads/2024/02/Pasta-gorgonzola_.jpg",
        ingredients: ["Gorgonzola, Mushroom, Cheese, Cream"],
        price: 36.55
    },
    {
        _id: 58,
        name: "Pomodoro Pasta",
        Category: "Pasta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oWHWXtIb12oiS9pQUUBjMMr4-Ny0NqQe2TCCPvVrbmd4dVcfaGDA8Hpjvm-wHdNyr40&usqp=CAU",
        ingredients: ["Cheese, Basil, Garlic, Tomatoes"],
        price: 17.55
    },
    {
        _id: 59,
        name: "Cannelloni Pasta Rolls",
        Category: "Pasta",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmaP9gl6BVgkqC9c1XEWFmXT1dlIE5qO7isqJuL2ICWh61gWMh",
        ingredients: ["pasta rolls, spinach, feta"],
        price: 18.99
    },
    {
        _id: 60,
        name: "Beef Lasagne",
        Category: "Pasta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyn0fOa3wRnOdIY06iT9NPOLo3-pqxtAkx7Prd_kkXnVkBhx5Myci6HDYq_ajC37uraFA&usqp=CAU",
        ingredients: ["mozzarella, Beef, Parmesan Cheese"],
        price: 18.55
    },
    {
        _id: 61,
        name: "Crumbed Mushrooms",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4r6JyzmTnOOak68fNWw8iV1AGpW1RrFsghCrLZteny9b9xlr6_D6W98PJ4UgR6NbtHjM&usqp=CAU",
        ingredients: ["Crumbed Mushrooms, Tartare Sauce"],
        price: 11.59
    },
    {
        _id: 62,
        name: "12 Buffalo Wings",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jNNBpzZSNMvKwGjgk0c7bgzAYfrHgW-K2PRD6JJFrkdq9gZUdIfZ6Mp20s12EPkIvDg&usqp=CAU",
        ingredients: ["Buffalo Wings, Tartare Sauce/Sweet Chilli Sauce/Marinara Saunce/BBQ Sauce"],
        price: 12.55
    },
    {
        _id: 63,
        name: "Chourico",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MDCS87AxP8IjR5qOUaIZibQAkcUY8qcI7IJ8L1YhwkUbxpYdfDHwVk3WELlU0XQK_MY&usqp=CAU",
        ingredients: ["Pork Sausages, Sweet chilli sauce"],
        price: 11.55
    },
    {
        _id: 64,
        name: "Spring Rolls",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcyQ_Da0D9GrKF2de2tOKOc6ZxWEXyo2eVg&s",
        ingredients: ["Spring Rolls, Sweet and Sour Sauce"],
        price: 11.59
    },
    {
        _id: 65,
        name: "Tomato Bruchetta",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TE56exDCcwDma9e8CQMEITyq2F1VrV3zJg&s",
        ingredients: ["Bread, Tomato, Basil"],
        price: 11.59
    },
    {
        _id: 66,
        name: "Snails",
        Category: "Starters",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTs719pPrYU4FoqowNdzYqT56cqX_6DnMhY1RplyG8j7Rk2bQ0y",
        ingredients: ["Snails, Garlic & Parsley Sauce"],
        price: 10.99
    },
    {
        _id: 67,
        name: "Chicken livers",
        Category: "Starters",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKFShUH5neYahDSu0huNrGAg5XoMbWa6JDvDBoO4XeWbwkx3Yx",
        ingredients: ["Chicken Livers, Garlic & Chilli Sauce"],
        price: 11.99
    },
    {
        _id: 68,
        name: "Oysters",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS7bCtiLRQYE7_hqbCA6V6ZIXPtl6UdlsFJiNr9vwAjCazFV5",
        ingredients: ["Oysters"],
        price: 10.58
    },
    {
        _id: 69,
        name: "Halloumi Cheese",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfMoS880j_ypqnHEaxp0fm6uRxFjz8E2HZ7gCyq21PGGie4nQdpBD_fFkj1TM0K7A_sQ&usqp=CAU",
        ingredients: ["sweet Chilli Sauce, Lemon wedge, Cheese"],
        price: 11.99
    },
    {
        _id: 70,
        name: "Mozzarella Sticks",
        Category: "Starters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfQhrasueRkSx8lpIVdFnPynJ01jbDc7QAA&s",
        ingredients: ["Mozzarella, Sweet and Sour Sauce"],
        price: 10.99
    },
    {
        _id: 71,
        name: "Peppermint Crisp Tart",
        Category: "Desserts",
        image: "https://www.chelsea.co.nz/hubfs/New%20Recipe%20images/Peppermint%20Crisp%20Tart.jpg",
        ingredients: ["Peppermint Tart, Caramel Sauce"],
        price: 12.55
    },
    {
        _id: 72,
        name: "Bar One Chocolae Brownie",
        Category: "Desserts",
        image: "https://cdn11.bigcommerce.com/s-ek50668lzs/images/stencil/1280x1280/products/3659/3923/2289-lg__70393.1704216050.jpg?c=1?imbypass=on",
        ingredients: ["Brownie, Cherry, Cream"],
        price: 12.55
    },
    {
        _id: 73,
        name: "Malva Puding",
        Category: "Desserts",
        image: "https://i.pinimg.com/564x/a1/00/38/a10038ca14e9962250820bbf2713e5f5.jpg",
        ingredients: ["Pudding, Custard"],
        price: 12.99
    },
    {
        _id: 74,
        name: "Tiramisu Toscana",
        Category: "Desserts",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVhlDzGREGZ9W24KarMT44c9gld0Ox57CCe5EaC-p12zRaAHRf",
        ingredients: ["Custard, Pudding"],
        price: 10.99
    },
    {
        _id: 75,
        name: "Waffle & Bar One Sauce",
        Category: "Desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfaiGdLtYpAy8J6h5nbUkDSj45mUC6ouJNCPxh0ZhhE_mT-0g",
        ingredients: ["Waffle, Bar One Sauce, Ice Cream, Astros"],
        price: 11.55
    },
    {
        _id: 76,
        name: "Chocolate Sundae",
        Category: "Desserts",
        image: "https://www.foodandwine.com/thmb/tOseDGpsNj6yUDnb1HQPPVJQ8yc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Salted-Chocolate-Sundae-XL-RECIPE0823-9f70ed1a63414093a8ad8deb77c5b92b.jpg",
        ingredients: ["Ice Cream, Cream, Sauce"],
        price: 11.99
    },
    {
        _id: 77,
        name: "Bannana Split",
        Category: "Desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKX81nY72O2DJfkyjq9aX3pV-CL8-iBuu3RQ&s",
        ingredients: ["Bannana, Ice Cream"],
        price: 11.99
    },
    {
        _id: 78,
        name: "Cannoli",
        Category: "Desserts",
        image: "https://fratellisnewyorkpizza.com/wp-content/uploads/2019/07/cannoli.jpg",
        ingredients: ["Ice Cream, Whipped Cream, Shaved Chocolate"],
        price: 10.55
    },
    {
        _id: 79,
        name: "Churros",
        Category: "Desserts",
        image: "https://www.cookingclassy.com/wp-content/uploads/2018/07/churros-3.jpg",
        ingredients: ["Churros, Chocolate Sauce"],
        price: 10.99
    },
    {
        _id: 80,
        name: "Soy Milk Donuts",
        Category: "Desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlh-Kqy2pdknXN9Qa5x5VAbVZ1nSGYOEEqMM7OLwygbI6kDcngZlWFG1Pd1GzSqBiOC7c&usqp=CAU",
        ingredients: ["Soy, caramel, Donut"],
        price: 10.55
    },
    {
        _id: 80,
        name: "Oreo Milkshake",
        Category: "Beverages",
        image: "https://www.julieseatsandtreats.com/wp-content/uploads/2021/08/Oreo-Milkshake-Square.jpg",
        ingredients: ["Oreos, Milkshake"],
        price: 5.55
    },
    {
        _id: 81,
        name: "Bar One Milkshake",
        Category: "Beverages",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sbxXWQpYox8LEH7P8wCr5oN7H0DN_q1Gow&s",
        ingredients: ["Bar One, Milkshake"],
        price: 5.55
    },
    {
        _id: 82,
        name: "Turkish Delight Milkshake",
        Category: "Beverages",
        image: "https://www.julieseatsandtreats.com/wp-content/uploads/2021/06/How-to-Make-a-Milkshake-Square.jpg",
        ingredients: ["Turkish Delight, Strawberry, Milkshake"],
        price: 5.55
    },
    {
        _id: 83,
        name: "Coke",
        Category: "Beverages",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTATZua21-Sl3KdRi58dDZfF96KqCF8v2JBg&s",
        ingredients: ["Coke"],
        price: 2.99
    },
    {
        _id: 84,
        name: "Sprite",
        Category: "Beverages",
        image: "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumSprite_Glass_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
        ingredients: ["Sprite"],
        price: 2.99
    },
    {
        _id: 85,
        name: "Fanta",
        Category: "Beverages",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD378kg0yw0n1ZoVNmaoX4lS8-7JGR0enhww&s",
        ingredients: ["Fanta"],
        price: 2.99
    },
    {
        _id: 86,
        name: "Iced Coffee",
        Category: "Beverages",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505",
        ingredients: ["Coffee, Ice, Milk"],
        price: 3.99
    },
    {
        _id: 87,
        name: "Ginger Ale",
        Category: "Beverages",
        image: "https://www.ballantines.com/wp-content/uploads/2020/10/ballantines-finest-ginger-ale-mint-lemon-scaled.jpg",
        ingredients: ["Ginger Ale"],
        price: 3.99
    },
    {
        _id: 88,
        name: "Brandewyn & Coke",
        Category: "Beverages",
        image: "https://www.checkers.co.za/medias/10718268EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wxMjY5OTh8aW1hZ2UvcG5nfGltYWdlcy9oNTcvaGU0Lzk2NTExMDk4MjI0OTQucG5nfDg5N2E5Zjg5MDQ2Y2RlMjQxNzgwNTk2MmE2MjRkMmU3MTM3NjgwNTRjYjk4MTJiZDg0ZTEzNWEzYTM5ZmY0MmY",
        ingredients: ["BuffelsFontein, Coke"],
        price: 3.99
    },
    {
        _id: 89,
        name: "Stella Artois",
        Category: "Beverages",
        image: "https://www.shopbeergear.ca/cdn/shop/products/stellachalice_can_1200x1200.png?v=1648397192",
        ingredients: ["Beer"],
        price: 3.99
    },
    {
        _id: 90,
        name: "White Russian",
        Category: "Beverages",
        image: "https://www.kahlua.com/wp-content/uploads/2023/10/White_Russian_16x9.jpeg",
        ingredients: ["Vodka, Heavy Cream, Kahlu"],
        price: 3.99
    }
]*/