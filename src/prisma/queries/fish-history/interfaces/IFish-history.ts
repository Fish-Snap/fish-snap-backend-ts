export interface IFishHistory {
    idUser: string;
    codeFishModel: string;
    name: string;
    scientificName: string;
    urlImg: string;
    confidence: number;
    otherNames: string[];
    description: string[];
    productRecipe: ProductRecipe[];
    location: Location[]

}

interface ProductRecipe {
    name: string;
    description: string;
    material: string[];
    steps: string[]
}

interface Location {
    name: string;
    description: string;
}