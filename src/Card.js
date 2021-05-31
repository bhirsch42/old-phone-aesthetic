import './styles/Card.scss';

export default function Card({ id, children }) {
  return (
    <div className="card-wrapper" id={id}>
      <div className="card-wrapper--layout">
        <div className="card">
          {children}
        </div>
      </div>
      <div className="card-wrapper--display">
      <div className="card-bg"></div>
        <div className="card">
          {children}
        </div>
      </div>
    </div>
  );
}
