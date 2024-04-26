import { useEffect, useState } from "react";
import Button from "./Button";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { BeatLoader } from "react-spinners";

const textInputClass =
  "dark:bg-black bg-white border border-gray-600 px-4 py-1 rounded-lg placeholder:text-sm placeholder:text-gray-500 w-full";
const textareaClass =
  "dark:bg-black bg-white border border-gray-600 px-4 py-1 rounded-xl placeholder:text-sm placeholder:text-gray-500 w-full";
const errorClass = "text-xs text-red-600 absolute bottom-[-18px] pl-1";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setFormSent(sessionStorage.getItem("contact_form_sent") === "true");
  }, []);

  const onSubmit = async (data: FieldValues) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setFormSent(true);
      sessionStorage.setItem("contact_form_sent", "true");
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-screen-sm text-center mx-auto mt-14" id="contact">
        <h2 className="text-4xl font-semibold">Let's work together</h2>
        <p>Open to full time, remote jobs or freelance projects</p>
        <p className="text-sm text-gray-500">
          Email me at{" "}
          <a
            className="text-gray-400 font-semibold"
            href="mailto:contact@montayrekj.dev"
          >
            contact@montayrekj.dev
          </a>{" "}
          or send a message below.
        </p>
        <div className="flex flex-col py-12 gap-6 max-w-[500px] mx-auto">
          <div className="flex justify-between [&_input]:w-full gap-4">
            <div className="flex flex-col flex-1 items-start relative">
              <input
                type="text"
                className={textInputClass}
                placeholder="Full name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your full name",
                  },
                })}
              />
              {errors.name && (
                <span className={errorClass}>
                  {errors.name?.message?.toString()}
                </span>
              )}
            </div>
            <div className="flex flex-col flex-1 items-start relative">
              <input
                type="text"
                className={textInputClass}
                placeholder="Email"
                {...register("email", {
                  required: { value: true, message: "Please enter your email" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className={errorClass}>
                  {errors.email?.message?.toString()}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col flex-1 items-start relative">
            <input
              type="text"
              className={textInputClass}
              placeholder="Subject"
              {...register("subject", {
                required: { value: true, message: "Please enter a subject" },
              })}
            />
            {errors.subject && (
              <span className={errorClass}>
                {errors.subject?.message?.toString()}
              </span>
            )}
          </div>
          <div className="flex flex-col flex-1 items-start relative">
            <textarea
              className={textareaClass}
              placeholder="Message"
              rows={6}
              {...register("message", {
                required: { value: true, message: "Please enter your message" },
              })}
            />
            {errors.message && (
              <span className={errorClass}>
                {errors.message?.message?.toString()}
              </span>
            )}
          </div>
          {!formSent && (
            <Button
              label={
                !isSubmitting ? (
                  "Send message"
                ) : (
                  <div className="flex items-center justify-center">
                    <BeatLoader
                      size="12"
                      className="dark:[&_span]:!bg-gray-300 [&_span]:!bg-black"
                    />
                  </div>
                )
              }
              variant="secondary"
              type="submit"
              className="w-40 text-sm"
            />
          )}
          {formSent && (
            <p className=" text-darkblue dark:text-lightblue">
              Thank you for getting in touch with me!
              <br /> We'll reach out to you as soon as possible.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
