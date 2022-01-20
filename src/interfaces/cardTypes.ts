export interface ICard {
  _id: string;
  title: string;
  boardId: string;
  owner: string;
  summary: string;
  date: Date;
  status: string;
  reporter: string;
  description: string;
  label: string;
  priority: string;
}
