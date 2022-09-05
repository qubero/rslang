import '../lib/style.scss';

const WrapperBackground = () => {
  const squares = new Array(9).fill(0);

  return (
    <div className="white">
      <div className="squares">
        {squares.map((_, idx) => (
          <div key={idx} className="square"></div>
        ))}
      </div>
      <div className="grey"></div>
    </div>
  );
};
export default WrapperBackground;
