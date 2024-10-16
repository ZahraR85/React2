const Card = ({name, sprite, type}) => {
  return <div className="card-item">
    <img src={sprite} alt={name} />
    <h2>{name}</h2>
    <p>type: {type}</p>
  </div>
};
export default Card;