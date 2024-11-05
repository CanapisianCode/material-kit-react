import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import { usersEndpoint } from "../../axios/usersEndpoint.js";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ onLoginSuccess }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleLoginFormSubmit = async (values) => {
    setSubmitting(true);
    try {
      await usersEndpoint.login(values.username, values.password);
      onLoginSuccess();
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <MKBox p={{ width: "100%" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card sx={{ p: 1 }}>
            <MKBox mb={3} display="flex" justifyContent="center">
              <MKTypography variant="h5">Sign in to your account</MKTypography>
            </MKBox>
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLoginFormSubmit}
            >
              {(formikProps) => (
                <Form>
                  <Field
                    as={TextField}
                    id="username"
                    name="username"
                    label="Username"
                    fullWidth
                    margin="normal"
                    error={formikProps.touched.username && Boolean(formikProps.errors.username)}
                    helperText={formikProps.touched.username && formikProps.errors.username}
                  />

                  <Field
                    as={TextField}
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    error={formikProps.touched.password && Boolean(formikProps.errors.password)}
                    helperText={formikProps.touched.password && formikProps.errors.password}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting || formikProps.isSubmitting}
                  >
                    Log In
                  </Button>
                </Form>
              )}
            </Formik>
            <MKBox display="flex" justifyContent="space-between" alignItems="center">
              <MuiLink component="button" variant="body2" sx={{ textTransform: "none" }}>
                Forgot Password?
              </MuiLink>
            </MKBox>
            <MKBox display="flex" justifyContent="center" mt={3}>
              <MKButton
                variant="contained"
                color="default"
                startIcon={<GoogleIcon />}
                sx={{ textTransform: "none" }}
              >
                Sign in with Google
              </MKButton>
            </MKBox>
          </Card>
        </Grid>
      </Grid>
    </MKBox>
  );
};

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
