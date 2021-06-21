import { ChangeEvent, useState } from "react";

export const useReUsableFunction = (intialValue='') => {
    const [state, setState] = useState<string>(intialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

    return {
      state,
      onChange: handleChange,
    }
};