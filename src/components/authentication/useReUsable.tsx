import { ChangeEvent, useState } from "react";

export const useReusableFunction = (name:string, initialValue='') => {
    const [value, setState] = useState<string>(initialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

    return {
      name,
      value,
      onChange: handleChange,
    }
};