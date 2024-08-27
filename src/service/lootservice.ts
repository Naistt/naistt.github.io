import { Injectable } from '@angular/core';
    
@Injectable()
export class LootService {
    getLootsData() {
        return [
            // KRICKTRIA START
            {
                id: 0,
                name: '1-3',
                loot: [{}],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guardião')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Vida')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 1,
                name: '1-6',
                loot: [{}],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Sacerdote')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 2,
                name: '1-9',
                loot: [{}],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 3,
                name: '2-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 4,
                name: '2-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Equilíbrio')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 5,
                name: '2-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Atirador')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 6,
                name: '3-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 7,
                name: '3-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Equilíbrio')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 8,
                name: '3-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guardião')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 9,
                name: '4-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guardião')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 10,
                name: '4-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 11,
                name: '4-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Equilíbrio')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 12,
                name: '5-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 13,
                name: '5-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Atirador')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 14,
                name: '5-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Vida')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 15,
                name: '6-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 16,
                name: '6-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Atirador')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 17,
                name: '6-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 18,
                name: '7-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 19,
                name: '7-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            {
                id: 20,
                name: '7-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Kricktria',
                belongToId: 0
            },
            // END KRICKTRIA
            // MAUSFIA START
            {
                id: 21,
                name: '8-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Equilíbrio')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 22,
                name: '8-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Atirador')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Equilíbrio')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 23,
                name: '8-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 24,
                name: '9-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Vida')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 25,
                name: '9-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Sacerdote')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 26,
                name: '9-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 27,
                name: '10-3',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    },
                    {
                        id: 2,
                        name: 'Chaser Crystal',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Mago')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 28,
                name: '10-6',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    },
                    {
                        id: 2,
                        name: 'Chaser Crystal',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guardião')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            },
            {
                id: 29,
                name: '10-9',
                loot: [
                    {
                        id: 0,
                        name: 'Fragmento de Bravura',
                        quantity: 20
                    },
                    {
                        id: 1,
                        name: 'Cubo de Despertar',
                        quantity: 3
                    },
                    {
                        id: 2,
                        name: 'Chaser Crystal',
                        quantity: 3
                    }
                ],
                boss: {
                    id: 0,
                    name: '',
                    class: this.getAllBossType().find((x) => x.name == 'Guerreiro')?.name,
                    attribute: this.getAllBossAttribute().find((x) => x.name == 'Punição')?.name
                },
                belongTo: 'Máusfia',
                belongToId: 1
            }, // END MAUSFIA
        ];
    }

    getAllBossType() {
        return [
            {
                id: 1,
                name: 'Guerreiro',
            },
            {
                id: 2,
                name: 'Guardião',
            },
            {
                id: 3,
                name: 'Atirador',
            },
            {
                id: 4,
                name: 'Mago',
            },
            {
                id: 5,
                name: 'Sacerdote',
            }
        ];
    }

    getAllBossAttribute() {
        return [
            {
                id: 1,
                name: 'Punição',
            },
            {
                id: 2,
                name: 'Vida',
            },
            {
                id: 3,
                name: 'Equilíbrio',
            },
            {
                id: 4,
                name: 'Circulação',
            },
            {
                id: 5,
                name: 'Destruição',
            }
        ];
    }

    getWorlds() {
        return [
            {
                // world 1
                id: '0',
                name: 'Kricktria',
                dungeons: []
            },
            {
                // world 2
                id: '1',
                name: 'Máusfia',
                dungeons: []
            },
            {
                // world 3
                id: '2',
                name: 'Kounat',
                dungeons: []
            },
            {
                // world 4
                id: '3',
                name: 'Demon World - Crimson River',
                dungeons: []
            },
            {
                // world 5
                id: '4',
                name: 'Demon World - Burning Canyon',
                dungeons: []
            },
            {
                // world 6
                id: '5',
                name: 'Underworld',
                dungeons: []
            },
            {
                // world 7
                id: '6',
                name: 'Bermesiah',
                dungeons: []
            },
            {
                // world 8
                id: '7',
                name: 'Ellia Peninsula',
                dungeons: []
            },
            {
                // world 9
                id: '8',
                name: 'Pandemonium',
                dungeons: []
            },
            {
                // world 10
                id: '9',
                name: 'Demon World - Dread Forest',
                dungeons: []
            },
            {
                // world 11
                id: '10',
                name: 'Spirit World',
                dungeons: []
            },
            {
                // world 12
                id: '11',
                name: 'Demon World - Terre',
                dungeons: []
            },
            {
                // world 13
                id: '12',
                name: 'Archimedia',
                dungeons: []
            },
            {
                // world 14
                id: '13',
                name: 'Satellite Heaven',
                dungeons: []
            },
            {
                // world 15
                id: '14',
                name: 'Celestial World',
                dungeons: []
            },
            {
                // world 16
                id: '15',
                name: 'Celestial World - Upper Heavens',
                dungeons: []
            }
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getLootsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getLootsData().slice(0, 10));
    }

    getLoots() {
        return Promise.resolve(this.getLootsData());
    }

    getBossesType() {
        return Promise.resolve(this.getAllBossType());
    }

    getBossesAttribute() {
        return Promise.resolve(this.getAllBossAttribute());
    }

    getAllWorlds() {
        return Promise.resolve(this.getWorlds());
    }
};