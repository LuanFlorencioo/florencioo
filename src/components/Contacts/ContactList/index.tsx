"use client";

import { contacts } from "@/data";
import Contact from "./contact";

export default function ContactList() {
  return (
    <ul className="w-full max-w-max flex flex-col gap-8">
      {
        contacts.map(({ icon, label, value}, i) => (
          <Contact
            key={i}
            icon={icon}
            label={label}
            value={value}
          />
        ))
      }
    </ul>
  )
}
