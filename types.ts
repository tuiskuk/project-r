// types.ts
export interface FeedMessage {
  likeCount: number;
  id: string;
  user: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likedByUser?: boolean;
  userId: string;
  commentCount: number;
  repostCount: number;
}



// types.ts
export interface Event {
  id: string;
  title: string;
  type: string; // <-- Add this
  date: string;
  place: string;
  image: string;
}

