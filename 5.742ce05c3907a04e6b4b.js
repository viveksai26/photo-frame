(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hQ0h:function(t,e,n){"use strict";n.r(e),n.d(e,"DashboardModule",function(){return L});var o=n("ofXK"),c=n("tyNb"),i=n("fXoL"),s=n("ahC7");n("AytR");let r=(()=>{class t{}return t.verifyGIdToken="https://oauth2.googleapis.com/tokeninfo?id_token={idToken}",t.photoURL="https://photoslibrary.googleapis.com/v1/mediaItems",t})();var a=n("tk/3");let b=(()=>{class t{constructor(t){this.http=t,this.isLoggedIn=!1}verifyGToken(t){return this.http.get(r.verifyGIdToken.replace("{idToken}",t))}connectToPhotos(){return this.http.get(r.photoURL)}}return t.\u0275fac=function(e){return new(e||t)(i.Xb(a.b))},t.\u0275prov=i.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("bTqV"),l=n("STbY"),d=n("NFeN");function g(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",6),i.ac("click",function(){return i.kc(t),i.dc().signOut()}),i.Tb(1,"mat-icon"),i.sc(2,"logout"),i.Sb(),i.Tb(3,"span"),i.sc(4,"Logout"),i.Sb(),i.Sb()}}let h=(()=>{class t{constructor(t,e,n){this.authService=t,this.router=e,this.AutheticationService=n,this.isMenuVisible=!1,this.isLoggedIn=!1,this.subscriptionsArray=[]}ngOnInit(){this.isLoggedIn=this.AutheticationService.isLoggedIn}signOut(){this.authService.signOut(),this.router.navigateByUrl("https://viveksai26.github.io/common-client/login")}ngOnDestroy(){this.subscriptionsArray.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(s.b),i.Ob(c.b),i.Ob(b))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-secure-header"]],decls:10,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["routerLink","['/home']",1,"navbar-brand","mr-auto"],["mat-icon-button","",3,"matMenuTriggerFor"],[2,"color","white"],["menu1","matMenu"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"click"]],template:function(t,e){if(1&t&&(i.Tb(0,"header"),i.Tb(1,"nav",0),i.Tb(2,"a",1),i.sc(3,"LOGO"),i.Sb(),i.Tb(4,"button",2),i.Tb(5,"mat-icon",3),i.sc(6," more_vert "),i.Sb(),i.Sb(),i.Tb(7,"mat-menu",null,4),i.qc(9,g,5,0,"button",5),i.Sb(),i.Sb(),i.Sb()),2&t){const t=i.jc(8);i.Db(4),i.gc("matMenuTriggerFor",t),i.Db(5),i.gc("ngIf",e.isLoggedIn)}},directives:[c.c,u.a,l.d,d.a,l.a,o.j,l.b],styles:[""]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-secure-footer"]],decls:3,vars:0,consts:[[1,"footer"],[1,"container","d-flex","justify-content-center"]],template:function(t,e){1&t&&(i.Tb(0,"footer",0),i.Tb(1,"div",1),i.sc(2," Footer "),i.Sb(),i.Sb())},styles:[""]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-secure-layout"]],decls:5,vars:0,consts:[[1,"wrapper"],[1,"main"]],template:function(t,e){1&t&&(i.Tb(0,"div",0),i.Pb(1,"app-secure-header"),i.Tb(2,"div",1),i.Pb(3,"router-outlet"),i.Sb(),i.Pb(4,"app-secure-footer"),i.Sb())},directives:[h,c.e,p],styles:[""]}),t})();var m=n("Xa2L");function v(t,e){1&t&&(i.Tb(0,"div",2),i.Pb(1,"mat-spinner"),i.Sb())}function T(t,e){if(1&t&&(i.Tb(0,"div",7),i.Pb(1,"img",8),i.Tb(2,"p"),i.sc(3),i.Sb(),i.Sb()),2&t){const t=e.$implicit;i.Db(1),i.gc("src",t.baseUrl,i.lc),i.Db(2),i.tc(t.filename)}}function S(t,e){if(1&t&&(i.Tb(0,"div",5),i.Tb(1,"div",1),i.qc(2,T,4,2,"div",6),i.Sb(),i.Sb()),2&t){const t=i.dc();i.Db(2),i.gc("ngForOf",t.photos.mediaItems)}}const y=[{path:"",component:f,children:[{path:"",component:(()=>{class t{constructor(t,e){this.autheticationService=t,this.router=e,this.isLoading=!0}ngOnInit(){this.connectToGPhotos()}connectToGPhotos(){this.autheticationService.connectToPhotos().subscribe(t=>{console.log(t),this.photos=t,this.isLoading=!1},t=>{console.log(t),this.router.navigate(["login"])})}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(b),i.Ob(c.b))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-dashboard"]],decls:7,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","d-flex","justify-content-center"],["class","col-md-12 d-flex justify-content-center",4,"ngIf"],["class","col-md-12",4,"ngIf"],[1,"col-md-12"],["class","col-lg-3 col-md-3 col-sm-3 col-xs-6",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-3","col-sm-3","col-xs-6"],[1,"img-fluid","img-rounded",3,"src"]],template:function(t,e){1&t&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"h1"),i.sc(4,"Google Photos"),i.Sb(),i.Sb(),i.qc(5,v,2,0,"div",3),i.qc(6,S,3,1,"div",4),i.Sb(),i.Sb()),2&t&&(i.Db(5),i.gc("ngIf",e.isLoading),i.Db(1),i.gc("ngIf",!e.isLoading))},directives:[o.j,m.b,o.i],styles:[""]}),t})()}]}];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({imports:[[c.d.forChild(y)],c.d]}),t})();var k=n("FpXt");let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({imports:[[o.b,k.a,I]]}),t})()}}]);