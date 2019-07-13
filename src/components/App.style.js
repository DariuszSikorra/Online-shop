import styled from 'styled-components'


 export const Button = styled.button`
 margin: 0 10px;
 padding: 5ps;
 text-decoration: none;
 background-color: white;
 border: none;
 font-size: 1.2em;
 font-weight: 700;
  &:hover {
    text-decoration: underline;
    text-decoration-color:  red;
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  `;

//Big and shady oragne button:
//  export const Button = styled.button`
//   padding: 7px 10px;
//   font-weight: 700;
//   text-decoration: none;
//   margin: 10px;
//   padding: 10px;
//   color: black;
//   border: 1px solid black;
//   border: 1px solid #9e5b04;
//   border-radius: 10px;
//   background-color: rgb(245, 154, 19);
//   box-shadow: 2px -1px;
//   &:hover {
//     box-shadow: 3px -2px;
//   }`;

export const Input = styled.input`
    background-color: lightgray;
`
export const Select = styled.select`
    background-color: lightgray;`

export const Card = styled.li`
    list-style: none;
    display: inline-block;
    width: 300px;
    height: 350px;
    border: 1px solid black;
    margin: 5px;
`
