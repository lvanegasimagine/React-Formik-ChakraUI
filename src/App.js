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
import Loginformdos from "./components/Loginformdos";
import Loginformuno from "./components/Loginformuno";

export default function App() {
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
    <>
      {/* <Loginformuno /> */}
      <Loginformdos />
    </>
  );
}
