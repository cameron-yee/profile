import React, {
  ChangeEvent,
  ForwardedRef,
  HTMLProps,
  forwardRef,
  useEffect,
  useRef
} from "react";

import { Button } from "../components";


function setLocalStorage(name: string, value: string): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(`contact-${name}`, value);
};

function clearLocalStorageItem(key: string): void {
  window.localStorage.removeItem(key);
}

function clearLocalStorage(): void {
  const keys: string[] = ["contact-Name", "contact-Email", "contact-Message"];

  keys.forEach((key: string) => clearLocalStorageItem(key));
}

const Input = forwardRef((
  { id, label, name, ...rest }: HTMLProps<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className="w-full md:w-96">
      <label className="block text-sm mt-5" htmlFor={id}>{label}</label>
      <input
        className="bg-tan w-full block mt-1 rounded-lg p-2 outline-none focus:ring-4 focus:ring-navy shadow hover:shadow-sm hover:bg-white focus:bg-white transition-all duration-300 ease-in-out"
        id={id}
        name={name}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          if (name) {
            setLocalStorage(name, e.target.value);
          }
        }}
        ref={ref}
        {...rest}
      />
    </div>
  )
});

const TextArea = forwardRef(({ id, label, name, ...rest }: HTMLProps<HTMLTextAreaElement>, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className="w-full md:w-96">
      <label className="block text-sm mt-5" htmlFor={id}>{label}</label>
      <textarea
        className="bg-tan w-full block mt-1 rounded-lg p-2 outline-none focus:ring-4 focus:ring-navy shadow hover:shadow-sm hover:bg-white focus:bg-white transition-all duration-300 ease-in-out"
        id={id}
        name={name}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
          if (name) {
            setLocalStorage(name, e.target.value);
          }
        }}
        ref={ref}
        {...rest}
      />
    </div>
  )
});

export function ContactForm(): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initialName: string | null = window.localStorage.getItem("contact-Name");
    const initialEmail: string | null = window.localStorage.getItem("contact-Email");
    const initialMessage: string | null = window.localStorage.getItem("contact-Message");

    if (initialName && nameRef?.current) nameRef.current.value = initialName;
    if (initialEmail && emailRef?.current) emailRef.current.value = initialEmail;
    if (initialMessage && messageRef?.current) messageRef.current.value = initialMessage;
  }, []);

  return (
    <form
      action="/success"
      className="w-full md:w-auto flex flex-col"
      data-netlify="true"
      method="POST"
      name="contact"
      netlify-honeypot="honey"
    >
      <input
        className="h-0"
        id="honey"
        name="honey"
        type="text"
      />
      <Input
        id="name"
        label="Name"
        name="Name"
        type="text"
        required
        ref={nameRef}
      />
      <Input
        id="email"
        label="Email"
        name="Email"
        type="email"
        required
        ref={emailRef}
      />
      <TextArea
        id="message"
        label="Message"
        name="Message"
        required
        ref={messageRef}
        rows={5}
      />
      <Button
        className="mt-8"
        onClick={clearLocalStorage}
        type="submit"
      >
        Send
      </Button>
    </form>
  );
};
