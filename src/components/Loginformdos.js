import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../hooks/TextField";

const Loginformdos = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username is required")
          .min(6, "username is too short"),
        password: Yup.string()
          .required("password is required")
          .min(6, "password is too short")
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "90%", md: 500 }}
          h="100vh"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <Heading>Sign Up Hooks Formik</Heading>
          <TextField
            name="username"
            label="User Name"
            placeholder="Enter User Name"
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
          />

          <Button type="submit" colorScheme="blue">
            Enviar
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Loginformdos;
