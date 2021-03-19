(this["webpackJsonpjonathanbcsouza.github.io"]=this["webpackJsonpjonathanbcsouza.github.io"]||[]).push([[0],{24:function(e,n,t){e.exports=t(36)},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a,r,i,o,l,c,s,m,u,p,d=t(1),h=t.n(d),b=t(19),g=t.n(b),f=t(8),x=t(2),v=t(3),w=[{id:0,title:"Home",url:"/home"},{id:1,title:"About",url:"/about"},{id:2,title:"Labs",url:"/lab"},{id:3,title:"Music",url:"/music"}],E=t(7),y=v.a.div(a||(a=Object(x.a)(["\n  display: none;\n  align-items: center;\n  justify-content: flex-end;\n  color: ",";\n  background-image: linear-gradient(",", #000);\n  cursor: pointer;\n  padding: 10px 25px;\n  height: 50px;\n  font-size: 24px;\n\n  &:hover {\n    background-image: linear-gradient(",", #000);\n    cursor: pointer;\n    transition: 0.5s;\n\n  }\n  @media (max-width: 615px) {\n    display: flex;\n  }\n"])),(function(e){return e.colour}),(function(e){return e.backColour}),(function(e){return e.backColour})),j=function(e){return e.isBtnCLicked?h.a.createElement(y,{colour:"var(--text-orange)"},h.a.createElement(E.a,null)):h.a.createElement(y,{backColour:"#121212",colour:"darkred"},h.a.createElement(E.f,null))},k=t(12),z=v.a.nav(r||(r=Object(x.a)(["\n  text-transform: uppercase;\n  margin-top: -10px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n"]))),O=v.a.ul(i||(i=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n\n  & :hover {\n    color: var(--text-hovers);\n    border-bottom: 1px solid;\n    border-color: var(--text-hovers);\n  }\n\n  @media (max-width: 615px) {\n    flex-direction: column;\n    border-color: none;\n\n    & :hover {\n    color: var(--text-hovers);\n    border-bottom: none;\n  }\n  }\n\n  }\n"]))),S=v.a.div(o||(o=Object(x.a)(["\n  margin: 10px;\n\n  a {\n    display: block;\n    padding: 30px;\n    color: var(--text-white);\n  }\n\n  @media (max-width: 615px) {\n    display: ",";\n    height: inherit;\n  }\n"])),(function(e){return e.isBtnCLicked?"none":""})),A=v.a.div(l||(l=Object(x.a)([""]))),C=function(){var e=Object(d.useState)(!0),n=Object(f.a)(e,2),t=n[0],a=n[1],r=function(){return a(!t)};return h.a.createElement(z,null,h.a.createElement(O,null,h.a.createElement(A,{onClick:r},h.a.createElement(j,{isBtnCLicked:t})),w.map((function(e){return h.a.createElement(S,{isBtnCLicked:t,key:e.id},h.a.createElement(k.b,{onClick:r,activeStyle:{background:"#121212"},to:e.url},e.title))}))))},I=v.a.div(c||(c=Object(x.a)(["\n  position: relative;\n  top: 0vh;\n  z-index: 11;\n  display: inline-block;\n  font-size: smaller;\n  float: right;\n  margin-right: 2%;\n\n  @media (max-width: 615px) {\n    float: left;\n    margin-left: 10px;\n  }\n"]))),D=(new Date).toLocaleTimeString(),P=function(){var e=Object(d.useState)("#d8b97f"),n=Object(f.a)(e,2),t=n[0],a=n[1];var r=Object(d.useState)("..."),i=Object(f.a)(r,2),o=i[0],l=i[1];var c=Object(d.useState)(D),m=Object(f.a)(c,2),u=m[0],p=m[1];function b(e,n,t,a){return s<12?n:s<18?t:a}setInterval((function(){!function(){var e=(new Date).toLocaleTimeString();p(e)}(),function(){s=(new Date).getHours();var e=b(void 0,"d8b97f","orange","darkorange");a(e)}(),function(){s=(new Date).getHours();var e=b(void 0,"morning","afternoon","evening");l(e)}()}),1e3);var g,x=u.split(":"),v=Object(f.a)(x,3),w=v[0]+v[1]+v[2];return h.a.createElement(h.a.Fragment,null,h.a.createElement("br",null),h.a.createElement(I,null,h.a.createElement("p",{style:{color:t}},"Good ",o,". ",h.a.createElement("br",null)," Total day spent ",(g=w,Math.round(100*g/235959))," %."),h.a.createElement("br",null)))},J=(v.a.div(m||(m=Object(x.a)(['\n  height: 80vh;\n  background-repeat: no-repeat;\n  background-size: contain;\n  filter: grayscale(40%);\n  margin-top: 10vh;\n  background-image: url("https://pbs.twimg.com/media/EsJqDoAU0AInOjw?format=jpg&name=4096x4096");\n  opacity: ',";\n  background-attachment: fixed;\n\n  @media (min-width: 615px) {\n    background-position: center;\n    margin-top: 1vh;\n  }\n"])),(function(e){return e.opc})),v.a.div(u||(u=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  path {\n    transition: fill 0.4s ease;\n  }\n\n  svg:hover {\n    fill: red;\n    height: 30px;\n    flex-direction: row;\n    cursor: pointer;\n  }\n"])))),M=v.a.a.attrs((function(e){return{href:e.link,target:"_blank"}}))(p||(p=Object(x.a)(["\n  margin: 2px;\n"]))),L=t(0),B=t(23),F=[{component:h.a.createElement(E.b,{color:"#fff"}),link:"https://github.com/jonathanbcsouza"},{component:h.a.createElement(E.c,{color:"#0e76a8"}),link:"https://www.linkedin.com/in/jonathanbcsouza/"},{component:h.a.createElement(E.d,{color:"#fff"}),link:"https://medium.com/@jonathanbcsouza"},{component:h.a.createElement(E.e,{color:"#1DB954"}),link:"https://open.spotify.com/artist/3SzDQcUhTIhN8GvnxHIgHE?si=tyMKA77PSuCh7WNEyazPpg"},{component:h.a.createElement(E.g,{color:"#00acee"}),link:"https://www.twitter.com/jonathanbcsouza"},{component:h.a.createElement(B.a,{color:"#fff"}),link:"https://codesandbox.io/u/jonathanbcsouza"}];function T(){return F.map((function(e){return h.a.createElement(M,{key:e.link,link:e.link},e.component)}))}var G,H,_,N,q,Q,U,K=function(){return h.a.createElement("div",null,h.a.createElement("br",null),h.a.createElement(J,null,h.a.createElement(L.b.Provider,{value:{size:"32"}},h.a.createElement("h3",null,"Let's Connect!"),h.a.createElement("br",null),h.a.createElement("div",null,h.a.createElement(T,null)))))},W=(new Date).getFullYear(),X=v.a.div(G||(G=Object(x.a)(["\n  text-align: center;\n  color: var(--text-orange);\n  font-size: 12px;\n  border-top: 1px solid var(--headers);\n  padding-bottom: 10px;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n"]))),Z=function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(X,null,h.a.createElement(K,null),h.a.createElement("br",null),h.a.createElement("p",null,"Copyright ",W," \xa9 Jonathan Souza")))},R=t(4),Y=function(){var e=v.a.div(H||(H=Object(x.a)(["\n    color: var(--text-white);\n    position: absolute;\n    top: 200px;\n    z-index: 0;\n    padding-left: 30vw;\n\n    h1,\n    p {\n      animation-name: text_entrance;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      animation-fill-mode: both;\n    }\n    p {\n      animation-delay: 2s;\n    }\n    @keyframes text_entrance {\n      from {\n        top: 0px;\n        color: black;\n      }\n      to {\n        top: 20px;\n        color: white;\n      }\n    }\n\n    @media (max-width: 615px) {\n      padding-left: 3vw;\n      margin: 0;\n      max-width: 90%;\n    }\n  "])));return h.a.createElement(e,null,h.a.createElement("h1",null,"Jonathan Souza"),h.a.createElement("br",null),h.a.createElement("p",null,"A Web Developer with passion for the web, innovation and art."))},V=v.a.div(_||(_=Object(x.a)(["\n  color: var(--text-white);\n  padding: 15% 5%;\n  font-size: 16px;\n  line-height: 26px;\n  display: flex;\n  height: 100%;\n  padding-bottom: 20%;\n\n  @media screen and (max-width: 615px) {\n    display: block;\n    font-size: 18px;\n    line-height: 30px;\n    padding-bottom: 30%;\n  }\n"]))),$=v.a.img.attrs({src:"https://avatars.githubusercontent.com/u/25882133?s=460&v=4"})(N||(N=Object(x.a)(["\n  margin-right: 40px;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n"]))),ee=v.a.div(q||(q=Object(x.a)(["\n  h1 {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 16px;\n    letter-spacing: 0.05em;\n  }\n"]))),ne=function(e){return h.a.createElement(h.a.Fragment,null,h.a.createElement(V,null,h.a.createElement($,null),h.a.createElement(ee,null,h.a.createElement("h1",null,"Learn, create, work and repeat."),h.a.createElement("p",null,"Over the years I had fun by acquiring experience and learning a bunch of tools that aligned with creativity and resilience, I could help companies to raise their value, their culture and to increase their revenue. I am addicted to innovation and very enthusiastic about learning new things, I am always improvement something!",h.a.createElement("br",null),"I am passionate about data, quality and web development as I believe that together, they are powerful and meaningful in many ways to change people's lives. In my free time, I like to stay with my family and friends, learn new stuff, compose songs or write new ideas somewhere.",h.a.createElement("br",null),"Should you want to chat with me, feel free to drop a message :)"))))},te=v.a.div(Q||(Q=Object(x.a)(["\n  z-index: 0;\n  margin: 20px 20px 20px 20px;\n  width: 520px;\n  height: 320px;\n  position: relative;\n  top: 0;\n  transition: top 0.5s ease;\n\n  iframe {\n    opacity: 0.5;\n    filter: blur(2px);\n    transition: filter 0.2s ease, filter 0.2s ease;\n    border-radius: 30px;\n    width: 100%;\n    height: 100%;\n    border: 0;\n    overflow: hidden;\n    box-shadow: 6px 6px 5px 0px rgba(82, 82, 82, 0.75);\n  }\n\n  img {\n    filter: blur(1px);\n\n    max-width: 100%;\n    max-height: 100%;\n    margin: 0 auto;\n    text-align: center;\n    display: block;\n    margin: auto;\n  }\n\n  p {\n    position: absolute;\n    text-align: center;\n    top: 29%;\n    width: 100%;\n    padding: 50px 0;\n  }\n\n  &:hover {\n    top: -10px;\n    transition: top 0.5s ease;\n\n    iframe,\n    img {\n      filter: blur(0);\n      opacity: 1;\n      transition: opacity 0.2s ease, filter 0.2s ease;\n      box-shadow: 8px 3px 15px 0px rgba(82, 82, 82, 0.85);\n    }\n    p {\n      display: none;\n    }\n  }\n\n  @media (max-width: 615px) {\n    width: 320px;\n    height: 220px;\n  }\n"]))),ae=function(e){var n="".concat(e.content);return h.a.createElement(te,null,h.a.createElement("p",null,h.a.createElement("h3",null,e.title),h.a.createElement("br",null),e.tech),h.a.createElement(n,{allowfullscreen:"allowfullscreen",src:e.src,title:e.title}))},re=[{type:"img",tech:"Android - Java",src:"https://raw.githubusercontent.com/jonathanbcsouza/P6-NZ-Guide/master/screenshots/cover.png",title:"Tour Guide NZ"},{type:"img",tech:"Android - Java",src:"https://raw.githubusercontent.com/jonathanbcsouza/mymusicapp/master/screenshots/screenshot_library.png",title:"Music Player"},{type:"iframe",tech:"Javascript/React",src:"https://codesandbox.io/embed/js-array-and-object-methods-and-arrow-functions-fvyww?fontsize=14&hidenavigation=1&theme=dark&view=editor",title:"JS Array and Object Methods and Arrow Functions"},{type:"iframe",tech:"Javascript",src:"https://codesandbox.io/embed/dom-access-methods-uoxm5?fontsize=14&hidenavigation=1&theme=dark",title:"Dom Access Methods"},{type:"iframe",tech:"C programming",src:"https://www.youtube.com/embed/XKU81C9e_5I",title:"Encryption decoder"},{type:"iframe",tech:"C programming",src:"https://www.youtube.com/embed/QTI3PEhvXto",title:"Mario Pyramid"},{type:"img",tech:"Data Analysis with Python",src:"/personalwebsite/images/projects/da-python.png",title:"Medical appointments in Brazil Analysis"},{type:"img",tech:"Data Analysis with Excel",src:"/personalwebsite/images/projects/da-excel.png",title:"QA Management System and Dashboard"},{type:"iframe",tech:"Pseudocode with Scratch",src:"https://scratch.mit.edu/projects/385143391/embed",title:"Covid 19 - Pseudocode and Educational Game"}],ie=function(){var e=v.a.div(U||(U=Object(x.a)(["\n    width: 100%;\n    height: 100%;\n    padding: 10% 0 12%;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    color: var(--text-white);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n    z-index: 0;\n  "])));return h.a.createElement(h.a.Fragment,null,h.a.createElement(e,null,re.map((function(e){return h.a.createElement(ae,{content:e.type,src:e.src,title:e.title,tech:e.tech})}))))},oe=function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("p",null,"Spotify API to ADD"))},le=function(){return h.a.createElement("div",null,h.a.createElement(k.a,null,h.a.createElement(P,null),h.a.createElement(C,null),h.a.createElement(R.c,null,h.a.createElement(R.a,{path:"/personalwebsite",component:Y,exact:!0}),h.a.createElement(R.a,{path:"/home",component:Y,exact:!0}),h.a.createElement(R.a,{path:"/about",component:ne,exact:!0}),h.a.createElement(R.a,{path:"/lab",component:ie,exact:!0}),h.a.createElement(R.a,{path:"/music",component:oe,exact:!0})),h.a.createElement(Z,null)))},ce=(t(35),document.getElementById("root"));g.a.render(h.a.createElement(h.a.StrictMode,null,h.a.createElement(le,null)),ce)}},[[24,1,2]]]);
//# sourceMappingURL=main.78b01cef.chunk.js.map