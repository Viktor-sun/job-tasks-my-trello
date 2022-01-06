export interface IBoardState {
  boardsDetails: { title: string; bgColor: string };
  columns: { id: string; title: string }[];
  cards: {
    id: string;
    title: string;
    owner: string;
    summary: string;
    status: string;
    reporter: string;
    description: string;
    label: string;
    priority: string;
  }[];
  colors: string[];
  error: string | null;
}
