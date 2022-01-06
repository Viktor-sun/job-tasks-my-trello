import styled from "styled-components";
import {
  Input,
  InputError,
  Textarea,
  Select,
  Option,
} from "../../assets/styles/styledComponents";

export const CustomInputComponent = ({
  field,
  form: { touched, errors },
  ...props
}: any) => (
  <>
    <Input {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <InputError>{errors[field.name]}</InputError>
    )}
  </>
);

export const CustomTexareaComponent = ({
  field,
  form: { touched, errors },
  ...props
}: any) => (
  <>
    <Textarea {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <InputError>{errors[field.name]}</InputError>
    )}
  </>
);

export const CustomSelectComponent = (props: any) => (
  <Select {...props}>
    {props.options.map((value: string) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    ))}
  </Select>
);

export const CustomColorSelect = ({ field, ...props }: any) => (
  <ContainerColor>
    <InputColor {...field} {...props} type="color" />

    <SelectColor {...field} {...props}>
      {props.options.map((value: string) => (
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
