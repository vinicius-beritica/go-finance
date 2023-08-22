import './style.css';
export const LeftSection = () => {
  return (
    <section className="sc-left-body">
      <div className="container">
        <div className="text-container">
          <h1 className="title">GoFinance</h1>
          <p className="text">
            O empréstimo ponto a ponto mais popular do mundo
          </p>
        </div>
        <button className="bt-read-more">Read More</button>
      </div>
      <div className="elipse-1"></div>
      <div className="elipse-2"></div>
    </section>
  );
};
