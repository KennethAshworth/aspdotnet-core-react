!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("prop-types")},function(e,t,a){"use strict";var l,n=a(4),r=(l=n)&&l.__esModule?l:{default:l};var s=a(19),c=s();c.use(s.static("public",{index:!1})),c.get("*",function(e,t){404==(0,r.default)(e).routestatus?t.status(404).end("Not found, 404 status returned"):t.send((0,r.default)(e).htmlcode)}),c.listen(3040,function(){console.log("Listening on port 3040!")})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=c(a(0)),n=a(5),r=a(1),s=c(a(6));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t={};return{htmlcode:'<html>\n          <head>\n            <title>SVCC React Application</title>\n            <link rel="stylesheet" href="App.css">            \n          </head>\n          \n          <body>\n            <div id="app">'+(0,n.renderToString)(l.default.createElement(r.StaticRouter,{location:e.path,context:t},l.default.createElement(s.default,null)))+'</div>\n            <script src="clientbundle.js"><\/script>\n          </body>\n          \n        </html>\n      ',routestatus:t.status}}},function(e,t){e.exports=require("react-dom/server")},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=d(n),s=d(a(7)),c=d(a(8)),o=d(a(9)),u=d(a(10));function d(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handler=a.handler.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"handler",value:function(e){this.props.action()}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(c.default,null,r.default.createElement(s.default,null)),r.default.createElement(u.default,{action:this.handler}),r.default.createElement(o.default,null))}}]),t}();i.defaultProps={},t.default=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"header__open-button-mobile"},r.default.createElement("a",{href:"",className:"js-open-main-menu"},r.default.createElement("i",{className:"fa fa-bars"}))),r.default.createElement("div",{className:"header__user"},r.default.createElement("img",{src:"assets/images/user-icon.png",className:"header__user__icon",alt:"User Icon"}),r.default.createElement("span",{className:"header__user__hello"},"Hello, stranger"),r.default.createElement(s.Link,{to:"/login"},"Login")),r.default.createElement("ul",{className:"header__menu-list js-menu"},r.default.createElement("li",{className:"close-button-mobile"},r.default.createElement("a",{href:"",className:"js-close-main-menu"},r.default.createElement("i",{className:"fa fa-remove"}))),r.default.createElement("li",null,r.default.createElement(s.Link,{to:"/"},"Home")),r.default.createElement("li",null,r.default.createElement(s.Link,{to:"/speakers"},"Speakers")),r.default.createElement("li",{className:"social-icon"},r.default.createElement("a",{href:""},r.default.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),r.default.createElement("li",{className:"social-icon"},r.default.createElement("a",{href:""},r.default.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),r.default.createElement("li",{className:"social-icon"},r.default.createElement("a",{href:""},r.default.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})))))};var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l},s=a(1)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var l=r(a(0)),n=r(a(2));function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return l.default.createElement("div",null,l.default.createElement("header",{className:"header"},l.default.createElement("div",{className:"container-main d-flex align-items-center justify-content-between"},l.default.createElement("a",{href:"/",rel:"home",className:"header-logo"},l.default.createElement("img",{src:"assets/images/SVCClogo.png",alt:"SVCC"})),e.children)))}s.propTypes={children:n.default.oneOfType([n.default.arrayOf(n.default.node),n.default.node])}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("footer",{className:"footer"},r.default.createElement("div",{className:"container-main"},r.default.createElement("div",{className:"footer__menu"}),r.default.createElement("div",{className:"footer__disclaimer"},r.default.createElement("p",null,"Code Stars Summit and Silicon Valley Code Camp (tm) are trademarks of 73rd Street Associates (Copyright ©"),r.default.createElement("p",null,"Site built with ASP.NET, WebAPI2, React and more by  ",r.default.createElement("strong",null,"PeterKellner.net")))))};var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=i(n),s=a(1),c=i(a(11)),o=i(a(15)),u=i(a(17)),d=i(a(18));function i(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handler=a.handler.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"handler",value:function(){this.props.action()}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(s.Switch,null,r.default.createElement(s.Route,{exact:!0,path:"/",component:c.default}),r.default.createElement(s.Route,{exact:!0,path:"/speakers",component:o.default}),r.default.createElement(s.Route,{exact:!0,path:"/login",component:u.default}),r.default.createElement(s.Route,{render:function(){return r.default.createElement(d.default,null)}})))}}]),t}();m.propTypes={},m.defaultProps={},t.default=m},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var l=c(a(0)),n=c(a(2)),r=c(a(12)),s=c(a(13));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return l.default.createElement("div",null,l.default.createElement(r.default,null),l.default.createElement(s.default,null))}o.propTypes={notify:n.default.func}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("div",{className:"jumbo-events"},r.default.createElement("div",{className:"container-main"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-12 col-sm-4 jumbo-events__info"},r.default.createElement("div",{className:"jumbo-events__participants"},"527"),r.default.createElement("div",{className:"jumbo-events__participants-label"},"Participants"),r.default.createElement("div",{className:"jumbo-events__when-label"},"When"),r.default.createElement("div",{className:"jumbo-events__when"},"April 1st 2017"),r.default.createElement("div",{className:"jumbo-events__where-label"},"Where"),r.default.createElement("div",{className:"jumbo-events__where"},"Evergreen College, San Jose, CA"),r.default.createElement("div",{className:"jumbo-events__directions"},r.default.createElement("a",{href:""},"See directions"))),r.default.createElement("div",{className:"col-12 col-sm-8"},r.default.createElement("div",{className:"jumbo-events__title"},"SVCC 2017"),r.default.createElement("div",{className:"jumbo-events__description"},"Silicon Valley Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."),r.default.createElement("div",{className:"jumbo-events__buttons"},r.default.createElement("div",{className:"dropdown"},r.default.createElement("button",{className:"btn btn-white dropdown-toggle",type:"button",id:"dropdownEventsJumbo","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.default.createElement("span",{className:"dropdown__label--registered"},r.default.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Registered")),r.default.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownEventsJumbo"},r.default.createElement("a",{className:"dropdown-item",href:""},"Interested?"),r.default.createElement("a",{className:"dropdown-item",href:""},"Register"),r.default.createElement("a",{className:"dropdown-item",href:""},"Interested"))),r.default.createElement("a",{href:"",className:"btn btn-primary"},"Update your details"))))))};var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return l.default.createElement("div",{className:"container-main events"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-12"},l.default.createElement(n.default,null))))};var l=r(a(0)),n=r(a(14));function r(e){return e&&e.__esModule?e:{default:e}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("div",{className:"speakers-carousel"},r.default.createElement("div",{className:"speakers-carousel__title"},"Meet the speakers"),r.default.createElement("div",{id:"speakersCarouselIndicators",className:"carousel slide d-flex align-items-center","data-interval":"false"},r.default.createElement("div",{className:"carousel-inner",role:"listbox"},r.default.createElement("div",{className:"carousel-item  active "},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker0.png",alt:"Diane Green"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Diane Green"),r.default.createElement("div",{className:"speaker-position"},"Senior Vice President"),r.default.createElement("div",{className:"speaker-company"},"Google Cloud"))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker1.png",alt:"Marc Andreessen"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Marc Andreessen"),r.default.createElement("div",{className:"speaker-position"},"Cofounder and General Partner"),r.default.createElement("div",{className:"speaker-company"},"Andreessen Horowitz"))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker2.png",alt:"Llewellyn Falco"}),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Llewellyn Falco"),r.default.createElement("div",{className:"speaker-position"},"Inventor of Approval testing"),r.default.createElement("div",{className:"speaker-company"})))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker3.png",alt:"Stefania Kaczmarczyk"}),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Stefania Kaczmarczyk"),r.default.createElement("div",{className:"speaker-position"},"Developer advocate"),r.default.createElement("div",{className:"speaker-company"},"IBM")))))),r.default.createElement("div",{className:"carousel-item "},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker0.png",alt:"Diane Green"}),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Diane Green"),r.default.createElement("div",{className:"speaker-position"},"Senior Vice President"),r.default.createElement("div",{className:"speaker-company"},"Google Cloud"))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker1.png",alt:"Marc Andreessen"})),r.default.createElement("div",{className:"speaker-name"},"Marc Andreessen"),r.default.createElement("div",{className:"speaker-position"},"Cofounder and General Partner"),r.default.createElement("div",{className:"speaker-company"},"Andreessen Horowitz"))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker2.png",alt:"Llewellyn Falco"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Llewellyn Falco"),r.default.createElement("div",{className:"speaker-position"},"Inventor of Approval testing")),r.default.createElement("div",{className:"speaker-company"}))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker3.png",alt:"Stefania Kaczmarczyk"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Stefania Kaczmarczyk"),r.default.createElement("div",{className:"speaker-position"},"Developer advocate"),r.default.createElement("div",{className:"speaker-company"},"IBM")))),r.default.createElement("div",{className:"carousel-item "},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker0.png",alt:"Diane Green"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Diane Green"),r.default.createElement("div",{className:"speaker-position"},"Senior Vice President"),r.default.createElement("div",{className:"speaker-company"},"Google Cloud"))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker1.png",alt:"Marc Andreessen"})),r.default.createElement("div",{className:"speaker-name"},"Marc Andreessen"),r.default.createElement("div",{className:"speaker-position"},"Cofounder and General Partner"),r.default.createElement("div",{className:"speaker-company"},"Andreessen Horowitz"))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker2.png",alt:"Llewellyn Falco"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Llewellyn Falco"),r.default.createElement("div",{className:"speaker-position"},"Inventor of Approval testing"),r.default.createElement("div",{className:"speaker-company"}))),r.default.createElement("div",{className:"col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center carousel-speaker-block"},r.default.createElement("div",{className:"speaker-photo"},r.default.createElement("img",{src:"assets/images/speakers/speaker3.png",alt:"Stefania Kaczmarczyk"})),r.default.createElement("div",null,r.default.createElement("div",{className:"speaker-name"},"Stefania Kaczmarczyk"),r.default.createElement("div",{className:"speaker-position"},"Developer advocate"),r.default.createElement("div",{className:"speaker-company"},"IBM")))),r.default.createElement("ol",{className:"carousel-indicators"},r.default.createElement("li",{"data-target":"#speakersCarouselIndicators","data-slide-to":"0",className:"active"}),r.default.createElement("li",{"data-target":"#speakersCarouselIndicators","data-slide-to":"1"}),r.default.createElement("li",{"data-target":"#speakersCarouselIndicators","data-slide-to":"2"}))),r.default.createElement("a",{className:"carousel-control-prev",href:"#speakersCarouselIndicators",role:"button","data-slide":"prev"},r.default.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),r.default.createElement("a",{className:"carousel-control-next",href:"#speakersCarouselIndicators",role:"button","data-slide":"next"},r.default.createElement("i",{className:"fa fa-angle-right","aria-hidden":"true"}))))};var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return l.default.createElement("div",null,l.default.createElement(n.default,null))};var l=r(a(0)),n=r(a(16));function r(e){return e&&e.__esModule?e:{default:e}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("div",{className:"jumbo-common  speakers "},r.default.createElement("div",{className:"container-main"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-12"},r.default.createElement("div",{className:"jumbo-common__tip"},"Name of the event"),r.default.createElement("div",{className:"jumbo-common__content"},r.default.createElement("h1",{className:"jumbo-common__title"},"The Speakers"),r.default.createElement("div",{className:"jumbo-common__desc"},"Silicon Valley Code Camp is the Perfect place to watch engaging and entertaining talks given by industry experts and luminaries, and meet with developers for enaging and motivating conversations around specific topics......"))))))};var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Login Page Place Holder"))};var l,n=a(0),r=(l=n)&&l.__esModule?l:{default:l}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),r=a(0),s=(l=r)&&l.__esModule?l:{default:l},c=a(1);var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"componentDidMount",value:function(){this.props.action(!0)}},{key:"render",value:function(){return console.log("route not found in RouteNotFound.js.  Bubble up..."),s.default.createElement(c.Route,{render:function(e){var t=e.staticContext;return t&&(t.status=404),s.default.createElement("div",null,s.default.createElement("h1",null,"404 : Not Found!"))}})}}]),t}();o.defaultProps={},t.default=o},function(e,t){e.exports=require("express")}]);
//# sourceMappingURL=serverbundle.js.map