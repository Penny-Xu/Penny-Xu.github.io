(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return d});var n=t(0),l=t.n(n),r=t(4),s=t.n(r),c=t(166),i=t.n(c),m=t(158),o=t(154),u=function(e){var a=e.pageContext,t=e.data,n=a.tag,r=t.allMarkdownRemark,s=r.edges,c=r.totalCount,u=c+" post"+(1===c?"":"s")+' tagged with "'+n+'"';return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement("h1",null,u),l.a.createElement("ul",{className:i.a.posts},s.map(function(e){var a=e.node,t=a.fields.slug,n=a.frontmatter,r=n.title,s=n.date;return l.a.createElement("li",{className:i.a.post,key:t},l.a.createElement(o.a,{to:"/blog/"+t}," ",l.a.createElement("h2",null,r)," ",l.a.createElement("p",null," ",s," ")," "))}))),l.a.createElement(o.a,{to:"/tags"},"All tags"))};u.propTypes={pageContext:s.a.shape({tag:s.a.string.isRequired}),data:s.a.shape({allMarkdownRemark:s.a.shape({totalCount:s.a.number.isRequired,edges:s.a.arrayOf(s.a.shape({node:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired}),fields:s.a.shape({slug:s.a.string.isRequired})})}).isRequired)})})},a.default=u;var d="3686630500"},153:function(e,a,t){var n;e.exports=(n=t(155))&&n.default||n},154:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),s=t.n(r),c=t(33),i=t.n(c);t.d(a,"a",function(){return i.a});t(153),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},155:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),s=t.n(r),c=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=m},156:function(e){e.exports={data:{site:{siteMetadata:{author:"Penny Xu"}}}}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Penny Xu"}}}}},158:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(156),s=t(161),c=t.n(s),i=t(159),m=t.n(i),o=t(160),u=t(152),d=function(){var e=r.data;return l.a.createElement("footer",{className:c.a.footer},l.a.createElement("a",{className:m.a.gitItem,activeClassName:m.a.activegitItem,href:"https://github.com/Penny-Xu",target:"_blank"},l.a.createElement(o.a,{icon:u.a,size:"2x"})," "),l.a.createElement("a",{className:m.a.lItem,activeClassName:m.a.activelItem,href:"https://www.linkedin.com/in/penny-xu-421766103/",target:"_blank"},l.a.createElement(o.a,{icon:u.c,size:"2x"})),l.a.createElement("a",{className:m.a.instaItem,activeClassName:m.a.activeInstaItem,href:"https://www.instagram.com/lazycoalabear/",target:"_blank"}," ",l.a.createElement(o.a,{icon:u.b,size:"2x"})),l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author,", © 2019"))},p=t(157),v=t(154),E=t(162),f=t.n(E),g=function(){var e=p.data;return l.a.createElement("header",{className:f.a.header},l.a.createElement("h1",null,l.a.createElement(v.a,{className:f.a.title,to:"/"}," ",e.site.siteMetadata.title," ")),l.a.createElement("nav",null,l.a.createElement("ul",{className:f.a.navList},l.a.createElement("li",null,l.a.createElement(v.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/"}," Home ")),l.a.createElement("li",null,l.a.createElement(v.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/blog"}," Blog ")),l.a.createElement("li",null,l.a.createElement(v.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/about"}," About Me ")),l.a.createElement("li",null,l.a.createElement(v.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/contact"}," Contact ")))))},h=(t(163),t(164)),N=t.n(h);a.a=function(e){return l.a.createElement("div",{className:N.a.container},l.a.createElement("div",{className:N.a.content},l.a.createElement(g,null),e.children),l.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-3282ce5033cb67ee6119.js.map