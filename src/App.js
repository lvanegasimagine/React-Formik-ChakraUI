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
  return (
    <>
      {/* <Loginformuno /> */}
      <Loginformdos />
    </>
  );
}
