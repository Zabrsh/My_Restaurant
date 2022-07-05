import { header, menu, reviews, services, about, home, common } from "./config";

function makeHeader() {
  let header = document.createElement("header");
  let nav = document.createElement("nav");

  header.appendChild(nav);

  nav.classList.add("navbar");

  let wrapper = document.createElement("div");
  wrapper.classList.add("navbar-wrapper");
  nav.appendChild(wrapper);
  let a = document.createElement("a");
  a.href = "#";
  let logo_header = document.createElement("img");
  logo_header.setAttribute("src", common.logo);
  logo_header.setAttribute("alt", "logo");
  logo_header.setAttribute("width", 100);

  a.appendChild(logo_header);
  wrapper.appendChild(a);

  let navUl = document.createElement('ul');
  navUl.classList.add('navbar-nav');

let links = ["Home","About","Service","Menu","Testimonals"];
for(let i=0;i<=4;i++) {
let li = document.createElement('li');
let alink = document.createElement('a');
alink.classList.add('nav-link');
alink.href = "#" + links[i];
alink.innerText = links[i];

li.appendChild(alink);
navUl.appendChild(li);
}

wrapper.appendChild(navUl);


  let btnWrapper = document.createElement('div');
  btnWrapper.classList.add('navbar-btn-group');

  let btnCart = document.createElement('button');
  btnCart.classList.add('shopping-cart-btn');
  let btnImg = document.createElement('img');
  btnImg.setAttribute('src',common.cart);
  btnImg.setAttribute('width',18);
  btnImg.setAttribute('alt',"Shoping cart icon");

  btnCart.appendChild(btnImg);

  let element = document.createElement('span');
  element.classList.add('count');
  element.innerText = 5;

  btnCart.appendChild(element);
  let btnMenu = document.createElement('button');
  btnMenu.classList.add('menu-toggle-btn');
  let one = document.createElement('span');
  one.classList.add('line','one');
  let two = document.createElement('span');
  two.classList.add('line','two');
  let three = document.createElement('span');
  three.classList.add('line','three');

  btnMenu.appendChild(one);
  btnMenu.appendChild(two);
  btnMenu.appendChild(three);


  btnWrapper.appendChild(btnCart);
  btnWrapper.appendChild(btnMenu);

  wrapper.appendChild(btnWrapper);


  let cartBox = document.createElement('div');
  cartBox.classList.add('cart-box');
  header.appendChild(cartBox);

  let cartUl = document.createElement('ul');
  cartUl.classList.add('cart-box-ul');
  cartBox.appendChild(cartUl);

  let order = document.createElement('h4');
  order.classList.add('cart-h4');
  order.innerText = "Your Order.";
  cartUl.appendChild(order);

  for(let i=0; i<=5; i++) {
   let a = document.createElement('a');
   a.href = "#";
   a.classList.add('cart-item');
   let imgBox = document.createElement('div');
   imgBox.classList.add('img-box');
   let menuImg = document.createElement('img');
   let menuList = i + 1;
   menuImg.src = menu[menuList].img;
   menuImg.setAttribute('alt','product-img');
   menuImg.setAttribute('width',50);
   menuImg.setAttribute('height',50);
   menuImg.setAttribute('loading','lazy');
   menuImg.classList.add('product-img');
   imgBox.appendChild(menuImg);

   let h5 = document.createElement('h5');
   h5.innerText = "Product Name";
   h5.classList.add('product-name');

   let p = document.createElement('p');
   p.classList.add('product-price');
   p.innerText = 65;

   let span = document.createElement('span');
   span.innerText = "$";
   p.appendChild(span);

   a.appendChild(imgBox);
   a.appendChild(h5);
   a.appendChild(p);
   
   let listItem = document.createElement("li");
   listItem.appendChild(a);
   cartUl.appendChild(listItem);
  }
  return header;
}

export { makeHeader };
