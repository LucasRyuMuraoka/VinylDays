import { createServer } from "miragejs";

const server = createServer({
  routes() {
      this.namespace = "api"
			
      this.get("/albums", () => {
          return [
            {
              id: 1,
              title: "Wherever You Go",
              artist: "Alok",
              price: "1.900",
              oldPrice: "2.959",
              image: "https://cdns-images.dzcdn.net/images/cover/c3b03212c7229ca14837573973eeb632/500x500.jpg",
              category: {
                id: 4,
                title: "Pop"
              }
            },
            {
              id: 2,
              title: "Headlights",
              artist: "Alok & Alan Waker",
              price: "900",
              oldPrice: "1.000",
              image: "https://i.pinimg.com/736x/c7/a7/6d/c7a76df3c7355d67a079a4b2a6fd131f.jpg",
              category: {
                id: 4,
                title: "Pop"
              }
            },
            {
              id: 3,
              title: "Love Again",
              artist: "Alok",
              price: "2.000",
              oldPrice: "2.000",
              image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/43/ab/3243ab33-c174-c084-fbbf-34389707e3ba/8445162313018.jpg/1200x1200bb.jpg",
              category: {
                id: 4,
                title: "Pop"
              }
            },
            {
              id: 4,
              title: "Finally Rich",
              artist: "Chief Keef",
              price: "1.950",
              oldPrice: "2.000",
              image: "https://media.pitchfork.com/photos/5929c17eea9e61561daa7dbd/1:1/w_450%2Cc_limit/20581ba3.jpg",
              category: {
                id: 1,
                title: "Rap"
              }
            },
            {
              id: 5,
              title: "Avisa lá",
              artist: "Mc Kevinho, Mc Hariel, Mc Ryan SP, Kayblack e Kyan",
              price: "3.000",
              oldPrice: "3.000",
              image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fe/fb/0a/fefb0a5a-520a-6b83-d238-2a4602649ffe/192641840456_Cover.jpg/1200x1200bb.jpg",
              category:{
                id: 11,
                title: "Funk"
              }
            },
            {
              id: 6,
              title: "Appetite for Destruction",
              artist: "Guns and Roses",
              price: "3.000",
              oldPrice: "3.000",
              image: "https://vinyl-records.nl/hard-rock/photo-gallery/guns-n-roses/appetite-for-destruction/guns-roses-appetite-destruction-1601.jpg",
              category: {
                id: 8,
                title: "Rock"
              }
            },
            {
              id: 7,
              title: "Happier",
              artist: "Marshmello & Bastille",
              price: "2.000",
              oldPrice: "2.000",
              image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Marshmello_and_Bastille_Happier.png",
              category: {
                id: 4,
                title: "Pop"
              }
            },
            {
              id: 8,
              title: "The 50 great pieces of classic music",
              artist: "Antony and Curtis",
              price: "900",
              oldPrice: "900",
              image: "https://pub-static.fotor.com/assets/projects/pages/0b1c30fc-9b32-4ea4-ae4d-c323d0936a59/600w/black-classic-music-album-e3e9233e-ebb8-4b9b-bc00-d68bcbfe7fc5.jpg",
              category: {
                id: 10,
                title: "Classic Music"
              }
            },
          ]
      });
  }
});

export { server };
