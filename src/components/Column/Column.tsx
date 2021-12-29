interface IProps {
  title: string;
}

const Column = ({ title }: IProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <button type="button">add card</button>
    </div>
  );
};

export default Column;
