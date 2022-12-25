import { useEffect, useState } from "react";
const delay = 500;

export const useDebouce = (str: string): string => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (str.length < 4) {
      setValue((prev) => (prev = ""));
      return;
    }
    let ping = setTimeout(() => {
      setValue((prev) => (prev = str));
    }, delay);
    return () => {
      clearTimeout(ping);
    };
  }, [str]);

  return value;
};
