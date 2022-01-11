import styled from "styled-components";
import InputError from "../InputError";

const CustomInput = ({ field, form: { touched, errors }, ...props }: any) => (
  <>
    <Input {...field} {...props} />
    <InputError touched={touched} errors={errors} field={field} />
  </>
);

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default CustomInput;
