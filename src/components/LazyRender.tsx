"use client";
import { useState, useEffect, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

export default function LazyRender({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  
  return (
    <div ref={ref}>
      {isInView ? children : <div style={{ minHeight: "100px" }} />}
    </div>
  );
}
