import * as yup from "yup";

const applicationSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  experience: yup
    .array()
    .of(
      yup.object({
        company: yup.string().required("Company name is required"),
        role: yup.string().required("Role is required"),
      }),
    )
    .min(1, "Add Atleast one Work Experience"),

  resume: yup
    .mixed()
    .test(
      "required",
      "Resume is Required",
      (value) => value && value.length > 0,
    ),
});

export default applicationSchema;
