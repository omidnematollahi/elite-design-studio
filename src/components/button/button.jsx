import { Loader } from '@/components/loader/loader';
import './button.scss';

export const Button = ({ text, loading = false, disabled }) => {
  return (
    <button className="custom-btn" disabled={disabled}>
      {!loading ? text : <Loader className="spinner" />}
    </button>
  );
};

export default Button;
