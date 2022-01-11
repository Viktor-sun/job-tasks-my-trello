import styled from "styled-components";

const CustomSelect = ({ options, ...props }: any) => (
  <Select {...props}>
    {options.map((value: string) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    ))}
  </Select>
);

const Select = styled.select`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
`;

const Option = styled.option`
  margin: 5px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.backgroundOption};
`;

export default CustomSelect;
