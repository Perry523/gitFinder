(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        Github Finder\n      ")])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))})),1)],1),n("q-page-container",[n("router-view")],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",tag:"a",target:"desenvolvedor"===e.name?"_blank":"",href:e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))])],1)],1)},i=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},name:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=n("2877"),u=n("66e5"),p=n("4074"),d=n("0016"),b=n("0170"),f=n("eebe"),m=n.n(f),v=Object(c["a"])(s,l,i,!1,null,null,null),k=v.exports;m()(v,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:d["a"],QItemLabel:b["a"]});var w={name:"MainLayout",components:{EssentialLink:k},data(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Home",icon:"house",link:"#"},{title:"Favoritos",icon:"star",link:"#/favoritos"},{title:"Conheça o desenvolvedor",icon:"person",name:"desenvolvedor",link:"https://github.com/Perry523"}]}}},q=w,Q=n("4d5a"),h=n("e359"),L=n("65c6"),g=n("9c40"),_=n("6ac5"),y=n("9404"),O=n("1c1c"),D=n("09e3"),E=Object(c["a"])(q,a,r,!1,null,null,null);t["default"]=E.exports;m()(E,"components",{QLayout:Q["a"],QHeader:h["a"],QToolbar:L["a"],QBtn:g["a"],QToolbarTitle:_["a"],QDrawer:y["a"],QList:O["a"],QItemLabel:b["a"],QPageContainer:D["a"]})}}]);