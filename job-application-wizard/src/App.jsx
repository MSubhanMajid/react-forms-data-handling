import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import applicationSchema from "./schemas/applicationSchema";
import StepPersonalInfo from "./components/StepPersonalInfo";
import StepExperience from "./components/StepExperience";
import StepResume from "./components/StepResume";
import StepReview from "./components/StepReview";

const steps = ["Personal Info", "Experience", "Resume", "Review"];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const formMethods = useForm({
    resolver: yupResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      experience: [{ company: "", role: "" }],
    },
  });

  const { handleSubmit, trigger } = formMethods;

  async function goNext() {
    let fieldsToValidate = [];
    if (currentStep === 0) fieldsToValidate = ["fullName", "email"];
    if (currentStep === 1) fieldsToValidate = ["experience"];
    if (currentStep === 2) fieldsToValidate = ["resume"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep((step) => step + 1);
  }

  function goBack() {
    setCurrentStep((step) => step - 1);
  }

  function onSubmit(data) {
    console.log("Final Application Data : ", data);
    alert("Application submitted! Check the console.");
  }
  return (
    <div className="wizard-card">
      <h1>Job Application</h1>
      <p className="step-indicator">
        Step {currentStep + 1} of {steps.length} : {steps[currentStep]}
      </p>

      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`progress-segment ${index <= currentStep ? "completed" : ""}`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 0 && <StepPersonalInfo formMethods={formMethods} />}
        {currentStep === 1 && <StepExperience formMethods={formMethods} />}
        {currentStep === 2 && <StepResume formMethods={formMethods} />}
        {currentStep === 3 && <StepReview formMethods={formMethods} />}

        <div className="nav-buttons">
          {currentStep > 0 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={goBack}
            >
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button type="button" className="btn btn-primary" onClick={goNext}>
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
