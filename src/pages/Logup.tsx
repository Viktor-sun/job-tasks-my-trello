import FormLogup from "../components/FormLogup";
import Layout from "../components/Layout";

interface IProps {
  titleText?: string;
}

const Logup = ({ titleText }: IProps) => {
  return (
    <Layout withTitle titleText={titleText}>
      <FormLogup />
    </Layout>
  );
};

export default Logup;
