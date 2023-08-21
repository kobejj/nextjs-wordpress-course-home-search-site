import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input/Input";

export const FormspreeForm = ({ formId }) => {
  console.log("Form Id:  ", formId);

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
      <label htmlFor="email">Email Address</label>
      <Input id="email" type="email" name="email" className="mt-2" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="border-2 border-slate-400 p-1 hover:border-slate-500 mt-4"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button type="submit" disabled={state.submitting} className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};
