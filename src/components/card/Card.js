
function Card({props,onCardClick}) {

    function handleCardClick() {
        onCardClick(props);
      } 

  return (
    <div className="element" >
    <img className="element__picture" src={props.link} alt=" " onClick={handleCardClick}  />
    <button className="element__remove" type="button" />
    <div className="element__group">
            <h2 className="element__name">{props.name}</h2>
            <div className="element__likes">
                <button className="element__like" type="button" />
                <h3 className="element__like-number">{props.likes.length}</h3>
            </div>
    </div>
</div>
  );
}

export default Card;