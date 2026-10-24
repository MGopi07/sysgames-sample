"use client";

import { LazyMotion } from "framer-motion";
import { ReactNode } from "react";

const loadFeatures = () => import("framer-motion").then((res) => res.domAnimation);

export default function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
