const { v4: uuidv4 } = require("uuid");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("journeys", [
      {
        id: uuidv4(),
        title: "The Langham, Sydney",
        description:
          "After landing at the airport (coming from the sunshine coast) we were a little lost on how to work with the public transport. We soon realised that easily enough the train had a straight-line route to where we were",
        writer: "Veb",
        image: "http://localhost:3001/images/journey-1.png",
        createdAt: "2021-06-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "48 hours in London",
        description:
          "Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...",
        writer: "Oni-on",
        image: "http://localhost:3001/images/journey-2.png",
        createdAt: "2021-07-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Besenandung di senja kuta",
        description:
          "Sang bagaskara sudah beberapa menit lalu berangkat ke peraduannya di ufuk sebelah barat. aku meninggalkan pantai kuta meski pengujung yang menikmati sunset masih belum berkurang, bahkan ...",
        writer: "Rizky",
        image: "http://localhost:3001/images/journey-3.png",
        createdAt: "2021-08-22 05:04:32",
      },
      {
        id: uuidv4(),
        title: "Bersemayam di tanah Dewata",
        description:
          "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
        writer: "Cipto",
        image: "http://localhost:3001/images/journey-4.png",
        createdAt: "2021-09-22 05:04:32",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("journeys", {}, null);
  },
};
