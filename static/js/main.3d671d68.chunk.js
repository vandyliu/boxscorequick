(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a(344)},183:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),o=a(8),n=a.n(o),l=(a(183),a(184),a(185),a(186),a(36)),i=a(37),p=a(41),u=a(38),c=a(40),h=a(53),m=a(49),S=a(352),d=a(350),b=a(348),w=a(347),f=a(353),y=a(80),g=a.n(y),E=[{title:"NAME",dataIndex:"name",key:"NAME",render:function(e,t,a){return"Total"!==t.name?r.a.createElement("a",{href:"https://stats.nba.com/player/"+t.key},e):r.a.createElement("h5",null,r.a.createElement("a",{href:"https://www.nba.com/teams/"+t.key},e))}},{title:"MIN",dataIndex:"min",key:"MIN"},{title:"FG",dataIndex:"fg",key:"FG"},{title:"3PT",dataIndex:"fg3pt",key:"FG3PT"},{title:"FT",dataIndex:"ft",key:"FT"},{title:"OREB",dataIndex:"oreb",key:"OREB"},{title:"DREB",dataIndex:"dreb",key:"DREB"},{title:"REB",dataIndex:"reb",key:"REB"},{title:"AST",dataIndex:"ast",key:"AST"},{title:"STL",dataIndex:"stl",key:"STL"},{title:"BLK",dataIndex:"blk",key:"BLK"},{title:"TO",dataIndex:"to",key:"TO"},{title:"PF",dataIndex:"pf",key:"PF"},{title:"+/-",dataIndex:"plusminus",key:"PLUS_MINUS"},{title:"PTS",dataIndex:"pts",key:"PTS"}],k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(m.a)(a)),a.state={collapse:!1},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{collapse:!e.collapse}})}},{key:"render",value:function(){if(null!=this.props.resultSets){for(var e={city:this.props.resultSets[1].rowSet[0][4],name:this.props.resultSets[1].rowSet[0][2],abb:this.props.resultSets[1].rowSet[0][3],score:this.props.resultSets[1].rowSet[0][23],players:[]},t={city:this.props.resultSets[1].rowSet[1][4],name:this.props.resultSets[1].rowSet[1][2],abb:this.props.resultSets[1].rowSet[1][3],score:this.props.resultSets[1].rowSet[1][23],players:[]},a=this.props.resultSets[0].rowSet,s=0;s<a.length;s++){var o={key:this.props.resultSets[0].rowSet[s][4],name:this.props.resultSets[0].rowSet[s][5],min:this.props.resultSets[0].rowSet[s][8],fg:this.props.resultSets[0].rowSet[s][9]+"-"+this.props.resultSets[0].rowSet[s][10],fg3pt:this.props.resultSets[0].rowSet[s][12]+"-"+this.props.resultSets[0].rowSet[s][13],ft:this.props.resultSets[0].rowSet[s][15]+"-"+this.props.resultSets[0].rowSet[s][16],oreb:this.props.resultSets[0].rowSet[s][18],dreb:this.props.resultSets[0].rowSet[s][19],reb:this.props.resultSets[0].rowSet[s][20],ast:this.props.resultSets[0].rowSet[s][21],stl:this.props.resultSets[0].rowSet[s][22],blk:this.props.resultSets[0].rowSet[s][23],to:this.props.resultSets[0].rowSet[s][24],pf:this.props.resultSets[0].rowSet[s][25],plusminus:this.props.resultSets[0].rowSet[s][27],pts:this.props.resultSets[0].rowSet[s][26]};""!==this.props.resultSets[0].rowSet[s][7].substring(0,2)&&(o.fg=null,o.ft=null,o.fg3pt=null,o.min=this.props.resultSets[0].rowSet[s][7].substring(0,3)),this.props.resultSets[0].rowSet[s][2]===e.abb?e.players.push(o):this.props.resultSets[0].rowSet[s][2]===t.abb&&t.players.push(o)}for(s=0;s<5;s++)0===s||1===s?(t.players[s].name+=" (F)",e.players[s].name+=" (F)"):2===s?(t.players[s].name+=" (C)",e.players[s].name+=" (C)"):3!==s&&4!==s||(t.players[s].name+=" (G)",e.players[s].name+=" (G)");var n={name:"Total",key:this.props.resultSets[1].rowSet[0][2].toLowerCase(),fg:this.props.resultSets[1].rowSet[0][6]+"-"+this.props.resultSets[1].rowSet[0][7],fg3pt:this.props.resultSets[1].rowSet[0][9]+"-"+this.props.resultSets[1].rowSet[0][10],ft:this.props.resultSets[1].rowSet[0][12]+"-"+this.props.resultSets[1].rowSet[0][13],oreb:this.props.resultSets[1].rowSet[0][15],dreb:this.props.resultSets[1].rowSet[0][16],reb:this.props.resultSets[1].rowSet[0][17],ast:this.props.resultSets[1].rowSet[0][18],stl:this.props.resultSets[1].rowSet[0][19],blk:this.props.resultSets[1].rowSet[0][20],to:this.props.resultSets[1].rowSet[0][22],pf:this.props.resultSets[1].rowSet[0][22],pts:this.props.resultSets[1].rowSet[0][23],plusminus:this.props.resultSets[1].rowSet[0][24]},l={name:"Total",key:this.props.resultSets[1].rowSet[1][2].toLowerCase(),fg:this.props.resultSets[1].rowSet[1][6]+"-"+this.props.resultSets[1].rowSet[1][7],fg3pt:this.props.resultSets[1].rowSet[1][9]+"-"+this.props.resultSets[1].rowSet[1][10],ft:this.props.resultSets[1].rowSet[1][12]+"-"+this.props.resultSets[1].rowSet[1][13],oreb:this.props.resultSets[1].rowSet[1][15],dreb:this.props.resultSets[1].rowSet[1][16],reb:this.props.resultSets[1].rowSet[1][17],ast:this.props.resultSets[1].rowSet[1][18],stl:this.props.resultSets[1].rowSet[1][19],blk:this.props.resultSets[1].rowSet[1][20],to:this.props.resultSets[1].rowSet[1][22],pf:this.props.resultSets[1].rowSet[1][22],pts:this.props.resultSets[1].rowSet[1][23],plusminus:this.props.resultSets[1].rowSet[1][24]};e.players.push(n),t.players.push(l);var i="https://github.com/vandyliu/boxscorequick/blob/gh-pages/images/logos/";return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement("h2",null,r.a.createElement("a",{href:"https://stats.nba.com/game/"+this.props.GameID}," ",r.a.createElement(g.a,{src:i+e.abb.toLowerCase()+".png?raw=true"})," ",e.city," ",e.name," ",e.score,"  vs ",t.score," ",t.city," ",t.name," ",r.a.createElement(g.a,{src:i+t.abb.toLowerCase()+".png?raw=true"})," "),r.a.createElement(w.a,{className:"float-right",outline:!0,color:"secondary",onClick:this.toggle}," Toggle ")," ")),r.a.createElement(f.a,{isOpen:this.state.collapse},r.a.createElement(S.a,{type:"flex",justify:"start"},r.a.createElement("h3",null,r.a.createElement(g.a,{src:i+e.abb.toLowerCase()+".png?raw=true"}),"\xa0 ",e.name," ")),r.a.createElement(S.a,null,r.a.createElement(d.a,{dataSource:e.players,columns:E,size:"small",pagination:!1,rowKey:function(e){return e.key}})),r.a.createElement(b.a,{dashed:!0}),r.a.createElement(S.a,{type:"flex",justify:"start"},r.a.createElement("h3",null,r.a.createElement(g.a,{src:i+t.abb.toLowerCase()+".png?raw=true"}),"\xa0 ",t.name," ")),r.a.createElement(S.a,null,r.a.createElement(d.a,{dataSource:t.players,columns:E,size:"small",pagination:!1}))))}return r.a.createElement("div",null," ",r.a.createElement("h1",null," An error has occurred ")," ")}}]),t}(s.Component),v=a(351),x=a(11),O=a.n(x),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={games:[],date:O()().format("MMDDYYYY")},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.gamesList()}},{key:"componentDidUpdate",value:function(e,t){this.state.date!==t.date&&this.gamesList()}},{key:"onChange",value:function(e,t){var a=O()(t,"YYYY-MM-DD").format("MMDDYYYY");this.setState({date:a})}},{key:"gamesList",value:function(){var e=this;fetch("http://127.0.0.1:5000/date/"+this.state.date).then(function(e){return e.json()}).then(function(t){return e.setState({games:t})}).catch(function(e){console.log(e)})}},{key:"disabledDate",value:function(e){return e>O()().endOf("day")}},{key:"render",value:function(){var e=this.state.games,t=e.map(function(e){return r.a.createElement("div",{key:e.GameID}," ",r.a.createElement(k,e)," ",r.a.createElement(b.a,null)," ")});return 1===e.length&&"none"===e[0].GameID?r.a.createElement("div",null,r.a.createElement(v.a,{disabledDate:this.disabledDate,onChange:this.onChange.bind(this),defaultValue:O()()}),r.a.createElement(b.a,null),r.a.createElement("h1",null," No games to display ")):r.a.createElement("div",null,r.a.createElement(v.a,{disabledDate:this.disabledDate,onChange:this.onChange.bind(this),defaultValue:O()()}),r.a.createElement(b.a,null),t)}}]),t}(r.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{align:"left",className:"about"},r.a.createElement("h3",null,"About"),r.a.createElement("p",null,"BoxScoreQ is a website to keep you updated on NBA games and their box scores quickly. Whenever I come home from work or school, I open up and see what NBA games I should tune in to. However, I would always want to look at the box score first to see if there is a particular game that might interest me like a game where Derrick Rose currently has 41 points or a game where Klay Thompson is 6-7 from 3 point range. There wasn\u2019t a quick place to find all the box scores in one place, which is why I made BoxScoreQ."),"Find out more about this project at ",r.a.createElement("a",{href:"https://vandyliu.github.io"},"my blog"),r.a.createElement("h3",null,"FAQ"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Why is nothing showing up? "),"The backend is not yet deployed. It is finished but I just need to do some final testing :)"),r.a.createElement("li",null,r.a.createElement("b",null,"How far back can we check? "),"You can check as far back as possible but games before the 2017-18 season are not cached in the database so they may take a long time."),r.a.createElement("li",null,r.a.createElement("b",null,"Why do some dates load so slowly? "),"The NBA API starts blocking requests after a few are made from the same IP address so I have to request from proxies until the website has all the information. Often these proxies are also blocked or don't work so it can take a while. Once a date has been added, it is added to a database, which does not block or need a proxy to access so the second time you look up a date, it will be much faster.")))}}]),t}(r.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:I}),r.a.createElement(h.a,{exact:!0,path:"/about",component:j}))}}]),t}(r.a.Component),T=a(67),D=a(349),B=a(127),L=D.a.Header,A=D.a.Content,N=D.a.Footer,Y=function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).call(this,e))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location;return console.log(e.pathname),r.a.createElement(D.a,{className:"layout"},r.a.createElement(L,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(B.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[e.pathname],style:{lineHeight:"64px"}},r.a.createElement(B.a.Item,{key:"/"},r.a.createElement(T.b,{exact:!0,to:"/"},"Home")),r.a.createElement(B.a.Item,{key:"/about/"},r.a.createElement(T.b,{to:"/about/"},"About")))),r.a.createElement(A,{style:{padding:"0 50px"}},r.a.createElement("div",{style:{background:"#fff",padding:"40px 180px",minHeight:280}},this.props.children)),r.a.createElement(N,{style:{textAlign:"center"}}," \xa92019 Created by ",r.a.createElement("a",{href:"https://vandyliu.github.io"},"Vandy Liu")))}}]),t}(r.a.Component),F=Object(h.f)(Y);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null,r.a.createElement("div",null,r.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(343);n.a.render(r.a.createElement(T.a,{basename:"/boxscorequick"},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,1,2]]]);
//# sourceMappingURL=main.3d671d68.chunk.js.map