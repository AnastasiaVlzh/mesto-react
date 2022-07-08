import { api } from "../../utils/api";
import React, { useState } from 'react';
import Card from "../card/Card";

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([])
  
    React.useEffect(() => {
        api.getUserData()
          .then(result => {
            setUserName(result.name);
            setUserDescription(result.about);
            setUserAvatar(result.avatar);
          })
          .catch(err => {
            console.log(err);
          })
          api.getCardsData()
          .then(result => {
            setCards(result);
          })
          .catch(err => {
            console.log(err);
          })
    }, []);


  return (
    <div className="content">
        <section className="profile">
            <div className="profile__info">
                <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
                <div onClick={props.onEditAvatar} className="profile__edit"/>
                <h1 className="profile__user-name">{userName}</h1>
                <p className="profile__description">{userDescription}</p>
                <button onClick={props.onEditProfile} className="button profile__edit-button" type="button"/>
            </div>
            <button onClick={props.onAddPlace} className="button profile__add-button" type="button"/>
        </section>
        <section className="elements">
        { cards.map((item) => (
            <Card 
            props={item}
            key={item._id}
            onCardClick={props.onCardClick}
            />
        )) }
    </section>
    </div>
  );
}

export default Main;