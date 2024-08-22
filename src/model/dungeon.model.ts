import { Boss } from "./boss.model";
import { Loot } from "./loot.model";

export interface Dungeon {
    id?: number;
    name?: string;
    loot: Loot[];
    boss?: Boss;
    belongTo: string;
    belongToId: number;
}