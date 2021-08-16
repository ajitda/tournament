// / simple text input
import { CInput, CFormGroup, CLabel, CSelect } from "@coreui/react";
import { ErrorMessage } from "formik";
export const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <CFormGroup className={`customInputDiv ${props?.topClass}`}>
      {props.label && <CLabel className="label">{props.label}</CLabel>}
      <CInput
        invalid={touched[field.name] && errors[field.name]}
        {...field}
        {...props}
        className={`textInput ${props?.inputClassName}`}
      ></CInput>
      <ErrorMessage name={field.name} className="errorText">
        {(msg) => <div className="errorText">{msg} </div>}
      </ErrorMessage>
    </CFormGroup>
  );
};

// selectinput
export const SelectInput = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <CFormGroup className={`customInputDiv ${props?.topClass}`}>
      {props.label && <CLabel className="label">{props.label}</CLabel>}
      <CSelect
        custom
        name="select"
        id="select"
        invalid={touched[field.name] && errors[field.name]}
        {...field}
        {...props}
        className={`textInput ${props?.inputClassName}`}
      >
        {props?.options?.map((item, index) => (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        ))}
      </CSelect>

      <ErrorMessage name={field.name} className="errorText">
        {(msg) => <div className="errorText">{msg} </div>}
      </ErrorMessage>
    </CFormGroup>
  );
};
