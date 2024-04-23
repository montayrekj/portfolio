import { useState } from "react";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Button from "./Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-screen-sm text-center mx-auto mt-14" id="contact">
      <h2 className="text-4xl font-semibold">Let's work together</h2>
      <span>Open to full time, remote jobs or freelance projects</span>
      <div className="flex flex-col py-12 gap-4 max-w-[450px] mx-auto">
        <TextInput
          name="name"
          placeholder="Your name"
          value={name}
          setValue={setName}
        />
        <TextInput
          name="email"
          placeholder="Your email"
          value={email}
          setValue={setEmail}
        />
        <Textarea
          name={message}
          placeholder="Your message"
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
