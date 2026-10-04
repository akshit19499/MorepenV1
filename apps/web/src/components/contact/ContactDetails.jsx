import { Fragment } from "react";
import { corporateOffice, externalLinks } from "@morepen/shared";
import { supportChannels } from "../../content/contact.js";
import { Eyebrow, ExtLink } from "../ui/index.js";

// Left column of the Contact page: intro copy, addresses and the support band.
export function ContactDetails() {
  return (
    <div>
      <Eyebrow>Connect with the right team</Eyebrow>
      <h2>
        Start with
        <br />
        your requirement.
      </h2>
      <p>
        API sourcing, development and manufacturing programs, quality documentation, and Medical Devices, Rx or OTC
        business enquiries.
      </p>
      <p>The more we understand about the stage and intended market, the more focused the initial discussion can be.</p>
      <div className="contact-address">
        <h3>CDMO business enquiries</h3>
        <p>
          <a href={`mailto:${corporateOffice.cdmoEmail}`}>{corporateOffice.cdmoEmail}</a>
          <br />
          For non-confidential CDMO business enquiries.
        </p>
        <h3>Corporate office</h3>
        <p>
          {corporateOffice.name}
          {corporateOffice.addressLines.map((line) => (
            <Fragment key={line}>
              <br />
              {line}
            </Fragment>
          ))}
        </p>
        <p>
          <a href={corporateOffice.phone.href}>{corporateOffice.phone.label}</a>
          <br />
          <a href={`mailto:${corporateOffice.email}`}>{corporateOffice.email}</a>
        </p>
        <ExtLink href={externalLinks.contact}>Official contact directory</ExtLink>
      </div>
      <div className="support-band">
        {supportChannels.map((channel, index) => (
          <Fragment key={channel.title}>
            <p style={index > 0 ? { marginTop: 20 } : undefined}>
              <strong>{channel.title}</strong>
              <br />
              {channel.text}
            </p>
            <ExtLink href={channel.href}>{channel.label}</ExtLink>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
