export interface IFishModel {
    code: string;
    name: string;
    urlImg: string;
    otherNames: string[];
    description: string[];
    productRecipe: ProductRecipe[];
}

interface ProductRecipe {
    name: string;
    description: string;
    material: string[];
    steps: string[]
}
