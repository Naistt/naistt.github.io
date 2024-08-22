import { Dungeon } from "./dungeon.model";

export interface World {
    id?: string;
    name?: string;
    dungeons: Dungeon[];
}