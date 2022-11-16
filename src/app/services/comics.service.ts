import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";


@Injectable()

export class ComicsService {
    getComics() : any {
        var comics =  new Array<Comic>();

        comics = [
            new Comic(
                "Porky man",
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HHT37KL3VdS7uwIfmtSnEQHaHa%26pid%3DApi&f=1&ipt=fb599843616e116080cc12bc6c94a305e98f0d57026382da35fba3efdc3f8418&ipo=images",
                "Porky araña"
            ),
            new Comic(
                "Spiderman",
                "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
                "Hombre araña"
            ),
            new Comic(
                "Wolverine",
                "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
                "Lobezno"
            ),
            new Comic(
                "Guardianes de la Galaxia",
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                "Yo soy Groot"
            ),
            new Comic(
            "Avengers",
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
            "Los Vengadores"
            ),
            new Comic(
            "Spawn",
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
            "Todd MacFarlane"
            )
        ];

        return comics;

    }
}