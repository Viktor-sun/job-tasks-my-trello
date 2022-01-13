export interface IBoardState {
  boardsDetails: { title: string; bgColor: string };
  columns: { id: string; title: string }[];
  cards: {
    id: string;
    title: string;
    owner: string;
    summary: string;
    date: Date;
    status: string;
    reporter: string;
    description: string;
    label: string;
    priority: string;
  }[];
  labels: string[];
}
