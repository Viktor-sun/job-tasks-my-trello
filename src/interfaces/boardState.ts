export interface IBoardState {
  title: string;
  error: string | null;
  columns: { id: string; title: string; todo: string }[];
}
