(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({258:"components-Skeleton-index-stories",440:"components-Image-index-stories",509:"components-Breadcrumbs-index-stories",667:"components-Input-index-stories",1030:"components-ButtonMenu-index-stories",1034:"components-SubMenuItems-index-stories",1192:"components-Slider-index-stories",2229:"widgets-Menu-index-stories",2282:"components-Text-index-stories",2428:"components-ExpandableIcon-index-stories",2498:"contexts-MatchBreakpoints-useMatchBreakpoints-stories",2513:"components-SocialShareButton-index-stories",2636:"components-GridSystem-index-stories",2747:"components-Colors-index-stories",3356:"components-Box-index-stories",3599:"components-Link-index-stories",3652:"components-Checkbox-index-stories",3861:"components-Svg-index-stories",4077:"hooks-useCarousel-useCarousel-stories",4533:"components-Heading-index-stories",4542:"components-Badge-index-stories",4815:"components-PercentSlider-index-stories",4916:"components-DropdownButton-index-stories",5473:"widgets-Modal-index-stories",5707:"Configure-mdx",5801:"components-NotificationDot-index-stories",5907:"components-Toggle-index-stories",6232:"components-Typography-index-stories",6412:"components-MenuItems-index-stories",6580:"components-TableCardSkeleton-index-stories",6702:"components-Radio-index-stories",6707:"hooks-useTooltip-useTooltip-stories",7324:"components-Faqs-index-stories",7369:"components-DropdownMenu-index-stories",7549:"components-Alert-index-stories",7554:"components-Layouts-index-stories",7759:"components-TabMenu-index-stories",8115:"widgets-Toast-index-stories",8279:"components-Overlay-index-stories",8487:"components-MenuItem-index-stories",8648:"components-Dropdown-index-stories",8819:"components-Button-index-stories",8902:"components-Terms-index-stories",9682:"components-TooltipHelper-index-stories",9694:"components-BadgeButton-index-stories",9695:"components-Pagination-index-stories",9833:"components-BaseMenu-index-stories"}[chunkId]||chunkId)+"."+{202:"2568f918",258:"64b2e11e",440:"1bee47f6",509:"e5acaf6d",667:"3960a638",742:"db422bf3",832:"dc08fb8d",1030:"62c84899",1034:"027bb389",1067:"4cfeef2b",1192:"b3b426d5",1294:"a73466a0",2229:"2f69599c",2282:"9654a71b",2428:"6e74fc71",2498:"b42e1f2b",2513:"b781821b",2543:"a906241f",2570:"dd289c1d",2636:"9f522b80",2747:"068f8d18",3356:"bb8514f5",3599:"028a5665",3652:"b8bee6d2",3816:"e419f163",3861:"0afce660",4077:"02778c45",4242:"9c4adbdd",4533:"d7074785",4542:"396b9454",4630:"956d51ab",4815:"a54d49ef",4916:"58f8d9c8",4976:"f859744b",5009:"826d4b30",5287:"4e9910a3",5473:"5efbfd33",5707:"8cfe87ff",5726:"90050d07",5801:"4b869589",5903:"179b8f9a",5907:"004b9b07",6232:"fcccfd74",6412:"b9c57a9b",6580:"3e70ee23",6660:"09084963",6702:"8b6c9e13",6707:"76092d28",7324:"8f969669",7369:"936f18cf",7549:"bd1c2fdf",7554:"d0921b1c",7759:"d0f72775",8035:"9379aad5",8115:"b62103fa",8279:"a0a3ea08",8359:"ed32a52a",8487:"41338cfa",8633:"6272bd65",8648:"cdb76fc7",8819:"86967620",8902:"9532c17f",9682:"83c2c524",9694:"d2e06037",9695:"e490d311",9833:"a4b4e55f",9965:"fa3a5cca"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="testnewkit:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","testnewkit:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunktestnewkit=self.webpackChunktestnewkit||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();