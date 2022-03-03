import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1':{
            id:'1',
            name: 'Elin1',
            company:'Samsung',
            theme:'dark',
            title:'Front-end',
            email:'thx@gmail.com',
            message:'go for it',
            fileName:'elin',
            fileURL: null
        },
        '2': {
            id:'2',
            name: 'Elin2',
            company:'Samsung',
            theme:'light',
            title:'Front-end',
            email:'thx@gmail.com',
            message:'go for it',
            fileName:'ellie',
            fileURL: 'elin.png'
        },
        '3': {
            id:'3',
            name: 'Elin3',
            company:'Samsung',
            theme:'colorful',
            title:'Front-end',
            email:'thx@gmail.com',
            message:'go for it',
            fileName:'ellie',
            fileURL: null
        }
    });
 
   

    const history = useNavigate();
    const onLogout = ()=>{
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
          if (!user) {
            history.push('/');
          }
        });
      });
    
      const createOrupdateCard = card => {
       setCards(cards=>{
        const updated = {...cards};
        updated[card.id] = card;
        return updated;
       })
      };
      const deleteCard = card => {
        setCards(cards=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
           })
      };

     return (
        <section className={styles.maker}>
        <Header onLogout={onLogout} />
        <div className={styles.container}>
            <Editor cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
            <Preview cards={cards} />
        </div>
        <Footer />
        </section>
  );
};
export default Maker;