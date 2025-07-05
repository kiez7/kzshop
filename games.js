const games = [
    
    {
        name: "The Elder Scrolls IV: Oblivion Remastered",
        shortDescription: "Thế giới mở rộng lớn, tự do khám phá.", // Added short description
        genres: ["Nhập Vai","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/theelderscrollsiv.jpg",
        isHot: true
    },
    {
        name: "Clair Obscur Expedition 33 Deluxe Edition",
        shortDescription: "Hành động nhập vai với đồ họa ấn tượng.",
        genres: ["Hành động", "Nhập Vai", "accoff"],
        price: "49.000",
        image: "images/clairobscur.jpg",
        isHot: true
    },
    {
        name: "The First Berserker: Khazan",
        shortDescription: "Game hành động nhập vai đậm chất sử thi.",
        genres: ["Hành động", "Nhập vai","Cốt truyện", "accoff"],
        price: "59.000",
        image: "images/thefirstberserkerkhazan.jpg",
        isHot: true
    },
    {
        name: "Black Myth: Wukong",
        shortDescription: "Hành trình phiêu lưu của Tôn Ngộ Không.",
        genres: ["Hành động", "Nhập vai", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/blackmythwukong.jpg",
        isHot: true
    },
    {
        name: "Marvel's Spider-Man 2",
        shortDescription: "Trở thành Người Nhện và bảo vệ thành phố.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/spiderman2.jpg",
        isHot: true
    },
    {
        name: "Marvel's Spider-Man Remastered",
        shortDescription: "Phiên bản làm lại của siêu phẩm Người Nhện.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/spidermanremastered.jpg",
        isHot: false
    },
    {
        name: "Marvel's Spider-Man: Miles Morales",
        shortDescription: "Câu chuyện riêng của Miles Morales.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/spidermanmiles.jpg",
        isHot: false
    },
    {
        name: "3 Games Spiderman",
        shortDescription: "Trọn bộ 3 game Người Nhện đỉnh cao.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "79.000",
        image: "images/3spiderman.jpg",
        isHot: false
    },
    {
        name: "Grand Theft Auto V (GTA V)",
        shortDescription: "Thế giới mở rộng lớn, tự do làm mọi thứ.",
        genres: ["Hành động", "Phiêu lưu","Nhập vai","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/gtav.jpg",
        isHot: true
    },
    {
        name: "Grand Theft Auto V (GTA V) New + Mail Gốc",
        shortDescription: "Tài khoản mới kèm mail gốc.",
        genres: ["Hành động", "Phiêu lưu","Nhập vai","Cốt truyện", "acconl"],
        price: "319.000",
        image: "images/gtav.jpg",
        isHot: true
    },
    {
        name: "Red Dead Redemption 2",
        shortDescription: "Cao bồi miền Tây hoang dã.",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/reddead2.jpg",
        isHot: true
    },
    {
        name: "The Last of Us Part II Remastered",
        shortDescription: "Phiên bản làm lại của câu chuyện sinh tồn.",
        genres: ["Hành động", "Phiêu lưu", "Kinh dị","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/thelastofus2.jpg",
        isHot: true
    },
    {
        name: "Hogwarts Legacy",
        shortDescription: "Khám phá thế giới phù thủy Hogwarts.",
        genres: ["Nhập vai", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/hogwartslegacy.jpg",
        isHot: false
    },

    {
        name: "Elden Ring + Mail",
        shortDescription: "Elden Ring kèm mail gốc.",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện", "acconl"],
        price: "399.000",
        image: "images/eldenring.jpg",
        isHot: true
    },
    {
        name: "Elden Ring + DLC",
        shortDescription: "Elden Ring kèm bản mở rộng mới nhất.",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/eldenringshadow.jpg",
        isHot: true
    },
    {
        name: "Sekiro: Shadows Die Twice",
        shortDescription: "Hành động chặt chém phong cách Nhật Bản.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/sekiro.jpg",
        isHot: false
    },
    {
        name: "Silent Hill 2",
        shortDescription: "Game kinh dị tâm lý kinh điển.",
        genres: ["Kinh dị", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/silenthill2.jpg",
        isHot: false
    },
    {
        name: "God of War",
        shortDescription: "Hành trình của Kratos và Atreus.",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/godofwar2018.jpg",
        isHot: false
    },
    {
        name: "God of War Ragnarök",
        shortDescription: "Phần tiếp theo của God of War.",
        genres: ["Hành động", "Phiêu lưu", "Nhập vai","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/godofwarragnarok.jpg",
        isHot: true
    },
    {
        name: "Ghost of Tsushima DIRECTOR'S CUT",
        shortDescription: "Trở thành samurai bảo vệ Tsushima.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/ghostoftsushima.jpg",
        isHot: true
    },
    {
        name: "Cyberpunk 2077",
        shortDescription: "Thế giới tương lai đầy rẫy tội phạm.",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/cyberpunk2077.jpg",
        isHot: false
    },
    {
        name: "Cyberpunk 2077 + DLC Phantom Liberty",
        shortDescription: "Cyberpunk 2077 kèm bản mở rộng.",
        genres: ["Nhập vai", "Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/cyberpunk2077dlc.jpg",
        isHot: true
    },
    {
        name: "Warhammer 40,000: Space Marine 2",
        shortDescription: "Hành động chiến thuật trong vũ trụ Warhammer.",
        genres: ["Hành động", "Chiến thuật", "accoff"],
        price: "49.000",
        image: "images/spacemarine2.jpg",
        isHot: false
    },
    {
        name: "Wallpaper Engine Offline",
        shortDescription: "Kho hình nền động phong phú.",
        genres: ["accoff"],
        price: "10.000",
        image: "images/wallpaper.jpg",
        isHot: true
    },
    {
        name: "Wallpaper Engine + Mail",
        shortDescription: "Wallpaper Engine kèm mail gốc.",
        genres: ["acconl"],
        price: "49.000",
        image: "images/wallpaper.jpg",
        isHot: true
    },
    {
        name: "Monster Hunter Wilds",
        shortDescription: "Săn quái vật trong thế giới hoang dã.",
        genres: ["Hành động", "Nhập vai","Cốt truyện", "accoff"],
        price: "59.000",
        image: "images/monsterhunterwild.jpg",
        isHot: true
    },
    {
        name: "Dynasty Warriors: Origins Deluxe",
        shortDescription: "Hành động chặt chém lịch sử.",
        genres: ["Hành động", "Chiến thuật","Cốt truyện", "accoff"],
        price: "59.000",
        image: "images/dynastywarriors.jpg",
        isHot: false
    },
    {
        name: "FINAL FANTASY XVI COMPLETE EDITION",
        shortDescription: "Phiên bản đầy đủ của Final Fantasy XVI.",
        genres: ["Nhập vai", "Hành động","Cốt truyện", "accoff"],
        price: "69.000",
        image: "images/finalfantasy16.jpg",
        isHot: false
    },
    {
        name: "Horizon Forbidden West",
        shortDescription: "Phiêu lưu trong thế giới hậu tận thế.",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/horizonforbiddenwest.jpg",
        isHot: false
    },
    {
        name: "Horizon Zero Dawn Complete Edition",
        shortDescription: "Phiên bản đầy đủ của Horizon Zero Dawn.",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/horizonzerodawn.jpg",
        isHot: true
    },
    {
        name: "Dragon Ball: Sparking! ZERO",
        shortDescription: "Game đối kháng Dragon Ball mới nhất.",
        genres: ["Võ thuật", "Hành động", "accoff"],
        price: "49.000",
        image: "images/dragonballsparkingzero.jpg",
        isHot: false
    },
    {
        name: "Dragon Ball Z: Kakarot",
        shortDescription: "Sống lại câu chuyện Dragon Ball Z.",
        genres: ["Võ thuật", "Nhập vai", "accoff"],
        price: "39.000",
        image: "images/dragonballkakarot.jpg",
        isHot: false
    },
    {
        name: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
        shortDescription: "Game đối kháng Naruto đỉnh cao.",
        genres: ["Võ thuật", "Hành động","Game anime", "accoff"],
        price: "39.000",
        image: "images/narutostorm4.jpg",
        isHot: false
    },
    {
        name: "One Piece: Burning Blood",
        shortDescription: "Game đối kháng One Piece hấp dẫn.",
        genres: ["Võ thuật", "Hành động","Game anime", "accoff"],
        price: "49.000",
        image: "images/onepiceburningblood.jpg",
        isHot: false
    },
    {
        name: "Metaphor: ReFantazio Atlus 35th Digital Anniversary Edition",
        shortDescription: "Game nhập vai phong cách anime độc đáo.",
        genres: ["Nhập vai", "Phiêu lưu","Game anime", "accoff"],
        price: "69.000",
        image: "images/metaphor.jpg",
        isHot: false
    },
    {
        name: "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles",
        shortDescription: "Game hành động dựa trên anime Kimetsu no Yaiba.",
        genres: ["Hành động", "Võ thuật","Game anime", "accoff"],
        price: "49.000",
        image: "images/kimetsunoyaiba.jpg",
        isHot: false
    },
    {
        name: "Kingdom Come: Deliverance",
        shortDescription: "Game nhập vai lịch sử chân thực.",
        genres: ["Nhập vai", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/kingdomcome.jpg",
        isHot: false
    },
    {
        name: "Kingdom Come: Deliverance II",
        shortDescription: "Phần tiếp theo của game nhập vai lịch sử.",
        genres: ["Nhập vai", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/kingdomcome2.jpg",
        isHot: true
    },
    {
        name: "Persona 3 Reload Digital Premium Edition",
        shortDescription: "Phiên bản làm lại của Persona 3.",
        genres: ["Nhập vai", "Phiêu lưu", "accoff"],
        price: "59.000",
        image: "images/persona3reload.jpg",
        isHot: false
    },
    {
        name: "The Last of Us Part I",
        shortDescription: "Câu chuyện sinh tồn đầy cảm xúc.",
        genres: ["Hành động", "Phiêu lưu", "Kinh dị","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/thelastofus1.jpg",
        isHot: false
    },
    {
        name: "The Witcher 3: Wild Hunt",
        shortDescription: "Game nhập vai thế giới mở từng đoạt giải.",
        genres: ["Nhập vai", "Phiêu lưu", "Hành động","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/witcher3.jpg",
        isHot: false
    },
    {
        name: "Total War: THREE KINGDOMS Full DLC",
        shortDescription: "Chiến thuật thời Tam Quốc.",
        genres: ["Chiến thuật", "Mô phỏng", "accoff"],
        price: "69.000",
        image: "images/totalwarthreekingdoms.jpg",
        isHot: true
    },
    {
        name: "Forza Horizon 4",
        shortDescription: "Đua xe thế giới mở tại Anh.",
        genres: ["Đua xe", "Mô phỏng", "accoff"],
        price: "39.000",
        image: "images/forzahorizon4.jpg",
        isHot: false
    },
    {
        name: "Forza Horizon 5 Premium",
        shortDescription: "Đua xe thế giới mở tại Mexico.",
        genres: ["Đua xe", "Mô phỏng", "accoff"],
        price: "49.000",
        image: "images/forzahorizon5.jpg",
        isHot: true
    },
    {
        name: "Forza Horizon 5 Premium Online (Xbox)",
        shortDescription: "Phiên bản online cho Xbox.",
        genres: ["Đua xe", "Mô phỏng", "acconl"],
        price: "99.000",
        image: "images/forzahorizon5.jpg",
        isHot: true
    },
    {
        name: "Forza Horizon 5 Premium + Mail (Steam)",
        shortDescription: "Phiên bản Steam kèm mail gốc.",
        genres: ["Đua xe", "Mô phỏng", "acconl"],
        price: "579.000",
        image: "images/forzahorizon5.jpg",
        isHot: true
    },
    {
        name: "Devil May Cry 5",
        shortDescription: "Hành động chặt chém phong cách.",
        genres: ["Hành động","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/devilmaycry5.jpg",
        isHot: false
    },
    {
        name: "NieR: Automata",
        shortDescription: "Hành động nhập vai với cốt truyện sâu sắc.",
        genres: ["Hành động", "Nhập vai", "accoff"],
        price: "49.000",
        image: "images/nierautomata.jpg",
        isHot: false
    },
    {
        name: "EA SPORTS FC 25",
        shortDescription: "Game bóng đá mới nhất từ EA Sports.",
        genres: ["Thể thao", "accoff"],
        price: "59.000",
        image: "images/eafc25.jpg",
        isHot: true
    },
    {
        name: "Resident Evil 4 Remake",
        shortDescription: "Phiên bản làm lại của Resident Evil 4.",
        genres: ["Kinh dị", "Hành động","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/residentevil4.jpg",
        isHot: false
    },
    {
        name: "MiSide",
        shortDescription: "Game giải đố kinh dị độc đáo.",
        genres: ["Giải đố", "Kinh dị", "accoff"],
        price: "39.000",
        image: "images/miside.jpg",
        isHot: false
    },
    {
        name: "Car For Sale Simulator 2023",
        shortDescription: "Mô phỏng kinh doanh xe hơi.",
        genres: ["Mô phỏng", "accoff"],
        price: "29.000",
        image: "images/carforsale.jpg",
        isHot: false
    },
    {
        name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
        shortDescription: "Kinh dị sinh tồn trong vùng Chernobyl.",
        genres: ["Hành động", "Kinh dị", "Nhập vai", "accoff"],
        price: "59.000",
        image: "images/stalker2.jpg",
        isHot: false
    },
    {
        name: "Slitterhead",
        shortDescription: "Game kinh dị hành động mới lạ.",
        genres: ["Kinh dị", "Hành động", "accoff"],
        price: "49.000",
        image: "images/slitterhead.jpg",
        isHot: false
    },
    {
        name: "Tai Ương",
        shortDescription: "Game kinh dị Việt Nam.",
        genres: ["Kinh dị", "Giải đố", "accoff"],
        price: "19.000",
        image: "images/taiương.jpg",
        isHot: false
    },
    {
        name: "inZOI",
        shortDescription: "Mô phỏng cuộc sống chân thực.",
        genres: ["Mô phỏng", "accoff"],
        price: "39.000",
        image: "images/inzoi.jpg",
        isHot: true
    },
    {
        name: "Bleach: Rebirth of Souls",
        shortDescription: "Game đối kháng Bleach.",
        genres: ["Võ thuật", "Hành động", "accoff"],
        price: "49.000",
        image: "images/bleachrebirth.jpg",
        isHot: true
    },
    {
        name: "Assassin's Creed Black Flag",
        shortDescription: "Trở thành cướp biển sát thủ.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "29.000",
        image: "images/acblackflag.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Unity Ubisoft Online",
        shortDescription: "Phiên bản online của AC Unity.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "acconl"],
        price: "29.000",
        image: "images/acunity.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Unity Offline + DLC",
        shortDescription: "Phiên bản offline kèm DLC.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "29.000",
        image: "images/acunity.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Syndicate + Mail",
        shortDescription: "AC Syndicate kèm mail gốc.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "acconl"],
        price: "49.000",
        image: "images/acsyndicate.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Syndicate Offline",
        shortDescription: "Phiên bản offline của AC Syndicate.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "29.000",
        image: "images/acsyndicate.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Origins + Mail",
        shortDescription: "AC Origins kèm mail gốc.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "acconl"],
        price: "69.000",
        image: "images/acorgins.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Odyssey",
        shortDescription: "Phiêu lưu trong Hy Lạp cổ đại.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/acoddysey.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Valhalla Complete Edition",
        shortDescription: "Phiên bản đầy đủ của AC Valhalla.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/acvalhalla.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Mirage",
        shortDescription: "Trở về cội nguồn của Assassin's Creed.",
        genres: ["Hành Động","Phiêu Lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/acmirage.jpg",
        isHot: false
    },
    {
        name: "Assassin's Creed Shadows",
        shortDescription: "Phiêu lưu trong Nhật Bản phong kiến.",
        genres: ["Hành động", "Phiêu lưu","Nhập Vai","Sát thủ","Cốt truyện", "accoff"],
        price: "59.000",
        image: "images/assassinscreedshadow.jpg",
        isHot: true
    },
    {
        name: "Rise of the Ronin",
        shortDescription: "Hành động nhập vai samurai.",
        genres: ["Hành động", "Nhập vai","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/riseoftheronin.jpg",
        isHot: false
    },
    {
        name: "Split Fiction",
        shortDescription: "Giải đố co-op độc đáo.",
        genres: ["Phiêu lưu", "Giải đố","Game CO-OP", "accoff"],
        price: "49.000",
        image: "images/splitfiction.jpg",
        isHot: true
    },
    {
        name: "It Takes Two",
        shortDescription: "Phiêu lưu co-op vui nhộn.",
        genres: ["Phiêu lưu", "Giải đố","Game CO-OP", "accoff"],
        price: "39.000",
        image: "images/itakestwo.jpg",
        isHot: false
    },
    {
        name: "Like a Dragon: Infinite Wealth",
        shortDescription: "Hành động nhập vai Yakuza.",
        genres: ["Hành động", "Nhập vai", "accoff"],
        price: "49.000",
        image: "images/yakuza_likeadragon.jpg",
        isHot: false
    },
    {
        name: "Sniper Elite: Resistance",
        shortDescription: "Bắn tỉa chiến thuật.",
        genres: ["Hành động", "Chiến thuật", "accoff"],
        price: "39.000",
        image: "images/sniperresistance.jpg",
        isHot: false
    },
    {
        name: "Final Fantasy VII Rebirth",
        shortDescription: "Phần tiếp theo của Final Fantasy VII Remake.",
        genres: ["Nhập vai", "Hành động","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/finalfantasy7.jpg",
        isHot: true
    },
    {
        name: "Thần Trùng + Cỏ Máu",
        shortDescription: "Bộ đôi game kinh dị Việt Nam.",
        genres: ["Kinh dị", "Giải đố", "accoff"],
        price: "29.000",
        image: "images/thanhrungcomau.jpg",
        isHot: true
    },
    {
        name: "Baldur's Gate 3",
        shortDescription: "Game nhập vai chiến thuật đỉnh cao.",
        genres: ["Nhập vai", "Chiến thuật", "accoff"],
        price: "49.000",
        image: "images/baldursgate3.jpg",
        isHot: false
    },
    {
        name: "Far Cry Series",
        shortDescription: "Trọn bộ series Far Cry.",
        genres: ["Hành động", "Phiêu lưu", "accoff"],
        price: "89.000",
        image: "images/farcry.jpg",
        isHot: false
    },
    {
        name: "Shadow of the Tomb Raider",
        shortDescription: "Phiêu lưu cùng Lara Croft.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/tombraider.jpg",
        isHot: false
    },
    {
        name: "A Plague Tale: Innocence",
        shortDescription: "Câu chuyện sinh tồn thời trung cổ.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/aptInnocence.jpg",
        isHot: false
    },
    {
        name: "A Plague Tale: Requiem",
        shortDescription: "Phần tiếp theo của A Plague Tale.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/aptrequiem.jpg",
        isHot: false
    },
    {
        name: "Batman: Arkham Knight",
        shortDescription: "Trở thành Batman bảo vệ Gotham.",
        genres: ["Hành động", "Phiêu lưu","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/batmanarkhamknight.jpg",
        isHot: false
    },

    {
        name: "Into the Dead: Our Darkest Days",
        shortDescription: "Hành động sinh tồn zombie.",
        genres: ["Hành động", "Mô Phỏng","Chiến thuật", "accoff"],
        price: "39.000",
        image: "images/introthedead.jpg",
        isHot: false
    },
    {
        name: "Schedule I + Mod Online",
        shortDescription: "Mô phỏng lái xe tải.",
        genres: ["Hành động", "Mô Phỏng", "acconl"],
        price: "29.000",
        image: "images/schedule.jpg",
        isHot: true
    },
    {
        name: "Schedule I + Mail",
        shortDescription: "Mô phỏng lái xe tải kèm mail gốc.",
        genres: ["Hành động", "Mô Phỏng", "acconl"],
        price: "219.000",
        image: "images/schedule.jpg",
        isHot: true
    },
    {
        name: "WWE 2K25 ",
        shortDescription: "Game đấu vật WWE mới nhất.",
        genres: ["Mô Phỏng", "Thể thao", "accoff"],
        price: "49.000",
        image: "images/wwe2k25.jpg",
        isHot: true
    },
    {
        name: "Crusader Kings III",
        shortDescription: "Chiến thuật đại chiến thời trung cổ.",
        genres: ["Mô Phỏng", "Nhập Vai","Chiến Thuật", "accoff"],
        price: "39.000",
        image: "images/CrusaderKingsIII.jpg",
        isHot: false
    },
    {
        name: "Ark Survival Evolved + Mail",
        shortDescription: "Sinh tồn cùng khủng long kèm mail gốc.",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn", "acconl"],
        price: "49.000",
        image: "images/arkevoled.jpg",
        isHot: false
    },
    {
        name: "Ark Survival Evolved Offline + Full DLC",
        shortDescription: "Phiên bản offline kèm DLC.",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn", "accoff"],
        price: "49.000",
        image: "images/arkevoled.jpg",
        isHot: false
    },
    {
        name: "Ark Survival Ascended",
        shortDescription: "Phiên bản nâng cấp của Ark Survival.",
        genres: ["Hành động", "Phiêu Lưu", "Sinh tồn", "accoff"],
        price: "49.000",
        image: "images/arkascended.jpg",
        isHot: false
    },
    {
        name: "Euro Truck Simulator 2 Essentials + DLC",
        shortDescription: "Mô phỏng lái xe tải đường dài.",
        genres: ["Phiêu Lưu", "Mô Phỏng","Đua xe", "accoff"],
        price: "39.000",
        image: "images/eurotruck2.jpg",
        isHot: false
    },
    {
        name: "Ready or Not",
        shortDescription: "Hành động chiến thuật đội SWAT.",
        genres: ["Hành Động","Phiêu Lưu", "accoff"],
        price: "39.000",
        image: "images/readyornot.jpg",
        isHot: false
    },
    {
        name: "HITMAN World of Assassination + Full DLC",
        shortDescription: "Trở thành sát thủ chuyên nghiệp.",
        genres: ["Hành Động","Sát thủ", "accoff"],
        price: "59.000",
        image: "images/hitmanwoa.jpg",
        isHot: false
    },
    {
        name: "Poppy Playtime Full Chapter",
        shortDescription: "Kinh dị giải đố trong nhà máy đồ chơi.",
        genres: ["Hành Động","Kinh Dị","Giải đố", "accoff"],
        price: "49.000",
        image: "images/poppy.jpg",
        isHot: false
    },
    {
        name: "NBA 2k25",
        shortDescription: "Game bóng rổ NBA mới nhất.",
        genres: ["Mô Phỏng","Thể thao", "accoff"],
        price: "49.000",
        image: "images/nba2k25.jpg",
        isHot: false
    },
    {
        name: "NBA 2k25 + Mail",
        shortDescription: "NBA 2k25 kèm mail gốc.",
        genres: ["Mô Phỏng","Thể thao", "acconl"],
        price: "179.000",
        image: "images/nba2k25.jpg",
        isHot: false
    },
    {
        name: "Manor Lords",
        shortDescription: "Xây dựng và quản lý thành phố thời trung cổ.",
        genres: ["Mô Phỏng","Chiến thuật", "accoff"],
        price: "29.000",
        image: "images/manorlords.jpg",
        isHot: false
    },
    {
        name: "The Forest + Mail Gốc",
        shortDescription: "Sinh tồn trong rừng rậm kèm mail gốc.",
        genres: ["Sinh tồn","Hành động","Phiêu lưu", "acconl"],
        price: "29.000",
        image: "images/theforest.jpg",
        isHot: false
    },
    {
        name: "Sons Of The Forest + Mail",
        shortDescription: "Phần tiếp theo của The Forest kèm mail gốc.",
        genres: ["Sinh tồn","Hành động","Phiêu lưu", "acconl"],
        price: "169.000",
        image: "images/sotf.jpg",
        isHot: false
    },
    {
        name: "Sons Of The Forest Offline",
        shortDescription: "Phiên bản offline của Sons Of The Forest.",
        genres: ["Sinh tồn","Hành động","Phiêu lưu", "accoff"],
        price: "29.000",
        image: "images/sotf.jpg",
        isHot: false
    },
    {
        name: "Sleeping Dogs: Definitive Edition",
        shortDescription: "Hành động thế giới mở tại Hong Kong.",
        genres: ["Hành động","Phiêu lưu","Cốt truyện", "accoff"],
        price: "29.000",
        image: "images/sleepingdogs.jpg",
        isHot: false
    },
    {
        name: "Farming Simulator 25",
        shortDescription: "Mô phỏng nông trại mới nhất.",
        genres: ["Mô Phỏng","Chiến thuật", "accoff"],
        price: "39.000",
        image: "images/fs25.jpg",
        isHot: false
    },
    {
        name: "DAVE THE DIVER Deluxe Edition",
        shortDescription: "Phiêu lưu dưới đáy biển.",
        genres: ["Phiêu lưu","Mô phỏng", "accoff"],
        price: "39.000",
        image: "images/davethediver.jpg",
        isHot: false
    },
    {
        name: "Raft",
        shortDescription: "Sinh tồn trên bè giữa đại dương.",
        genres: ["Sinh tồn","Phiêu lưu", "accoff"],
        price: "29.000",
        image: "images/raft.jpg",
        isHot: false
    },
    {
        name: "Subnautica",
        shortDescription: "Khám phá thế giới dưới nước.",
        genres: ["Sinh tồn","Phiêu lưu", "accoff"],
        price: "29.000",
        image: "images/subnautica.jpg",
        isHot: false
    },
    {
        name: "Subnautica: Below Zero",
        shortDescription: "Phần tiếp theo của Subnautica.",
        genres: ["Sinh tồn","Phiêu lưu", "accoff"],
        price: "29.000",
        image: "images/subnautica.jpgzero.jpg",
        isHot: false
    },
    {
        name: "Mafia 1 + 2 + 3",
        shortDescription: "Trọn bộ series Mafia.",
        genres: ["Nhập vai","Phiêu lưu","Hành động","Cốt truyện", "accoff"],
        price: "69.000",
        image: "images/mafia.jpg",
        isHot: false
    },
    {
        name: "Mortal Kombat 1 Khaos Reigns Kollection",
        shortDescription: "Phiên bản đầy đủ của Mortal Kombat 1.",
        genres: ["Hành động", "accoff"],
        price: "69.000",
        image: "images/mortalkombat1.jpg",
        isHot: true
    },
    {
        name: "Football Manager 2024 + DLC In-game Editor",
        shortDescription: "Quản lý đội bóng yêu thích.",
        genres: ["Mô phỏng","Thể thao", "accoff"],
        price: "59.000",
        image: "images/fm2024dlc.jpg",
        isHot: false
    },
    {
        name: "Metro Exodus",
        shortDescription: "Hành động sinh tồn hậu tận thế.",
        genres: ["Hành động", "accoff"],
        price: "39.000",
        image: "images/metroexodus.jpg",
        isHot: false
    },
    {
        name: "Outlast",
        shortDescription: "Kinh dị sinh tồn góc nhìn thứ nhất.",
        genres: ["Hành động", "Kinh dị", "accoff"],
        price: "10.000",
        image: "images/outlast.jpg",
        isHot: false
    },
    {
        name: "Outlast 2",
        shortDescription: "Phần tiếp theo của Outlast.",
        genres: ["Hành động", "Kinh dị", "accoff"],
        price: "19.000",
        image: "images/outlast2.jpg",
        isHot: false
    },
    {
        name: "Sifu",
        shortDescription: "Hành động võ thuật kungfu.",
        genres: ["Hành động", "accoff"],
        price: "29.000",
        image: "images/sifu.jpg",
        isHot: false
    },
    {
        name: "Palworld",
        shortDescription: "Sinh tồn cùng quái vật đáng yêu.",
        genres: ["Hành động","Phiêu lưu","Sinh tồn", "accoff"],
        price: "39.000",
        image: "images/palworld.jpg",
        isHot: false
    },
    {
        name: "Palworld + Mail",
        shortDescription: "Palworld kèm mail gốc.",
        genres: ["Hành động","Phiêu lưu","Sinh tồn", "acconl"],
        price: "189.000",
        image: "images/palworld.jpg",
        isHot: false
    },
    {
        name: "Overcook 2 + Mail",
        shortDescription: "Nấu ăn co-op vui nhộn kèm mail gốc.",
        genres: ["Hành động","Game CO-OP", "acconl"],
        price: "99.000",
        image: "images/overcook2.jpg",
        isHot: false
    },
    {
        name: "Project Zomboid + Mail",
        shortDescription: "Sinh tồn trong thế giới zombie kèm mail gốc.",
        genres: ["Hành động","Sinh Tồn", "acconl"],
        price: "79.000",
        image: "images/projectzomboid.jpg",
        isHot: false
    },
    {
        name: "Project Zomboid",
        shortDescription: "Sinh tồn trong thế giới zombie.",
        genres: ["Hành động","Sinh Tồn", "accoff"],
        price: "39.000",
        image: "images/projectzomboid.jpg",
        isHot: false
    },
    {
        name: "Stardew Valley + Mail",
        shortDescription: "Mô phỏng nông trại thư giãn kèm mail gốc.",
        genres: ["Mô Phỏng","Game CO-OP", "acconl"],
        price: "79.000",
        image: "images/stardewvalley.jpg",
        isHot: false
    },
    {
        name: "Stardew Valley",
        shortDescription: "Mô phỏng nông trại thư giãn.",
        genres: ["Mô Phỏng","Game CO-OP", "accoff"],
        price: "29.000",
        image: "images/stardewvalley.jpg",
        isHot: false
    },
    {
        name: "R.E.P.O + Mod Online",
        shortDescription: "Hành động kinh dị co-op.",
        genres: ["Hành Động","Game CO-OP","Kinh Dị", "acconl"],
        price: "29.000",
        image: "images/repo.jpg",
        isHot: true
    },
    {
        name: "A Way Out + Mod Online",
        shortDescription: "Phiêu lưu co-op vượt ngục.",
        genres: ["Hành Động","Game CO-OP", "acconl"],
        price: "39.000",
        image: "images/awayout.jpg",
        isHot: false
    },
    {
        name: "Resident Evil 8 Village" ,
        shortDescription: "Kinh dị sinh tồn tại ngôi làng bí ẩn.",
        genres: ["Hành Động","Kinh Dị","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/re8.jpg",
        isHot: false
    },
    {
        name: "Days Gone" ,
        shortDescription: "Sinh tồn trong thế giới hậu tận thế.",
        genres: ["Hành Động","Kinh Dị","Sinh Tồn","Cốt truyện", "accoff"],
        price: "39.000",
        image: "images/daysgone.jpg",
        isHot: false
    },
    {
        name: "UNCHARTED: Legacy of Thieves Collection" ,
        shortDescription: "Phiêu lưu cùng Nathan Drake.",
        genres: ["Hành Động",'Phiêu Lưu',"Cốt truyện", "accoff"],
        price: "49.000",
        image: "images/uncharted4lotc.jpg",
        isHot: true
    },
    {
        name: "SCUM + Mail" ,
        shortDescription: "Sinh tồn khắc nghiệt kèm mail gốc.",
        genres: ["Hành Động",'Phiêu Lưu', "acconl"],
        price: "299.000",
        image: "images/scum.jpg",
        isHot: false
    },
    {
        name: "Path of Exile 2 + Mail" ,
        shortDescription: "Hành động nhập vai miễn phí kèm mail gốc.",
        genres: ["Hành Động",'Phiêu Lưu',"Nhập vai", "acconl"],
        price: "449.000",
        image: "images/poe2.jpg",
        isHot: false
    },
    {
        name: "Left 4 Dead 2 + Mail" ,
        shortDescription: "Bắn zombie co-op kinh điển kèm mail gốc.",
        genres: ["Hành Động","Game CO-OP", "acconl"],
        price: "49.000",
        image: "images/l4d.jpg",
        isHot: false
    },
    {
        name: "Hollow Knight" ,
        shortDescription: "Phiêu lưu trong thế giới côn trùng.",
        genres: ["Hành Động","Game CO-OP", "accoff"],
        price: "29.000",
        image: "images/HollowKnight.jpg",
        isHot: false
    },
    {
        name: "Cult of the Lamb" ,
        shortDescription: "Xây dựng giáo phái đáng yêu.",
        genres: ["Hành Động","Game CO-OP", "accoff"],
        price: "39.000",
        image: "images/cultofthelamp.jpg",
        isHot: false
    },
    {
        name: "Call of Duty : Modern Warfare (2007) + Modern Warfare 2 (2009)" ,
        shortDescription: "Bộ đôi Call of Duty kinh điển.",
        genres: ["Hành Động","Bắn súng", "accoff"],
        price: "39.000",
        image: "images/cod20072009.jpg",
        isHot: false
    },
    {
        name: "Call of Duty: Black Ops I" ,
        shortDescription: "Chiến tranh lạnh trong Call of Duty.",
        genres: ["Hành Động","Bắn súng", "accoff"],
        price: "39.000",
        image: "images/codb1.jpg",
        isHot: false
    },
    {
        name: "Call of Duty: Black Ops II + III" ,
        shortDescription: "Bộ đôi Black Ops.",
        genres: ["Hành Động","Bắn súng", "accoff"],
        price: "49.000",
        image: "images/codbo23.jpg",
        isHot: false
    },

    {
        name: "Call of Duty: WWII" ,
        shortDescription: "Chiến tranh thế giới thứ hai.",
        genres: ["Hành Động","Bắn súng", "accoff"],
        price: "39.000",
        image: "images/codwwii.jpg",
        isHot: false
    },
    {
        name: "Call of Duty: Modern Warfare Remastered" ,
        shortDescription: "Phiên bản làm lại của Modern Warfare.",
        genres: ["Hành Động","Bắn súng", "accoff"],
        price: "49.000",
        image: "images/codmwr.jpg",
        isHot: false
    },

];
