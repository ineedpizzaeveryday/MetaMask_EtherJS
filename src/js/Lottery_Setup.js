import React, { useState, useEffect} from 'react';
import {ethers} from 'ethers';
import { db } from "./firebase";

const Lottery_Setup = () => {


    const [draw, setDraw] = useState([]);
    const [winners, setWinner] = useState([]);

        useEffect(() => {
            db.collection("winner")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setWinner((state) => [
                                ...state,
                            {
                                ...doc.data(),
                                id: doc.id,
                            },
                        ]);
                    });
                });

        }, []);


        function random(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        let yourCodeArray = [];


        const handleClick = e => {
            const nums = Array.from({length: winvariable.toString().length}, () => random(1, 5)); // losuje tyle liczb ile kod ma znaków zmiana zmiennej na string
            yourCodeArray.push(nums);
            let k = setDraw(nums);

            return {...draw};

        };

        console.log(...yourCodeArray, "czy ma liczby ?! <<<<<<<<<<<<");

        const apiVariableArray = [];           /// destrukturyzacja tablicy otrzymanej z bazy danych

    winners.map((winner, i) => {
        return apiVariableArray.push(winner.firstcode);
    })

    const x = apiVariableArray;                           ///
    const [winvariable] = x;                 /// zmienna odpowiadajaca za ilość losowanych liczb
      /// zmienna -> w string żeby wylosować jej długość
                                                                     //console.log(typeof(winvariable));


     const yourcode =  draw;
  //   const [yourcodenum, b] = yourcode
  //  console.log(yourcodenum, b);




   const newyourcode = yourcode.join("");                           // zmienna odpowiadająca za wylosowane numery STRING

  //

    var yourcodenumber = parseInt(newyourcode, 10);
    


   if ( newyourcode == winvariable) {                                    // OTWIERA MODAL
       console.log("WYGRANAAAA")
   }

   else { console.log("Przegrana :(")}


        return (
            <>
                <button onClick={handleClick}>Start</button>
                <p>{draw} :yours code of lottery </p>

                <ul>{winners.map((winner, i) => {
                    return <li key={i}>{winner.firstcode}</li>
                })}
                </ul>

            </>
        )



}

export default Lottery_Setup;