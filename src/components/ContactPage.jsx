import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
