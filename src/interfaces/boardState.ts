export interface IBoardState {
  title: string;
  error: string | null;
  columns: { id: string; title: string }[];
  cards: { id: string; title: string; owner: string }[];
}
