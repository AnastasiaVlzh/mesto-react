
function Card({card,onCardClick}) {

    function handleCardClick() {
        onCardClick(card);
      } 

  return (
    <div className="element" >
    <img className="element__picture" src={card.link} alt=" " onClick={handleCardClick}  />
    <button className="element__remove" type="button" />
    <div className="element__group">
            <h2 className="element__name">{card.name}</h2>
            <div className="element__likes">
                <button className="element__like" type="button" />
                <h3 className="element__like-number">{card.likes.length}</h3>
            </div>
    </div>
</div>
  );
}

export default Card;