import React, { useRef, useState } from "react";

import { Box, Typography, Button, TextField } from "@mui/material";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get("from_name"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      message: formData.get("message"),
    };

    fetch("https://react-contact-template.vercel.app/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setStatus("Email sent successfully!");
        } else {
          setStatus("Error sending email, debug more.");
        }
      })
      .catch((error) => {
        console.error(
          "error sending email:",
          error.response ? error.response.body : error.message
        );
      });
  };

  return (
    <>
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{ maxWidth: 600, mx: "auto", mt: 5 }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us!
        </Typography>
        {/* <form ref={form} onSubmit={sendEmail} className="p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="from_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Phone
          </label>
          <input type="tel" name="telephone" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-3 text-center">
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
        {status && <div className="alert alert-info text-center">{status}</div>}
      </form> */}

        <TextField
          label="Name"
          name="from_name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="telephone"
          type="tel"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        {status && (
          <div className="alert alert-info text-center">
            <p>{status}</p>
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Send"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </Box>
      <Typography>
        <p>
          <code>
            {`
         curl -X POST https://yourdomain.com/send-email \ `}
          </code>
        </p>
        <p>
          <code>{`-H "Content-Type: application/json" \ `} </code>
        </p>
        <p>
          <code>
            {`-d '{"from_name":"Test User","email":"test@example.com","telephone":"12345","message":"Hello!"}'
        `}
          </code>
        </p>
      </Typography>
    </>
  );
}

export default Contact;
