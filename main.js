(()=>{"use strict";let e=[{name:"Stracciatella",description:"tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",img:"./images/menu1.jpg",price:"11$",alt:"picture of Stracciatella",subTitle:"",subTitleIcon:"",rating:5},{name:"Chevrefrit au meil",description:"tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",img:"./images/menu2.jpg",price:"$11",alt:"picture of Chevrefrit au meil",subTitle:"",subTitleIcon:"",rating:5},{name:"Stauman Gravlax",description:"tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",img:"./images/menu3.jpg",price:"$9",alt:"picture of Stauman Gravlax",subTitle:"Vegan",subTitleIcon:"leaf",rating:5},{name:"Croustillant de poisson",description:"tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",img:"./images/menu4.jpg",price:"$4",alt:"picture of Croustillant de poisson",subTitle:"Hot",subTitleIcon:"fire",rating:5},{name:"Carpaccio de daurade",description:"tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",img:"./images/menu1.jpg",price:"$6",alt:"picture of Carpaccio de daurade",subTitle:"vegan",subTitleIcon:"leaf",rating:5},{name:"Chevrefrit au miel",description:"tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",img:"./images/menu1.jpg",price:"$14",alt:"picture of Chevrefrit au miel",subTitle:"",subTitleIcon:"",rating:5}],t=[{name:"Emma Newman",img:"./images/testimonials1.jpg"," heading":"Very tasty",rating:5,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!"},{name:"Paul Trueman",img:"./images/testimonials1.jpg",heading:"I have lunch here every day",rating:5,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!"}],i=[{serNumber:"01",serHeading:"We are located in the city center",serDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi"},{serNumber:"02",serHeading:"Fresh ingredients from organic farms",serDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi"},{serNumber:"03",serHeading:"Own fast delivery. 30 min Maximum",serDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi"},{serNumber:"04",serHeading:"Professional, experienced chefs",serDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi"},{serNumber:"05",serHeading:"The highest standards of service",serDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi"}],a="Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio. Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.",n="./images/circle.svg",d="./images/menu.svg",s="./images/ring.svg",l=document.getElementById("container");l.appendChild(function(){let t=document.createElement("header"),i=document.createElement("nav");t.appendChild(i),i.classList.add("navbar");let a=document.createElement("div");a.classList.add("navbar-wrapper"),i.appendChild(a);let n=document.createElement("a");n.href="#";let d=document.createElement("img");d.setAttribute("src","./images/logo.svg"),d.setAttribute("alt","logo"),d.setAttribute("width",100),n.appendChild(d),a.appendChild(n);let s=document.createElement("ul");s.classList.add("navbar-nav");let l=["Home","About","Service","Menu","Testimonals"];for(let e=0;e<=4;e++){let t=document.createElement("li"),i=document.createElement("a");i.classList.add("nav-link"),i.href="#"+l[e],i.innerText=l[e],t.appendChild(i),s.appendChild(t)}a.appendChild(s);let r=document.createElement("div");r.classList.add("navbar-btn-group");let c=document.createElement("button");c.classList.add("shopping-cart-btn");let m=document.createElement("img");m.setAttribute("src","./images/cart.svg"),m.setAttribute("width",18),m.setAttribute("alt","Shoping cart icon"),c.appendChild(m);let o=document.createElement("span");o.classList.add("count"),o.innerText=5,c.appendChild(o);let u=document.createElement("button");u.classList.add("menu-toggle-btn");let p=document.createElement("span");p.classList.add("line","one");let h=document.createElement("span");h.classList.add("line","two");let g=document.createElement("span");g.classList.add("line","three"),u.appendChild(p),u.appendChild(h),u.appendChild(g),r.appendChild(c),r.appendChild(u),a.appendChild(r);let b=document.createElement("div");b.classList.add("cart-box"),t.appendChild(b);let C=document.createElement("ul");C.classList.add("cart-box-ul"),b.appendChild(C);let E=document.createElement("h4");E.classList.add("cart-h4"),E.innerText="Your Order.",C.appendChild(E);for(let t=0;t<=4;t++){let i=document.createElement("a");i.href="#",i.classList.add("cart-item");let a=document.createElement("div");a.classList.add("img-box");let n=document.createElement("img"),d=t+1;n.src=e[d].img,n.setAttribute("alt","product-img"),n.setAttribute("width",50),n.setAttribute("height",50),n.setAttribute("loading","lazy"),n.classList.add("product-img"),a.appendChild(n);let s=document.createElement("h5");s.innerText="Product Name",s.classList.add("product-name");let l=document.createElement("p");l.classList.add("product-price"),l.innerText=65;let r=document.createElement("span");r.innerText="$",l.appendChild(r),i.appendChild(a),i.appendChild(s),i.appendChild(l);let c=document.createElement("li");c.appendChild(i),C.appendChild(c)}return t}()),l.appendChild(function(){let e=document.createElement("main"),t=document.createElement("section");t.classList.add("home"),t.setAttribute("id","home");let i=document.createElement("div");i.classList.add("home-left");let a=document.createElement("p");a.innerText="Hi, new friend!",a.classList.add("home-subtext");let l=document.createElement("h1");l.innerText="We do not cook, we create your emotions!",l.classList.add("main-heading");let r=document.createElement("p");r.innerText="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi",r.classList.add("home-text");let c=document.createElement("div");c.classList.add("btn-group");let m=document.createElement("button"),o=document.createElement("button");m.classList.add("btn","btn-primary","btn-icon"),o.classList.add("btn","btn-secondary","btn-icon");let u=document.createElement("img"),p=document.createElement("img");u.src=d,p.src="./images/arrow.svg",u.setAttribute("alt","menu icon"),p.setAttribute("alt","menu icon"),m.innerText="About us",o.innerText="Our menu",m.appendChild(u),o.appendChild(p),c.appendChild(m),c.appendChild(o),i.appendChild(a),i.appendChild(l),i.appendChild(r),i.appendChild(c);let h=document.createElement("div");h.classList.add("home-right");let g=document.createElement("img"),b=document.createElement("img"),C=document.createElement("img");g.src="./images/food1.png",b.src="./images/food2.png",C.src="./images/food3.png",g.setAttribute("alt","food image"),b.setAttribute("alt","food image"),C.setAttribute("alt","food image"),g.setAttribute("width",200),b.setAttribute("width",200),C.setAttribute("width",200),g.setAttribute("loading","lazy"),b.setAttribute("loading","lazy"),C.setAttribute("loading","lazy"),g.classList.add("food-img","food-1"),b.classList.add("food-img","food-2"),C.classList.add("food-img","food-3");let E=document.createElement("img"),L=document.createElement("img");E.src="./images/dialog-1.svg",L.src="./images/dialog-2.svg",E.setAttribute("alt","dialog"),L.setAttribute("alt","dialog"),E.setAttribute("width",230),L.setAttribute("width",230),E.classList.add("dialog","dialog-1"),L.classList.add("dialog","dialog-2");let f=document.createElement("img"),v=document.createElement("img"),A=document.createElement("img");f.src=n,v.src=n,A.src=n,f.setAttribute("alt","circle shape"),v.setAttribute("alt","circle shape"),A.setAttribute("alt","circle shape"),f.setAttribute("width",25),v.setAttribute("width",15),A.setAttribute("width",30),f.classList.add("shape","shape-1"),v.classList.add("shape","shape-2"),A.classList.add("shape","shape-3");let x=document.createElement("img"),T=document.createElement("img");return x.src=s,T.src=s,x.setAttribute("alt","ring shape"),T.setAttribute("alt","ring shape"),x.setAttribute("width",60),T.setAttribute("width",40),x.classList.add("shape","shape-4"),T.classList.add("shape","shape-5"),h.appendChild(g),h.appendChild(b),h.appendChild(C),h.appendChild(E),h.appendChild(L),h.appendChild(f),h.appendChild(v),h.appendChild(A),h.appendChild(x),h.appendChild(T),t.appendChild(i),t.appendChild(h),e.appendChild(t),e}()),l.appendChild(function(){let e=document.createElement("section");e.classList.add("about"),e.setAttribute("id","about");let t=document.createElement("div");t.classList.add("about-left");let i=document.createElement("div");i.classList.add("img-box");let d=document.createElement("img");d.src="./images/about-image.jpg",d.setAttribute("alt","about"),d.setAttribute("width",250),d.setAttribute("loading","lazy"),d.classList.add("about-img"),i.appendChild(d);let l=document.createElement("div");l.classList.add("abs-content-box");let r=document.createElement("div");r.classList.add("dotted-border");let c=document.createElement("p");c.innerText=17;let m=document.createElement("p");m.innerHTML="Years<br>Experience",r.appendChild(c),r.appendChild(m),l.appendChild(r);let o=document.createElement("img"),u=document.createElement("img"),p=document.createElement("img"),h=document.createElement("img");o.src=n,u.src=n,p.src=s,h.src=s,o.setAttribute("alt","circle shape"),u.setAttribute("alt","circle shape"),p.setAttribute("alt","ring shape"),h.setAttribute("alt","ring shape"),o.setAttribute("width",20),u.setAttribute("width",30),p.setAttribute("width",35),h.setAttribute("width",80),o.classList.add("shape","shape-6"),u.classList.add("shape","shape-7"),p.classList.add("shape","shape-8"),h.classList.add("shape","shape-9"),t.appendChild(i),t.appendChild(l),t.appendChild(o),t.appendChild(u),t.appendChild(p),t.appendChild(h);let g=document.createElement("div");g.classList.add("about-right");let b=document.createElement("h2");b.innerText="We are doing more than you expect",b.classList.add("section-title");let C=document.createElement("p");C.innerText=a,C.classList.add("section-text");let E=document.createElement("p");E.innerText=a,E.classList.add("section-text");let L=document.createElement("img");return L.src="./images/signature.png",L.setAttribute("alt","signature"),L.setAttribute("width",150),L.classList.add("signature"),g.appendChild(b),g.appendChild(C),g.appendChild(E),g.appendChild(L),e.appendChild(t),e.appendChild(g),e}()),l.appendChild(function(){let e=document.createElement("section");return e.classList.add("services"),e.setAttribute("id","service"),i.forEach((t=>{let i=document.createElement("div");i.classList.add("service-card");let a=document.createElement("p");a.classList.add("card-number"),a.innerText=`${t.serNumber}`;let n=document.createElement("h3");n.classList.add("card-heading"),n.innerText=`${t.serHeading}`;let d=document.createElement("p");d.classList.add("card-text"),d.innerText=`${t.serDescription}`,i.appendChild(a),i.appendChild(n),i.appendChild(d),e.appendChild(i)})),e}()),l.appendChild(function(){let t=document.createElement("section");t.setAttribute("id","menu"),t.classList.add("product");let i=document.createElement("h2");i.innerText="Most popular dishes",i.classList.add("section-title");let a=document.createElement("p");a.classList.add("section-text"),a.innerText=" Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.";let n=document.createElement("div");n.classList.add("products-grid"),e.forEach((e=>{let t=document.createElement("a");t.href="#";let i=document.createElement("div");i.classList.add("product-card");let a=document.createElement("div");a.classList.add("img-box");let d=document.createElement("img");d.src=`${e.img}`,d.setAttribute("alt",`${e.alt}`),d.classList.add("product-img"),d.setAttribute("width",200),d.setAttribute("loading","lazy"),a.appendChild(d);let s=document.createElement("div");s.classList.add("product-content");let l=document.createElement("div");l.classList.add("wrapper");let r=document.createElement("h3");r.classList.add("product-name"),r.innerText=`${e.name}`;let c=document.createElement("p");c.classList.add("product-price");let m=document.createElement("span");m.classList.add("small"),m.innerText="$",c.appendChild(m),c.innerText=`${e.price}`,l.appendChild(r),l.appendChild(c),s.appendChild(l),i.appendChild(a),i.appendChild(s),t.appendChild(i),n.appendChild(t)}));let s=document.createElement("button");s.classList.add("btn","btn-primary","btn-icon");let l=document.createElement("img");return l.src=d,l.setAttribute("alt","menu icon"),s.appendChild(l),s.innerText="Full menu",t.appendChild(i),t.appendChild(a),t.appendChild(n),t.appendChild(s),t}()),l.appendChild(function(){let e=document.createElement("section");e.classList.add("testimonials"),e.setAttribute("id","testimonials");let i=document.createElement("h2");i.classList.add("section-title"),i.innerText="What our customers say?";let a=document.createElement("p");a.classList.add("section-text"),a.innerText="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi";let n=document.createElement("div");return n.classList.add("testimonials-grid"),t.forEach((e=>{let t=document.createElement("div");t.classList.add("testimonials-card");let i=document.createElement("h4");i.innerText=e.heading,i.classList.add("card-title");let a=document.createElement("div");a.classList.add("testimonials-rating");let d=document.createElement("p");d.classList.add("testimonials-text"),d.innerText=e.review;let s=document.createElement("div");s.classList.add("customer-info");let l=document.createElement("div");l.classList.add("customer-img-box");let r=document.createElement("img");r.src=e.img,r.classList.add("customer-img");let c=document.createElement("h5");c.innerText=e.name,c.classList.add("customer-name"),l.appendChild(r),s.appendChild(l),s.appendChild(c),t.appendChild(i),t.appendChild(a),t.appendChild(d),t.appendChild(s),n.appendChild(t)})),e.appendChild(i),e.appendChild(a),e.appendChild(n),e}()),l.appendChild(function(){let e=document.createElement("footer"),t=document.createElement("div");t.classList.add("footer-wrapper");let i=document.createElement("a");i.href="#";let a=document.createElement("img");a.src="./images/logo-footer.svg",a.setAttribute("width","130"),a.classList.add("footer-brand"),i.appendChild(a);let n=document.createElement("div");n.classList.add("social-link");let d=document.createElement("a");d.href="#";let s=document.createElement("icon");s.setAttribute("name","logo-twitter"),d.appendChild(s);let l=document.createElement("a");l.href="#";let r=document.createElement("icon");r.setAttribute("name","logo-instagram"),l.appendChild(r);let c=document.createElement("a");c.href="#";let m=document.createElement("icon");m.setAttribute("name","logo-facebook"),c.appendChild(m);let o=document.createElement("a");o.href="#";let u=document.createElement("icon");u.setAttribute("name","logo-youtube"),o.appendChild(u),n.appendChild(d),n.appendChild(l),n.appendChild(c),n.appendChild(o);let p=document.createElement("p");return p.classList.add("copyright"),p.innerHTML="&copy; Copyright 2022 Foodhub. All Rights Reserved",t.appendChild(i),t.appendChild(n),t.appendChild(p),e.appendChild(t),e}())})();