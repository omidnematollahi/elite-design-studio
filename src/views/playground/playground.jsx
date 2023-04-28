import { useState, useEffect, useRef } from 'react';
import RangeSlider from '@/components/range-slider/range-slider';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import './playground.scss';

export function Playground() {
  const [value, setValue] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      {/* <RangeSlider min={0} max={5} step={1} value={value} onChange={setValue} />
      <p>
        The min value is: <span>{value}</span>
      </p>
      <p>
        The max value is: <span>{value}</span>
      </p> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register('firstName', {
            required: 'این فیلد اجباری است',
            pattern: {
              value: / \d+ /,
              message: 'This input is number only.',
            },
            // minLength: { value: 5, message: 'حداقل تعداد کاراکتر 5 است.' },
          })}
        />
        <ErrorMessage errors={errors} name="firstName" render={({ message }) => <p>{message}</p>} />

        <input
          type="text"
          placeholder="lastName"
          {...register('Last name', { required: 'این فیلد اجباری است', maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register('email', { required: 'این فیلد اجباری است', pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', { required: 'این فیلد اجباری است', minLength: 6, maxLength: 12 })}
        />
        <select {...register('title', { required: 'این فیلد اجباری است' })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input {...register('developer', { required: 'این فیلد اجباری است' })} type="radio" value="Yes" />
        <input {...register('developer', { required: 'این فیلد اجباری است' })} type="radio" value="No" />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Playground;
