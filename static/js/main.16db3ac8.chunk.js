(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,n,a){},14:function(e,n,a){},16:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a(7),i=a.n(r),s=(a(12),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;a(e),t(e),r(e),i(e),s(e)}))}),c=a(2),o=a(3),l=a(5),h=a(4),u=a(0),d=function(e){e.searchfield;var n=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--light-blue bg-lightest-blue",type:"search",placeholder:"search robo",onChange:n})})},m=function(e){var n=e.name,a=e.email,t=e.id;return Object(u.jsxs)("div",{className:"tc bg-washed-green dib br5 pa3 ma3 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?150x150")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:a})]})]})},b=function(e){var n=e.robots,a=n.map((function(e,a){return Object(u.jsx)(m,{id:n[a].id,name:n[a].name,email:n[a].email},a)}));return Object(u.jsxs)("div",{children:[a,";"]})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},O=function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(e){var t;return Object(c.a)(this,a),(t=n.call(this,e)).state={hasError:!1},t}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Ooops Error"}):this.props.children}}]),a}(t.Component),g=(a(14),function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({robots:j})}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchfield,t=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.lenght?Object(u.jsx)("h1",{children:"Loading"}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(u.jsx)(d,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(b,{robots:t})})})]})}}]),a}(t.Component));a(15);i.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.16db3ac8.chunk.js.map