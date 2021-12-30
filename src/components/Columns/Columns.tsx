import { useSelector } from "react-redux";
import styled from "styled-components";
import shortid from "shortid";
import Column from "../Column";
import { boardSelectors } from "../../redux/selectors";

const Columns = () => {
  const columns = useSelector(boardSelectors.getColumns);

  return (
    <ColumnsWrapper>
      {columns.map((column) => (
        <Column key={shortid.generate()} id={column.id} title={column.title} />
      ))}
    </ColumnsWrapper>
  );
};

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default Columns;
