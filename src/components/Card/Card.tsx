interface IProps {
  title: string;
}

const Card = ({ title }: IProps) => {
  return <li>{title}</li>;
};

export default Card;
