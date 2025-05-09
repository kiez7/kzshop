const games = [
    {
        name: "The First Berserker: Khazan",
        genres: ["Hành động", "Nhập vai"],
        price: "59.000",
        image: "images/thefirstberserkerkhazan.jpg",
        isHot: true
    },
    {
        name: "Black Myth: Wukong",
        genres: ["Hành động", "Nhập vai", "Phiêu lưu"],
        price: "Strandard : 49.000 VNĐ | Deluxe Edition : 69.000 VNĐ",
        image: "images/blackmythwukong.jpg",
        isHot: true
    },
    {
        name: "Marvel's Spider-Man 2",
        genres: ["Hành động", "Phiêu lưu"],
        price: "49.000",
        image: "images/spiderman2.jpg",
        isHot: true
    },
    {
        name: "Marvel's Spider-Man Remastered",
        genres: ["Hành động", "Phiêu lưu"],
        price: "29.000",
        image: "images/spidermanremastered.jpg",
        isHot: false
    },
    {
        name: "Marvel's Spider-Man: Miles Morales",
        genres: ["Hành động", "Phiêu lưu"],
        price: "29.000",
        image: "images/spidermanmiles.jpg",
        isHot: false
    },
    {
        name: "3 Games Spiderman",
        genres: ["Hành động", "Phiêu lưu"],
        price: "79.000",
        image: "images/3spiderman.jpg",
        isHot: false
    },
    {
        name: "Grand Theft Auto V",
        genres: ["Hành động", "Phiêu lưu","Nhập vai"],
        price: "39.000",
        image: "images/gtav.jpg",
        isHot: true
    },
    {
        name: "Red Dead Redemption 2",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai"],
        price: "49.000",
        image: "images/reddead2.jpg",
        isHot: true
    },
    {
        name: "The Last of Us Part II Remastered",
        genres: ["Hành động", "Phiêu lưu", "Kinh dị"],
        price: "49.000",
        image: "images/thelastofus2.jpg",
        isHot: true
    },
    {
        name: "Hogwarts Legacy",
        genres: ["Nhập vai", "Phiêu lưu"],
        price: "49.000",
        image: "images/hogwartslegacy.jpg",
        isHot: false
    },
    {
        name: "Elden Ring",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu"],
        price: "39.000",
        image: "images/eldenring.jpg",
        isHot: false
    },
    {
        name: "Elden Ring + DLC",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu"],
        price: "49.000",
        image: "images/eldenringshadow.jpg",
        isHot: true
    },
    {
        name: "Sekiro: Shadows Die Twice",
        genres: ["Hành động", "Phiêu lưu"],
        price: "39.000",
        image: "images/sekiro.jpg",
        isHot: false
    },
    {
        name: "Silent Hill 2",
        genres: ["Kinh dị", "Phiêu lưu"],
        price: "39.000",
        image: "images/silenthill2.jpg",
        isHot: false
    },
    {
        name: "The Elder Scrolls IV: Oblivion Remastered",
        genres: ["Nhập Vai"],
        price: "49.000",
        image: "images/theelderscrollsiv.jpg",
        isHot: true
    },
    {
        name: "God of War",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai"],
        price: "39.000",
        image: "images/godofwar2018.jpg",
        isHot: false
    },
    {
        name: "God of War Ragnarök",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai"],
        price: "49.000",
        image: "images/godofwarragnarok.jpg",
        isHot: true
    },
    {
        name: "Ghost of Tsushima DIRECTOR'S CUT",
        genres: ["Hành động", "Phiêu lưu"],
        price: "49.000",
        image: "images/ghostoftsushima.jpg",
        isHot: true
    },
    {
        name: "Cyberpunk 2077",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu"],
        price: "39.000",
        image: "images/cyberpunk2077.jpg",
        isHot: false
    },
    {
        name: "Cyberpunk 2077 + DLC Phantom Liberty",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu"],
        price: "49.000",
        image: "images/cyberpunk2077dlc.jpg",
        isHot: true
    },
    {
        name: "Warhammer 40,000: Space Marine 2",
        genres: ["Hành động", "Chiến thuật"],
        price: "49.000",
        image: "images/spacemarine2.jpg",
        isHot: false
    },
    {
        name: "Wallpaper Engine",
        genres: [],
        price: "Off : 10.000 VNĐ | ACC Onl :49.000",
        image: "images/wallpaper.jpg",
        isHot: true
    },
    {
        name: "Monster Hunter Wilds",
        genres: ["Hành động", "Nhập vai"],
        price: "59.000",
        image: "images/monsterhunterwild.jpg",
        isHot: true
    },
    {
        name: "Dynasty Warriors: Origins Deluxe",
        genres: ["Hành động", "Chiến thuật"],
        price: "59.000",
        image: "images/dynastywarriors.jpg",
        isHot: false
    },
    {
        name: "FINAL FANTASY XVI COMPLETE EDITION",
        genres: ["Nhập vai", "Hành động"],
        price: "69.000",
        image: "images/finalfantasy16.jpg",
        isHot: false
    },
    {
        name: "Horizon Forbidden West",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động"],
        price: "39.000",
        image: "images/horizonforbiddenwest.jpg",
        isHot: false
    },
    {
        name: "Horizon Zero Dawn Complete Edition",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động"],
        price: "49.000",
        image: "images/horizonzerodawn.jpg",
        isHot: true
    },
    {
        name: "Dragon Ball: Sparking! ZERO",
        genres: ["Võ thuật", "Hành động"],
        price: "49.000",
        image: "images/dragonballsparkingzero.jpg",
        isHot: false
    },
    {
        name: "Dragon Ball Z: Kakarot",
        genres: ["Võ thuật", "Nhập vai"],
        price: "39.000",
        image: "images/dragonballkakarot.jpg",
        isHot: false
    },
    {
        name: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
        genres: ["Võ thuật", "Hành động","Game anime"],
        price: "39.000",
        image: "images/narutostorm4.jpg",
        isHot: false
    },
    {
        name: "One Piece: Burning Blood",
        genres: ["Võ thuật", "Hành động","Game anime"],
        price: "49.000",
        image: "images/onepiceburningblood.jpg",
        isHot: false
    },
    {
        name: "Metaphor: ReFantazio Atlus 35th Digital Anniversary Edition",
        genres: ["Nhập vai", "Phiêu lưu","Game anime"],
        price: "69.000",
        image: "images/metaphor.jpg",
        isHot: false
    },
    {
        name: "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles",
        genres: ["Hành động", "Võ thuật","Game anime"],
        price: "49.000",
        image: "images/kimetsunoyaiba.jpg",
        isHot: false
    },
    {
        name: "Kingdom Come: Deliverance",
        genres: ["Nhập vai", "Phiêu lưu"],
        price: "39.000",
        image: "images/kingdomcome.jpg",
        isHot: false
    },
    {
        name: "Kingdom Come: Deliverance II",
        genres: ["Nhập vai", "Phiêu lưu"],
        price: "49.000",
        image: "images/kingdomcome2.jpg",
        isHot: true
    },
    {
        name: "Persona 3 Reload Digital Premium Edition",
        genres: ["Nhập vai", "Phiêu lưu"],
        price: "59.000",
        image: "images/persona3reload.jpg",
        isHot: false
    },
    {
        name: "The Last of Us Part I",
        genres: ["Hành động", "Phiêu lưu", "Kinh dị"],
        price: "39.000",
        image: "images/thelastofus1.jpg",
        isHot: false
    },
    {
        name: "The Witcher 3: Wild Hunt",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động"],
        price: "39.000",
        image: "images/witcher3.jpg",
        isHot: false
    },
    {
        name: "Total War: THREE KINGDOMS Full DLC",
        genres: ["Chiến thuật", "Mô phỏng"],
        price: "69.000",
        image: "images/totalwarthreekingdoms.jpg",
        isHot: true
    },
    {
        name: "Forza Horizon 4",
        genres: ["Đua xe", "Mô phỏng"],
        price: "39.000",
        image: "images/forzahorizon4.jpg",
        isHot: false
    },
    {
        name: "Forza Horizon 5 Premium",
        genres: ["Đua xe", "Mô phỏng"],
        price: "49.000",
        image: "images/forzahorizon5.jpg",
        isHot: true
    },
    {
        name: "Devil May Cry 5",
        genres: ["Hành động"],
        price: "49.000",
        image: "images/devilmaycry5.jpg",
        isHot: false
    },
    {
        name: "NieR: Automata",
        genres: ["Hành động", "Nhập vai"],
        price: "49.000",
        image: "images/nierautomata.jpg",
        isHot: false
    },
    {
        name: "EA SPORTS FC 25",
        genres: ["Thể thao"],
        price: "59.000",
        image: "images/eafc25.jpg",
        isHot: true
    },
    {
        name: "Resident Evil 4",
        genres: ["Kinh dị", "Hành động"],
        price: "49.000",
        image: "images/residentevil4.jpg",
        isHot: false
    },
    {
        name: "MiSide",
        genres: ["Giải đố", "Kinh dị"],
        price: "39.000",
        image: "images/miside.jpg",
        isHot: false
    },
    {
        name: "Car For Sale Simulator 2023",
        genres: ["Mô phỏng"],
        price: "29.000",
        image: "images/carforsale.jpg",
        isHot: false
    },
    {
        name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
        genres: ["Hành động", "Kinh dị", "Nhập vai"],
        price: "59.000",
        image: "images/stalker2.jpg",
        isHot: false
    },
    {
        name: "Slitterhead",
        genres: ["Kinh dị", "Hành động"],
        price: "49.000",
        image: "images/slitterhead.jpg",
        isHot: false
    },
    {
        name: "Tai Ương",
        genres: ["Kinh dị", "Giải đố"],
        price: "19.000",
        image: "images/taiương.jpg",
        isHot: false
    },
    {
        name: "inZOI",
        genres: ["Mô phỏng"],
        price: "39.000",
        image: "images/inzoi.jpg",
        isHot: true
    },
    {
        name: "Bleach: Rebirth of Souls",
        genres: ["Võ thuật", "Hành động"],
        price: "49.000",
        image: "images/bleachrebirth.jpg",
        isHot: true
    },
    {
        name: "Assassin's Creed Black Flag",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "29.000",
        image: "images/acblackflag.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Unity",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "Ubisoft Online : 29.000 VNĐ | Acc Off + DLC : 29.000",
        image: "images/acunity.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Syndicate",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "Acc Online : 49.000 VNĐ | Acc Offline : 29.000",
        image: "images/acsyndicate.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Origins + Mail",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "69.000",
        image: "images/acorgins.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Odyssey",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "39.000",
        image: "images/acoddysey.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Valhalla Complete Edition",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "49.000",
        image: "images/acvalhalla.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Mirage",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ"],
        price: "49.000",
        image: "images/acmirage.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Shadows",
        genres: ["Hành động", "Phiêu lưu","Nhập Vai","Sát thủ"],
        price: "59.000",
        image: "images/assassinscreedshadow.jpg",
        isHot: true
    },
    {
        name: "Rise of the Ronin",
        genres: ["Hành động", "Nhập vai"],
        pricehaustive: "49.000",
        image: "images/riseoftheronin.jpg",
        isHot: false
    },
    {
        name: "Split Fiction",
        genres: ["Phiêu lưu", "Giải đố"],
        price: "49.000",
        image: "images/splitfiction.jpg",
        isHot: true
    },
    {
        name: "It Takes Two",
        genres: ["Phiêu lưu", "Giải đố"],
        price: "39.000",
        image: "images/itakestwo.jpg",
        isHot: false
    },
    {
        name: "Like a Dragon: Infinite Wealth",
        genres: ["Hành động", "Nhập vai"],
        price: "49.000",
        image: "images/yakuza_likeadragon.jpg",
        isHot: false
    },
    {
        name: "Sniper Elite: Resistance",
        genres: ["Hành động", "Chiến thuật"],
        price: "39.000",
        image: "images/sniperresistance.jpg",
        isHot: false
    },
    {
        name: "Final Fantasy VII Rebirth",
        genres: ["Nhập vai", "Hành động"],
        price: "49.000",
        image: "images/finalfantasy7.jpg",
        isHot: true
    },
    {
        name: "Thần Trùng + Cỏ Máu",
        genres: ["Kinh dị", "Giải đố"],
        price: "29.000",
        image: "images/thanhrungcomau.jpg",
        isHot: true
    },
    {
        name: "Baldur's Gate 3",
        genres: ["Nhập vai", "Chiến thuật"],
        price: "49.000",
        image: "images/baldursgate3.jpg",
        isHot: false
    },
    {
        name: "Far Cry Series",
        genres: ["Hành động", "Phiêu lưu"],
        price: "89.000",
        image: "images/farcry.jpg",
        isHot: false
    },
    {
        name: "Shadow of the Tomb Raider",
        genres: ["Hành động", "Phiêu lưu"],
        price: "39.000",
        image: "images/tombraider.jpg",
        isHot: false
    },
    {
        name: "A Plague Tale: Innocence",
        genres: ["Hành động", "Phiêu lưu"],
        price: "39.000",
        image: "images/aptInnocence.jpg",
        isHot: false
    },
    {
        name: "A Plague Tale: Requiem",
        genres: ["Hành động", "Phiêu lưu"],
        price: "49.000",
        image: "images/aptrequiem.jpg",
        isHot: false
    },
    {
        name: "Batman: Arkham Knight",
        genres: ["Hành động", "Phiêu lưu"],
        price: "39.000",
        image: "images/batmanarkhamknight.jpg",
        isHot: false
    },
    {
        name: "Clair Obscur Expedition 33 Deluxe Edition",
        genres: ["Hành động", "Nhập Vai"],
        price: "49.000",
        image: "images/clairobscur.jpg",
        isHot: true
    },
    {
        name: "Into the Dead: Our Darkest Days",
        genres: ["Hành động", "Mô Phỏng","Chiến thuật"],
        price: "39.000",
        image: "images/introthedead.jpg",
        isHot: false
    },
    {
        name: "Schedule I",
        genres: ["Hành động", "Mô Phỏng"],
        price: "29.000",
        image: "images/schedule.jpg",
        isHot: true
    },
    {
        name: "WWE 2K25 ",
        genres: ["Mô Phỏng", "Thể thao"],
        price: "49.000",
        image: "images/wwe2k25.jpg",
        isHot: true
    },
    {
        name: "Crusader Kings III",
        genres: ["Mô Phỏng", "Nhập Vai","Chiến Thuật"],
        price: "39.000",
        image: "images/CrusaderKingsIII.jpg",
        isHot: false
    },
    {
        name: "Ark Survival Evolved",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn"],
        price: "Online : 49.000 VNĐ | Off Ful DLC : 49.000",
        image: "images/arkevoled.jpg",
        isHot: false
    },
    {
        name: "Ark Survival Ascended",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn"],
        price: "49.000",
        image: "images/arkascended.jpg",
        isHot: false
    },
    {
        name: "Euro Truck Simulator 2 Essentials + DLC",
        genres: ["Phiêu Lưu", "Mô Phỏng","Đua xe"],
        price: "39.000",
        image: "images/eurotruck2.jpg",
        isHot: false
    },
    {
        name: "Ready or Not",
        genres: ["Hành Động","Phiêu Lưu"],
        price: "39.000",
        image: "images/readyornot.jpg",
        isHot: false
    },
    {
        name: "HITMAN World of Assassination + Full DLC",
        genres: ["Hành Động","Sát thủ"],
        price: "59.000",
        image: "images/hitmanwoa.jpg",
        isHot: false
    },
    {
        name: "Poppy Playtime Full Chapter",
        genres: ["Hành Động","Kinh Dị","Giải đố"],
        price: "49.000",
        image: "images/poppy.jpg",
        isHot: false
    },
    {
        name: "NBA 2k25",
        genres: ["Mô Phỏng","Thể thao"],
        price: "49.000",
        image: "images/nba2k25.jpg",
        isHot: true
    },
    {
        name: "Manor Lords",
        genres: ["Mô Phỏng","Chiến thuật"],
        price: "29.000",
        image: "images/manorlords.jpg",
        isHot: false
    },
    {
        name: "The Forest + Mail Gốc",
        genres: ["Sinh tồn","Hành động","Phiêu lưu"],
        price: "29.000",
        image: "images/theforest.jpg",
        isHot: false
    },
    {
        name: "Sons Of The Forest",
        genres: ["Sinh tồn","Hành động","Phiêu lưu"],
        price: "Acc Onl : 169.000 VNĐ | Acc Off :29.000",
        image: "images/sotf.jpg",
        isHot: false
    },
    {
        name: "Sleeping Dogs: Definitive Edition",
        genres: ["Hành động","Phiêu lưu"],
        price: "29.000",
        image: "images/sleepingdogs.jpg",
        isHot: false
    },
    {
        name: "Farming Simulator 25",
        genres: ["Mô Phỏng","Chiến thuật"],
        price: "39.000",
        image: "images/fs25.jpg",
        isHot: false
    },
    {
        name: "DAVE THE DIVER Deluxe Edition",
        genres: ["Phiêu lưu","Mô phỏng"],
        price: "39.000",
        image: "images/davethediver.jpg",
        isHot: false
    },
    {
        name: "Raft",
        genres: ["Sinh tồn","Phiêu lưu"],
        price: "29.000",
        image: "images/raft.jpg",
        isHot: false
    },
    {
        name: "Subnautica",
        genres: ["Sinh tồn","Phiêu lưu"],
        price: "29.000",
        image: "images/subnautica.jpg",
        isHot: false
    },
    {
        name: "Subnautica",
        genres: ["Sinh tồn","Phiêu lưu"],
        price: "29.000",
        image: "images/subnautica.jpgzero.jpg",
        isHot: false
    },
    {
        name: "Mafia 1 + 2 + 3",
        genres: ["Nhập vai","Phiêu lưu","Hành động"],
        price: "69.000",
        image: "images/mafia.jpg",
        isHot: false
    },
    {
        name: "Mortal Kombat 1 Khaos Reigns Kollection",
        genres: ["Hành động"],
        price: "69.000",
        image: "images/mortalkombat1.jpg",
        isHot: true
    },
    {
        name: "Football Manager 2024 + DLC In-game Editor",
        genres: ["Mô phỏng","Thể thao"],
        price: "59.000",
        image: "images/fm2024dlc.jpg",
        isHot: false
    },
    {
        name: "Metro Exodus",
        genres: ["Hành động", "Kinh dị"],
        priceMania: "39.000",
        image: "images/metroexodus.jpg",
        isHot: false
    }
];