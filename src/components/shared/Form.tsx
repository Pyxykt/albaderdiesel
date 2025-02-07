import React from "react";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <div className="">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="grid gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="flex flex-wrap gap-2">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="px-3 py-2 border h-10 w-full"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="px-3 py-2 border h-10 w-full"
            />
          </div>
        </div>
        {/* message area */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="px-3 py-2 border h-24 w-full"
          ></textarea>
        </div>
        {/* submit button */}
        <Button
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
