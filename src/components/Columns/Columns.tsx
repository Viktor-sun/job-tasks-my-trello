import { useSelector } from "react-redux";
import styled from "styled-components";
import Column from "../Column";
import { boardSelectors } from "../../redux/selectors";

const Columns = () => {
  const columns = useSelector(boardSelectors.getColumns);

  return (
    <ColumnsWrapper>
      {columns.map((column) => (
        <Column key={column.id} id={column.id} title={column.title} />
      ))}
    </ColumnsWrapper>
  );
};

const ColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Columns;
