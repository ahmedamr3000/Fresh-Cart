"use strict";(self.webpackChunkproj=self.webpackChunkproj||[]).push([[901],{4901:(P,g,r)=>{r.r(g),r.d(g,{LoginComponent:()=>M});var u=r(6814),i=r(6223),f=r(2296),m=r(1941),p=r(2032),d=r(9925),t=r(5879),h=r(219),v=r(6261);function E(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1," email is Required "),t.qZA())}function T(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"email in valid"),t.qZA())}function Z(n,a){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,E,2,0,"p",12),t.YNc(2,T,2,0,"p",12),t.qZA()),2&n){const o=t.oxw();let l,e;t.xp6(1),t.Q6J("ngIf",null==(l=o.loginForm.get("email"))?null:l.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(e=o.loginForm.get("email"))?null:e.getError("email"))}}function A(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1," password is Required "),t.qZA())}function C(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1," password must start with "),t._UZ(2,"br"),t._uU(3," upperCase then from 6 to 20 "),t.qZA())}function I(n,a){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,A,2,0,"p",12),t.YNc(2,C,4,0,"p",12),t.qZA()),2&n){const o=t.oxw();let l,e;t.xp6(1),t.Q6J("ngIf",null==(l=o.loginForm.get("password"))?null:l.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(e=o.loginForm.get("password"))?null:e.getError("pattern"))}}function L(n,a){1&n&&t._UZ(0,"i",13)}function U(n,a){if(1&n&&(t.TgZ(0,"p",14),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.hij(" ",o.message," ")}}let M=(()=>{class n{constructor(o,l,e){this._FormBuilder=o,this._GlobalServiceService=l,this._Router=e,this.message="",this.isloading=!1,this.loginForm=this._FormBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[A-Z][a-z0-9]{6,20}$/)]]})}SubmitLogin(){1==this.loginForm.valid?(this.isloading=!0,console.log("hello"),this._GlobalServiceService.setLogin(this.loginForm.value).subscribe({next:o=>{this.isloading=!1,"success"==o.message&&(console.log("no"),localStorage.setItem("etoken",o.token),this._Router.navigate(["/home"]))},error:o=>{this.isloading=!1,this.message=o.error.message}})):this.loginForm.markAllAsTouched()}Forget(){this._Router.navigate(["/forget"])}static#t=this.\u0275fac=function(l){return new(l||n)(t.Y36(i.qu),t.Y36(h.a),t.Y36(v.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:22,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"mb-2"],[1,"w-100"],["matInput","","formControlName","email","placeholder","test user .ahmedamro3000@gmail.com","required",""],["inputEmail",""],["class","war col mt-3",4,"ngIf"],["type","password","matInput","","formControlName","password","placeholder",". A102030","required",""],["inputPass",""],[1,"btn-main","d-block","ms-auto","my-4"],["class","fas fa-spinner fa-spin",4,"ngIf"],["class","alert alert-danger mt-3",4,"ngIf"],[1,"war","col","mt-3"],[4,"ngIf"],[1,"fas","fa-spinner","fa-spin"],[1,"alert","alert-danger","mt-3"]],template:function(l,e){if(1&l&&(t.TgZ(0,"h1"),t._uU(1,"login"),t.qZA(),t.TgZ(2,"form",0),t.NdJ("ngSubmit",function(){return e.SubmitLogin()}),t.TgZ(3,"div",1)(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"E-mail"),t.qZA(),t._UZ(7,"input",3,4),t.qZA(),t.YNc(9,Z,3,2,"div",5),t.qZA(),t.TgZ(10,"div",1)(11,"div")(12,"mat-form-field",2)(13,"mat-label"),t._uU(14," password"),t.qZA(),t._UZ(15,"input",6,7),t.qZA(),t.YNc(17,I,3,2,"div",5),t.qZA()(),t.TgZ(18,"button",8),t.YNc(19,L,1,0,"i",9),t._uU(20," login "),t.qZA(),t.YNc(21,U,2,1,"p",10),t.qZA()),2&l){const c=t.MAs(8),O=t.MAs(16);let s,_;t.xp6(2),t.Q6J("formGroup",e.loginForm),t.xp6(7),t.Q6J("ngIf",(null==(s=e.loginForm.get("email"))?null:s.errors)&&((null==(s=e.loginForm.get("email"))?null:s.touched)||c.value.length>0)),t.xp6(8),t.Q6J("ngIf",(null==(_=e.loginForm.get("password"))?null:_.errors)&&((null==(_=e.loginForm.get("password"))?null:_.touched)||O.value.length>0)),t.xp6(2),t.Q6J("ngIf",e.isloading),t.xp6(2),t.Q6J("ngIf",e.message)}},dependencies:[u.ez,u.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,f.ot,d.T5,i.u5,m.lN,m.KE,m.hX,p.c,p.Nt],styles:[".link[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%]:hover{color:#00f}"]})}return n})()}}]);