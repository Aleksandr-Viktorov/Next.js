import { useState } from 'react';
import type { ActionError, Action } from '@/types';
import type { FormEvent } from 'react';

export type UseFormState = {
  state: ActionError;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export const useFormState = (action: Action): UseFormState => {
  const [state, setState] = useState<ActionError | null>({
    loading: false,
    isError: null,
    message: null,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ loading: true, isError: null, message: null });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await action(formData);

    if (result?.isError) {
      setState({
        loading: false,
        isError: result.isError,
        message: result.message,
      });
    } else {
      form.reset();
      setState({ ...state });
    }
  };

  return { state, handleSubmit };
};
