"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
import Home from "../components/Home";
import { LOADING_DISPLAY_MS } from "@/lib/constants";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      {!loading && <Home />}
    </>
  );
}
