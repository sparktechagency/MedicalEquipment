// types.ts
export interface LocateBusinessData {
    name: string;
    contactName: string;
    location: string;
    rating: number;
    image: string;
    photos: string[];
    buttons: string[];
  }
  

export  interface MetaData {
    title: string;
    description: string;
    keywords: string[];
  }

 export interface AuctionItem {
    id: number;
    name: string;
    location: string;
    price: string;
    imageUrl: string;
    timeRemaining: string;
    bids: string;
    Categories: string;
    type: string;
  }