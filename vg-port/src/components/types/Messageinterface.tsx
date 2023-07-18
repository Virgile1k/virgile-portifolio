export interface Message {
    id: string;
    subject: string; 
    body: string;
    sender: string;
    date: string; 
    read?: boolean;
  }