import{Q as s,a5 as p,a6 as i,a7 as u,a8 as c,a9 as l,aa as d,ab as f,ac as m,ad as h,ae as A,M as g,d as P,u as v,p as y,k as C,af as w,ag as _,ah as b,ai as E}from"./chunks/framework.38b76f8a.js";import{t as R}from"./chunks/theme.969a1ffe.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(R),D=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),_(),b(),n.setup&&n.setup(),()=>E(n.Layout)}});async function O(){const e=T(),a=S();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function S(){return m(D)}function T(){let e=s,a;return h(t=>{let o=A(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{O as createApp};
