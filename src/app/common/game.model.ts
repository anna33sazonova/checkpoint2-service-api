import { Clip } from "./clip.model";
import { Genre } from "./genre.model";
import { ShortScreenshot } from "./shortScreenshot.model";

export interface Game {

    id: number;
    slug: string;
    name: string;
    released: Date;
    background_image: string;
    rating: number;
    saturated_color: string;
    dominant_color: string;
    genres: Genre[];
    clip: Clip;
    short_screenshots: ShortScreenshot[];

}