function StepReview({ formMethods }) {
  const { watch } = formMethods;
  const values = watch();
  return (
    <div>
      <h1>Review Your Application</h1>
      <p>
        <strong>Name:</strong>
        {values.fullName}
      </p>
      <p>
        <strong>Email:</strong> {values.email}
      </p>
      <p>
        <strong>Experience:</strong>
      </p>
      <ul className="review-list">
        {values.experience?.map((exp, index) => (
          <li key={index}>
            {exp.role} - {exp.company}
          </li>
        ))}
      </ul>

      <p>
        <strong>Resume:</strong>
        {values.resume?.[0]?.name || "No File Selected"}
      </p>
    </div>
  );
}

export default StepReview;
