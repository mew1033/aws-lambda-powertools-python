(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7QQ4":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n("gi+x"),o=n("Enk7"),i=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(a){return n={"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityService.GetCredentialsForIdentity"},o=JSON.stringify(x(e,t)),[2,L(t,n,"/",void 0,o)]}))}))},r=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(a){return n={"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"AWSCognitoIdentityService.GetId"},o=JSON.stringify(j(e,t)),[2,L(t,n,"/",void 0,o)]}))}))},c=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return e.statusCode>=400?[2,s(e,t)]:[4,k(e.body,t)];case 1:return n=r.sent(),{},o=$(n,t),i=Object(a.a)({$metadata:T(e),__type:"GetCredentialsForIdentityResponse"},o),[2,Promise.resolve(i)]}}))}))},s=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i,r,c,s,d,u,y,x,j,O,I,h,$,w;return Object(a.d)(this,(function(C){switch(C.label){case 0:return o=[Object(a.a)({},e)],w={},[4,k(e.body,t)];case 1:switch(n=a.a.apply(void 0,o.concat([(w.body=C.sent(),w)])),r="UnknownError",c=n.body.__type.split("#"),r=void 0===c[1]?c[0]:c[1],r){case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":return[3,2];case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":return[3,4];case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":return[3,6];case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":return[3,8];case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":return[3,10];case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":return[3,12];case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":return[3,14];case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":return[3,16]}return[3,18];case 2:return s=[{}],[4,v(n,t)];case 3:return i=a.a.apply(void 0,[a.a.apply(void 0,s.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 4:return d=[{}],[4,p(n,t)];case 5:return i=a.a.apply(void 0,[a.a.apply(void 0,d.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 6:return u=[{}],[4,l(n,t)];case 7:return i=a.a.apply(void 0,[a.a.apply(void 0,u.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 8:return y=[{}],[4,m(n,t)];case 9:return i=a.a.apply(void 0,[a.a.apply(void 0,y.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 10:return x=[{}],[4,b(n,t)];case 11:return i=a.a.apply(void 0,[a.a.apply(void 0,x.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 12:return j=[{}],[4,f(n,t)];case 13:return i=a.a.apply(void 0,[a.a.apply(void 0,j.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 14:return O=[{}],[4,g(n,t)];case 15:return i=a.a.apply(void 0,[a.a.apply(void 0,O.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 16:return I=[{}],[4,E(n,t)];case 17:return i=a.a.apply(void 0,[a.a.apply(void 0,I.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 18:h=n.body,r=h.code||h.Code||r,i=Object(a.a)(Object(a.a)({},h),{name:""+r,message:h.message||h.Message||r,$fault:"client",$metadata:T(e)}),C.label=19;case 19:return $=i.message||i.Message||r,i.message=$,delete i.Message,[2,Promise.reject(Object.assign(new Error($),i))]}}))}))},d=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return e.statusCode>=400?[2,u(e,t)]:[4,k(e.body,t)];case 1:return n=r.sent(),{},o=w(n,t),i=Object(a.a)({$metadata:T(e),__type:"GetIdResponse"},o),[2,Promise.resolve(i)]}}))}))},u=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,i,r,c,s,d,u,l,x,j,O,I,h,$,w;return Object(a.d)(this,(function(C){switch(C.label){case 0:return o=[Object(a.a)({},e)],w={},[4,k(e.body,t)];case 1:switch(n=a.a.apply(void 0,o.concat([(w.body=C.sent(),w)])),r="UnknownError",c=n.body.__type.split("#"),r=void 0===c[1]?c[0]:c[1],r){case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":return[3,2];case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":return[3,4];case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":return[3,6];case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":return[3,8];case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":return[3,10];case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":return[3,12];case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":return[3,14];case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":return[3,16]}return[3,18];case 2:return s=[{}],[4,v(n,t)];case 3:return i=a.a.apply(void 0,[a.a.apply(void 0,s.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 4:return d=[{}],[4,p(n,t)];case 5:return i=a.a.apply(void 0,[a.a.apply(void 0,d.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 6:return u=[{}],[4,m(n,t)];case 7:return i=a.a.apply(void 0,[a.a.apply(void 0,u.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 8:return l=[{}],[4,y(n,t)];case 9:return i=a.a.apply(void 0,[a.a.apply(void 0,l.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 10:return x=[{}],[4,b(n,t)];case 11:return i=a.a.apply(void 0,[a.a.apply(void 0,x.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 12:return j=[{}],[4,f(n,t)];case 13:return i=a.a.apply(void 0,[a.a.apply(void 0,j.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 14:return O=[{}],[4,g(n,t)];case 15:return i=a.a.apply(void 0,[a.a.apply(void 0,O.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 16:return I=[{}],[4,E(n,t)];case 17:return i=a.a.apply(void 0,[a.a.apply(void 0,I.concat([C.sent()])),{name:r,$metadata:T(e)}]),[3,19];case 18:h=n.body,r=h.code||h.Code||r,i=Object(a.a)(Object(a.a)({},h),{name:""+r,message:h.message||h.Message||r,$fault:"client",$metadata:T(e)}),C.label=19;case 19:return $=i.message||i.Message||r,i.message=$,delete i.Message,[2,Promise.reject(Object.assign(new Error($),i))]}}))}))},v=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=h(n,t),[2,Object(a.a)({name:"ExternalServiceException",$fault:"client",$metadata:T(e)},o)]}))}))},p=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=C(n,t),[2,Object(a.a)({name:"InternalErrorException",$fault:"server",$metadata:T(e)},o)]}))}))},l=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=_(n,t),[2,Object(a.a)({name:"InvalidIdentityPoolConfigurationException",$fault:"client",$metadata:T(e)},o)]}))}))},m=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=z(n,t),[2,Object(a.a)({name:"InvalidParameterException",$fault:"client",$metadata:T(e)},o)]}))}))},y=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=R(n,t),[2,Object(a.a)({name:"LimitExceededException",$fault:"client",$metadata:T(e)},o)]}))}))},b=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=A(n,t),[2,Object(a.a)({name:"NotAuthorizedException",$fault:"client",$metadata:T(e)},o)]}))}))},f=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=S(n,t),[2,Object(a.a)({name:"ResourceConflictException",$fault:"client",$metadata:T(e)},o)]}))}))},g=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=P(n,t),[2,Object(a.a)({name:"ResourceNotFoundException",$fault:"client",$metadata:T(e)},o)]}))}))},E=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(i){return n=e.body,o=N(n,t),[2,Object(a.a)({name:"TooManyRequestsException",$fault:"client",$metadata:T(e)},o)]}))}))},x=function(e,t){return Object(a.a)(Object(a.a)(Object(a.a)({},void 0!==e.CustomRoleArn&&{CustomRoleArn:e.CustomRoleArn}),void 0!==e.IdentityId&&{IdentityId:e.IdentityId}),void 0!==e.Logins&&{Logins:O(e.Logins,t)})},j=function(e,t){return Object(a.a)(Object(a.a)(Object(a.a)({},void 0!==e.AccountId&&{AccountId:e.AccountId}),void 0!==e.IdentityPoolId&&{IdentityPoolId:e.IdentityPoolId}),void 0!==e.Logins&&{Logins:O(e.Logins,t)})},O=function(e,t){return Object.entries(e).reduce((function(e,t){var n,o=Object(a.e)(t,2),i=o[0],r=o[1];return Object(a.a)(Object(a.a)({},e),((n={})[i]=r,n))}),{})},I=function(e,t){return{__type:"Credentials",AccessKeyId:void 0!==e.AccessKeyId&&null!==e.AccessKeyId?e.AccessKeyId:void 0,Expiration:void 0!==e.Expiration&&null!==e.Expiration?new Date(Math.round(1e3*e.Expiration)):void 0,SecretKey:void 0!==e.SecretKey&&null!==e.SecretKey?e.SecretKey:void 0,SessionToken:void 0!==e.SessionToken&&null!==e.SessionToken?e.SessionToken:void 0}},h=function(e,t){return{__type:"ExternalServiceException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},$=function(e,t){return{__type:"GetCredentialsForIdentityResponse",Credentials:void 0!==e.Credentials&&null!==e.Credentials?I(e.Credentials):void 0,IdentityId:void 0!==e.IdentityId&&null!==e.IdentityId?e.IdentityId:void 0}},w=function(e,t){return{__type:"GetIdResponse",IdentityId:void 0!==e.IdentityId&&null!==e.IdentityId?e.IdentityId:void 0}},C=function(e,t){return{__type:"InternalErrorException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},_=function(e,t){return{__type:"InvalidIdentityPoolConfigurationException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},z=function(e,t){return{__type:"InvalidParameterException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},R=function(e,t){return{__type:"LimitExceededException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},A=function(e,t){return{__type:"NotAuthorizedException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},S=function(e,t){return{__type:"ResourceConflictException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},P=function(e,t){return{__type:"ResourceNotFoundException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},N=function(e,t){return{__type:"TooManyRequestsException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},T=function(e){return{httpStatusCode:e.statusCode,httpHeaders:e.headers,requestId:e.headers["x-amzn-requestid"]}},M=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},L=function(e,t,n,i,r){return Object(a.b)(void 0,void 0,void 0,(function(){var c,s,d,u,v,p;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,e.endpoint()];case 1:return c=a.sent(),s=c.hostname,d=c.protocol,u=void 0===d?"https":d,v=c.port,p={protocol:u,hostname:s,port:v,method:"POST",path:n,headers:t},void 0!==i&&(p.hostname=i),void 0!==r&&(p.body=r),[2,new o.a(p)]}}))}))},k=function(e,t){return function(e,t){return M(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){return e.length?JSON.parse(e):{}}))}}}]);
//# sourceMappingURL=0eceb729-5bef0a6cf4b95070293c.js.map