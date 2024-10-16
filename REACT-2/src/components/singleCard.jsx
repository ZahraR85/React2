const eevee = {
  id : 1,
  name : "Eevee",
  sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133",
  type : "Normal",
};
const singleCard = () => {
  return <div>
    <img src="{eevee.sprite}" alt="{eevee.name}" />
    <h2>{eevee.name}</h2>
    <p>type: {eevee.type}</p>
  </div>
};
export default singleCard;