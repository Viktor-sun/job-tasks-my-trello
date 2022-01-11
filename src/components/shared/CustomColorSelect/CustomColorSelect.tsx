import styled from "styled-components";

const CustomColorSelect = ({ options, ...props }: any) => (
  <ContainerColor>
    <InputColor {...props} type="color" />

    <SelectColor {...props}>
      {options.map((value: string) => (
        <OptionColor key={value} value={value} bgColor={value} />
      ))}
    </SelectColor>
  </ContainerColor>
);

const ContainerColor = styled.div`
  display: flex;
`;

const InputColor = styled.input`
  width: 80%;
`;

const SelectColor = styled.select`
  width: 20%;
`;

type TProps = {
  bgColor?: string;
};

const OptionColor = styled.option<TProps>`
  background-color: ${(props) => props.bgColor};
  width: 50px;
  height: 30px;
  border-radius: 3px;
`;

export default CustomColorSelect;
