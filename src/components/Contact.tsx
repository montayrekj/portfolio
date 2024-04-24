import { useState } from "react";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Button from "./Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
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
      <div className="flex flex-col py-12 gap-4 max-w-[450px] mx-auto">
        <div className="flex justify-between [&_input]:flex-1 gap-4">
          <TextInput
            name="name"
            placeholder="Full name"
            value={name}
            setValue={setName}
          />
          <TextInput
            name="email"
            placeholder="Email address"
            value={email}
            setValue={setEmail}
          />
        </div>
        <TextInput
          name="subject"
          placeholder="Subject"
          value={subject}
          setValue={setSubject}
        />
        <Textarea
          name={message}
          placeholder="Message"
          value={message}
          setValue={setMessage}
          rows={6}
        />
        <Button
          label="Send message"
          variant="secondary"
          onClick={() => {}}
          className="w-40 text-sm"
        />
      </div>
    </div>
  );
}
