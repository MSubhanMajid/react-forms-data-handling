function StepPersonalInfo({ formMethods }) {
  const {
    register,
    formState: { errors },
  } = formMethods;
  return (
    <div>
      <div className="form-field">
        <label>Full Name</label>
        <input {...register("fullName")} />
        {errors.fullName && (
          <p className="error-text">{errors.fullName.message}</p>
        )}
      </div>

      <div className="form-field">
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>
    </div>
  );
}

export default StepPersonalInfo;
