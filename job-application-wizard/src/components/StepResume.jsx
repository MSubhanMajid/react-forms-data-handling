function StepResume({ formMethods }) {
  const {
    register,
    formState: { errors },
  } = formMethods;
  return (
    <div className="form-field">
      <label>Upload Resume (PDF)</label>
      <input type="file" accept=".pdf" {...register("resume")} />
      {errors.resume && <p className="error-text">{errors.resume.message}</p>}
    </div>
  );
}

export default StepResume;
