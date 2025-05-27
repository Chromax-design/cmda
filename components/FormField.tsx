import { FormFieldType } from "@/data/types";
import React from "react";

const FormField = ({ type, placeholder, error, register }: FormFieldType) => {
  const baseStyle = `border border-white/20 px-6 py-3.5 outline-0 font-open-Sans placeholder:capitalize placeholder:text-white text-sm placeholder:tracking-wider w-full`;

  if (type === "text") {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className={`${baseStyle} rounded-full`}
          {...register}
        />
        {error && (
          <span className="text-xs font-open-Sans tracking-wider">
            {error.message}
          </span>
        )}
      </div>
    );
  }
  return (
    <div>
      <textarea
        placeholder="your message"
        className={`${baseStyle} min-h-50 rounded-xl`}
        {...register}
      ></textarea>
      {error && (
        <span className="text-xs font-open-Sans tracking-wider">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
