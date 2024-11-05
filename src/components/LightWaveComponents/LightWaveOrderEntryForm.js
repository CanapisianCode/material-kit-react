import { useState, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

const LightWaveOrderEntryForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: 0,
    servicePlan: "",
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const validationSchema = Yup.object().shape({
    customerName: Yup.string().required("Customer Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    product: Yup.string().required("Product is required"),
    quantity: Yup.number().min(1, "Quantity must be at least 1").required("Quantity is required"),
    servicePlan: Yup.string().required("Service Plan is required"),
    paymentMethod: Yup.string().required("Payment Method is required"),
    cardNumber: Yup.string().required("Card Number is required"),
    expirationDate: Yup.string().required("Expiration Date is required"),
    cvv: Yup.string().required("CVV is required"),
    // Add validation schema for other fields
  });

  const bgImageStyle = useMemo(
    () => ({
      backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${bgImage})`,
      backgroundSize: "cover", // Added property to cover the entire container
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    []
  );

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      customerName: "",
      email: "",
      phone: "",
      address: "",
      product: "",
      quantity: 0,
      servicePlan: "",
      paymentMethod: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
  };

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          ...bgImageStyle,
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      />
      <MKBox px={1} mt={5} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={11} md={11} lg={8} xl={8}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                Asadsd
                p={2}
              >
                <MKTypography color="white" variant="h4" align="center" fontWeight={"medium"}>
                  Order Form
                </MKTypography>
              </MKBox>
              <MKBox mx={2} align="center">
                <Formik
                  initialValues={formData}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div>
                      <label htmlFor="servicePlan">Service Plan:</label>
                      <Field as="select" name="servicePlan" id="servicePlan">
                        <option value="">Select Service Plan</option>
                        <option value="Bronze">Bronze Plan</option>
                        <option value="Silver">Silver Plan</option>
                        <option value="Gold">Gold Plan </option>
                        <option value="Platinum">Platinum Plan </option>
                      </Field>
                      <ErrorMessage name="servicePlan" component="div" />
                    </div>
                    <div>
                      <label htmlFor="product">Product:</label>
                      <Field as="select" name="product" id="product">
                        <option value="">Select Product</option>
                        <option value="FiberCable">Fiber cable</option>
                        <option value="WifiExtender">Wifi Extender</option>
                        <option value="product3">pordu 3</option>
                      </Field>

                      <ErrorMessage name="product" component="div" />
                    </div>
                    <div>
                      <label htmlFor="quantity">Quantity:</label>
                      <Field type="number" name="quantity" id="quantity" />
                      <ErrorMessage name="quantity" component="div" />
                    </div>
                    <div>
                      <label htmlFor="Name">Name:</label>
                      <Field type="text" name="Name" id="Name" />
                      <ErrorMessage name="Name" component="div" />
                    </div>

                    <div>
                      <label htmlFor="email">Email:</label>
                      <Field type="email" name="email" id="email" />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone:</label>
                      <Field type="tel" name="phone" id="phone" />
                      <ErrorMessage name="phone" component="div" />
                    </div>
                    <div>
                      <label htmlFor="address">Address:</label>
                      <Field as="textarea" name="address" id="address" />
                      <ErrorMessage name="address" component="div" />
                    </div>
                    <div>
                      <label htmlFor="product">Product:</label>
                      <Field as="select" name="product" id="product">
                        <option value="">Select Product</option>
                        <option value="FiberCable">Fiber cable</option>
                        <option value="WifiExtender">Wifi Extender</option>
                        <option value="product3">Product 3</option>
                      </Field>
                      <ErrorMessage name="product" component="div" />
                    </div>
                    <div>
                      <label htmlFor="quantity">Quantity:</label>
                      <Field type="number" name="quantity" id="quantity" />
                      <ErrorMessage name="quantity" component="div" />
                    </div>
                    <div>
                      <label htmlFor="paymentMethod">Payment Method:</label>
                      <Field as="select" name="paymentMethod" id="paymentMethod">
                        <option value="">Select Payment Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Bank Transfer</option>
                      </Field>
                      <ErrorMessage name="paymentMethod" component="div" />
                    </div>

                    <div>
                      <label htmlFor="cardNumber">Card Number:</label>
                      <Field type="text" name="cardNumber" id="cardNumber" />
                      <ErrorMessage name="cardNumber" component="div" />
                    </div>

                    <div>
                      <label htmlFor="expirationDate">Expiration Date:</label>
                      <Field type="text" name="expirationDate" id="expirationDate" />
                      <ErrorMessage name="expirationDate" component="div" />
                    </div>

                    <div>
                      <label htmlFor="cvv">CVV:</label>
                      <Field type="text" name="cvv" id="cvv" />
                      <ErrorMessage name="cvv" component="div" />
                    </div>

                    <button type="submit">Submit</button>
                  </Form>
                </Formik>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
};

export default LightWaveOrderEntryForm;
