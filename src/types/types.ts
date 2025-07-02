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
   _id: number;
   title: string;
   author: {
     address: string;
   };
   price: string;
   images: string;
   date:Date;
   Categories: string;
   type: string;
 }



  export interface Category {
    _id: string;
    name: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    images: string;
  }