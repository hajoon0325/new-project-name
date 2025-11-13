import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; 수정
import reportWebVitals from './reportWebVitals';

const x=5;
const myElement = <h1>I love Open Source Studio Class!</h1>; //수정 :추가 1
const myElement2 = <div style={{ color: 'yellow', backgroundColor: 'black' }}>Professor kim is only korean sweetheart professor in HGU </div>;
const myElement3 = <img src="https://i.namu.wiki/i/oR6ghqNhQnmvqtZ6l8tFnhWAaZL2Xf6AQW5eMYIUzcrP9b92fJOQI-DVgJLLPh-4O2x6ITHxQrQHxwH94Sk_8F59aVqhUx7USzyjVnZoVCaHy5mW1phCt8Yhxc_0CZqGvBiGAQj5CuwfKtuRT_qPdw.svg" alt="한동대학교" style={{ width: '150px', height: '150px' }} />;
const myElement4 = <h2 style={{ color: 'blue'}}>Handong Global University! ♬</h2>;
const myElement5 = <div>하나님의 도를 따르는 사람들.. 여기 모였네, 두 손 들고 그 분의 이끄심을 체험하는 한동대학교</div>;
const myElement6 = <h3>{(x) < 10 ? "Hello" : "Goodbye"}</h3>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {myElement} 
  {myElement2}
  {myElement3}
  {myElement4}
  {myElement5}
  {myElement6}
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
