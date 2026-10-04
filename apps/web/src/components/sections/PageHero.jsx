import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, Photo } from "../ui/index.js";

// Interior page hero. `title` is a string or an array of lines; every line
// after the first is wrapped in the sky-blue accent, as in the approved design.
export function PageHero({
  label,
  title,
  text,
  img,
  alt = "",
  dark = false,
  simple = false,
  parent = false,
  action = null,
  visual = null
}) {
  const lines = Array.isArray(title) ? title : [title];
  const heading =
    lines.length < 2 ? (
      lines[0]
    ) : (
      <>
        {lines[0]}
        <br />
        <span className="page-hero-accent">
          {lines.slice(1).map((line, index) => (
            <Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </span>
      </>
    );

  const copy = (
    <div>
      <Eyebrow>{label}</Eyebrow>
      <h1>{heading}</h1>
      <p className="lead">{text}</p>
      {action}
    </div>
  );

  return (
    <section className={`page-hero${dark ? " dark" : ""}${simple ? " simple" : ""}`}>
      <div className="wrap">
        <p className="breadcrumb">
          <Link to="/">Home</Link> &nbsp; / &nbsp;{" "}
          {parent && (
            <>
              <Link to="/healthcare">Healthcare Businesses</Link> &nbsp; / &nbsp;{" "}
            </>
          )}
          {label}
        </p>
        {simple ? (
          copy
        ) : (
          <div className="page-hero-grid">
            {copy}
            {visual ?? <Photo file={img} alt={alt} className="page-hero-image" eager />}
          </div>
        )}
      </div>
    </section>
  );
}
