"use strict";


var GunDefs = {
    'mp5': {
        name: 'MP5',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.0,
        fireDelay: 0.09,
        switchDelay: 0.75,
        barrelLength: 2.625,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 3.0,
        bulletCount: 1,
        bulletType: 'bullet_mp5',
        bulletTypeBonus: 'bullet_mp5_bonus',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-mp5.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.49 },
            tint: 0x121212,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.375
        },
        sound: {
            shoot: 'mp5_01',
            reload: 'mp5_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'mp5_switch_01'
        }
    },
    'mac10': {
        name: 'MAC-10',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 96,
        maxClip: 32,
        maxReload: 32,
        extendedClip: 50,
        extendedReload: 50,
        reloadTime: 1.8,
        fireDelay: 0.045,
        switchDelay: 0.75,
        barrelLength: 2.45,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 11.0,
        shotSpread: 10.0,
        bulletCount: 1,
        bulletType: 'bullet_mac10',
        bulletTypeBonus: 'bullet_mac10_bonus',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-mac10.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.44 },
            tint: 0x383838,
            leftHandOffset: { x: 1.4, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.35
        },
        sound: {
            shoot: 'mac10_01',
            reload: 'mac10_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'mac10_switch_01'
        }
    },
    'ump9': {
        name: 'UMP9',
        type: 'gun',
        quality: 0,
        fireMode: 'burst',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 1.9,
        fireDelay: 0.35,
        burstDelay: 0.07,
        switchDelay: 0.75,
        barrelLength: 2.7,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.5,
        bulletCount: 1,
        burstCount: 3,
        bulletType: 'bullet_ump9',
        bulletTypeBonus: 'bullet_ump9_bonus',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-ump9.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.515 },
            tint: 0x121212,
            leftHandOffset: { x: 5.6, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.4
        },
        sound: {
            shoot: 'ump9_01',
            reload: 'ump9_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'ump9_switch_01'
        }
    },
    'vector': {
        name: 'Vector',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 99,
        maxClip: 33,
        maxReload: 33,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 1.6,
        fireDelay: 0.038,
        switchDelay: 0.75,
        barrelLength: 2.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.5,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_vector',
        bulletTypeBonus: 'bullet_vector_bonus',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-vector.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0x897960,
            leftHandOffset: { x: 7.0, y: 0.0 },
            recoil: 0.89
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.4
        },
        sound: {
            shoot: 'vector_01',
            reload: 'vector_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'vector_switch_01'
        }
    },
    'vector45': {
        name: 'Vector',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '45acp',
        ammoSpawnCount: 75,
        maxClip: 25,
        maxReload: 25,
        extendedClip: 32,
        extendedReload: 32,
        reloadTime: 1.6,
        fireDelay: 0.044,
        switchDelay: 0.75,
        barrelLength: 2.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 6.5,
        shotSpread: 4.5,
        bulletCount: 1,
        bulletType: 'bullet_vector45',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-vector45.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0x897960,
            leftHandOffset: { x: 7.0, y: 0.0 },
            recoil: 0.89
        },
        particle: {
            shellScale: 1.2,
            shellOffset: 0.4
        },
        sound: {
            shoot: 'vector_02',
            reload: 'vector_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'vector_switch_01'
        }
    },
    'scorpion': {
        name: 'CZ-3A1',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.2,
        fireDelay: 0.055,
        switchDelay: 0.75,
        barrelLength: 3.6,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 5.0,
        shotSpread: 4.0,
        bulletCount: 1,
        bulletType: 'bullet_scorpion',
        bulletTypeBonus: 'bullet_scorpion_bonus',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-scorpion.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-scorpion-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 8.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.375
        },
        sound: {
            shoot: 'scorpion_01',
            reload: 'scorpion_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'scorpion_switch_01',
            fallOff: 3.0
        }
    },
    'vss': {
        name: 'VSS',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 60,
        maxClip: 20,
        maxReload: 20,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 2.3,
        fireDelay: 0.16,
        switchDelay: 0.75,
        barrelLength: 3.7,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 2.0,
        bulletCount: 1,
        bulletType: 'bullet_vss',
        bulletTypeBonus: 'bullet_vss_bonus',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-vss.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-vss-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 9.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.375
        },
        sound: {
            shoot: 'vss_01',
            reload: 'vss_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'vss_switch_01',
            fallOff: 3.0
        }
    },
    'famas': {
        name: 'FAMAS',
        type: 'gun',
        quality: 0,
        fireMode: 'burst',
        caseTiming: 'shoot',
        isBullpup: true,
        ammo: '556mm',
        ammoSpawnCount: 75,
        maxClip: 25,
        maxReload: 25,
        extendedClip: 35,
        extendedReload: 35,
        reloadTime: 2.3,
        fireDelay: 0.35,
        burstDelay: 0.07,
        switchDelay: 0.75,
        barrelLength: 3.1,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 1.1,
        bulletCount: 1,
        burstCount: 3,
        bulletType: 'bullet_famas',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-famas.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-famas-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 12.0, y: 0.0 },
            gunOffset: { x: -8.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.425
        },
        sound: {
            shoot: 'famas_01',
            reload: 'famas_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'famas_switch_01'
        }
    },
    'hk416': {
        name: 'M416',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '556mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.3,
        fireDelay: 0.075,
        switchDelay: 0.75,
        barrelLength: 2.7,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 8.0,
        shotSpread: 4.0,
        bulletCount: 1,
        bulletType: 'bullet_hk416',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-hk416.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.52 },
            tint: 0xdbc49a,
            leftHandOffset: { x: 4.2, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.4
        },
        sound: {
            shoot: 'hk416_01',
            reload: 'hk416_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'hk416_switch_01'
        }
    },
    'm4a1': {
        name: 'M4A1-S',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '556mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 3.1,
        fireDelay: 0.082,
        switchDelay: 0.75,
        barrelLength: 3.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 2.0,
        bulletCount: 1,
        bulletType: 'bullet_m4a1',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m4a1.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-m4a1-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 7.9, y: 0.0 },
            recoil: 1.3
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.4
        },
        sound: {
            shoot: 'm4a1_01',
            reload: 'm4a1_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm4a1_switch_01',
            fallOff: 3.0
        }
    },
    'mk12': {
        name: 'Mk 12 SPR',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '556mm',
        ammoSpawnCount: 60,
        maxClip: 20,
        maxReload: 20,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 2.4,
        fireDelay: 0.18,
        switchDelay: 0.75,
        barrelLength: 3.5,
        barrelOffset: 0.0,
        recoilTime: 1.0,
        moveSpread: 3.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_mk12',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-mk12.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.485 },
            tint: 0xa79c8a,
            leftHandOffset: { x: 4.2, y: 0.0 },
            recoil: 1.66
        },
        particle: {
            shellScale: 1.3,
            shellOffset: 0.55
        },
        sound: {
            shoot: 'mk12_01',
            reload: 'mk12_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'mk12_switch_01'
        }
    },
    'l86': {
        name: 'L86A2',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '556mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.9,
        fireDelay: 0.19,
        switchDelay: 0.75,
        barrelLength: 3.25,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.5,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_l86',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-l86.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.46 },
            tint: 0xdcc8a7,
            leftHandOffset: { x: -3.0, y: 0.0 },
            // gunOffset: { x: -8.0, y: 0.0 },
            recoil: 1.66
        },
        particle: {
            shellScale: 1.3,
            shellOffset: 0.55
        },
        sound: {
            shoot: 'l86_01',
            reload: 'l86_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'l86_switch_01'
        }
    },
    'm249': {
        name: 'M249',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '556mm',
        ammoSpawnCount: 200,
        maxClip: 100,
        maxReload: 100,
        extendedClip: 150,
        extendedReload: 150,
        reloadTime: 6.7,
        fireDelay: 0.08,
        switchDelay: 0.75,
        barrelLength: 3.75,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 6.0,
        shotSpread: 1.5,
        bulletCount: 1,
        bulletType: 'bullet_m249',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: -4.0
        },
        lootImg: {
            sprite: 'loot-weapon-m249.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-m249-top-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 13.2, y: 0.0 },
            recoil: 1.33,
            magImg: {
                sprite: 'gun-m249-bot-01.img',
                pos: { x: 0.0, y: -20.5 }
            }
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.5875
        },
        sound: {
            shoot: 'm249_01',
            reload: 'm249_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'm249_switch_01'
        }
    },
    'qbb97': {
        name: 'QBB-97',
        type: 'gun',
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '556mm',
        ammoSpawnCount: 150,
        maxClip: 75,
        maxReload: 75,
        extendedClip: 95,
        extendedReload: 95,
        reloadTime: 3.9,
        fireDelay: 0.1,
        switchDelay: 0.75,
        barrelLength: 3.1,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 0.5,
        shotSpread: 4.0,
        bulletCount: 1,
        bulletType: 'bullet_qbb97',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: -2.0
        },
        lootImg: {
            sprite: 'loot-weapon-qbb97.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.425 },
            tint: 0x1e1e1e,
            leftHandOffset: { x: 8.4, y: 0.0 },
            recoil: 1.33,
            magImg: {
                sprite: 'gun-qbb97-bot-01.img',
                pos: { x: -1.5, y: -14.25 }
            }
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.5875
        },
        sound: {
            shoot: 'qbb97_01',
            reload: 'qbb97_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'qbb97_switch_01'
        }
    },
    'scout_elite': {
        name: 'Scout Elite',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        weaponClass: 'sniper',
        caseTiming: 'shoot',
        ammo: '556mm',
        aimDelay: true,
        // deployGroup: 2,
        ammoSpawnCount: 20,
        maxClip: 5,
        maxReload: 5,
        extendedClip: 10,
        extendedReload: 10,
        reloadTime: 2.6,
        fireDelay: 1.0,
        switchDelay: 1.0,
        pullDelay: 1.0,
        barrelLength: 3.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 1.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_scout',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 5.0
        },
        lootImg: {
            sprite: 'loot-weapon-scout.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.52 },
            tint: 0x32363b,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 2.33
        },
        particle: {
            shellScale: 1.6,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'scout_01',
            reload: 'scout_reload_01',
            cycle: 'scout_cycle_01',
            pull: 'scout_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'scout_cycle_01'
        }
    },
    'ak47': {
        name: 'AK-47',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.5,
        fireDelay: 0.1,
        switchDelay: 0.75,
        barrelLength: 3.15,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 7.5,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_ak47',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-ak.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.435 },
            tint: 0x622a12,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'ak47_01',
            reload: 'ak47_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'ak47_switch_01'
        }
    },
    'waterGun': {
        name: 'Water Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 90,
        noPotatoSwap: true,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.5,
        fireDelay: 0.1,
        switchDelay: 0.75,
        barrelLength: 2.3,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 7.5,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_water',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-water.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'water-gun.img',
            scale: { x: 0.5, y: 0.435 },
            tint: 0xffffff,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 2.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45,
            customParticle: 'water_shot'
        },
        sound: {
            shoot: 'water_gun_01',
            reload: 'water_gun_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'ak47_switch_01'
        }
    },
    'scar': {
        name: 'SCAR-H',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 80,
        maxClip: 20,
        maxReload: 20,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 2.7,
        fireDelay: 0.09,
        switchDelay: 0.75,
        barrelLength: 3.15,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 5.0,
        shotSpread: 2.0,
        bulletCount: 1,
        bulletType: 'bullet_scar',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-scar.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.435 },
            tint: 0x9b7b48,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'scar_01',
            reload: 'scar_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'scar_switch_01'
        }
    },
    'scarssr': {
        name: 'SCAR-SSR',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '308sub',
        ammoSpawnCount: 40,
        maxClip: 10,
        maxReload: 10,
        extendedClip: 20,
        extendedReload: 20,
        reloadTime: 2.7,
        fireDelay: 0.3,
        switchDelay: 0.75,
        barrelLength: 3.9,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 5.5,
        shotSpread: 1.5,
        bulletCount: 1,
        bulletType: 'bullet_scarssr',
        headshotMult: 1.5,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-scarssr.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-scarssr-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xffffff,
            leftHandOffset: { x: 6.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'scarssr_01',
            reload: 'scar_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'scar_switch_01',
            fallOff: 3.0
        }
    },
    'an94': {
        name: 'AN-94',
        type: 'gun',
        quality: 1,
        fireMode: 'burst',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 90,
        maxClip: 45,
        maxReload: 45,
        extendedClip: 60,
        extendedReload: 60,
        reloadTime: 2.35,
        fireDelay: 0.24,
        burstDelay: 0.025,
        switchDelay: 0.75,
        barrelLength: 3.25,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 1.5,
        bulletCount: 1,
        burstCount: 2,
        burstSounds: 1,
        bulletType: 'bullet_an94',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-an94.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.46 },
            tint: 0x2d2d2d,
            leftHandOffset: { x: 2.85, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'an94_01',
            reload: 'an94_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'an94_switch_01'
        }
    },
    'groza': {
        name: 'Groza',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        isBullpup: true,
        ammo: '762mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.8,
        fireDelay: 0.078,
        switchDelay: 0.75,
        barrelLength: 2.6,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 9.0,
        shotSpread: 5.0,
        bulletCount: 1,
        bulletType: 'bullet_groza',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-groza.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-groza-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 12.0, y: 0.0 },
            gunOffset: { x: -8.0, y: 0.0 },
            recoil: 1.4
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'groza_01',
            reload: 'groza_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'groza_switch_01'
        }
    },
    'grozas': {
        name: 'Groza-S',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        isBullpup: true,
        ammo: '762mm',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.8,
        fireDelay: 0.078,
        switchDelay: 0.75,
        barrelLength: 3.3,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 7.5,
        shotSpread: 3.5,
        bulletCount: 1,
        bulletType: 'bullet_grozas',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-grozas.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-grozas-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 12.0, y: 0.0 },
            gunOffset: { x: -8.0, y: 0.0 },
            recoil: 1.4
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'grozas_01',
            reload: 'groza_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'groza_switch_01',
            fallOff: 3.0
        }
    },
    'dp28': {
        name: 'DP-28',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 120,
        maxClip: 60,
        maxReload: 60,
        extendedClip: 80,
        extendedReload: 80,
        reloadTime: 3.3,
        fireDelay: 0.115,
        switchDelay: 0.75,
        barrelLength: 3.75,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 9.0,
        shotSpread: 2.0,
        bulletCount: 1,
        bulletType: 'bullet_dp28',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: -2.0
        },
        lootImg: {
            sprite: 'loot-weapon-dp28.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.53 },
            tint: 0x1a1a1a,
            leftHandOffset: { x: 8.4, y: 0.0 },
            recoil: 1.33,
            magImg: {
                sprite: 'gun-dp28-top-01.img',
                pos: { x: 0.0, y: -22.5 },
                top: true
            }
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'dp28_01',
            reload: 'dp28_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'dp28_switch_01'
        }
    },
    'bar': {
        name: 'BAR M1918',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 80,
        maxClip: 20,
        maxReload: 20,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.7,
        fireDelay: 0.12,
        switchDelay: 0.75,
        barrelLength: 3.7,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 8.0,
        shotSpread: 2.0,
        bulletCount: 1,
        bulletType: 'bullet_bar',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: -1.5
        },
        lootImg: {
            sprite: 'loot-weapon-bar.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.52 },
            tint: 0x4d4c52,
            leftHandOffset: { x: 6.8, y: 0.0 },
            recoil: 1.4
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'bar_01',
            reload: 'bar_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'bar_switch_01'
        }
    },
    'pkp': {
        name: 'PKP Pecheneg',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 200,
        maxClip: 200,
        maxReload: 200,
        extendedClip: 250,
        extendedReload: 250,
        reloadTime: 5.0,
        fireDelay: 0.1,
        switchDelay: 0.75,
        barrelLength: 3.6,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 7.5,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_pkp',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: -5.0
        },
        lootImg: {
            sprite: 'loot-weapon-pkp.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-pkp-top-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 12.5, y: 0.0 },
            recoil: 1.33,
            magImg: {
                sprite: 'gun-pkp-bot-01.img',
                pos: { x: 0.0, y: -17.5 }
            }
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.5875,
            shellReverse: true
        },
        sound: {
            shoot: 'pkp_01',
            reload: 'pkp_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'pkp_switch_01'
        }
    },
    'pkm': {
        name: 'PKM',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 200,
        maxClip: 100,
        maxReload: 100,
        extendedClip: 200,
        extendedReload: 200,
        reloadTime: 6.0,
        fireDelay: 0.1,
        switchDelay: 0.75,
        barrelLength: 3.6,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 7.5,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_pkm',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: -5.0
        },
        lootImg: {
            sprite: 'loot-weapon-pkm-lmg.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-pkm-lmg.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 12.5, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.5875,
            shellReverse: true
        },
        sound: {
            shoot: 'pkm_01',
            reload: 'pkm_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'pkm_switch_01'
        }
    },
    'model94': {
        name: 'Model 94',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        weaponClass: 'sniper',
        caseTiming: 'shoot',
        ammo: '45acp',
        // deployGroup: 2,
        ammoSpawnCount: 64,
        maxClip: 8,
        maxReload: 1,
        extendedClip: 8,
        extendedReload: 1,
        reloadTime: 0.5,
        fireDelay: 0.7,
        switchDelay: 1.0,
        pullDelay: 1.0,
        barrelLength: 3.7,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.5,
        bulletCount: 1,
        bulletType: 'bullet_model94',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-model94.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.5175 },
            tint: 0xa06120,
            leftHandOffset: { x: 3.2, y: 0.0 },
            recoil: 2.33
        },
        particle: {
            shellScale: 1.4,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'model94_01',
            reload: 'model94_reload_01',
            cycle: 'model94_cycle_01',
            pull: 'model94_cycle_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'model94_cycle_01'
        }
    },
    'mkg45': {
        name: 'Mk45G',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '45acp',
        ammoSpawnCount: 52,
        maxClip: 13,
        maxReload: 13,
        extendedClip: 26,
        extendedReload: 26,
        reloadTime: 2.1,
        fireDelay: 0.17,
        switchDelay: 0.75,
        barrelLength: 3.3,
        barrelOffset: 0.0,
        recoilTime: 0.2,
        moveSpread: 7.5,
        shotSpread: 3.5,
        bulletCount: 1,
        bulletType: 'bullet_mkg45',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-mkg45.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.47 },
            tint: 0x353535,
            leftHandOffset: { x: 4.2, y: 0.0 },
            recoil: 1.66
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'mkg45_01',
            reload: 'mkg45_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'mkg45_switch_01'
        }
    },
    'blr': {
        name: 'BLR 81',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        weaponClass: 'sniper',
        caseTiming: 'shoot',
        ammo: '762mm',
        // deployGroup: 2,
        ammoSpawnCount: 30,
        maxClip: 3,
        maxReload: 3,
        extendedClip: 5,
        extendedReload: 5,
        reloadTime: 1.7,
        fireDelay: 0.8,
        switchDelay: 1.0,
        pullDelay: 1.0,
        barrelLength: 3.8,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.5,
        bulletCount: 1,
        bulletType: 'bullet_blr',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-blr.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.53 },
            tint: 0x472706,
            leftHandOffset: { x: 6.4, y: 0.0 },
            recoil: 2.75
        },
        particle: {
            shellScale: 1.4,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'blr_01',
            reload: 'blr_reload_01',
            cycle: 'blr_cycle_01',
            pull: 'blr_cycle_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'blr_cycle_01'
        }
    },
    'mosin': {
        name: 'Mosin-Nagant',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        weaponClass: 'sniper',
        caseTiming: 'shoot',
        ammo: '762mm',
        aimDelay: true,
        // deployGroup: 2,
        ammoSpawnCount: 20,
        maxClip: 5,
        maxReload: 1,
        maxReloadAlt: 5,
        extendedClip: 5,
        extendedReload: 1,
        extendedReloadAlt: 5,
        reloadTime: 0.9,
        reloadTimeAlt: 3.0,
        fireDelay: 1.75,
        switchDelay: 1.0,
        pullDelay: 1.0,
        barrelLength: 3.75,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_mosin',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-mosin.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.52 },
            tint: 0x331a00,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 2.33
        },
        particle: {
            shellScale: 1.6,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'mosin_01',
            reload: 'mosin_reload_01',
            reloadAlt: 'mosin_reload_02',
            cycle: 'mosin_cycle_01',
            pull: 'mosin_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'mosin_cycle_01'
        }
    },
    'sv98': {
        name: 'SV-98',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        weaponClass: 'sniper',
        caseTiming: 'shoot',
        ammo: '762mm',
        aimDelay: true,
        // deployGroup: 2,
        ammoSpawnCount: 30,
        maxClip: 10,
        maxReload: 10,
        extendedClip: 15,
        extendedReload: 15,
        reloadTime: 2.7,
        fireDelay: 1.5,
        switchDelay: 1.0,
        pullDelay: 0.8,
        barrelLength: 3.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.5,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_sv98',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-sv98.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.4925 },
            tint: 0x658947,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 2.33
        },
        particle: {
            shellScale: 1.6,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'sv98_01',
            reload: 'sv98_reload_01',
            cycle: 'sv98_cycle_01',
            pull: 'sv98_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'sv98_cycle_01'
        }
    },
    'awc': {
        name: 'AWM-S',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        weaponClass: 'sniper',
        caseTiming: 'shoot',
        ammo: '308sub',
        aimDelay: true,
        // deployGroup: 2,
        ammoSpawnCount: 20,
        maxClip: 5,
        maxReload: 5,
        extendedClip: 7,
        extendedReload: 7,
        reloadTime: 3.6,
        fireDelay: 1.5,
        switchDelay: 1.0,
        pullDelay: 1.4,
        barrelLength: 3.8,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 0.5,
        bulletCount: 1,
        bulletType: 'bullet_awc',
        headshotMult: 1.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-awc.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-awc-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 11.0, y: 0.0 },
            recoil: 2.66
        },
        particle: {
            shellScale: 1.5,
            shellOffset: 0.6
        },
        sound: {
            shoot: 'awc_01',
            reload: 'awc_reload_01',
            cycle: 'awc_cycle_01',
            pull: 'awc_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'awc_cycle_01',
            fallOff: 3.0
        }
    },
    'm39': {
        name: 'M39 EMR',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 60,
        maxClip: 20,
        maxReload: 20,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 2.5,
        fireDelay: 0.23,
        switchDelay: 0.75,
        barrelLength: 3.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.25,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_m39',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m39.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.4925 },
            tint: 0x333333,
            leftHandOffset: { x: 2.8, y: 0.0 },
            recoil: 1.66
        },
        particle: {
            shellScale: 1.3,
            shellOffset: 0.575
        },
        sound: {
            shoot: 'm39_01',
            reload: 'm39_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'm39_switch_01'
        }
    },
    'svd': {
        name: 'SVD-63',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 60,
        maxClip: 10,
        maxReload: 10,
        extendedClip: 20,
        extendedReload: 20,
        reloadTime: 2.5,
        fireDelay: 0.25,
        switchDelay: 0.75,
        barrelLength: 4.0,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.5,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_svd',
        headshotMult: 2.0,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-svd.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.56 },
            tint: 0x1c1c1c,
            leftHandOffset: { x: 8.0, y: 0.0 },
            recoil: 2.0
        },
        particle: {
            shellScale: 1.3,
            shellOffset: 0.575
        },
        sound: {
            shoot: 'svd_01',
            reload: 'svd_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'svd_switch_01'
        }
    },
    'garand': {
        name: 'M1 Garand',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 40,
        maxClip: 8,
        maxReload: 8,
        extendedClip: 8,
        extendedReload: 8,
        reloadTime: 2.1,
        fireDelay: 0.23,
        switchDelay: 0.75,
        barrelLength: 3.6,
        barrelOffset: 0.0,
        recoilTime: 0.36,
        moveSpread: 4.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_garand',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-garand.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-garand-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 8.0, y: 0.0 },
            recoil: 1.66
        },
        particle: {
            shellScale: 1.3,
            shellOffset: 0.575
        },
        sound: {
            shoot: 'garand_01',
            shootLast: 'garand_02',
            reload: 'garand_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'garand_switch_01'
        }
    },
    'm870': {
        name: 'M870',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        deployGroup: 1,
        ammoSpawnCount: 10,
        maxClip: 5,
        maxReload: 1,
        extendedClip: 10,
        extendedReload: 1,
        reloadTime: 0.75,
        fireDelay: 0.9,
        switchDelay: 0.9,
        pullDelay: 0.9,
        barrelLength: 3.15,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 10.0,
        bulletCount: 9,
        jitter: 1.0,
        bulletType: 'bullet_buckshot',
        headshotMult: 1.5,
        size: 'long',
        lootImg: {
            sprite: 'loot-weapon-m870.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.435 },
            tint: 0x331a00,
            leftHandOffset: { x: 7.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'm870_01',
            reload: 'm870_reload_01',
            cycle: 'm870_cycle_01',
            pull: 'm870_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm870_cycle_01'
        }
    },
    'hawk12g': {
        name: 'Hawk 12G',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        deployGroup: 1,
        ammoSpawnCount: 10,
        maxClip: 5,
        maxReload: 5,
        extendedClip: 10,
        extendedReload: 10,
        reloadTime: 2.5,
        fireDelay: 0.7,
        switchDelay: 0.9,
        pullDelay: 1.0,
        barrelLength: 3.15,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 5.0,
        bulletCount: 9,
        jitter: 1.0,
        bulletType: 'bullet_buckshot',
        headshotMult: 1.5,
        lootImg: {
            sprite: 'loot-weapon-hawk12g.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        worldImg: {
            sprite: 'gun-hawk12g.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xffffff,
            leftHandOffset: { x: 12.0, y: -3.0 },
            gunOffset: { x: -10.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'hawk12g_01',
            reload: 'hawk12g_reload_01',
            cycle: 'hawk12g_cycle_01',
            pull: 'hawk12g_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'hawk12g_cycle_01'
        }
    },
    'm1100': {
        name: 'M1100',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        ammoSpawnCount: 12,
        maxClip: 4,
        maxReload: 1,
        extendedClip: 8,
        extendedReload: 1,
        reloadTime: 0.7,
        fireDelay: 0.3,
        switchDelay: 0.9,
        barrelLength: 3.15,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 25.0,
        bulletCount: 18,
        jitter: 1.0,
        bulletType: 'bullet_birdshot',
        headshotMult: 1.5,
        size: 'long',
        lootImg: {
            sprite: 'loot-weapon-m1100.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.435 },
            tint: 0x2e442e,
            leftHandOffset: { x: 7.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'm1100_01',
            reload: 'm1100_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm1100_deploy_01'
        }
    },
    'mp220': {
        name: 'MP220',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'reload',
        ammo: '12gauge',
        ammoSpawnCount: 10,
        maxClip: 2,
        maxReload: 2,
        extendedClip: 2,
        extendedReload: 2,
        reloadTime: 2.7,
        fireDelay: 0.2,
        switchDelay: 0.3,
        barrelLength: 2.7,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 10.0,
        bulletCount: 9,
        jitter: 1.0,
        bulletType: 'bullet_buckshot',
        headshotMult: 1.5,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-mp220.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-mp220-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.35
        },
        sound: {
            shoot: 'mp220_01',
            reload: 'mp220_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'mp220_deploy_01'
        }
    },
    'saiga': {
        name: 'Saiga-12',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '12gauge',
        ammoSpawnCount: 20,
        maxClip: 5,
        maxReload: 5,
        extendedClip: 8,
        extendedReload: 8,
        reloadTime: 2.5,
        fireDelay: 0.4,
        switchDelay: 0.75,
        barrelLength: 3.75,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 10.0,
        bulletCount: 9,
        jitter: 1.0,
        bulletType: 'bullet_buckshot',
        headshotMult: 1.5,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-saiga.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-saiga-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 8.0, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'saiga_01',
            reload: 'saiga_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'saiga_switch_01'
        }
    },
    'spas12': {
        name: 'SPAS-12',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        deployGroup: 1,
        ammoSpawnCount: 18,
        maxClip: 9,
        maxReload: 1,
        extendedClip: 12,
        extendedReload: 1,
        reloadTime: 0.55,
        fireDelay: 0.75,
        switchDelay: 0.75,
        pullDelay: 0.75,
        barrelLength: 2.8,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 4.0,
        bulletCount: 9,
        jitter: 0.2,
        bulletType: 'bullet_flechette',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-spas12.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.4 },
            tint: 0x2d4251,
            leftHandOffset: { x: 4.9, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'spas12_01',
            reload: 'spas12_reload_01',
            cycle: 'spas12_cycle_01',
            pull: 'spas12_pull_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'spas12_cycle_01'
        }
    },
    'm1014': {
        name: 'M1014',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        ammoSpawnCount: 16,
        maxClip: 8,
        maxReload: 1,
        extendedClip: 10,
        extendedReload: 1,
        reloadTime: 0.52,
        fireDelay: 0.4,
        switchDelay: 0.75,
        barrelLength: 3.2,
        barrelOffset: 0.0,
        recoilTime: 0.5,
        moveSpread: 4.0,
        shotSpread: 4.0,
        bulletCount: 1,
        jitter: 0.2,
        bulletType: 'bullet_slug',
        headshotMult: 1.5,
        size: 'long',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m1014.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-long-01.img',
            scale: { x: 0.5, y: 0.44 },
            tint: 0x565038,
            leftHandOffset: { x: 4.8, y: 0.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.45
        },
        sound: {
            shoot: 'm1014_01',
            reload: 'm1014_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm1014_deploy_01'
        }
    },
    'usas': {
        name: 'USAS-12',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '12gauge',
        toMouseHit: true,
        ammoSpawnCount: 30,
        maxClip: 10,
        maxReload: 10,
        extendedClip: 20,
        extendedReload: 20,
        reloadTime: 2.9,
        fireDelay: 0.5,
        switchDelay: 0.75,
        barrelLength: 3.65,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 6.0,
        shotSpread: 7.0,
        bulletCount: 1,
        jitter: 1.0,
        bulletType: 'bullet_frag',
        noSplinter: true,
        headshotMult: 1.0,
        speed: {
            equip: 0.0,
            attack: -1.0
        },
        lootImg: {
            sprite: 'loot-weapon-usas.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-usas-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 16.0, y: 0.0 },
            recoil: 1.5
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.35
        },
        sound: {
            shoot: 'usas_01',
            reload: 'usas_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'usas_switch_01'
        }
    },
    'm9': {
        name: 'M9',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 45,
        dualWieldType: 'm9_dual',
        pistol: true,
        maxClip: 15,
        maxReload: 15,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 1.6,
        fireDelay: 0.12,
        switchDelay: 0.25,
        barrelLength: 2.2,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 8.0,
        shotSpread: 8.0,
        bulletCount: 1,
        bulletType: 'bullet_m9',
        bulletTypeBonus: 'bullet_m9_bonus',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m9.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.505 },
            tint: 0x1e1e1e,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm9_01',
            reload: 'm9_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm9_switch_01'
        }
    },
    'm9_dual': {
        name: 'Dual M9',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        isDual: true,
        pistol: true,
        ammo: '9mm',
        ammoSpawnCount: 45,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 60,
        extendedReload: 60,
        reloadTime: 3.1,
        fireDelay: 0.08,
        switchDelay: 0.25,
        barrelLength: 2.2,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 9.0,
        shotSpread: 11.0,
        bulletCount: 1,
        bulletType: 'bullet_m9',
        bulletTypeBonus: 'bullet_m9_bonus',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m9-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.505 },
            tint: 0x1e1e1e,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm9_01',
            reload: 'm9_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm9_switch_01'
        }
    },
    'm9_cursed': {
        name: 'M9 Cursed',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '9mm_cursed',
        ammoSpawnCount: 0,
        ammoInfinite: true,
        noPotatoSwap: true,
        pistol: true,
        noDrop: true,
        maxClip: 15,
        maxReload: 15,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 1.6,
        fireDelay: 0.12,
        switchDelay: 0.25,
        barrelLength: 2.2,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 8.0,
        shotSpread: 8.0,
        bulletCount: 1,
        bulletType: 'bullet_m9_cursed',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m9-cursed.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.505 },
            tint: 0x1e1e1e,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm9_01',
            reload: 'm9_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm9_switch_01'
        }
    },
    'm93r': {
        name: 'M93R',
        type: 'gun',
        quality: 0,
        fireMode: 'burst',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 60,
        dualWieldType: 'm93r_dual',
        pistol: false,
        maxClip: 20,
        maxReload: 20,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 1.8,
        fireDelay: 0.28,
        burstDelay: 0.04,
        switchDelay: 0.25,
        barrelLength: 2.3,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 4.0,
        bulletCount: 1,
        burstCount: 3,
        bulletType: 'bullet_m93r',
        bulletTypeBonus: 'bullet_m93r_bonus',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m93r.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.51 },
            tint: 0x2a381b,
            leftHandOffset: { x: 0.8, y: 0.0 },
            recoil: 0.5
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm93r_01',
            reload: 'm93r_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm93r_switch_01'
        }
    },
    'm93r_dual': {
        name: 'Dual M93R',
        type: 'gun',
        quality: 0,
        fireMode: 'burst',
        caseTiming: 'shoot',
        isDual: true,
        pistol: true,
        ammo: '9mm',
        ammoSpawnCount: 60,
        maxClip: 40,
        maxReload: 40,
        extendedClip: 60,
        extendedReload: 60,
        reloadTime: 3.3,
        fireDelay: 0.18,
        burstDelay: 0.04,
        switchDelay: 0.25,
        barrelLength: 2.2,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 6.0,
        shotSpread: 7.0,
        bulletCount: 1,
        burstCount: 3,
        bulletType: 'bullet_m93r',
        bulletTypeBonus: 'bullet_m93r_bonus',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m93r-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.51 },
            tint: 0x2a381b,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm93r_01',
            reload: 'm93r_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm93r_switch_01'
        }
    },
    'glock': {
        name: 'G18C',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 51,
        dualWieldType: 'glock_dual',
        pistol: true,
        maxClip: 17,
        maxReload: 17,
        extendedClip: 31,
        extendedReload: 31,
        reloadTime: 1.95,
        fireDelay: 0.06,
        switchDelay: 0.25,
        barrelLength: 2.2,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 10.0,
        shotSpread: 12.0,
        bulletCount: 1,
        bulletType: 'bullet_glock',
        bulletTypeBonus: 'bullet_glock_bonus',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-glock.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.49 },
            tint: 0x1e1e1e,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'glock_01',
            reload: 'glock_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'glock_switch_01'
        }
    },
    'glock_dual': {
        name: 'Dual G18C',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 51,
        isDual: true,
        pistol: true,
        maxClip: 34,
        maxReload: 34,
        extendedClip: 62,
        extendedReload: 62,
        reloadTime: 3.8,
        fireDelay: 0.03,
        switchDelay: 0.25,
        barrelLength: 2.2,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 16.0,
        shotSpread: 18.0,
        bulletCount: 1,
        bulletType: 'bullet_glock',
        bulletTypeBonus: 'bullet_glock_bonus',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-glock-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.49 },
            tint: 0x1e1e1e,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'glock_01',
            reload: 'glock_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'glock_switch_01'
        }
    },
    'p30l': {
        name: 'P30L',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 45,
        dualWieldType: 'p30l_dual',
        pistol: true,
        maxClip: 15,
        maxReload: 15,
        extendedClip: 30,
        extendedReload: 30,
        reloadTime: 1.2,
        fireDelay: 0.14,
        switchDelay: 0.25,
        barrelLength: 2.3,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 1.0,
        shotSpread: 2.0,
        bulletCount: 1,
        bulletType: 'bullet_p30l',
        bulletTypeBonus: 'bullet_p30l_bonus',
        headshotMult: 2.0,
        speed: {
            equip: 1.0,
            attack: 1.0
        },
        lootImg: {
            sprite: 'loot-weapon-p30l.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-p30l-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'p30l_01',
            reload: 'p30l_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'p30l_switch_01'
        }
    },
    'p30l_dual': {
        name: 'Dual P30L',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '9mm',
        ammoSpawnCount: 90,
        isDual: true,
        pistol: true,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 60,
        extendedReload: 60,
        reloadTime: 2.65,
        fireDelay: 0.09,
        switchDelay: 0.3,
        barrelLength: 2.3,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 3.0,
        bulletCount: 1,
        bulletType: 'bullet_p30l',
        bulletTypeBonus: 'bullet_p30l_bonus',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-p30l-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-p30l-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'p30l_01',
            reload: 'p30l_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'p30l_switch_01'
        }
    },
    'ot38': {
        name: 'OT-38',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'reload',
        ammo: '762mm',
        ammoSpawnCount: 20,
        dualWieldType: 'ot38_dual',
        pistol: true,
        maxClip: 5,
        maxReload: 5,
        extendedClip: 5,
        extendedReload: 5,
        reloadTime: 2.0,
        fireDelay: 0.4,
        switchDelay: 0.3,
        barrelLength: 2.05,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.25,
        bulletCount: 1,
        bulletType: 'bullet_ot38',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-ot38.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.4625 },
            tint: 0x707070,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'ot38_01',
            reload: 'ot38_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'ot38_switch_01'
        }
    },
    'ot38_dual': {
        name: 'Dual OT-38',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'reload',
        ammo: '762mm',
        ammoSpawnCount: 20,
        isDual: true,
        pistol: true,
        maxClip: 10,
        maxReload: 10,
        extendedClip: 10,
        extendedReload: 10,
        reloadTime: 3.8,
        fireDelay: 0.2,
        switchDelay: 0.3,
        barrelLength: 2.0,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 1.75,
        bulletCount: 1,
        bulletType: 'bullet_ot38',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-ot38-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.4625 },
            tint: 0x707070,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'ot38_01',
            reload: 'ot38_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'ot38_switch_01'
        }
    },
    'ots38': {
        name: 'OTs-38',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'reload',
        ammo: '762mm',
        ammoSpawnCount: 20,
        dualWieldType: 'ots38_dual',
        pistol: true,
        maxClip: 5,
        maxReload: 5,
        extendedClip: 5,
        extendedReload: 5,
        reloadTime: 2.0,
        fireDelay: 0.36,
        switchDelay: 0.3,
        barrelLength: 2.05,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 2.4,
        shotSpread: 1.2,
        bulletCount: 1,
        bulletType: 'bullet_ots38',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-ots38.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-ots38-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'ots38_01',
            reload: 'ot38_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'ot38_switch_01',
            fallOff: 3.0
        }
    },
    'ots38_dual': {
        name: 'Dual OTs-38',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'reload',
        ammo: '762mm',
        ammoSpawnCount: 40,
        isDual: true,
        pistol: true,
        maxClip: 10,
        maxReload: 10,
        extendedClip: 10,
        extendedReload: 10,
        reloadTime: 3.8,
        fireDelay: 0.18,
        switchDelay: 0.3,
        barrelLength: 2.0,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 2.8,
        shotSpread: 1.4,
        bulletCount: 1,
        bulletType: 'bullet_ots38',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-ots38-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-ots38-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'ots38_01',
            reload: 'ot38_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'ot38_switch_01',
            fallOff: 3.0
        }
    },
    'colt45': {
        name: 'Peacemaker',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'reload',
        ammo: '45acp',
        ammoSpawnCount: 48,
        dualWieldType: 'colt45_dual',
        pistol: true,
        maxClip: 6,
        maxReload: 6,
        extendedClip: 6,
        extendedReload: 6,
        reloadTime: 3.0,
        fireDelay: 0.12,
        switchDelay: 0.3,
        barrelLength: 2.26,
        barrelOffset: 0.0,
        recoilTime: 0.35,
        moveSpread: 3.0,
        shotSpread: 16.0,
        bulletCount: 1,
        bulletType: 'bullet_colt45',
        headshotMult: 1.5,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-colt45.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.52 },
            tint: 0xc4c4c4,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.2,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'colt45_01',
            reload: 'colt45_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'colt45_switch_01'
        }
    },
    'colt45_dual': {
        name: 'Dual Peacemaker',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'reload',
        ammo: '45acp',
        ammoSpawnCount: 48,
        isDual: true,
        pistol: true,
        maxClip: 12,
        maxReload: 12,
        extendedClip: 12,
        extendedReload: 12,
        reloadTime: 5.1,
        fireDelay: 0.13,
        switchDelay: 0.3,
        barrelLength: 2.26,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 0.35,
        moveSpread: 3.0,
        shotSpread: 16.0,
        bulletCount: 1,
        bulletType: 'bullet_colt45',
        headshotMult: 1.5,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-colt45-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.52 },
            tint: 0xc4c4c4,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.2,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'colt45_01',
            reload: 'colt45_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'colt45_switch_01'
        }
    },
    'm1911': {
        name: 'M1911',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '45acp',
        ammoSpawnCount: 28,
        dualWieldType: 'm1911_dual',
        pistol: true,
        maxClip: 7,
        maxReload: 7,
        extendedClip: 12,
        extendedReload: 12,
        reloadTime: 2.1,
        fireDelay: 0.10,
        switchDelay: 0.25,
        barrelLength: 2.1,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 7.0,
        shotSpread: 6.0,
        bulletCount: 1,
        bulletType: 'bullet_m1911',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m1911.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0x929292,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.2,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm1911_01',
            reload: 'm1911_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm1911_switch_01'
        }
    },
    'm1911_dual': {
        name: 'Dual M1911',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        isDual: true,
        pistol: true,
        ammo: '45acp',
        ammoSpawnCount: 28,
        maxClip: 14,
        maxReload: 14,
        extendedClip: 24,
        extendedReload: 24,
        reloadTime: 3.6,
        fireDelay: 0.085,
        switchDelay: 0.25,
        barrelLength: 2.1,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 8.0,
        shotSpread: 9.5,
        bulletCount: 1,
        bulletType: 'bullet_m1911',
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m1911-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0x929292,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.2,
            shellOffset: 0.25
        },
        sound: {
            shoot: 'm1911_01',
            reload: 'm1911_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm1911_switch_01'
        }
    },
    'm1a1': {
        name: 'M1A1',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '45acp',
        ammoSpawnCount: 90,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 50,
        extendedReload: 50,
        reloadTime: 2.8,
        fireDelay: 0.095,
        switchDelay: 0.75,
        barrelLength: 2.8,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 6.0,
        shotSpread: 6.0,
        bulletCount: 1,
        bulletType: 'bullet_m1a1',
        headshotMult: 2.0,
        size: 'med',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m1a1.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-med-01.img',
            scale: { x: 0.5, y: 0.53 },
            tint: 0x381000,
            leftHandOffset: { x: 5.8, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.2,
            shellOffset: 0.375
        },

        sound: {
            shoot: 'm1a1_01',
            reload: 'm1a1_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm1a1_switch_01'
        }
    },
    'rainbow_blaster': {
        name: 'Rainbow Blaster',
        type: 'gun',
        quality: 0,
        fireMode: 'blaster',
        caseTiming: 'shoot',
        ammo: 'rainbow_ammo',
        projType: 'rainbow_projectile',
        noDrop: true,
        noPotatoSwap: true,
        ammoSpawnCount: 1,
        maxClip: 1,
        maxReload: 1,
        extendedClip: 1,
        extendedReload: 1,
        reloadTime: 0.0,
        fireDelay: 0.16,
        switchDelay: 0.3,
        barrelLength: 4.6,
        barrelOffset: 0.0,
        recoilTime: 0.5,
        moveSpread: 6.0,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_rainbow',
        loadTime: 1.5,
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0,
            load: -0.2
        },
        lootImg: {
            sprite: 'loot-weapon-rainbow-blaster.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-07.img',
            scale: 0.3,
            noTint: true
        },
        worldImg: {
            sprite: 'gun-rainbow-blater.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 5.0,
            handsBelow: true,
            magImg: {
                sprite: 'gun-rainbow-top.img',
                pos: { x: 0.5, y: -40.6 },
                top: true,
                max_height_adj: 15
            },
            onLoadComplete: 'gun-rainbow-blater-loaded.img',
            loadingBullet: {
                sprite: 'rainbow-ball.img',
                pos: { x: 0.5, y: -65.0 },
                maxScale: 0.5
            }
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.7875,
            shellReverse: true,
            amount: 10
        },
        sound: {
            shoot: 'rainbow_blaster_01',
            reload: 'rainbow_blaster_loading',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'deagle_switch_01'
        }
    },
    'deagle': {
        name: 'DEagle 50',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '50AE',
        ammoSpawnCount: 56,
        dualWieldType: 'deagle_dual',
        pistol: true,
        maxClip: 7,
        maxReload: 7,
        extendedClip: 9,
        extendedReload: 9,
        reloadTime: 2.3,
        fireDelay: 0.16,
        switchDelay: 0.3,
        barrelLength: 1.855,
        barrelOffset: 0.0,
        recoilTime: 0.5,
        moveSpread: 6.0,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_deagle',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-deagle.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-deagle-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.4,
            shellOffset: 0.265
        },
        sound: {
            shoot: 'deagle_01',
            reload: 'deagle_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'deagle_switch_01'
        }
    },
    'lasr_gun': {
        name: 'Lasr Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        ammoSpawnCount: 56,
        pistol: true,
        dualWieldType: 'lasr_gun_dual',
        noPotatoSwap: true,
        maxClip: 7,
        maxReload: 7,
        extendedClip: 9,
        extendedReload: 9,
        reloadTime: 2.3,
        fireDelay: 0.16,
        switchDelay: 0.3,
        barrelLength: 2.555,
        barrelOffset: 0.0,
        recoilTime: 0.5,
        moveSpread: 6.0,
        shotSpread: 2.5,
        bulletCount: 1,
        bulletType: 'bullet_lasr',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-lasr-gun.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-lasr-gun.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 0.0,
            shellOffset: 0.0
        },
        sound: {
            shoot: 'lasr_01',
            reload: 'lasr_gun_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'deagle_switch_01'
        }
    },
    'lasr_gun_dual': {
        name: 'Dual Lasr Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '12gauge',
        ammoSpawnCount: 98,
        noPotatoSwap: true,
        isDual: true,
        pistol: true,
        maxClip: 14,
        maxReload: 14,
        extendedClip: 18,
        extendedReload: 18,
        reloadTime: 4.0,
        fireDelay: 0.12,
        switchDelay: 0.3,
        barrelLength: 2.4,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 0.5,
        moveSpread: 7.5,
        shotSpread: 3.5,
        bulletCount: 1,
        bulletType: 'bullet_lasr',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-double-lasr-gun.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-lasr-gun.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 0.0,
            shellOffset: 0.0
        },
        sound: {
            shoot: 'lasr_01',
            reload: 'lasr_gun_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'deagle_switch_01'
        }
    },

    'deagle_dual': {
        name: 'Dual DEagle 50',
        type: 'gun',
        quality: 1,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: '50AE',
        ammoSpawnCount: 98,
        isDual: true,
        pistol: true,
        maxClip: 14,
        maxReload: 14,
        extendedClip: 18,
        extendedReload: 18,
        reloadTime: 4.0,
        fireDelay: 0.12,
        switchDelay: 0.3,
        barrelLength: 2.4,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 0.5,
        moveSpread: 7.5,
        shotSpread: 3.5,
        bulletCount: 1,
        bulletType: 'bullet_deagle',
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-deagle-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-deagle-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.265
        },
        sound: {
            shoot: 'deagle_01',
            reload: 'deagle_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'deagle_switch_01'
        }
    },
    'sword_gun': {
        name: 'Flare Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: 'flare',
        pistol: true,
        outsideOnly: true,
        ammoSpawnCount: 1,
        ignoreEndlessAmmo: true,
        maxClip: 1,
        maxReload: 1,
        extendedClip: 1,
        extendedReload: 1,
        reloadTime: 2.0,
        fireDelay: 0.4,
        switchDelay: 0.3,
        barrelLength: 2.0,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.25,
        bulletCount: 1,
        bulletType: 'bullet_sword',
        noSplinter: true,
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-flare-gun.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.4625 },
            tint: 0xff5400,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'flare_gun_01',
            reload: 'flare_gun_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'gun_switch_01'
        }
    },
    'flare_gun': {
        name: 'Flare Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: 'flare',
        dualWieldType: 'flare_gun_dual',
        pistol: true,
        outsideOnly: true,
        ammoSpawnCount: 1,
        ignoreEndlessAmmo: true,
        maxClip: 1,
        maxReload: 1,
        extendedClip: 1,
        extendedReload: 1,
        reloadTime: 2.0,
        fireDelay: 0.4,
        switchDelay: 0.3,
        barrelLength: 2.0,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.25,
        bulletCount: 1,
        bulletType: 'bullet_flare',
        noSplinter: true,
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-flare-gun.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.4625 },
            tint: 0xff5400,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'flare_gun_01',
            reload: 'flare_gun_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'gun_switch_01'
        }
    },
    'flare_gun_dual': {
        name: 'Dual Flare Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        ammo: 'flare',
        isDual: true,
        pistol: true,
        outsideOnly: true,
        ammoSpawnCount: 2,
        ignoreEndlessAmmo: true,
        maxClip: 2,
        maxReload: 2,
        extendedClip: 2,
        extendedReload: 2,
        reloadTime: 3.5,
        fireDelay: 0.3,
        switchDelay: 0.3,
        barrelLength: 2.0,
        barrelOffset: 0.0,
        dualOffset: 0.6,
        recoilTime: 1.0e10,
        moveSpread: 3.0,
        shotSpread: 1.25,
        bulletCount: 1,
        bulletType: 'bullet_flare',
        noSplinter: true,
        headshotMult: 2.0,
        size: 'short',
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-flare-gun-dual.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-short-01.img',
            scale: { x: 0.5, y: 0.4625 },
            tint: 0xff5400,
            leftHandOffset: { x: 0.0, y: 0.0 },
            recoil: 1.0
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.225
        },
        sound: {
            shoot: 'flare_gun_01',
            reload: 'flare_gun_reload_02',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'gun_switch_01'
        }
    },
    'potato_cannon': {
        name: 'Potato Cannon',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        isLauncher: true,
        noPotatoSwap: true,
        deployGroup: 3,
        ammo: 'potato_ammo',
        ammoSpawnCount: 0,
        ammoInfinite: true,
        maxClip: 4,
        maxReload: 1,
        extendedClip: 4,
        extendedReload: 1,
        reloadTime: 1.0,
        fireDelay: 1.2,
        switchDelay: 0.9,
        barrelLength: 3.0,
        barrelOffset: -1.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_potato',
        projType: 'potato_cannonball',
        noSplinter: true,
        headshotMult: 1.0,
        speed: {
            equip: -3.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-potato-cannon.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-potato-cannon-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 7.0, y: 2.0 },
            gunOffset: { x: -10.0, y: -4.0 },
            recoil: 8.0,
            handsBelow: true
        },
        particle: {
            shellScale: 1.0,
            shellOffset: -1.0,
            shellOffsetY: 1.0
        },
        sound: {
            shoot: 'potato_cannon_01',
            reload: 'potato_cannon_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'potato_cannon_switch_01'
        }
    },
    'potato_smg': {
        name: 'Spud Gun',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        noPotatoSwap: true,
        ammo: 'potato_ammo',
        ammoSpawnCount: 0,
        ammoInfinite: true,
        maxClip: 30,
        maxReload: 30,
        extendedClip: 40,
        extendedReload: 40,
        reloadTime: 2.0,
        fireDelay: 0.09,
        switchDelay: 0.75,
        barrelLength: 3.25,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 4.0,
        shotSpread: 3.0,
        bulletCount: 1,
        bulletType: 'bullet_potato',
        projType: 'potato_smgshot',
        noSplinter: true,
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-potato-smg.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-potato-smg-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            recoil: 2.0,
            magImg: {
                sprite: 'gun-potato-smg-top-01.img',
                pos: { x: 0.0, y: -15.0 },
                top: true
            }
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.1,
            shellReverse: true,
            shellOffsetY: -1.1
        },
        sound: {
            shoot: 'potato_smg_01',
            reload: 'potato_smg_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'potato_smg_switch_01'
        }
    },

    'm9A17': {
        name: 'Flamethrower',
        type: 'gun',
        quality: 0,
        fireMode: 'auto',
        caseTiming: 'shoot',
        noPotatoSwap: true,
        ammo: '9mm',
        ammoSpawnCount: 60,
        ammoInfinite: false,
        maxClip: 60,
        maxReload: 60,
        extendedClip: 70,
        extendedReload: 70,
        reloadTime: 4.0,
        fireDelay: 0.015,
        switchDelay: 0.75,
        barrelLength: 4.5,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 10.0,
        shotSpread: 10.0,
        bulletCount: 1,
        bulletType: 'bullet_m9A17',
        projType: 'fire_shot',
        noSplinter: true,
        headshotMult: 2.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m9A17.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-m9a17-01.img',
            scale: { x: 0.5, y: 0.4 },
            tint: 0xFFFFFF,
            recoil: 0.3,
            handsBelow: false,
            leftHandOffset: { x: 15.0, y: -10.0 }
        },
        particle: {
            shellScale: 0.0,
            shellOffset: 0.0
        },
        sound: {
            shoot: 'm9a17_01',
            reload: 'm9a17_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'potato_smg_switch_01'
        }
    },

    'bugle': {
        name: 'Bugle',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        noDrop: true,
        noPotatoSwap: true,
        pistol: true,
        ignoreDetune: true,
        ammo: 'bugle_ammo',
        ammoSpawnCount: 0,
        maxClip: 1,
        maxReload: 1,
        extendedClip: 4,
        extendedReload: 1,
        reloadTime: 0.01,
        fireDelay: 1.0,
        switchDelay: 0.3,
        barrelLength: 3.0,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 1.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_bugle',
        noSplinter: true,
        headshotMult: 1.0,
        speed: {
            equip: 0.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-bugle.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-bugle-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 12.0, y: 0.0 },
            recoil: 4.0
        },
        particle: {
            shellScale: 4.0,
            shellOffset: 2.0,
            shellForward: 1.0
        },
        sound: {
            shoot: 'bugle_01',
            shootTeam: {
                1: 'bugle_01',
                2: 'bugle_02'
            },
            shootAlt: 'bugle_03',
            reload: '',
            pickup: 'stow_weapon_01',
            empty: 'empty_fire_01',
            deploy: 'stow_weapon_01'
        }
    },
    'heart_cannon': {
        name: 'Heart Cannon',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        isLauncher: true,
        noPotatoSwap: true,
        deployGroup: 3,
        ammo: 'heart_ammo',
        ammoSpawnCount: 0,
        ammoInfinite: true,
        maxClip: 4,
        maxReload: 1,
        extendedClip: 4,
        extendedReload: 1,
        reloadTime: 1.0,
        fireDelay: 1.2,
        switchDelay: 0.9,
        barrelLength: 3.0,
        barrelOffset: -1.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_heart',
        projType: 'heart_cannonball',
        noSplinter: true,
        headshotMult: 1.0,
        speed: {
            equip: -3.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-heart-cannon.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-heart-cannon-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 7.0, y: 2.0 },
            gunOffset: { x: -10.0, y: -4.0 },
            recoil: 8.0,
            handsBelow: true
        },
        particle: {
            shellScale: 1.0,
            shellOffset: -1.0,
            shellOffsetY: 1.0
        },
        sound: {
            shoot: 'potato_cannon_01',
            reload: 'potato_cannon_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'potato_cannon_switch_01'
        }
    },
    'm134': {
        name: 'M134',
        type: 'gun',
        quality: 1,
        fireMode: 'auto',
        caseTiming: 'shoot',
        ammo: '762mm',
        ammoSpawnCount: 100,
        maxClip: 200,
        maxReload: 200,
        extendedClip: 250,
        extendedReload: 250,
        reloadTime: 8.0,
        fireDelay: 0.055,
        switchDelay: 0.9,
        barrelLength: 4.8,
        barrelOffset: 0.0,
        recoilTime: 1.0e10,
        moveSpread: 1.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_m134',
        headshotMult: 1.5,
        speed: {
            equip: -3.0,
            attack: -6.0
        },
        lootImg: {
            sprite: 'loot-weapon-m134.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-m134-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 13.5, y: -5.0 },
            rightHandOffset: { x: 5.0, y: 5.0 },
            gunOffset: { x: 0.0, y: -4.0 },
            recoil: 1.33
        },
        particle: {
            shellScale: 1.0,
            shellOffset: 0.5875,
            shellReverse: true
        },
        sound: {
            shoot: 'm134_01',
            reload: 'm134_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_02',
            deploy: 'm134_switch_01'
        }
    },
    'm79': {
        name: 'M79',
        type: 'gun',
        quality: 0,
        fireMode: 'single',
        caseTiming: 'shoot',
        isLauncher: true,
        noPotatoSwap: true,
        deployGroup: 3,
        ammo: '40mm',
        ammoSpawnCount: 10,
        ammoInfinite: false,
        maxClip: 1,
        maxReload: 1,
        extendedClip: 1,
        extendedReload: 1,
        reloadTime: 2.3,
        fireDelay: 0.0,
        switchDelay: 0.9,
        barrelLength: 2.0,
        barrelOffset: -1.0,
        recoilTime: 1.0e10,
        moveSpread: 2.0,
        shotSpread: 1.0,
        bulletCount: 1,
        bulletType: 'bullet_m79',
        projType: '40mm_granade',
        noSplinter: true,
        headshotMult: 1.0,
        speed: {
            equip: -3.0,
            attack: 0.0
        },
        lootImg: {
            sprite: 'loot-weapon-m79.img',
            tint: 0x00ff00,
            border: 'loot-circle-outer-01.img',
            borderTint: 0x000000,
            scale: 0.3
        },
        worldImg: {
            sprite: 'gun-m79-01.img',
            scale: { x: 0.5, y: 0.5 },
            tint: 0xFFFFFF,
            leftHandOffset: { x: 7.0, y: 2.0 },
            gunOffset: { x: -10.0, y: -4.0 },
            recoil: 8.0,
            handsBelow: true
        },
        particle: {
            shellScale: 1.0,
            shellOffset: -1.0,
            shellOffsetY: 1.0
        },
        sound: {
            shoot: 'm79_01',
            reload: 'm79_reload_01',
            pickup: 'gun_pickup_01',
            empty: 'empty_fire_01',
            deploy: 'm79_switch_01'
        }
    }
};

module.exports = GunDefs;
