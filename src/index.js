import { makeHeader, makeMain,makeProductSection,makeServices , makeMenu, makeTestimonials , makeFooter } from "./page-load";
let content = document.getElementById('container');
content.appendChild(makeHeader());
content.appendChild(makeMain());
content.appendChild(makeProductSection());
content.appendChild(makeServices());
content.appendChild(makeMenu());
content.appendChild(makeTestimonials());
content.appendChild(makeFooter());