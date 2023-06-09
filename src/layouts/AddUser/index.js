// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { addUsers } from "../../Redux/Actions";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { createUser } from "Redux/userAction";
import { useNavigate } from "react-router-dom/dist";
import { updateUser } from "Redux/userAction";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { useNavigate } from "react-router-dom/dist";

function Cover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editUser = useSelector((state) => state.userList.editUser);
  console.log("User data", editUser);
  debugger;
  let initialValues = null;

  if (editUser != undefined) {
    debugger;
    initialValues = {
      id: editUser[0].id,
      name: editUser[0].name,
      email: editUser[0].email,
      password: editUser[0].password,
      agreeTerms: editUser[0].agreeTerms,
    };
  } else {
    initialValues = {
      id: Date.now(),
      name: "",
      email: "",
      password: "",
      agreeTerms: false,
    };
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    agreeTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = (values, { resetForm }) => {
    debugger;
    console.log(values);
    if (editUser != undefined) {
      dispatch(updateUser(values));
      navigate("/userList");
      alert("Successfully Updated");
    } else {
      //debugger;
      dispatch(createUser(values));
      navigate("/userList");
    }
    resetForm();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <CoverLayout image={bgImage}> */}
      {/* <BasicLayout> */}
      <Card style={{ marginTop: "30px" }}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          Add User Info
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="name"
                  type="text"
                  label="Name"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="name"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field
                  name="email"
                  type="email"
                  label="Email"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="email"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field
                  name="password"
                  type="password"
                  label="Password"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field name="agreeTerms" type="checkbox" as={Checkbox} />
                <Field
                  name="agreeTerms"
                  component={MDTypography}
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </Field>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="info"
                  textGradient
                >
                  Terms and Conditions
                </MDTypography>
                <ErrorMessage
                  name="agreeTerms"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <MDButton
                  type="submit"
                  variant="gradient"
                  color="info"
                  fullWidth
                  enable={isSubmitting}
                >
                  Submit
                </MDButton>
              </Form>
            )}
          </Formik>
        </MDBox>
      </Card>
      {/* </BasicLayout> */}
      {/* </CoverLayout> */}
    </DashboardLayout>
  );
}

export default Cover;
