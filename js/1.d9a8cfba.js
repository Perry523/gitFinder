(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"8b24":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("div",{staticClass:"col-4 d-flex row flex-center content-start"},[e("q-input",{staticClass:"w-50",attrs:{type:"text",label:"Nick do usuário"},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.searchUser(s)}},model:{value:t.userToFind,callback:function(s){t.userToFind=s},expression:"userToFind"}}),e("q-btn",{attrs:{color:"primary",label:"Pesquisar"},on:{click:t.searchUser}})],1),t.userFound?e("div",{staticClass:"d-flex column q-mt-md items-center"},[e("q-avatar",{attrs:{size:"200px","font-size":"52px",color:"teal","text-color":"white"}},[e("img",{attrs:{src:t.userFound.avatar_url}})]),t.userFound.name?e("p",{staticClass:"q-mt-md text-h4"},[t._v("\n      "+t._s(t.userFound.name)+"\n    ")]):t._e(),t.userFound.bio?e("p",[t._v(t._s(t.userFound.bio))]):t._e(),e("p",{staticClass:"text-h6"},[t._v("Repositorios publicos: "+t._s(t.userFound.public_repos))]),e("div",{staticClass:"row justify-center"},t._l(t.repositories,(function(s,a){return e("q-card",{key:a,staticClass:"q-ma-sm col-auto col-10 col-sm-5 col-md-3 my-card",on:{click:function(s){return t.goToRepository(a)}}},[e("div",{staticClass:"q-pa-sm d-flex column full-height"},[e("a",{staticClass:"text-h6 col row justify-center bb"},[e("span",{},[t._v(t._s(s.name))])]),e("div",{staticClass:"row justify-center",staticStyle:{height:"15px"}},[e("q-icon",{staticClass:"q-mt-xs text-orange",attrs:{name:"stars"}}),e("p",{staticClass:"text-h8"},[t._v(t._s(s.stargazers_count))]),e("q-icon",{staticClass:"q-mt-xs q-ml-auto",attrs:{name:"remove_red_eye"}}),e("p",{staticClass:"text-h8 q-mr-auto"},[t._v(t._s(s.watchers_count))]),e("q-icon",{staticClass:"q-mt-xs text-red",attrs:{name:"account_tree"}}),e("p",{staticClass:"text-h8"},[t._v(t._s(s.forks))])],1)])])})),1)],1):t._e()])},r=[],o=(e("e6cf"),{name:"PageIndex",data(){return{userToFind:null,repositories:null,userFound:null}},methods:{goToRepository(t){window.location=this.repositories[t].html_url},async searchUser(){this.userFound=await this.$http("/"+this.userToFind).then((t=>t.data)),this.repositories=await this.$http(this.userFound.repos_url).then((t=>t.data))}}}),n=o,i=(e("c34c"),e("2877")),c=e("9989"),u=e("27f9"),l=e("9c40"),d=e("cb32"),p=e("f09f"),m=e("0016"),h=e("eebe"),_=e.n(h),f=Object(i["a"])(n,a,r,!1,null,"72fd1187",null);s["default"]=f.exports;_()(f,"components",{QPage:c["a"],QInput:u["a"],QBtn:l["a"],QAvatar:d["a"],QCard:p["a"],QIcon:m["a"]})},c34c:function(t,s,e){"use strict";var a=e("d0b6"),r=e.n(a);r.a},d0b6:function(t,s,e){}}]);