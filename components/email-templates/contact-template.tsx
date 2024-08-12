import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  details: string;
}

export const ContactEmailAdminTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, email, details }) => (
  <div>
    <p>
      Somebody has used the ACCESS FORM on the /acess page from the website.
      Details below:
    </p>
    <p>User name: {name}</p>
    <p>User email address: {email}</p>
    <p>
      User message: <br />
      {details}
    </p>
  </div>
);
