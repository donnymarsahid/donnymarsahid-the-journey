const { v4: uuidv4 } = require("uuid");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("journeys", [
      {
        id: uuidv4(),
        title: "The Langham, Sydney",
        description:
          "After landing at the airport (coming from the sunshine coast) we were a little lost on how to work with the public transport. We soon realised that easily enough the train had a straight-line route to where we were,Afternoon tea aficionados may bask at the beautiful environs at Alice, the grand dining emporium; those familiar with the Artesian at The Langham, London – recognized as the World’s Best Bar for several years – will delight in knowing that its latest outpost will be at the dazzling rooftop of The Langham, Jakarta where the best views of the sunsets can be enjoyed with signature cocktails.Featuring 223 guest rooms including the splendid and elegantly appointed 336-square metre Presidential Suite, The Langham is strategically located within the prestigious new complex of District 8 at SCBD (Sudirman Central Business District) with easy access and close proximity to the city’s most important financial, cultural and entertainment centres.The Langham Club lounge on the hotel’s 59th floor will be a private and luxurious haven for guests who prefer a discerning level of comfort with panoramic and unobstructed views of Jakarta City. There is a writer’s corner, a reading library and private arrival and departure facilitates with dedicated butlers for personalized service Chuan Spa will provide treatments inspired by Traditional Chinese Medicine (TCM) philosophies in a serene, meditative setting. The 670 square metre (7,211 square foot) spa will offer private treatment rooms as well as a fully-equipped fitness centre and Jakarta’s highest indoor infinity pool with spectacular views of the city. The Langham, Jakarta will be the new iconic venue for social events, weddings, high-level conferences and luxury product launches. Featuring more than 2,100 square metres of flexible space, including a magnificent 688 square metre ballroom and a beautiful outdoor garden, there are an additional eleven meeting rooms which can be configured for events of different sizes. Guests who wish to be among the first to stay or hold their event at The Langham. level of comfort with panoramic and unobstructed views of Jakarta City. There is a writer’s corner, a reading library and private arrival and departure facilitates with dedicated butlers for personalized service Chuan Spa will provide treatments inspired by Traditional Chinese Medicine (TCM) philosophies in a serene, meditative setting. The 670 square metre (7,211 square foot) spa will offer private treatment rooms as well as a fully-equipped fitness centre and Jakarta’s highest indoor infinity pool with spectacular views of the city. The Langham, Jakarta will be the new iconic venue for social events, weddings, high-level conferences and luxury product launches. Featuring more than 2,100 square metres of flexible space, including a magnificent 688 square metre ballroom and a beautiful outdoor garden, there are an additional eleven meeting rooms which can be configured for events of different sizes. Guests who wish to be among the first to stay or hold their event we were a little lost on how to work with the public transport. We soon realised that easily enough the train had a straight-line route to where we were,Afternoon tea aficionados may bask at the beautiful environs at Alice, the grand dining emporium; those familiar with the Artesian at The Langham, London – recognized as the World’s Best Bar for several years – will delight in knowing that its latest outpost will be at the dazzling rooftop of The Langham, Jakarta where the best views of the sunsets can be enjoyed with signature cocktails.Featuring 223 guest rooms including the splendid and elegantly appointed 336-square metre Presidential Suite, The Langham is strategically located within the prestigious new complex of District 8 at SCBD (Sudirman Central Business District) with easy access and close proximity to the city’s most important financial, cultural and entertainment centres.The Langham Club lounge on the hotel’s 59th floor will be a private and luxurious haven for guests who prefer a discerning.",
        writer: "Veb",
        image: "http://localhost:3001/images/journey-1.png",
        createdAt: "2021-06-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "48 hours in London",
        description:
          "Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell. During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port. As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex. During the ninth century, the town suffered numerous Viking attacks. As a consequence, Danish settlers established themselves in the area, encouraging trade and opening businesses in the town, transforming it into the first urban centre of England. The town’s wealth and power attracted the Danish Great Heathen Army, which besieged the city until it was captured by King Alfred the Great in 886.  In 1067, following the Norman invasion and conquering of England, the city's existing rights, laws and privileges were established by the newly crowned King of England, William Duke of Normandy. The Tower of London was built during William's reign. In 1199, King John reinforced the city's self-government, and in 1215 the city could elect a different mayor every year.For many years, England had no capital city. However, the institutions of central government were moved to Westminster, close to London. This and the rise of trade in the area were two decisive factors in London's emergence as the capital of England. London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on The city of London was founded by the Romans and their rule extended from 43 AD to the fifth century AD, when the Empire fell. During the third century, Londinium, the name given to the town by the Romans, had a population of 50,000, mainly due to the influence of its major port.As a consequence of repeated Anglo-Saxon invasions during the fifth century, Londinium declined and during the eighth century it became the capital of the Kingdom of Essex. During the ninth century, the town suffered numerous king attacks. As a consequence, Danish settlers established themselves in the area, encouraging trade and opening busises in the town, transforming it into the first urban centre of England. The town’s wealth and power attracted the Danish Great Heathen Army, which besieged the city until it was captured by King Alfred the Great in 886. In 1067, following the Norman invasion and conquering of England, the city's existing rights, laws and privileges were established by the newly crowned King of England, William Duke of Normandy. The Tower of London was built during William's reign.In 1199, King John reinforced the city's self-government, and in 1215 the city could",
        writer: "Oni-on",
        image: "http://localhost:3001/images/journey-2.png",
        createdAt: "2021-07-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Besenandung di senja kuta",
        description:
          "Sang bagaskara sudah beberapa menit lalu berangkat ke peraduannya di ufuk sebelah barat. aku meninggalkan pantai kuta meski pengujung yang menikmati sunset masih belum berkurang, bahkan, Pantai yang terletak di sebelah selatan Kota Denpasar dan tidak jauh dari Bandar Udara I Gusti Ngurah Rai ini memberikan pesonanya sendiri bagi traveler.Pantai Kuta sering juga disebut sebagai pantai matahari terbenam. Tidak heran banyak turis asing maupun lokal yang mulai sore hari sudah memadati Pantai Kuta hanya untuk menikmati matahari terbenam di sini.Pukul 17.00 WITa saya langkahkan kaki dari tempat saya menginap di daerah Legian. Perjalanan dari tempat saya menginap ke Pantai Kuta hanya memakan waktu kurang lebih 10 menit.Setibanya di sana saya mencoba mencari spot untuk menikmati senja. Masih banyak aktivitas para turis asing maupun lokal di pantai kuta, seperti berselancar, berenang atau sekadar membasahi kaki untuk merasakan air pantai di sana seperti yang saya lakukan.Pukul 17.30 WITa sampai dengan pukul 18.15 WITa, saya duduk di atas pasir Pantai Kuta sambil memotret setiap menit yang berlalu dari rentang waktu tersebut untuk mendapatkan gambar senja yang terbaik. Sungguh karunia Tuhan begitu indah, senja saat itu sedang cantik-cantiknya.Bagi saya menikmati senja setidaknya dapat menghilangkan penat dari rutinitas kantor dan mampu menenangkan perasaan dan pikiran. Julukan bahwa Pantai Kuta adalah pantai matahari terbenam memang tepat, tidak sia-sia saya mengagendakan jadwal untuk menikmati senja di sana.Bagi traveler yang sedang atau akan berlibur ke Bali, jangan lupa untuk meluangkan waktu menikmati senja di Pantai Kuta. Karena pantai ini akan memberi suguhan dan pesona yang tak akan terlupakan, sekejap tapi begitu melekat.",
        writer: "Rizky",
        image: "http://localhost:3001/images/journey-3.png",
        createdAt: "2021-08-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Bersemayam di tanah Dewata",
        description:
          " Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan. Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan.. Setelah tiba di hotel saya beristirahat dengan suasana beda dengan ditempat saya tinggal desa rejomulyo, dibali benar penuh dengan tradisi adatnya.Pagi itu,  cuaca sangat cerah mentari bersinar terang dan lalu lalang kendaraan bermotor telah menghiasi jalanan kota Singaraja. Saya pun bersiap-siap untuk memulai mengunjungi tempat-tempat yang indah di Bali. Pertama yang saya kunjungi adalah Pura Ulun Danu Beratan.  Pura ini terletak di desa Candi Kuning,  Nedugul Tabanan Bali Konten ini telah tayang di Kompasiana.com dengan judul,Cerita Saya, Menikmati Indahnya Pulau Dewata Bali",
        writer: "Cipto",
        image: "http://localhost:3001/images/journey-4.png",
        createdAt: "2021-09-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Meet President Ecualize",
        description:
          " My best travel story is from a time I was in a small city called Salinas on the south coast of Ecuador. I was just hanging with a local friend and surfing every day before I started to head. Diary is a personal journey towards ourselves. When people want to unburden one’s heart and share their happiness and sadness, they can share with the diary which is the best friend. We tell everything to our diary. We love our diary. That’s why we usually address our diary as “Dear Diary”. We tell our wonderful story as sincerely. Our diary includes our thoughts, our dreams and especially our emotions. It contains our memories, our friends, what we eat, what we drink, what the places we visit, our goals, our ideals, briefly all the details about our lives. Thus, all the memories we recorded on our journey are saved from being lost. Keeping a diary is a way to say to our brain “this is important to me.” like the sentences we highlight while reading a book. Every detail which we live in is important to us and writing things that are significant makes it easier for us to remember. So, our memories are not lost. Isn’t it great that our memories which are telling don’t disappear? After all, they have been said, words fly away, writings remain.",
        writer: "Dane",
        image: "http://localhost:3001/images/journey-5.png",
        createdAt: "2021-05-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "My Birthday In A Private Castle",
        description:
          " A travel story I want to share is from Czechia. Imagine exiting a train in the middle of the rural Czech countryside somewhere 90 minutes east of Prague, dragging your bag down a lonely dirt road—with.While we keep a diary, we can buy a notebook and give it a name. For example, 2018 Winter Season. Thus, we can classify our diaries. When we want to open and read later, this naming makes our job easier and enables us to find the memories that we want to reach easily. It helps us to organize information in a meaningful way and to reach information more quickly with the help of categories. Classifying has always been a method that facilitates our work while looking for information. When we want to go back in our memories and take a stroll in our memories, it helps us to find the way easily.",
        writer: "Chris",
        image: "http://localhost:3001/images/journey-6.png",
        createdAt: "2021-04-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Beautiful Travel Friendship",
        description:
          " I’ve been in Playa del Carmen, Mexico for a few weeks now for my divemaster training. I spent every day in the water with customers and my instructor. I loved it! We shared the boat with anothe, of Prague, dragging your bag down a lonely dirt road—with.While we keep a diary, we can buy a notebook and give it a name. For example, 2018 Winter Season. Thus, we can classify our diaries. When we want to open and read later, this naming makes our job easier and enables us to find the memories that we want to reach easily. It helps us to organize information in a meaningful way and to reach information more quickly with the help of categories. Classifying has always been a method that facilitates our work while looking for information. When we want to go back in our memories and take a stroll in our memories, it helps us to find the way easily.",
        writer: "Chronic",
        image: "http://localhost:3001/images/journey-7.png",
        createdAt: "2021-03-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Adventure With A Strange",
        description:
          " One of my best travel experience stories was when I went on a romantic road trip with a guy, who I only met once for 5 minutes at a party in the South of France, In addition, use the Logg app, where you can do all these steps. Create your story with the help of categories then record your memories and share them privately or publicly. Search and filter to reach your memories. Browse your stats when you want to take a stroll in your memories. Thus, they’ll be all at their fingertips. minutes at a party in the South of France, In addition, use the Logg app, where you can do all these steps. Create your story with the help of categories then record your memories and share them privately or minutes at a party in the South of France, In addition, use the Logg app, where you can do all these steps. Create your story with the help of categories then record your memories and share them",
        writer: "Merlin",
        image: "http://localhost:3001/images/journey-8.png",
        createdAt: "2021-02-22 05:04:32",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("journeys", {}, null);
  },
};
