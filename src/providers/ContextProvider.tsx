"use client";
import { GlobalProvider } from "@/context/GlobalProvider";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  }, []);

  if (!isReady) {
    return null;
  }

  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
