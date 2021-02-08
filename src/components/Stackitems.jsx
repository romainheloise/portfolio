const Stackitems = ({ type }) => {
  return (
    <div className="about-stack">
      {type.map((x, index) => {
        return (
          <div className="about-stack-text">
            <p className="stack-items" key={index}>
              {x.name}
            </p>
            <p>{x.icone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stackitems;
