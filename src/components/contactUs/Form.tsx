import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import Animation from '@/shared/Animation';

type Props = {
  variant: {};
};

const Form = ({ variant }: Props) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) e.preventDefault();
  };

  return (
    <Animation variant={variant} styles="mt-10 basis-3/5 md:mt-0">
      <form
        target="_blank"
        onSubmit={onSubmit}
        method="POST"
        action={`https://formsubmit.co/${import.meta.env.VITE_CONTACT_EMAIL}`}
      >
        {errors.name && (
          <p className="mb-1 text-primary-500">
            {errors.name.type === 'required' && 'This field is required.'}
            {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-primary-500"
          {...register('name', { required: true, maxLength: 100 })}
        />

        {errors.email && (
          <p className="mb-1 text-primary-500">
            {errors.email.type === 'required' && 'This field is required.'}
            {errors.email.type === 'pattern' && 'Invalid email address.'}
          </p>
        )}

        <input
          type="text"
          placeholder="Email"
          className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-primary-500"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
        />

        {errors.message && (
          <p className="mb-1 text-primary-500">
            {errors.message.type === 'required' && 'This field is required.'}
            {errors.message.type === 'maxLength' && 'Max length is 200 char.'}
          </p>
        )}

        <textarea
          rows={4}
          cols={5}
          placeholder="Message"
          className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-primary-500"
          {...register('message', { required: true, maxLength: 200 })}
        ></textarea>

        <button
          type="submit"
          className="rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
        >
          Submit
        </button>
      </form>
    </Animation>
  );
};

export default Form;
