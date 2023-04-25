const Card = (props) => {
  const { name, id, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
