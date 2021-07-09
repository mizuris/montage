import React from "react";
import { Button } from "react-bootstrap";
import { IoIosMail } from "react-icons/io";

function MailToButton({ email, subject = "", body = "" }) {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <Button
      className="ml-2"
      variant="outline-success"
      size="sm"
      as="a"
      href={`mailto:${email}${params}`}
    >
      <IoIosMail /> Wyślij zgłoszenie
    </Button>
  );
}

export default MailToButton;
