"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[839],{6839:function(e,r,t){t.r(r),t.d(r,{default:function(){return W}});var n=t(9439),i=t(2791),s=t(3464),o=t(4448),a=t(9037),l=t(2007),c=t.n(l),u=t(1694),f=t.n(u),b=t(9622),d=t(7802),p=["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function y(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=j(j({},d.ZP.propTypes),{},{children:c().oneOfType([c().arrayOf(c().node),c().node]),tag:b.iC,baseClass:c().string,baseClassActive:c().string,className:c().string,cssModule:c().object,innerRef:c().oneOfType([c().object,c().string,c().func])}),v=j(j({},d.ZP.defaultProps),{},{timeout:b.wF.Fade,appear:!0,enter:!0,exit:!0,in:!0});function x(e){var r=(0,i.useRef)(null),t=e.tag,n=void 0===t?"div":t,s=e.baseClass,o=void 0===s?"fade":s,a=e.baseClassActive,l=void 0===a?"show":a,c=e.className,u=e.cssModule,m=e.children,g=e.innerRef,O=void 0===g?r:g,x=y(e,p),w=(0,b.ei)(j({defaultProps:v},x),b.rb),k=(0,b.CE)(x,b.rb);return i.createElement(d.ZP,h({nodeRef:O},w),(function(e){var r="entered"===e,t=(0,b.mx)(f()(c,o,r&&l),u);return i.createElement(n,h({className:t},k,{ref:O}),m)}))}x.propTypes=O,x.defaultProps=v;var w=x,k=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},N.apply(this,arguments)}function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){Z(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Z(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var E={children:c().node,className:c().string,closeClassName:c().string,closeAriaLabel:c().string,color:c().string,cssModule:c().object,fade:c().bool,innerRef:c().oneOfType([c().object,c().string,c().func]),isOpen:c().bool,tag:b.iC,toggle:c().func,transition:c().shape(w.propTypes)};function S(e){var r=e.className,t=e.closeClassName,n=e.closeAriaLabel,s=void 0===n?"Close":n,o=e.cssModule,a=e.tag,l=void 0===a?"div":a,c=e.color,u=void 0===c?"success":c,d=e.isOpen,p=void 0===d||d,h=e.toggle,y=e.children,m=e.transition,j=void 0===m?T(T({},w.defaultProps),{},{unmountOnExit:!0}):m,g=e.fade,O=void 0===g||g,v=e.innerRef,x=C(e,k),P=(0,b.mx)(f()(r,"alert","alert-".concat(u),{"alert-dismissible":h}),o),Z=(0,b.mx)(f()("btn-close",t),o),E=T(T(T({},w.defaultProps),j),{},{baseClass:O?j.baseClass:"",timeout:O?j.timeout:0});return i.createElement(w,N({},x,E,{tag:l,className:P,in:p,role:"alert",innerRef:v}),h?i.createElement("button",{type:"button",className:Z,"aria-label":s,onClick:h}):null,y)}S.propTypes=E;var R=S;function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function M(){return M=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},M.apply(this,arguments)}function I(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,r){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},D(e,r)}function _(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=L(e);if(r){var i=L(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return function(e,r){if(r&&("object"===A(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}(this,t)}}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var B=function(e){!function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&D(e,r)}(o,e);var r,t,n,s=_(o);function o(e){var r;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,o),(r=s.call(this,e)).state={isOpen:!0},r.toggle=r.toggle.bind(G(r)),r}return r=o,(t=[{key:"toggle",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){return i.createElement(R,M({isOpen:this.state.isOpen,toggle:this.toggle},this.props))}}])&&I(r.prototype,t),n&&I(r,n),Object.defineProperty(r,"prototype",{writable:!1}),o}(i.Component),F=t(184),W=function(){var e=(0,i.useState)(!0),r=(0,n.Z)(e,2),t=r[0],l=r[1],c=function(){l(!1)};return(0,F.jsxs)("div",{children:[(0,F.jsxs)(s.Z,{children:[(0,F.jsxs)(o.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,F.jsx)("i",{className:"bi bi-bell me-2",children:" "}),"Alert"]}),(0,F.jsx)(a.Z,{className:"",children:(0,F.jsxs)("div",{className:"mt-3",children:[(0,F.jsx)(R,{color:"primary",children:"This is a primary alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"secondary",children:"This is a secondary alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"success",children:"This is a success alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"danger",children:"This is a danger alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"warning",children:"This is a warning alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"info",children:"This is a info alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"light",children:"This is a light alert\u2014 check it out!"}),(0,F.jsx)(R,{color:"dark",children:"This is a dark alert"})]})})]}),(0,F.jsxs)(s.Z,{children:[(0,F.jsxs)(o.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,F.jsx)("i",{className:"bi bi-bell me-2"}),"Alert with Links"]}),(0,F.jsx)(a.Z,{className:"",children:(0,F.jsxs)("div",{children:[(0,F.jsxs)(R,{color:"primary",children:["This is a primary alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"secondary",children:["This is a secondary alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"success",children:["This is a success alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"danger",children:["This is a danger alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"warning",children:["This is a warning alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"info",children:["This is a info alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"light",children:["This is a light alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]}),(0,F.jsxs)(R,{color:"dark",children:["This is a dark alert with",(0,F.jsx)("a",{href:"/",className:"alert-link",children:"an example link"}),". Give it a click if you like."]})]})})]}),(0,F.jsxs)(s.Z,{children:[(0,F.jsxs)(o.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,F.jsx)("i",{className:"bi bi-bell me-2"}),"Alert with Additional content"]}),(0,F.jsx)(a.Z,{className:"",children:(0,F.jsx)("div",{children:(0,F.jsxs)(R,{color:"success",children:[(0,F.jsx)("h4",{className:"alert-heading",children:"Well done!"}),(0,F.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),(0,F.jsx)("hr",{}),(0,F.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})})})]}),(0,F.jsxs)(s.Z,{children:[(0,F.jsxs)(o.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,F.jsx)("i",{className:"bi bi-bell me-2"}),"Alert with Dissmissing"]}),(0,F.jsx)(a.Z,{className:"",children:(0,F.jsx)("div",{children:(0,F.jsx)(R,{color:"info",isOpen:t,toggle:c.bind(null),children:"I am an alert and I can be dismissed!"})})})]}),(0,F.jsxs)(s.Z,{children:[(0,F.jsxs)(o.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,F.jsx)("i",{className:"bi bi-bell me-2"}),"Alert with Uncontrolled [disable] Alerts"]}),(0,F.jsx)(a.Z,{className:"",children:(0,F.jsx)("div",{children:(0,F.jsx)(B,{color:"info",children:"I am an alert and I can be dismissed!"})})})]}),(0,F.jsxs)(s.Z,{children:[(0,F.jsxs)(o.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,F.jsx)("i",{className:"bi bi-bell me-2"}),"Alerts without fade"]}),(0,F.jsx)(a.Z,{className:"",children:(0,F.jsxs)("div",{children:[(0,F.jsx)(R,{color:"primary",isOpen:t,toggle:c.bind(null),fade:!1,children:"I am a primary alert and I can be dismissed without animating!"}),(0,F.jsx)(B,{color:"warning",fade:!1,children:"I am an alert and I can be dismissed without animating!"})]})})]})]})}},3464:function(e,r,t){var n=t(2791),i=t(2007),s=t.n(i),o=t(1694),a=t.n(o),l=t(9622),c=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b={body:s().bool,className:s().string,color:s().string,cssModule:s().object,innerRef:s().oneOfType([s().object,s().string,s().func]),inverse:s().bool,outline:s().bool,tag:l.iC};function d(e){var r=e.className,t=e.cssModule,i=e.color,s=e.body,o=e.inverse,b=e.outline,d=e.tag,p=void 0===d?"div":d,h=e.innerRef,y=f(e,c),m=(0,l.mx)(a()(r,"card",!!o&&"text-white",!!s&&"card-body",!!i&&"".concat(b?"border":"bg","-").concat(i)),t);return n.createElement(p,u({},y,{className:m,ref:h}))}d.propTypes=b,r.Z=d},9037:function(e,r,t){var n=t(2791),i=t(2007),s=t.n(i),o=t(1694),a=t.n(o),l=t(9622),c=["className","cssModule","innerRef","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b={className:s().string,cssModule:s().object,innerRef:s().oneOfType([s().object,s().string,s().func]),tag:l.iC};function d(e){var r=e.className,t=e.cssModule,i=e.innerRef,s=e.tag,o=void 0===s?"div":s,b=f(e,c),d=(0,l.mx)(a()(r,"card-body"),t);return n.createElement(o,u({},b,{className:d,ref:i}))}d.propTypes=b,r.Z=d},4448:function(e,r,t){var n=t(2791),i=t(2007),s=t.n(i),o=t(1694),a=t.n(o),l=t(9622),c=["className","cssModule","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b={className:s().string,cssModule:s().object,tag:l.iC};function d(e){var r=e.className,t=e.cssModule,i=e.tag,s=void 0===i?"div":i,o=f(e,c),b=(0,l.mx)(a()(r,"card-title"),t);return n.createElement(s,u({},o,{className:b}))}d.propTypes=b,r.Z=d}}]);
//# sourceMappingURL=839.fd44c8a2.chunk.js.map