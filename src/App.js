import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import WhatICan from "./pages/WhatICan";
import WhatIMade from "./pages/WhatIMade";

const GlobalStyle = createGlobalStyle`
html,body,div,span,object,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,em,img,ins,q,strong,sub,sup,b,i,dl,dt,dd,ol,ul,
li,a,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
   margin: 0;
   padding: 0;
   border: 0;
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
   display: block;
}
ul,ol,li {
   list-style: none;
   list-style-position: inside;
}

blockquote:before,blockquote:after,q:before,q:after {
   content: '';
   content: none;
}
a,a:link,a:hover,a:active {
   text-decoration: none;
}

i {
   font-style: normal;
   font-weight: normal;
}

img {
   display: block;
   border: 0;
}

button {
   display: block;
   cursor: pointer;
}

a:link {
   color: #000;
   text-decoration: none;
}

a:visited {
   color: #000;
   text-decoration: none;
}
a:hover {
   color: #000;
   text-decoration: none;
}
a:active {
   color: #000;
   text-decoration: none;
}

@font-face {
    font-family: 'SunBatang-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'InkLipquid';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

*{box-sizing: border-box;}

body{
  font-family: 'SunBatang-Light';
  color: #3F2E1C;
}

section{
   background-color: #ebe4dc;
}

section>.container{
   width: 1200px;
   margin: 0 auto;
   padding: 66px 20px;

   @media screen and (max-width: 1200px) {
      width: 768px;
   }

   @media screen and (max-width: 768px) {
      max-width: 640px;
   }

   @media screen and (max-width: 640px) {
      max-width: 100vw;
   }
}
`;

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/whatican" element={<WhatICan />} />
          <Route path="/whatimade" element={<WhatIMade />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
