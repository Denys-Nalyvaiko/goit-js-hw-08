function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function w(e){return c=e,f=setTimeout(j,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function j(){var e=v();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function O(e){return f=void 0,p&&o?y(e):(o=i=void 0,a)}function S(){var e=v(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return w(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},S.flush=function(){return void 0===f?a:O(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");let w={};!function(){if(localStorage.getItem("feedback-form-state")){w=JSON.parse(localStorage.getItem("feedback-form-state"));for(const e in w)w[e]&&(y.elements[e].value=w[e])}}(),y.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value;const t=JSON.stringify(w);localStorage.setItem("feedback-form-state",t)}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),!y.elements.email.value||!y.elements.message.value)return alert("Not today bro 🥲"),void open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");console.log(w),localStorage.removeItem("feedback-form-state"),y.reset(),w={}}));
//# sourceMappingURL=03-feedback.81063117.js.map