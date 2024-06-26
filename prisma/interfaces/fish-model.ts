export interface IFishModel {
    code: string;
    name: string;
    scientificName: string;
    urlImg: string;
    otherNames: string[];
    description: string[];
    productRecipe: ProductRecipe[];
    location: Location[]

}

interface ProductRecipe {
    name: string;
    urlImg: string;
    description: string;
    material: string[];
    steps: string[]
}

interface Location {
    name: string;
    description: string;
}