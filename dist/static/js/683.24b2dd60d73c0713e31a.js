(self.webpackChunkbiolerplate=self.webpackChunkbiolerplate||[]).push([[683],{6683:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948),n(7042),n(1038),n(4667);var r=n(2459),a=(n(5253),n(404)),o=(n(3002),n(9650)),l=(n(3854),n(331)),c=(n(4534),n(5779)),i=n(4314),u=(n(1249),n(8309),n(7327),n(2772),n(7294)),s=n(4427),f=n(9669),m=n.n(f);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=c.Z.Search,b=function(e){var t=y((0,u.useState)(e.id||1),2),n=t[0],c=t[1],f=y((0,u.useState)([]),2),p=f[0],b=f[1],h=y((0,u.useState)([]),2),E=h[0],v=h[1],g=[{title:"姓名",dataIndex:"name",key:"name",render:function(e){return u.createElement("a",{onClick:function(){}},e)}},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"},{title:"标签",key:"tags",dataIndex:"tags",render:function(e){return u.createElement(u.Fragment,null,e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),u.createElement(l.Z,{color:t,key:e},e.toUpperCase())})))}},{title:"Action",key:"action",render:function(e,t){return u.createElement(o.Z,{size:"middle"},u.createElement("a",null,"Invite ",t.name),u.createElement("a",null,"Delete"))}}],k=(0,u.useCallback)((0,i.Z)((function(e){m().get("/v2/getList/id=".concat(n),{}).then((function(t){e||(b(t.data.data),v(t.data.data))})).catch((function(e){}))}),1e3),[n]);return(0,u.useEffect)((function(){var e=!1;return k(e),function(){e=!0}}),[k]),u.createElement(s.Z,{style:{minHeight:"100vh"}},u.createElement("div",{className:"spacing"}),u.createElement(o.Z,null,u.createElement(a.Z,{type:"primary",onClick:function(){c(2)}},"获取数据"),u.createElement(d,{placeholder:"input search name",onSearch:function(e){var t=E.filter((function(t){return t.name.indexOf(e)>=0}));b(t)},enterButton:!0})),u.createElement("div",{className:"spacing"}),u.createElement(r.Z,{columns:g,dataSource:p}))}},4427:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});n(8304),n(489),n(2419),n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948),n(8505);var r=n(7183),a=n(7294),o=(n(9499),n(3226)),l=n(5977),c=n(2223),i=n(2164),u=n(9366),s=n(206),f=n(6504),m=n(7205),y=o.Z.SubMenu,p=(0,l.EN)((function(e){var t=(0,a.useContext)(m.Z),n=t.selectedKey,r=t.changeSelect;return a.createElement("div",{style:{width:"100%"},className:"menus"},a.createElement(o.Z,{theme:"dark",defaultSelectedKeys:n,mode:"inline"},a.createElement(o.Z.Item,{key:"1",icon:a.createElement(c.Z,null)},"主页"),a.createElement(o.Z.Item,{key:"2",icon:a.createElement(i.Z,null),onClick:function(){r(["2"]),e.history.push({pathname:"/about",state:{key:"2"}})}},"关于我们"),a.createElement(y,{key:"sub1",icon:a.createElement(u.Z,null),title:"用户"},a.createElement(o.Z.Item,{key:"3"},"Tom"),a.createElement(o.Z.Item,{key:"4"},"Bill"),a.createElement(o.Z.Item,{key:"5"},"Alex")),a.createElement(y,{key:"sub2",icon:a.createElement(s.Z,null),title:"团队"},a.createElement(o.Z.Item,{key:"6"},"Team 1"),a.createElement(o.Z.Item,{key:"8"},"Team 2")),a.createElement(o.Z.Item,{key:"9",icon:a.createElement(f.Z,null)},"文件")))}));function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var a=k(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=r.Z.Header,S=r.Z.Content,w=r.Z.Sider,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,n,o,l=E(c);function c(e){var t,n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=l.call(this,e),n=g(t),a=function(){t.setState({collapsed:!t.state.collapsed})},(r="onCollapse")in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,t.state={collapsed:!1},t}return t=c,(n=[{key:"render",value:function(){var e=this.state.collapsed;return a.createElement(r.Z,{style:{minHeight:"100vh"}},a.createElement(Z,null,a.createElement("div",{className:"header"},"react 练手系统")),a.createElement(r.Z,{className:"site-layout"},a.createElement(w,{collapsible:!0,collapsed:e,onCollapse:this.onCollapse},a.createElement("div",{className:"logo"}),a.createElement(p,{collapsed:e})),a.createElement(Z,{className:"site-layout-background",style:{padding:0}}),a.createElement(S,{style:{margin:"0 16px"}},this.props.children)))}}])&&b(t.prototype,n),o&&b(t,o),c}(a.Component)}}]);
//# sourceMappingURL=683.24b2dd60d73c0713e31a.js.map