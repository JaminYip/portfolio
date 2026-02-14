"use client";

import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Home from "../components/Home";
import { LOADING_DISPLAY_MS } from "@/lib/constants";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Home />;
}
