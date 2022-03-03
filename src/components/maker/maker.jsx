import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
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
    ])
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
    
      const addCard = card => {
        const updated = [...cards, card];
        setCards(updated);
      };

     return (
        <section className={styles.maker}>
        <Header onLogout={onLogout} />
        <div className={styles.container}>
            <Editor cards={cards} addCard={addCard} />
            <Preview cards={cards} />
        </div>
        <Footer />
        </section>
  );
};
export default Maker;