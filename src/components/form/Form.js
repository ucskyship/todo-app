import React from "react";
import "../form/Form.css";
import Input from '../inputs/Input'

const Form = ({data}) => {
  return (
    <form>
      < Input data={data} />
    </form>
  );
};

export default Form;
