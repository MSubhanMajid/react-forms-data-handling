import { useFieldArray } from "react-hook-form";

function StepExperience({ formMethods }) {
  const {
    register,
    control,
    formState: { errors },
  } = formMethods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  // console.log("fields:", fields);

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="experience-row">
          <div className="form-field">
            <label>Company</label>
            <input {...register(`experience.${index}.company`)} />
            {errors.experience?.[index]?.company && (
              <p className="error-text">
                {errors.experience[index].company.message}
              </p>
            )}
          </div>

          <div className="form-field">
            <label>Role</label>
            <input {...register(`experience.${index}.role`)} />
            {errors.experience?.[index]?.role && (
              <p className="error-text">
                {errors.experience[index].role.message}
              </p>
            )}
          </div>

          {fields.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="add-btn"
        onClick={() => append({ company: "", role: "" })}
      >
        + Add Experience
      </button>

      {errors.experience?.message && (
        <p className="error-text">{errors.experience.message}</p>
      )}
    </div>
  );
}

export default StepExperience;
