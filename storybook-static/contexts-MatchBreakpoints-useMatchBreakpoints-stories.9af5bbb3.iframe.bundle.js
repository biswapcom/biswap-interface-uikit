"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[498],{"./src/contexts/MatchBreakpoints/useMatchBreakpoints.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useMatchBreakpoints_stories});var react=__webpack_require__("./node_modules/react/index.js"),base=__webpack_require__("./src/theme/base.ts");"undefined"==typeof window?react.useEffect:react.useLayoutEffect;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}prevMinWidth=0,Object.keys(base.S6).reduce((function(accum,size,index){if(index===Object.keys(base.S6).length-1)return _object_spread_props(_object_spread({},accum),_define_property({},size,"(min-width: ".concat(prevMinWidth,"px)")));var minWidth=prevMinWidth,breakpoint=base.S6[size];return prevMinWidth=breakpoint+1,_object_spread_props(_object_spread({},accum),_define_property({},size,"(min-width: ".concat(minWidth,"px) and (max-width: ").concat(breakpoint,"px)")))}),{});var prevMinWidth,MatchBreakpointsContext=(0,react.createContext)({isMobile:!1,isTablet:!1,isDesktop:!1});const MatchBreakpoints_useMatchBreakpoints=function(){var matchBreakpointContext=(0,react.useContext)(MatchBreakpointsContext);if(void 0===matchBreakpointContext)throw new Error("Match Breakpoint context is undefined");return matchBreakpointContext},useMatchBreakpoints_stories={title:"Context/useMatchBreakpoints",argTypes:{}};var Default=function(){var state=MatchBreakpoints_useMatchBreakpoints();return react.createElement("div",{style:{padding:"32px"}},react.createElement("pre",null,JSON.stringify(state,null,2)))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => {\n  const state = useMatchBreakpoints();\n  return <div style={{\n    padding: "32px"\n  }}>\n      <pre>{JSON.stringify(state, null, 2)}</pre>\n    </div>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);