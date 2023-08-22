import './style.css';

interface PropsButton {
  disabled: boolean;
  text: string;
}
export const Button = ({ disabled = true, text }: PropsButton) => {
  return (
    <button className="bt-input" type="submit" disabled={disabled}>
      {text}
    </button>
  );
};
