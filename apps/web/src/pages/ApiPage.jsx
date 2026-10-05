import { useCallback, useRef, useState } from "react";
import { apiListUrl } from "@morepen/shared";
import { ApiBackbone, ApiExplorer, ApiProofLine, ApiSupport, ProductDialog } from "../components/api/index.js";
import { CtaSection, PageHero, QualityBand } from "../components/sections/index.js";
import { ExtLink, ScrollLink } from "../components/ui/index.js";

export function ApiPage() {
  const [product, setProduct] = useState(null);
  const triggerRef = useRef(null);

  const openProduct = useCallback((item, trigger) => {
    triggerRef.current = trigger;
    setProduct(item);
  }, []);

  const closeProduct = useCallback(() => {
    if (triggerRef.current?.isConnected) triggerRef.current.focus();
    setProduct(null);
  }, []);

  return (
    <>
      <PageHero
        label="Active pharmaceutical ingredients"
        title={[
          "Deep chemistry.",
          <span className="accent" key="accent">
            A global API platform.
          </span>
        ]}
        text="Explore Morepen APIs by therapeutic area, then connect with our team on the molecule, specification and documentation your program needs."
        img="api-hero-lab.jpg"
        alt="Morepen analyst running HPLC analysis in the quality-control laboratory"
        action={
          <div className="buttons">
            <ScrollLink target="api-collection">
              Explore API portfolio <span aria-hidden="true">↓</span>
            </ScrollLink>
            <ExtLink href={apiListUrl} className="btn outline">
              Download API list
            </ExtLink>
          </div>
        }
      />
      <ApiProofLine />
      <ApiExplorer onOpenProduct={openProduct} />
      <ApiSupport />
      <ApiBackbone />
      <QualityBand />
      <CtaSection
        title="Let us discuss your API requirement."
        text="Share the molecule, intended market and broad supply requirements. Do not send confidential chemistry until a suitable agreement is in place."
      />
      <ProductDialog product={product} onClose={closeProduct} />
    </>
  );
}
