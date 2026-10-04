export function SkipLink() {
  return (
    <a
      className="skip"
      href="#main-content"
      onClick={(event) => {
        event.preventDefault();
        document.getElementById("main-content")?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
    >
      Skip to main content
    </a>
  );
}
