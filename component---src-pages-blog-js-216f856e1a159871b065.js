(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,a,t){"use strict";t.r(a);var n=t(170),l=t(0),r=t.n(l),s=t(156),c=t(152),i=t(171),o=t.n(i);a.default=function(){var e=n.data;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("h1",null," Blog "),r.a.createElement("ol",{className:o.a.posts},e.allMarkdownRemark.edges.map(function(e){return r.a.createElement("li",{className:o.a.post},r.a.createElement(c.a,{to:"/blog/"+e.node.fields.slug},r.a.createElement("h2",null," ",e.node.frontmatter.title),r.a.createElement("p",null," ",e.node.frontmatter.date," ")))}))))}},151:function(e,a,t){var n;e.exports=(n=t(155))&&n.default||n},152:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),s=t.n(r),c=t(33),i=t.n(c);t.d(a,"a",function(){return i.a});t(151),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},153:function(e){e.exports={data:{site:{siteMetadata:{author:"Penny Xu"}}}}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Penny Xu"}}}}},155:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),s=t.n(r),c=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},156:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(153),s=t(159),c=t.n(s),i=t(157),o=t.n(i),m=t(158),u=t(150),d=function(){var e=r.data;return l.a.createElement("footer",{className:c.a.footer},l.a.createElement("a",{className:o.a.gitItem,activeClassName:o.a.activegitItem,href:"https://github.com/Penny-Xu",target:"_blank"},l.a.createElement(m.a,{icon:u.a,size:"2x"})," "),l.a.createElement("a",{className:o.a.lItem,activeClassName:o.a.activelItem,href:"https://www.linkedin.com/in/penny-xu-421766103/",target:"_blank"},l.a.createElement(m.a,{icon:u.c,size:"2x"})),l.a.createElement("a",{className:o.a.instaItem,activeClassName:o.a.activeInstaItem,href:"https://www.instagram.com/lazycoalabear/",target:"_blank"}," ",l.a.createElement(m.a,{icon:u.b,size:"2x"})),l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author,", © 2019"))},f=t(154),v=t(152),E=t(160),p=t.n(E),N=function(){var e=f.data;return l.a.createElement("header",{className:p.a.header},l.a.createElement("h1",null,l.a.createElement(v.a,{className:p.a.title,to:"/"}," ",e.site.siteMetadata.title," ")),l.a.createElement("nav",null,l.a.createElement("ul",{className:p.a.navList},l.a.createElement("li",null,l.a.createElement(v.a,{className:p.a.navItem,activeClassName:p.a.activeNavItem,to:"/"}," Home ")),l.a.createElement("li",null,l.a.createElement(v.a,{className:p.a.navItem,activeClassName:p.a.activeNavItem,to:"/blog"}," Blog ")),l.a.createElement("li",null,l.a.createElement(v.a,{className:p.a.navItem,activeClassName:p.a.activeNavItem,to:"/about"}," About Me ")),l.a.createElement("li",null,l.a.createElement(v.a,{className:p.a.navItem,activeClassName:p.a.activeNavItem,to:"/contact"}," Contact ")))))},g=(t(161),t(162)),h=t.n(g);a.a=function(e){return l.a.createElement("div",{className:h.a.container},l.a.createElement("div",{className:h.a.content},l.a.createElement(N,null),e.children),l.a.createElement(d,null))}},170:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Probabilistic Classifier",date:"06-12-2019"},fields:{slug:"probabilistic-classifier"}}},{node:{frontmatter:{title:"Do you even know cross entropy?",date:"06-04-2019"},fields:{slug:"cross-entropy"}}},{node:{frontmatter:{title:"Image Restoration",date:"06-10-2019"},fields:{slug:"image-restoration"}}},{node:{frontmatter:{title:"Matrix Multiplication is Parallel",date:"06-17-2019"},fields:{slug:"matrix-multiplication"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-216f856e1a159871b065.js.map