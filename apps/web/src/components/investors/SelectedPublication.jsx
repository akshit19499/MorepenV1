import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { publications } from "@morepen/shared";
import { Eyebrow, ExtLink } from "../ui/index.js";

// "?publication=<id>" deep link from the Home updates band: the matching record is
// summarised above the KPIs, scrolled to the centre of the viewport and focused.
export function SelectedPublication() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("publication");
  const publication = id ? publications.find((item) => item.id === id) : undefined;
  const boxRef = useRef(null);

  useEffect(() => {
    if (!publication) return undefined;
    // Runs after the router's scroll-to-top so the box ends up centred, as in the prototype.
    const frame = requestAnimationFrame(() => {
      const box = boxRef.current;
      if (!box) return;
      box.focus({ preventScroll: true });
      box.scrollIntoView({ block: "center", behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [publication]);

  return (
    <div
      id="selected-publication"
      className="selected-publication"
      hidden={!publication}
      tabIndex={publication ? -1 : undefined}
      ref={boxRef}
    >
      {publication && (
        <>
          <Eyebrow>Selected publication</Eyebrow>
          <h3>{publication.title}</h3>
          <p>
            {publication.date} · {publication.description}
          </p>
          <ExtLink href={publication.url} className="btn small">
            Open official document
          </ExtLink>
          <p className="small-note">
            The source document opens in a new tab. The official investor archive remains below.
          </p>
        </>
      )}
    </div>
  );
}
