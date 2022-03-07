var G=Object.defineProperty,H=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var N=(e,n,c)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[n]=c,u=(e,n)=>{for(var c in n||(n={}))W.call(n,c)&&N(e,c,n[c]);if(S)for(var c of S(n))U.call(n,c)&&N(e,c,n[c]);return e},f=(e,n)=>H(e,K(n));import{s as o,j as t,L as k,a,u as b,b as x,r as L,c as I,W as X,F as q,R as V,d as D,e as J,f as Q,g as Y,t as Z,h as ee,P as te,B as ne}from"./vendor.f88fb935.js";const ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(i){if(i.ep)return;i.ep=!0;const d=c(i);fetch(i.href,d)}};ie();const R="GET_COUNTRIES",T="SEARCH",O="CONTINENT",A="DETAIL",B="DARKMODE",oe="https://restcountries.com/v3.1/all",re="https://restcountries.com/v3.1/alpha/",ae=()=>e=>{fetch(`${oe}`).then(n=>n.json()).then(n=>n.map(r=>({id:r.cca3,name:r.name.official,imageFlag:r.flags.svg,population:r.population,region:r.region,capital:r.capital,continent:r.continents}))).then(n=>e({type:R,payload:n})).catch(n=>console.log(n))},ce=e=>async n=>{fetch(`${re}${e}`).then(c=>c.json()).then(c=>c.map(i=>({id:i.cca3,image:i.flags.svg,name:i.name.common,nName:i.translations.nld.common,population:i.population,region:i.region,subRegion:i.subregion,capital:i.capital,topLevel:i.tld,currencies:Object.keys(i.currencies),languages:Object.keys(i.languages),borderCountries:i.borders}))).then(c=>n({type:A,payload:c})).catch(c=>console.log(c))},de=e=>async n=>{n({type:T,payload:e})},le=e=>async n=>{n({type:O,payload:e})},E=e=>n=>{n({type:B,payload:e})},se=({name:e,image:n,population:c,region:r,capital:i,id:d})=>{const l={backgroundImage:`url(${n})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},y={textDecoration:"none"};let v=w=>{let g=w.toString().split(".");return g[0]=g[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),g.join(".")};return t(k,{style:y,to:`/details/${d}`,children:a(he,{children:[t(ge,{style:l}),a(me,{children:[t(pe,{children:e}),a(ue,{children:[a(fe,{children:["Population: ",t($,{children:v(c)})]}),a(xe,{children:["Region: ",t($,{children:r})]}),a(ye,{children:["Capital: ",t($,{children:i?i[0]:"not exist"})]})]})]})]})})},he=o.div`
    border: 8px solid ${e=>e.theme.bgColorL};
    border-radius: 8px;
    background-color: ${e=>e.theme.bgColorL};
    color: ${e=>e.theme.text} ; 
    margin-top: 4rem;
    width: 12rem;
    height: 17rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 630px){
        width: 16rem;
        height: 22rem;
  }


`,me=o.div` 
    width: 95%;
    height: 50%;
    display: flex;
    flex-direction: column;

`,ge=o.div`
width: 100%;
height: 50%;

`,pe=o.h2`
    height: 30%;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: flex-end;

`,ue=o.div`
    height: 70%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:.2rem;

`,fe=o.div`
    height: 1rem;
    font-size: .8rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap:.3rem;


`,xe=o.div`
    height: 1rem;
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap:.3rem;

`,ye=o.div`
    height: 1rem;
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap:.3rem;

`,$=o.h3`
 font-weight: 300;
`,be="_main_ei4x7_1",ve="_ldsSpinner_ei4x7_9";var j={main:be,ldsSpinner:ve};const P=()=>t("div",{className:j.main,children:a("div",{className:j.ldsSpinner,children:[t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{})]})}),we=()=>{const e=b(),n=x(i=>i.countries),c=x(i=>i.search.toLowerCase()),r=x(i=>i.continent.toLowerCase());return L.exports.useEffect(()=>{e(ae())},[]),t(Ce,{children:n.length?n.filter(i=>i.region.toLowerCase().includes(r)).filter(i=>i.name.toLowerCase().includes(c)).map(i=>t(se,{name:i.name,population:i.population,region:i.region,capital:i.capital,image:i.imageFlag,id:i.id},i.id)):t(P,{})})},Ce=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 4rem;

  @media(max-width: 880px){
  grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 630px){
  grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 550px){
  grid-template-columns: repeat(1, 1fr);
  }
`,_=()=>{const[e,n]=L.exports.useState(!0),c=b();return t($e,{children:a(ke,{children:[t(Le,{children:"Where in the world?"}),t(Se,{onClick:i=>{e&&(n(!1),localStorage.setItem("darkmode","Light"),c(E(localStorage.getItem("darkmode")))),e||(n(!0),localStorage.setItem("darkmode","Dark"),c(E(localStorage.getItem("darkmode"))))},children:"\u263E Dark mode"})]})})},$e=o.div`
    background-color: ${e=>e.theme.bgColorL};
    color: ${e=>e.theme.text} ;
    width: 100%;
    display: flex;
    justify-content:center;
   

`,ke=o.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  

`,Le=o.h4`
    width: 50%;
`,Se=o.button` 
    background-color: ${e=>e.theme.bgColorL};
    color: ${e=>e.theme.text} ;
    border: none;
    height: 2rem;
    cursor: pointer;
`,Ne=()=>{const e=b();return a(De,{children:[t(_,{}),a(Ee,{children:[t(je,{type:"text",placeholder:"   \u{1F50D}  Search for a country...",onChange:r=>{e(de(r.target.value))}}),a(Ie,{onChange:r=>{e(le(r.target.value))},children:[t("option",{hidden:!0,children:"Filter by Region"}),t("option",{children:"Africa"}),t("option",{children:"America"}),t("option",{children:"Asia"}),t("option",{children:"Europe"}),t("option",{children:"Oceania"})]})]}),t(Re,{children:t(we,{})})]})},De=o.div`
  background-color: ${e=>e.theme.bgColor};
  color: ${e=>e.theme.text};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ee=o.div`
  width: 90%;
  height: 4rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media(max-width: 630px){
      margin-top: 20px;
      flex-direction: column;
      align-items: flex-start;
      height: 11rem;

  }

`,je=o.input`
  background-color: ${e=>e.theme.bgColorL};
  color: ${e=>e.theme.text};
  width: 22rem;
  height: 2.5rem;
  border: none;
  outline: none;
  @media(max-width: 630px){
      width: 100%;
      height: 4rem;
      font-size: 1.5rem;
  }
`,Ie=o.select`
  background-color: ${e=>e.theme.bgColorL};
  color: ${e=>e.theme.text};
  width: 10rem;
  height: 2.5rem;
  border: none;
  outline: none;

  @media(max-width: 630px){
      width: 50%;
      height: 4rem;
  }
`,Re=o.div`
  width: 100%;
`,Te=({image:e,name:n,nName:c,population:r,region:i,subRegion:d,capital:l,topLevel:y,currencies:v,languages:w,borderCountries:g})=>{I().id;let F=p=>{let C=p.toString().split(".");return C[0]=C[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),C.join(".")};const z=p=>{setInterval(()=>{window.location.reload(!0)},300)};let M={width:"25rem",height:"20rem",backgroundImage:`url(${e})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t(Oe,{children:a(Ae,{children:[t(Be,{children:t(Pe,{children:t("div",{style:M})})}),a(_e,{children:[t(Fe,{children:n}),a(ze,{children:[a(Me,{children:[t(s,{children:a(h,{children:["Native Name:",t(m,{children:c||"Not exist"})]})}),t(s,{children:a(h,{children:["Population:",a(m,{children:[" ",F(r)]})]})}),t(s,{children:a(h,{children:["Region:",a(m,{children:[" ",i||"Not exist"]})]})}),t(s,{children:a(h,{children:["Sub Region:",a(m,{children:[" ",d||"Not exist"]})]})}),t(s,{children:a(h,{children:["Capital:",a(m,{children:[" ",l?l[0]:"capital does not exist"]})]})})]}),a(Ge,{children:[t(s,{children:a(h,{children:["Top Level Domain:",a(m,{children:[" ",y||"Not exist"]})]})}),t(s,{children:a(h,{children:["Currencies:",a(m,{children:[" ",v.join(", ")]})]})}),t(s,{children:a(h,{children:["Languages:",a(m,{children:[" ",w.join(", ")]})]})})]})]}),a(He,{children:[t(We,{children:"Border Countries:"}),t(Ke,{children:g?g.map(p=>t(k,{to:`/details/${p}`,children:t(Ue,{onClick:z,children:p})},p)):"No border Countries"})]})]})]})})},Oe=o.div` 
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`,Ae=o.div` 
  width: 90%;
  height: 100%;
  display: flex;
  @media(max-width: 1180px){
       flex-direction: column;
       margin-top: 40px;

  }
`,Be=o.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`,Pe=o.div` 
      border: 10px solid ${e=>e.theme.bgColorL};
      border-radius:10px;
 
`,_e=o.div`
    width: 60%;
    height: 100%;
`,Fe=o.div` 
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

`,ze=o.div` 
  display: flex;
  @media(max-width: 1180px){
       flex-direction: column;
       gap:2rem;
  }
`,Me=o.div` 
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content:end;
`,Ge=o.div` 
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content:start;
  @media(max-width: 1180px){
       width: 20rem;
  }
`,s=o.div`
display: flex;
height: 2rem;

`,h=o.div` 
margin: 0;
width: 100%;
font-weight: bold;


`,m=o.h4` 
margin: 0;
display: inline-block;
font-weight: 300;

`,He=o.div` 
  display: flex;
  justify-content: start;
  @media(max-width: 1180px){
       flex-direction: column;
  }
`,Ke=o.div` 
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 1180px){
  justify-content: space-between;
  align-items: flex-start;
  height: 5rem;

  }

`,We=o.p` 
  width: 20rem;
  font-weight: bold;
`,Ue=o.button`  
  background-color: ${e=>e.theme.bgColorL};
  color: ${e=>e.theme.text} ;
  font-size: .9rem;
  width: 4.5rem;
  border: none;
  font-weight: 100;
  cursor: pointer;
`,Xe=()=>{const e=b(),n=x(r=>r.detail),c=I().id;return L.exports.useEffect(()=>{e(ce(c))},[]),a(qe,{children:[t(_,{}),t(Ve,{children:t(k,{to:"/",children:t(Je,{children:"\u{1F868} Back"})})}),t(Qe,{children:n.length?n.map(r=>t(Te,{image:r.image,name:r.name,nName:r.nName,population:r.population,region:r.region,subRegion:r.subRegion,capital:r.capital,topLevel:r.topLevel,currencies:r.currencies,languages:r.languages,borderCountries:r.borderCountries},r.id)):t(P,{})})]})},qe=o.div`
   height: 99vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`,Ve=o.div`
    height: 14%;
    width: 90%;
    display: flex;
    align-items: center;
`,Je=o.button` 
    background-color: ${e=>e.theme.bgColorL};
    color: ${e=>e.theme.text} ;
    width: 5rem;
    height: 2rem;
    border: none;
    border-radius:.3rem;
    font-size:.8rem;
    cursor: pointer;
    @media(max-width: 1180px){
     margin-top: 30px ;

  }
`,Qe=o.div` 
    width: 100%;

`,Ye={text:"#ffffff",bgColorL:"#2b3743",bgColor:"#202c37"},Ze={text:"#000000",bgColorL:"#ffffff",bgColor:"#F5EEDC"},et=X`

    body{
        background-color: ${e=>e.theme.bgColor}; 
        color: ${e=>e.theme.text};
    }
`,tt=()=>{const e=x(n=>n.darkmode);return a(q,{theme:e==="Light"?Ze:Ye,children:[t(et,{}),a(V,{children:[t(D,{path:"/",element:t(Ne,{})}),t(D,{path:"/details/:id",element:t(Xe,{})})]})]})};let nt={countries:[],detail:[],search:"",continent:"",darkmode:localStorage.getItem("darkmode")};const it=(e=nt,n)=>{switch(n.type){case R:return f(u({},e),{countries:[...n.payload]});case T:return f(u({},e),{search:n.payload});case O:return f(u({},e),{continent:n.payload});case A:return f(u({},e),{detail:[...n.payload]});case B:return f(u({},e),{darkmode:n.payload});default:return e}},ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y,rt=J(it,ot(Q(Z)));ee.render(t(te,{store:rt,children:t(ne,{children:t(tt,{})})}),document.getElementById("root"));
