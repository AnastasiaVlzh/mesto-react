import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import PopupWithForm from '../popupWithForm/PopupWithForm';
import React from 'react';
import ImagePopup from '../imagePopup/ImagePopup';



function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isPopupClose, setIsPopupClose] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }

 function handleCardClick(card){
    setSelectedCard(card)
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (
    <div className="page">
    <Header/>
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick ={handleCardClick}

    />
    <Footer/>
    <PopupWithForm
      name = "avatar"
      title= "Обновить аватар"
      buttonText = "Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}>
      <div className="popup__field">
        <input  id="photo-input" type="url" className="popup__input popup__input_type_photo" defaultValue="" name="avatar" minLength="2" maxLength="140" required/>
        <span className="error" id="photo-input-error"></span>
      </div>
    </PopupWithForm>
    <PopupWithForm
      name = "profile-form"
      title= "Редактировать профиль"
      buttonText = "Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}>
      <div className="popup__field">
        <input id="name-input" type="text" className="popup__input popup__input_type_name" defaultValue="" name="name" minLength="2" maxLength="40" required/>
        <span className="error" id="name-input-error"></span>
      </div>
      <div className="popup__field">
        <input id="job-input" type="text" className="popup__input popup__input_type_job" defaultValue="" name="about" minLength="2" maxLength="200" required/>
        <span className="error" id="job-input-error"></span>
      </div>
    </PopupWithForm>
    <PopupWithForm
      name = "place-profile"
      title= "Новое место"
      buttonText = "Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
      <div className="popup__field">
        <input id="place-input" type="text" className="popup__input popup__input_place_name" placeholder="Название" name="name" minLength="2" maxLength="30" required/>
        <span className="error" id="place-input-error"></span>
      </div>
      <div className="popup__field">
        <input id="link-input" type="url" className="popup__input popup__input_place_link" placeholder="Ссылка на картинку" name="link" required/>
        <span className="error" id="link-input-error"></span>
      </div>
    </PopupWithForm>
    <PopupWithForm
      name = "place-delete"
      title= "Вы уверены?"
      buttonText = "Да">
    </PopupWithForm>
    <ImagePopup
      name="place-image"
      card={selectedCard}
      onClose={closeAllPopups} 
      />
  </div>
  );
}

export default App;
