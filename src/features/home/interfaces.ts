export interface PostInterface {
    id: number;
    body: string;
    tags: string[];
    title: string;
  }

  export interface PaginationInterface {
   limit: number;
   total: number;
   page: number;
 }