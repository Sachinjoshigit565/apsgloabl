import emailjs from "@emailjs/browser";

export const sendQuoteEmail = async (formData: any) => {
  return emailjs.send(
    "service_a4e9fus",
    "template_s8n3vq9",
    {
      firstName: formData.firstName,
      lastName: formData.lastName,
      type: formData.type,
      company: formData.company,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      email: formData.email,
      phone: formData.phone,
      services: formData.services?.join(", "),
    },
    "YbQZmjXpyZt7nUyv5"
  );
};