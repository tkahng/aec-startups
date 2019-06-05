!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=48)}({16:function(e){e.exports={name:"aec-startups",version:"1.0.0",description:"List of AEC Startups",author:"Gui Talarico",private:!0,scripts:{dev:"nuxt",build:"nuxt build",start:"nuxt start",generate:"nuxt generate",lint:"eslint --ext .js,.vue --ignore-path .gitignore .",precommit:"npm run lint"},dependencies:{"@nuxtjs/axios":"^5.5.4","@nuxtjs/google-analytics":"^2.2.0","@nuxtjs/proxy":"^1.3.3",airtable:"^0.6.0",bootstrap:"^4.1.3","bootstrap-vue":"^2.0.0-rc.11","cross-env":"^5.2.0","js-yaml-loader":"^1.0.1","magic-grid":"^3.2.4","netlify-lambda":"^1.4.13","node-sass":"^4.12.0",nuxt:"^2.4.0","sass-loader":"^7.1.0","vue-rellax":"^0.1.0"},devDependencies:{"@nuxtjs/eslint-config":"^0.0.1","babel-eslint":"^10.0.1",eslint:"^5.15.1","eslint-config-prettier":"^4.1.0","eslint-config-standard":">=12.0.0","eslint-loader":"^2.1.2","eslint-plugin-import":">=2.16.0","eslint-plugin-jest":">=22.3.0","eslint-plugin-node":">=8.0.1","eslint-plugin-nuxt":">=0.4.2","eslint-plugin-prettier":"^3.0.1","eslint-plugin-promise":">=4.0.1","eslint-plugin-standard":">=4.0.0","eslint-plugin-vue":"^5.2.2",nodemon:"^1.18.9",prettier:"^1.16.4"}}},48:function(e,t,n){"use strict";n.r(t);var i=n(16);t.default={mode:"universal",ssr:!1,head:{title:"AEC Startups",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:i.description}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico?v=1"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,400i,600,700"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=ABeeZee"}],script:[{src:"https://polyfill.io/v3/polyfill.min.js?features=WeakMap",crossorigin:"anonymous"}]},loading:{color:"#fff"},plugins:["~/plugins/bootstrap-vue.js","~~/node_modules/vue-rellax/lib/nuxt-plugin"],modules:["@nuxtjs/proxy","@nuxtjs/axios",["@nuxtjs/google-analytics",{id:"UA-3836052-14"}]],proxy:{"/airtable":{target:"http://localhost:9000"}},axios:{baseURL:"/",proxy:!0},build:{transpile:["vue-magic-grid"],extend(e,t){t.isDev&&t.isClient&&e.module.rules.push({enforce:"pre",test:/\.(js|vue)$/,loader:"eslint-loader",exclude:/(node_modules)/}),e.module.rules.push({test:/\.ya?ml$/,use:"js-yaml-loader"}),t.isDev&&t.isClient&&e.module.rules.push({enforce:"pre",test:/\.(js|vue)$/,loader:"eslint-loader",exclude:/(node_modules)/,options:{fix:!0}})}}}}}));