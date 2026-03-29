"use client";

import { useEffect, useState } from "react";

const getBucket = (width: number, breakpoints: readonly number[]) => {
  for (let index = 0; index < breakpoints.length; index += 1) {
    if (width < breakpoints[index]) {
      return `bp-${index}`;
    }
  }

  return `bp-${breakpoints.length}`;
};

export const useResponsiveLayoutKey = (
  breakpoints: readonly number[] = [768, 1024]
) => {
  const [layoutKey, setLayoutKey] = useState("bp-0");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frameId = 0;

    const updateLayoutKey = () => {
      setLayoutKey(getBucket(window.innerWidth, breakpoints));
    };

    const onResize = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateLayoutKey);
    };

    updateLayoutKey();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [breakpoints]);

  return layoutKey;
};
