import './style.css';

interface PropLoading {
  text: string;
}

export const Loading = ({ text }: PropLoading) => {
  return (
    <div className="modal-container">
      <div className="modal-loading">{text}</div>
    </div>
  );
};
