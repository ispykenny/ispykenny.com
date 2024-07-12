/* eslint-disable import/no-anonymous-default-export */

type Props = {
  type?: string;
  name: string;
  label: string;
  errors: string;
};

export const Input = ({ type, name, label, errors }: Props) => {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      {errors && <p className="text-red-500">{errors}</p>}
      <input className="input" id={name} type={type} name={name} />
    </div>
  );
};

export const TextArea = ({ name, label, errors }: Props) => {
  return (
    <div className={`textarea`}>
      <label htmlFor={name}>{label}</label>
      {errors && <p className="text-red-500">{errors}</p>}
      <textarea className="textarea" name={name} />
    </div>
  );
};

export default { Input, TextArea };
