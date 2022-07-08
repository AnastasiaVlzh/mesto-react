export class Api{
    constructor(token){
        this._token = token;
        this._headers = {
            'Content-Type': 'application/json',
            authorization: this._token
        }
    }
    getUserData(){
        return fetch('https://nomoreparties.co/v1/cohort-43/users/me',{
            headers: this._headers,
            method: 'GET'
        })
        .then((res) =>{
           if(res.ok){
                return res.json()
           }
           return Promise.reject('Возникла ошибка') 
        }) 
      
    }

    updateUserData(user){
        const body = {
            name: user.name,
            about: user.about
        };
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me',{
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(body),
        })
        .then((res) =>{
            if(res.ok){
                 return res.json()
            }
            return Promise.reject('Возникла ошибка') 
         }) 
    }

    getCardsData(){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards',{
            headers: this._headers,
        })
        .then((res) =>{
           if(res.ok){
                return res.json()
           }
           return Promise.reject('Возникла ошибка') 
        }) 
      
    }

    addCard(card){
        const body = {
            name: card.name,
            link: card.link
        };
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards',{
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(body),
        })
        .then((res) =>{
            if(res.ok){
                 return res.json()
            }
            return Promise.reject('Возникла ошибка') 
         }) 
    }

    deleteCard(cardId){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards/'+ cardId,{
            headers: this._headers,
            method: 'DELETE'
        })
        .then((res) =>{
           if(res.ok){
                return res.json()
           }
           return Promise.reject('Возникла ошибка') 
        }) 
    }

    updateLike(cardId, method){
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${cardId}/likes`,{
            headers: this._headers,
            method,
        })
        .then((res) =>{
            if(res.ok){
                 return res.json()
            }
            return Promise.reject('Возникла ошибка') 
         }) 
    }

    updateAvatar(user){
        const body = {
            avatar: user.avatar
        };
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me/avatar' ,{
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(body),
        })
        .then((res) =>{
            if(res.ok){
                 return res.json()
            }
            return Promise.reject('Возникла ошибка') 
         }) 
    }


}

export const api = new Api('8e904e2d-1e9e-4822-a1dc-ac070e02dd13');