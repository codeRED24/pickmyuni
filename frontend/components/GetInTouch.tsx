"use client";

import React from "react";
import ContactWrapper from "./modal/contact-wrapper";

function GetInTouch() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <button
        onClick={() => setOpen(true)}
        className="mt-8 px-8 py-3 bg-white border-2 border-orange-500 text-brand-secondary font-semibold rounded-lg hover:bg-brand-secondary hover:text-white transition-colors"
      >
        Get in touch with us today and make your university transfer journey
        smooth and successful!
      </button>
      <ContactWrapper open={open} onOpenChange={setOpen} />
    </div>
  );
}

export default GetInTouch;
