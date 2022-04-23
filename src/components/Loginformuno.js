import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Loginformuno = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(6, "username is too short"),
      password: Yup.string()
        .required("password is required")
        .min(6, "password is too short")
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    }
  });
  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="100vh"
      justifyContent="center"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <Heading>Sign Up</Heading>
      <FormControl
        isInvalid={formik.errors.username && formik.touched.username}
      >
        <FormLabel>User Name </FormLabel>
        <Input
          name="username"
          placeholder="Enter username"
          {...formik.getFieldProps("username")} // Opcion 1 - llama a todas las props (handleChange, value, handleBlur, etc)
        />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={formik.errors.password && formik.touched.password}
      >
        <FormLabel>Password </FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </VStack>
  );
};

export default Loginformuno;
