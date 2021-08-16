import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import AxiosBase from "../../../config/AxiosBase";
import Swal from "sweetalert2";
import history from "../../../config/history";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { SelectInput, TextInput } from "../../../components/inputs";
import { Select } from "@material-ui/core";

const CreateTournament = () => {
  // loading
  const [loading, setLoading] = useState(false);

  const tournamentValidation = Yup.object().shape({
    mode: Yup.string().required("Please select any mode"),
    startTime: Yup.date().required("Please enter valid time"),
    scoring: Yup.string().required("Please enter scoring"),
    prize: Yup.number().required("Please select any valid prize value"),
  });

  // onsubmiting form
  const handleSubmit = async (formData) => {
    const localDate = new Date(formData.startTime);
    var pstDate = localDate.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const postData = { ...formData, startTime: pstDate };

    console.log(postData);
    setLoading(true);
    const token = localStorage.adminToken;
    try {
      await AxiosBase.post("/tournament", postData, {
        headers: {
          "x-access-token": token,
        },
      });
      Swal.fire({
        title: "Tournament Created successfully!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: error?.response?.data?.message,
        icon: "error",
      });
    }
    setLoading(false);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>Create Tournament</h1>
                <Formik
                  initialValues={{
                    mode: "solo",
                    startTime: "",
                    scoring: "",
                    prize: "",
                  }}
                  validationSchema={tournamentValidation}
                  onSubmit={handleSubmit}
                >
                  <Form className="mt-4 ">
                    <Field
                      name="mode"
                      component={SelectInput}
                      options={[
                        { value: "solo", text: "Solo" },
                        { value: "duo", text: "Duo" },
                        { value: "trio", text: "Trios" },
                      ]}
                      label="Mode"
                    />
                    <Field
                      name="startTime"
                      component={TextInput}
                      type="datetime-local"
                      label="Start Time"
                    />

                    <Field
                      name="scoring"
                      component={TextInput}
                      placeholder="Enter Scoring of Tournament"
                      type="text"
                      label="Scoring"
                    />
                    <Field
                      name="prize"
                      component={TextInput}
                      placeholder="Enter Prize of Tournament"
                      type="number"
                      label="Prize"
                    />

                    <div className="mt-5">
                      <CButton
                        disabled={loading}
                        type="submit"
                        color="success"
                        block
                      >
                        Create Tournament
                      </CButton>
                    </div>
                  </Form>
                </Formik>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default CreateTournament;
