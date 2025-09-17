// types.ts
export interface FeedMessage {
  id: string;
  user: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  liked?: boolean;
}

export const sampleFeed: FeedMessage[] = [
  {
    id: "1",
    user: "Mikko",
    avatar: "https://i.pravatar.cc/40?img=1",
    time: "1 h",
    content: "Rukoillaan yhdessä tänään klo 18!",
    liked: false,
  },
  {
    id: "2",
    user: "Liisa",
    avatar: "https://i.pravatar.cc/40?img=2",
    time: "2 h",
    content: "Nuorten raamattupiiri onnistui hyvin, kiitos kaikille osallistuneille!",
    liked: false,
  },
  {
    id: "3",
    user: "Juha",
    avatar: "https://i.pravatar.cc/40?img=3",
    time: "3 h",
    content: "Pyhä Laulu -ilta ensi viikon perjantaina, tervetuloa!",
    liked: false,
  },
  {
    id: "4",
    user: "Anna",
    avatar: "https://i.pravatar.cc/40?img=4",
    time: "4 h",
    content: "Lähetetään rukouspyyntö Turun nuorille 😊",
    liked: false,
  },
  {
    id: "5",
    user: "Petri",
    avatar: "https://i.pravatar.cc/40?img=5",
    time: "5 h",
    content: "Hyvää viikonloppua kaikille!",
    liked: false,
  },
  {
    id: "6",
    user: "Sari",
    avatar: "https://i.pravatar.cc/40?img=6",
    time: "6 h",
    content: "Haluaisitko liittyä rukousryhmään?",
    liked: false,
  },
  {
    id: "7",
    user: "Teemu",
    avatar: "https://i.pravatar.cc/40?img=7",
    time: "7 h",
    content: "Jumalan siunausta kaikille!",
    liked: false,
  },
  {
    id: "8",
    user: "Maria",
    avatar: "https://i.pravatar.cc/40?img=8",
    time: "8 h",
    content: "Käytiin mukava retki yhdessä ystävien kanssa.",
    liked: false,
  },
  {
    id: "9",
    user: "Janne",
    avatar: "https://i.pravatar.cc/40?img=9",
    time: "9 h",
    content: "Raamattupiirissä tänään keskusteltiin Johanneksen evankeliumista.",
    liked: false,
  },
  {
    id: "10",
    user: "Laura",
    avatar: "https://i.pravatar.cc/40?img=10",
    time: "10 h",
    content: "Kiitos kaikille, jotka osallistuivat eilen pidettyyn tapahtumaan!",
    liked: false,
  },
];

// types.ts
export interface Event {
  id: string;
  title: string;
  type: string; // <-- Add this
  date: string;
  place: string;
  image: string;
}

