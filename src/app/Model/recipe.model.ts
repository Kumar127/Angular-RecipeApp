import { Ingredients } from "./ingredients.model";

export class Recipe {
    public name:string;
    public desc:string;
    public imageUrl:string;
    public ingredients:Ingredients[];

    constructor(name:string, desc:string, imageUrl:string, ingredients:Ingredients[]){
        this.name = name;
        this.desc =  desc;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients
    }
}