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

  for(let i=0; i<=4; i++) {
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

function makeMain() {
   let main = document.createElement("main");
   let section1 = document.createElement("section");
   section1.classList.add('home');
   section1.setAttribute('id','home');
   
 //Making the left elements of Main
   let left = document.createElement('div');
   left.classList.add('home-left');
   let greet = document.createElement('p');
   greet.innerText = home.greeting;
   greet.classList.add('home-subtext');
   let title = document.createElement('h1');
   title.innerText = home.title;
   title.classList.add('main-heading');
   let explanation = document.createElement('p');
   explanation.innerText = home.explain;
   explanation.classList.add('home-text');

   let btnLeft = document.createElement('div');
   btnLeft.classList.add('btn-group');
   let ourMenu = document.createElement('button');
   let abtBtn = document.createElement('button');
   ourMenu.classList.add('btn','btn-primary','btn-icon');
   abtBtn.classList.add('btn','btn-secondary','btn-icon');
   let menuSVG =document.createElement('img');
   let arrowSVG = document.createElement('img');
   menuSVG.src = common.menu;
   arrowSVG.src = common.arrow;
   menuSVG.setAttribute('alt','menu icon');
   arrowSVG.setAttribute('alt','menu icon');
   ourMenu.innerText = "About us";
   abtBtn.innerText = "Our menu";

   ourMenu.appendChild(menuSVG);
   abtBtn.appendChild(arrowSVG);

   btnLeft.appendChild(ourMenu);
   btnLeft.appendChild(abtBtn);
   
  left.appendChild(greet);
  left.appendChild(title);
  left.appendChild(explanation);
  left.appendChild(btnLeft);

  let right = document.createElement('div');
  right.classList.add('home-right');

  let food1 =document.createElement('img');
  let food2 =document.createElement('img');
  let food3 =document.createElement('img');

  food1.src = home.food1;
  food2.src = home.food2;
  food3.src = home.food3;
  food1.setAttribute('alt','food image');
  food2.setAttribute('alt','food image');
  food3.setAttribute('alt','food image');
  
  food1.setAttribute('width',200);
  food2.setAttribute('width',200);
  food3.setAttribute('width',200);

  food1.setAttribute('loading','lazy');
  food2.setAttribute('loading','lazy');
  food3.setAttribute('loading','lazy');


  food1.classList.add('food-img','food-1');
  food2.classList.add('food-img','food-2');
  food3.classList.add('food-img','food-3');

  let dialog1 =document.createElement('img');
  let dialog2 =document.createElement('img');
  

  dialog1.src = common.dialog1;
  dialog2.src = common.dialog2;
  
  dialog1.setAttribute('alt','dialog');
  dialog2.setAttribute('alt','dialog');
  
  
  dialog1.setAttribute('width',230);
  dialog2.setAttribute('width',230);
  

  dialog1.classList.add('dialog','dialog-1');
  dialog2.classList.add('dialog','dialog-2');
  

  let circle1 =document.createElement('img');
  let circle2 =document.createElement('img');
  let circle3 =document.createElement('img');

  circle1.src = common.circle;
  circle2.src = common.circle;
  circle3.src = common.circle;

  circle1.setAttribute('alt','circle shape');
  circle2.setAttribute('alt','circle shape');
  circle3.setAttribute('alt','circle shape');

  circle1.setAttribute('width',25);
  circle2.setAttribute('width',15);
  circle3.setAttribute('width',30);

  circle1.classList.add('shape','shape-1');
  circle2.classList.add('shape','shape-2');
  circle3.classList.add('shape','shape-3');

  let ring1 =document.createElement('img');
  let ring2 =document.createElement('img');
  

  ring1.src = common.ring;
  ring2.src = common.ring;
  
  ring1.setAttribute('alt','ring shape');
  ring2.setAttribute('alt','ring shape');
  
  
  ring1.setAttribute('width',60);
  ring2.setAttribute('width',40);
  

  ring1.classList.add('shape','shape-4');
  ring2.classList.add('shape','shape-5');

  right.appendChild(food1);
  right.appendChild(food2);
  right.appendChild(food3);
  right.appendChild(dialog1);
  right.appendChild(dialog2);
  right.appendChild(circle1);
  right.appendChild(circle2);
  right.appendChild(circle3);
  right.appendChild(ring1);
  right.appendChild(ring2);
  section1.appendChild(left);
  section1.appendChild(right);
  main.appendChild(section1);
  return main;
}

function makeProductSection(){
  let productSection = document.createElement('section');
  productSection.classList.add('about');
  productSection.setAttribute('id','about');

  let abtLeft = document.createElement('div');
  abtLeft.classList.add('about-left');

  let abtImgBox = document.createElement('div');
  abtImgBox.classList.add('img-box');
  let abtImg = document.createElement('img');
  abtImg.src = about.image;
  abtImg.setAttribute('alt','about');
  abtImg.setAttribute('width',250);
  abtImg.setAttribute('loading','lazy');
  abtImg.classList.add('about-img');
  abtImgBox.appendChild(abtImg);

  let absBox = document.createElement('div');
  absBox.classList.add('abs-content-box');
  let dottedBox = document.createElement('div');
  dottedBox.classList.add('dotted-border');
  let years = document.createElement('p');
  years.innerText = about.year;
  let expriance = document.createElement('p');
  expriance.innerHTML = "Years<br>Experience";
  dottedBox.appendChild(years);
  dottedBox.appendChild(expriance);

  absBox.appendChild(dottedBox);

  let circle1 =document.createElement('img');
  let circle2 =document.createElement('img');
  let ring1 =document.createElement('img');
  let ring2 =document.createElement('img');


  circle1.src =common.circle;
  circle2.src = common.circle;
  ring1.src = common.ring;
  ring2.src = common.ring;

  circle1.setAttribute('alt','circle shape');
  circle2.setAttribute('alt','circle shape');
  ring1.setAttribute('alt','ring shape');
  ring2.setAttribute('alt','ring shape');
  
  circle1.setAttribute('width',20);
  circle2.setAttribute('width',30);
  ring1.setAttribute('width',35);
  ring2.setAttribute('width',80);


  circle1.classList.add('shape','shape-6');
  circle2.classList.add('shape','shape-7');
  ring1.classList.add('shape','shape-8');
  ring2.classList.add('shape','shape-9')

  abtLeft.appendChild(abtImgBox);
  abtLeft.appendChild(absBox);
  abtLeft.appendChild(circle1);
  abtLeft.appendChild(circle2);
  abtLeft.appendChild(ring1); 
  abtLeft.appendChild(ring2);


  let abtRight = document.createElement('div');
  abtRight.classList.add('about-right');

  let h2 = document.createElement('h2');
  h2.innerText = about.title;
  h2.classList.add('section-title');
  let p = document.createElement('p');
  p.innerText = about.description;
  p.classList.add('section-text');

  let p2 = document.createElement('p');
  p2.innerText = about.description;
  p2.classList.add('section-text');

  let signature = document.createElement('img');
  signature.src = about.signature;
  signature.setAttribute('alt','signature');
  signature.setAttribute('width',150);
  signature.classList.add('signature');

  abtRight.appendChild(h2);
  abtRight.appendChild(p);
  abtRight.appendChild(p2);
  abtRight.appendChild(signature);

  productSection.appendChild(abtLeft);
  productSection.appendChild(abtRight);


  return productSection;
}


function makeServices() {
  let serviceContainer = document.createElement('section');
  serviceContainer.classList.add('services');
  serviceContainer.setAttribute('id','service');


  services.forEach(service => {
    
      let serviceCard = document.createElement('div');
      serviceCard.classList.add('service-card');
      let cardNumber = document.createElement('p');
      cardNumber.classList.add('card-number');
      cardNumber.innerText = `${service.serNumber}`;
      
      let cardHeading = document.createElement('h3');
      cardHeading.classList.add('card-heading');
      cardHeading.innerText = `${service.serHeading}`;
  
      let cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.innerText = `${service.serDescription}`;
  
      serviceCard.appendChild(cardNumber);
      serviceCard.appendChild(cardHeading);
      serviceCard.appendChild(cardText);
      serviceContainer.appendChild(serviceCard);
    
  })
  
  
  return serviceContainer;
}


function makeMenu() {
  let menuSection = document.createElement('section');
  menuSection.setAttribute('id','menu');
  menuSection.classList.add('product');

  let menuH2 = document.createElement('h2');
  menuH2.innerText = "Most popular dishes";
  menuH2.classList.add('section-title');

  let menuP = document.createElement('p');
  menuP.classList.add('section-text');
  menuP.innerText = " Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.";

  let menuGrid = document.createElement('div');
  menuGrid.classList.add('products-grid');

  menu.forEach(menuItem => { 
    let menuLink = document.createElement('a');
    menuLink.href = "#";
    let card = document.createElement('div');
    card.classList.add('product-card');

    let imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    let menuImg = document.createElement('img');
    menuImg.src = `${menuItem.img}`;
    menuImg.setAttribute('alt', `${menuItem.alt}`);
    menuImg.classList.add('product-img');
    menuImg.setAttribute('width',200);
    menuImg.setAttribute('loading','lazy');
    imgBox.appendChild(menuImg);

    let menuContent = document.createElement('div');
    menuContent.classList.add('product-content');

     let wrapper = document.createElement('div');
     wrapper.classList.add('wrapper');
     let menuName = document.createElement('h3');
     menuName.classList.add('product-name');
     menuName.innerText =`${`${menuItem.name}`}`;

     let menuPrice = document.createElement('p');
     menuPrice.classList.add('product-price');
     let dollar = document.createElement('span');
     dollar.classList.add('small');
     dollar.innerText = "$";
     menuPrice.appendChild(dollar);
     menuPrice.innerText = `${menuItem.price}`;

     wrapper.appendChild(menuName);
     wrapper.appendChild(menuPrice);

  
    menuContent.appendChild(wrapper);
    //menuContent.appendChild(menuText);
    //menuContent.appendChild(ratingBox);
    card.appendChild(imgBox);
    card.appendChild(menuContent);
    menuLink.appendChild(card);

    menuGrid.appendChild(menuLink);
  });

  let fullMenu = document.createElement('button');
  fullMenu.classList.add('btn','btn-primary','btn-icon');
  let menuSVG = document.createElement('img');
  menuSVG.src = common.menu;
  menuSVG.setAttribute('alt','menu icon');
  fullMenu.appendChild(menuSVG);
  fullMenu.innerText = "Full menu";
  
  menuSection.appendChild(menuH2);
  menuSection.appendChild(menuP);
  menuSection.appendChild(menuGrid);
  menuSection.appendChild(fullMenu);
  return menuSection;
}

function makeTestimonials() {
  let testimonialSection = document.createElement('section');
  testimonialSection.classList.add('testimonials');
  testimonialSection.setAttribute('id','testimonials');

  let title = document.createElement('h2');
  title.classList.add('section-title');
  title.innerText = "What our customers say?";

  let sectionText = document.createElement('p');
  sectionText.classList.add('section-text');

  sectionText.innerText = "Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi";

  let testimonalGrid = document.createElement('div');
  testimonalGrid.classList.add('testimonials-grid');

  //Grid Elements

  reviews.forEach(reviewer=>{
    let card = document.createElement('div');
    card.classList.add('testimonials-card');
  
    let cardTitle = document.createElement('h4');
    cardTitle.innerText = reviewer.heading;
    cardTitle.classList.add('card-title');
    
    let rating = document.createElement('div');
    rating.classList.add('testimonials-rating');

    let comment = document.createElement('p');
    comment.classList.add('testimonials-text');
    comment.innerText = reviewer.review;

    let customer = document.createElement('div');
    customer.classList.add('customer-info');

    let imgBox = document.createElement('div');
    imgBox.classList.add('customer-img-box');
    let img = document.createElement('img');
    img.src = reviewer.img;
    img.classList.add('customer-img');

    let name = document.createElement('h5');
    name.innerText = reviewer.name;
    name.classList.add('customer-name');

    imgBox.appendChild(img);

    customer.appendChild(imgBox);
    customer.appendChild(name);
    
    card.appendChild(cardTitle);
    card.appendChild(rating);
    card.appendChild(comment);
    card.appendChild(customer);

    testimonalGrid.appendChild(card);
  
  });

  testimonialSection.appendChild(title);
  testimonialSection.appendChild(sectionText);
  testimonialSection.appendChild(testimonalGrid);
  
  return testimonialSection;

}


function makeFooter() {
  let footer = document.createElement('footer');
  let container = document.createElement('div');
  container.classList.add('footer-wrapper');

  let a = document.createElement('a');
  a.href = "#";
  let img = document.createElement('img');
  img.src = common["logo-footer"];
  img.setAttribute('width','130');
  img.classList.add('footer-brand');

  a.appendChild(img);

  let social = document.createElement('div');
  social.classList.add('social-link');
  
  let twit = document.createElement('a');
  twit.href = '#';
  let icon1 = document.createElement('icon');
  icon1.setAttribute('name','logo-twitter');
  twit.appendChild(icon1);

  let insta = document.createElement('a');
  insta.href = '#';
  let icon2 = document.createElement('icon');
  icon2.setAttribute('name','logo-instagram');
  insta.appendChild(icon2);

  let fb = document.createElement('a');
  fb.href = '#';
  let icon3 = document.createElement('icon');
  icon3.setAttribute('name','logo-facebook');
  fb.appendChild(icon3);

  let you = document.createElement('a');
  you.href = '#';
  let icon4 = document.createElement('icon');
  icon4.setAttribute('name','logo-youtube');
  you.appendChild(icon4);


  social.appendChild(twit);
  social.appendChild(insta);
  social.appendChild(fb);
  social.appendChild(you);

  let right = document.createElement('p');
  right.classList.add('copyright');
  right.innerHTML = "&copy; Copyright 2022 Foodhub. All Rights Reserved";


  container.appendChild(a);
  container.appendChild(social);
  container.appendChild(right);

  footer.appendChild(container);
  return footer;
}
export { makeHeader, makeMain, makeProductSection , makeServices , makeMenu , makeTestimonials , makeFooter };

