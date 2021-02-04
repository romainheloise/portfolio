const Stackitems = ({ type }) => {
  return (
    <div className="about-stack">
      {type.map((x) => {
        return <p className="stack-items">{x.name}</p>;
      })}
    </div>
  );
};

export default Stackitems;
