import { ChangeEvent, useState } from "react";

export const useReusableFunction = (intialValue='') => {
    const [value, setState] = useState<string>(intialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

    return {
      value,
      onChange: handleChange,
    }
};