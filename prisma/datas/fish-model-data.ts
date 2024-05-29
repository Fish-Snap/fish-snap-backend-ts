import { IFishModel } from "../interfaces/fish-model";

export const fishModelDatas: IFishModel[] = [
    {
        code: 'IKAN_BAWAL_HITAM',
        name: 'Ikan Bawal Hitam',
        urlImg: 'https://example.com/ikan_bawal_hitam.jpg',
        otherNames: ['Black Pomfret'],
        description: ['Ikan Bawal Hitam is a common fish found in tropical waters.'],
        productRecipe: [
            {
                name: 'Grilled Black Pomfret',
                description: 'A tasty grilled fish recipe.',
                material: ['Black Pomfret', 'Salt', 'Lemon'],
                steps: ['Clean the fish.', 'Season with salt and lemon.', 'Grill until cooked.']
            }
        ]
    },
    {
        code: 'IKAN_CIPA_CIPA',
        name: 'Ikan Cipa-Cipa',
        urlImg: 'https://example.com/ikan_cipa_cipa.jpg',
        otherNames: [],
        description: ['Ikan Cipa-Cipa is known for its mild flavor.'],
        productRecipe: [
            {
                name: 'Cipa-Cipa Soup',
                description: 'A mild flavored fish soup.',
                material: ['Ikan Cipa-Cipa', 'Ginger', 'Garlic'],
                steps: ['Boil water.', 'Add fish and spices.', 'Cook until fish is tender.']
            }
        ]
    },
    {
        code: 'IKAN_KEMBUNG',
        name: 'Ikan Kembung',
        urlImg: 'https://example.com/ikan_kembung.jpg',
        otherNames: ['Indian Mackerel'],
        description: ['Ikan Kembung is popular for its nutritional value.'],
        productRecipe: [
            {
                name: 'Fried Indian Mackerel',
                description: 'A simple fried fish recipe.',
                material: ['Indian Mackerel', 'Salt', 'Turmeric'],
                steps: ['Clean the fish.', 'Season with salt and turmeric.', 'Fry until golden.']
            }
        ]
    },
    {
        code: 'IKAN_KENYAR',
        name: 'Ikan Kenyar',
        urlImg: 'https://example.com/ikan_kenyar.jpg',
        otherNames: [],
        description: ['Ikan Kenyar is a small-sized fish found in coastal waters.'],
        productRecipe: []
    },
    {
        code: 'IKAN_KUWE',
        name: 'Ikan Kuwe',
        urlImg: 'https://example.com/ikan_kuwe.jpg',
        otherNames: ['Golden Trevally'],
        description: ['Ikan Kuwe is known for its firm texture and taste.'],
        productRecipe: [
            {
                name: 'Trevally Curry',
                description: 'A spicy and flavorful fish curry.',
                material: ['Golden Trevally', 'Coconut Milk', 'Spices'],
                steps: ['Prepare the curry base.', 'Add fish and coconut milk.', 'Simmer until cooked.']
            }
        ]
    },
    {
        code: 'IKAN_SALEM',
        name: 'Ikan Salem',
        urlImg: 'https://example.com/ikan_salem.jpg',
        otherNames: ['Pacific Saury'],
        description: ['Ikan Salem is enjoyed for its rich taste and oil content.'],
        productRecipe: []
    },
    {
        code: 'IKAN_SEBELAH',
        name: 'Ikan Sebelah',
        urlImg: 'https://example.com/ikan_sebelah.jpg',
        otherNames: ['Flatfish'],
        description: ['Ikan Sebelah is a flatfish known for its unique shape.'],
        productRecipe: []
    },
    {
        code: 'IKAN_SELAR_BULAT',
        name: 'Ikan Selar Bulat',
        urlImg: 'https://example.com/ikan_selar_bulat.jpg',
        otherNames: ['Round Scad'],
        description: ['Ikan Selar Bulat is a common fish in local markets.'],
        productRecipe: []
    },
    {
        code: 'IKAN_TENGGIRI_PAPAN',
        name: 'Ikan Tenggiri Papan',
        urlImg: 'https://example.com/ikan_tenggiri_papan.jpg',
        otherNames: ['Narrow-Barred Spanish Mackerel'],
        description: ['Ikan Tenggiri Papan is known for its versatile culinary uses.'],
        productRecipe: [
            {
                name: 'Spicy Mackerel',
                description: 'A spicy mackerel dish.',
                material: ['Mackerel', 'Chili', 'Garlic'],
                steps: ['Clean the fish.', 'Prepare the spicy sauce.', 'Cook fish with the sauce.']
            }
        ]
    },
    {
        code: 'IKAN_TUNA',
        name: 'Ikan Tuna',
        urlImg: 'https://example.com/ikan_tuna.jpg',
        otherNames: ['Tuna'],
        description: ['Ikan Tuna is a highly valued fish for its flavor and nutrients.'],
        productRecipe: [
            {
                name: 'Tuna Sashimi',
                description: 'Fresh tuna slices served raw.',
                material: ['Tuna', 'Soy Sauce', 'Wasabi'],
                steps: ['Slice the tuna.', 'Serve with soy sauce and wasabi.']
            }
        ]
    }
];
