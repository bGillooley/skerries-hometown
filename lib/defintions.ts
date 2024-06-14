export type Event = {
  id: string;
  title: string;
  category: string;
  content: string | undefined | null;
  address: string;
  eventDate: Date;
  eventTime: string | undefined | null;
  venue: string;
  linkUrl?: string | null;
  linkDesc?: string | null;
  published: boolean;
  authorId: string | null;
};

export type User = {
  id: string;
};

export type EventForm = {
  id: string;
  title: string;
  category: string;
  content: string;
  address: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  linkUrl?: string;
  linkDesc?: string;
};
