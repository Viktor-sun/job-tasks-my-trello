export interface IBoardState {
  boardsDetails: { title: string; bgColor: string };
  columns: { id: string; title: string }[];
  cards: { id: string; title: string; owner: string }[];
  error: string | null;
}
