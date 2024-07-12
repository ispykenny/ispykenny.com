'use client';
import { ActionButton } from '@/components';
import FormElements from '@/components/Elements/FormElements';
import { useState } from 'react';

export const ContactForm = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [hasErrors, setHasErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmission = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const { ...values } = Object.fromEntries(formData.entries());
    try {
      const doSubmission = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const response = await doSubmission.json();

      if (response.errors) {
        setHasErrors(response.errors);
      }

      if (response.success) setHasSent(true);
      setFormSubmitting(false);
    } catch (error) {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="contactForm">
      {!hasSent ? (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col justify-center gap-5"
        >
          <FormElements.Input
            type="text"
            name="name"
            label="First & Last Name"
            errors={hasErrors?.name}
          />
          <FormElements.Input
            type="email"
            name="email"
            label="Email Address"
            errors={hasErrors?.email}
          />
          <FormElements.TextArea
            name="message"
            label="Message"
            errors={hasErrors?.message}
          />

          <div>
            <ActionButton
              text={formSubmitting ? 'Submitting...' : 'Submit'}
              theme="primary"
              type="submit"
              disabled={formSubmitting}
            />
          </div>
        </form>
      ) : (
        <>
          <p className="text-lg font-bold text-center">
            Your submission has successfully been sent!
          </p>
        </>
      )}
    </div>
  );
};
