import { useCallback, useRef } from "react";

// Small helper around the native <dialog> element.
export function useDialog() {
  const ref = useRef(null);
  const open = useCallback(() => ref.current?.showModal(), []);
  const close = useCallback(() => ref.current?.close(), []);
  return { ref, open, close };
}
