const games = [
    {
        name: "The First Berserker: Khazan",
        genres: ["Hành động", "Nhập vai","Cốt truyện"],
        price: "49.000",
        image: "images/thefirstberserkerkhazan.jpg",
        isHot: true
    },
    {
        name: "Black Myth: Wukong",
        genres: ["Hành động", "Nhập vai", "Phiêu lưu","Cốt truyện"],
        price: "49.000",
        image: "images/blackmythwukong.jpg",
        isHot: true
    },
    {
        name: "Marvel's Spider-Man 2",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "49.000",
        image: "images/spiderman2.jpg",
        isHot: true
    },
    {
        name: "Marvel's Spider-Man Remastered",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "29.000",
        image: "images/spidermanremastered.jpg",
        isHot: false
    },
    {
        name: "Marvel's Spider-Man: Miles Morales",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "29.000",
        image: "images/spidermanmiles.jpg",
        isHot: false
    },
    {
        name: "3 Games Spiderman",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "79.000",
        image: "images/3spiderman.jpg",
        isHot: false
    },
    {
        name: "Grand Theft Auto V (GTA V)",
        genres: ["Hành động", "Phiêu lưu","Nhập vai","Cốt truyện"],
        price: "39.000",
        image: "images/gtav.jpg",
        isHot: true
    },
    {
        name: "Grand Theft Auto V (GTA V) New + Mail Gốc",
        genres: ["Hành động", "Phiêu lưu","Nhập vai","Cốt truyện"],
        price: "319.000",
        image: "images/gtav.jpg",
        isHot: true
    },
    {
        name: "Red Dead Redemption 2",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai","Cốt truyện"],
        price: "49.000",
        image: "images/reddead2.jpg",
        isHot: true
    },
    {
        name: "The Last of Us Part II Remastered",
        genres: ["Hành động", "Phiêu lưu", "Kinh dị","Cốt truyện"],
        price: "49.000",
        image: "images/thelastofus2.jpg",
        isHot: true
    },
    {
        name: "Hogwarts Legacy",
        genres: ["Nhập vai", "Phiêu lưu","Cốt truyện"],
        price: "49.000",
        image: "images/hogwartslegacy.jpg",
        isHot: false
    },
    {
        name: "Elden Ring",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/eldenring.jpg",
        isHot: false
    },
    {
        name: "Elden Ring + Mail",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện"],
        price: "399.000",
        image: "images/eldenring.jpg",
        isHot: true
    },
    {
        name: "Elden Ring + DLC",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện"],
        price: "49.000",
        image: "images/eldenringshadow.jpg",
        isHot: true
    },
    {
        name: "Sekiro: Shadows Die Twice",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/sekiro.jpg",
        isHot: false
    },
    {
        name: "Silent Hill 2",
        genres: ["Kinh dị", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/silenthill2.jpg",
        isHot: false
    },
    {
        name: "The Elder Scrolls IV: Oblivion Remastered",
        genres: ["Nhập Vai","Cốt truyện"],
        price: "49.000",
        image: "images/theelderscrollsiv.jpg",
        isHot: true
    },
    {
        name: "God of War",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai","Cốt truyện"],
        price: "39.000",
        image: "images/godofwar2018.jpg",
        isHot: false
    },
    {
        name: "God of War Ragnarök",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai","Cốt truyện"],
        price: "49.000",
        image: "images/godofwarragnarok.jpg",
        isHot: true
    },
    {
        name: "Ghost of Tsushima DIRECTOR'S CUT",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "49.000",
        image: "images/ghostoftsushima.jpg",
        isHot: true
    },
    {
        name: "Cyberpunk 2077",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/cyberpunk2077.jpg",
        isHot: false
    },
    {
        name: "Cyberpunk 2077 + DLC Phantom Liberty",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện"],
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
        name: "Wallpaper Engine Offline",
        genres: [],
        price: "10.000",
        image: "images/wallpaper.jpg",
        isHot: true
    },
    {
        name: "Wallpaper Engine + Mail",
        genres: [],
        price: "49.000",
        image: "images/wallpaper.jpg",
        isHot: true
    },
    {
        name: "Monster Hunter Wilds",
        genres: ["Hành động", "Nhập vai","Cốt truyện"],
        price: "59.000",
        image: "images/monsterhunterwild.jpg",
        isHot: true
    },
    {
        name: "Dynasty Warriors: Origins Deluxe",
        genres: ["Hành động", "Chiến thuật","Cốt truyện"],
        price: "59.000",
        image: "images/dynastywarriors.jpg",
        isHot: false
    },
    {
        name: "FINAL FANTASY XVI COMPLETE EDITION",
        genres: ["Nhập vai", "Hành động","Cốt truyện"],
        price: "69.000",
        image: "images/finalfantasy16.jpg",
        isHot: false
    },
    {
        name: "Horizon Forbidden West",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động","Cốt truyện"],
        price: "39.000",
        image: "images/horizonforbiddenwest.jpg",
        isHot: false
    },
    {
        name: "Horizon Zero Dawn Complete Edition",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động","Cốt truyện"],
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
        genres: ["Nhập vai", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/kingdomcome.jpg",
        isHot: false
    },
    {
        name: "Kingdom Come: Deliverance II",
        genres: ["Nhập vai", "Phiêu lưu","Cốt truyện"],
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
        genres: ["Hành động", "Phiêu lưu", "Kinh dị","Cốt truyện"],
        price: "39.000",
        image: "images/thelastofus1.jpg",
        isHot: false
    },
    {
        name: "The Witcher 3: Wild Hunt",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động","Cốt truyện"],
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
        name: "Forza Horizon 5 Premium Online (Xbox)",
        genres: ["Đua xe", "Mô phỏng"],
        price: "99.000",
        image: "images/forzahorizon5.jpg",
        isHot: true
    },
    {
        name: "Forza Horizon 5 Premium + Mail (Steam)",
        genres: ["Đua xe", "Mô phỏng"],
        price: "579.000",
        image: "images/forzahorizon5.jpg",
        isHot: true
    },
    {
        name: "Devil May Cry 5",
        genres: ["Hành động","Cốt truyện"],
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
        name: "Resident Evil 4 Remake",
        genres: ["Kinh dị", "Hành động","Cốt truyện"],
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
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "29.000",
        image: "images/acblackflag.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Unity Ubisoft Online",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "29.000",
        image: "images/acunity.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Unity Offline + DLC",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "29.000",
        image: "images/acunity.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Syndicate + Mail",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "49.000",
        image: "images/acsyndicate.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Syndicate Offline",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "29.000",
        image: "images/acsyndicate.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Origins + Mail",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "69.000",
        image: "images/acorgins.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Odyssey",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "39.000",
        image: "images/acoddysey.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Valhalla Complete Edition",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "49.000",
        image: "images/acvalhalla.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Mirage",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "49.000",
        image: "images/acmirage.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Shadows",
        genres: ["Hành động", "Phiêu lưu","Nhập Vai","Sát thủ","Cốt truyện"],
        price: "59.000",
        image: "images/assassinscreedshadow.jpg",
        isHot: true
    },
    {
        name: "Rise of the Ronin",
        genres: ["Hành động", "Nhập vai","Cốt truyện"],
        price: "49.000",
        image: "images/riseoftheronin.jpg",
        isHot: false
    },
    {
        name: "Split Fiction + Mod Online",
        genres: ["Phiêu lưu", "Giải đố","Game CO-OP"],
        price: "49.000",
        image: "images/splitfiction.jpg",
        isHot: true
    },
    {
        name: "It Takes Two + Mod Online",
        genres: ["Phiêu lưu", "Giải đố","Game CO-OP"],
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
        genres: ["Nhập vai", "Hành động","Cốt truyện"],
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
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/tombraider.jpg",
        isHot: false
    },
    {
        name: "A Plague Tale: Innocence",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "39.000",
        image: "images/aptInnocence.jpg",
        isHot: false
    },
    {
        name: "A Plague Tale: Requiem",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
        price: "49.000",
        image: "images/aptrequiem.jpg",
        isHot: false
    },
    {
        name: "Batman: Arkham Knight",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện"],
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
        name: "Schedule I + Mod Online",
        genres: ["Hành động", "Mô Phỏng"],
        price: "29.000",
        image: "images/schedule.jpg",
        isHot: true
    },
    {
        name: "Schedule I + Mail",
        genres: ["Hành động", "Mô Phỏng"],
        price: "219.000",
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
        name: "Ark Survival Evolved + Mail",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn"],
        price: "49.000",
        image: "images/arkevoled.jpg",
        isHot: false
    },
    {
        name: "Ark Survival Evolved Offline + Full DLC",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn"],
        price: "49.000",
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
        isHot: false
    },
    {
        name: "NBA 2k25 + Mail",
        genres: ["Mô Phỏng","Thể thao"],
        price: "179.000",
        image: "images/nba2k25.jpg",
        isHot: false
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
        name: "Sons Of The Forest + Mail",
        genres: ["Sinh tồn","Hành động","Phiêu lưu"],
        price: "169.000",
        image: "images/sotf.jpg",
        isHot: false
    },
    {
        name: "Sons Of The Forest Offline",
        genres: ["Sinh tồn","Hành động","Phiêu lưu"],
        price: "29.000",
        image: "images/sotf.jpg",
        isHot: false
    },
    {
        name: "Sleeping Dogs: Definitive Edition",
        genres: ["Hành động","Phiêu lưu","Cốt truyện"],
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
        name: "Subnautica: Below Zero",
        genres: ["Sinh tồn","Phiêu lưu"],
        price: "29.000",
        image: "images/subnautica.jpgzero.jpg",
        isHot: false
    },
    {
        name: "Mafia 1 + 2 + 3",
        genres: ["Nhập vai","Phiêu lưu","Hành động","Cốt truyện"],
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
        genres: ["Hành động"],
        price: "39.000",
        image: "images/metroexodus.jpg",
        isHot: false
    },
    {
        name: "Outlast",
        genres: ["Hành động", "Kinh dị"],
        price: "10.000",
        image: "images/outlast.jpg",
        isHot: false
    },
    {
        name: "Outlast 2",
        genres: ["Hành động", "Kinh dị"],
        price: "19.000",
        image: "images/outlast2.jpg",
        isHot: false
    },
    {
        name: "Sifu",
        genres: ["Hành động"],
        price: "29.000",
        image: "images/sifu.jpg",
        isHot: false
    },
    {
        name: "Palworld",
        genres: ["Hành động","Phiêu lưu","Sinh tồn"],
        price: "39.000",
        image: "images/palworld.jpg",
        isHot: false
    },
    {
        name: "Palworld + Mail",
        genres: ["Hành động","Phiêu lưu","Sinh tồn"],
        price: "189.000",
        image: "images/palworld.jpg",
        isHot: false
    },
    {
        name: "Overcook 2 + Mail",
        genres: ["Hành động","Game CO-OP"],
        price: "99.000",
        image: "images/overcook2.jpg",
        isHot: false
    },
    {
        name: "Project Zomboid + Mail",
        genres: ["Hành động","Sinh Tồn"],
        price: "79.000",
        image: "images/projectzomboid.jpg",
        isHot: false
    },
    {
        name: "Project Zomboid",
        genres: ["Hành động","Sinh Tồn"],
        price: "39.000",
        image: "images/projectzomboid.jpg",
        isHot: false
    },
    {
        name: "Stardew Valley + Mail",
        genres: ["Mô Phỏng","Game CO-OP"],
        price: "79.000",
        image: "images/stardewvalley.jpg",
        isHot: false
    },
    {
        name: "Stardew Valley",
        genres: ["Mô Phỏng","Game CO-OP"],
        price: "29.000",
        image: "images/stardewvalley.jpg",
        isHot: false
    },
    {
        name: "R.E.P.O + Mod Online",
        genres: ["Hành Động","Game CO-OP","Kinh Dị"],
        price: "29.000",
        image: "images/repo.jpg",
        isHot: true
    },
    {
        name: "A Way Out + Mod Online",
        genres: ["Hành Động","Game CO-OP"],
        price: "39.000",
        image: "images/awayout.jpg",
        isHot: false
    },
    {
        name: "Resident Evil 8 Village" ,
        genres: ["Hành Động","Kinh Dị","Cốt truyện"],
        price: "39.000",
        image: "images/re8.jpg",
        isHot: false
    },
    {
        name: "Days Gone" ,
        genres: ["Hành Động","Kinh Dị","Sinh Tồn","Cốt truyện"],
        price: "39.000",
        image: "images/daysgone.jpg",
        isHot: false
    },
    {
        name: "UNCHARTED: Legacy of Thieves Collection" ,
        genres: ["Hành Động",'Phiêu Lưu',"Cốt truyện"],
        price: "49.000",
        image: "images/uncharted4lotc.jpg",
        isHot: true
    },
    {
        name: "SCUM + Mail" ,
        genres: ["Hành Động",'Phiêu Lưu'],
        price: "299.000",
        image: "images/scum.jpg",
        isHot: false
    },
    {
        name: "Path of Exile 2 + Mail" ,
        genres: ["Hành Động",'Phiêu Lưu',"Nhập vai"],
        price: "449.000",
        image: "images/poe2.jpg",
        isHot: false
    },
    {
        name: "Left 4 Dead 2 + Mail" ,
        genres: ["Hành Động","Game CO-OP"],
        price: "49.000",
        image: "images/l4d.jpg",
        isHot: false
    },
    {
        name: "Hollow Knight" ,
        genres: ["Hành Động","Game CO-OP"],
        price: "29.000",
        image: "images/HollowKnight.jpg",
        isHot: false
    },
    {
        name: "Cult of the Lamb" ,
        genres: ["Hành Động"],
        price: "39.000",
        image: "images/cultofthelamp.jpg",
        isHot: false
    },
    {
        name: "Call of Duty : Modern Warfare (2007) + Modern Warfare 2 (2009)" ,
        genres: ["Hành Động","Bắn súng"],
        price: "39.000",
        image: "images/cod20072009.jpg",
        isHot: false
    },
    {
        name: "Call of Duty: Black Ops I" ,
        genres: ["Hành Động","Bắn súng"],
        price: "39.000",
        image: "images/codb1.jpg",
        isHot: false
    },
    {
        name: "Call of Duty: Black Ops II + III" ,
        genres: ["Hành Động","Bắn súng"],
        price: "49.000",
        image: "images/codbo23.jpg",
        isHot: false
    },

    {
        name: "Call of Duty: WWII" ,
        genres: ["Hành Động","Bắn súng"],
        price: "39.000",
        image: "images/codwwii.jpg",
        isHot: false
    },
    {
        name: "Call of Duty: Modern Warfare Remastered" ,
        genres: ["Hành Động","Bắn súng"],
        price: "49.000",
        image: "images/codmwr.jpg",
        isHot: false
    },

];
