"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[7554],{"./src/components/Layouts/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,Cards:()=>Cards,ContainerLayout:()=>ContainerLayout,HeroWrap:()=>HeroWrap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Grid=__webpack_require__("./src/components/Box/Grid.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  "," {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  "," {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  "," {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}const BaseLayout=(0,styled_components_browser_esm.Ay)(Grid.A)(_templateObject(),(function(param){return param.theme.mediaQueries.sm}),(function(param){return param.theme.mediaQueries.md}),(function(param){return param.theme.mediaQueries.lg}));function CardsLayout_templateObject(){var data=function CardsLayout_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  & > div {\n    grid-column: span 6;\n    "," {\n      grid-column: span 4;\n    }\n  }\n"]);return CardsLayout_templateObject=function _templateObject(){return data},data}const CardsLayout=(0,styled_components_browser_esm.Ay)(BaseLayout)(CardsLayout_templateObject(),(function(param){return param.theme.mediaQueries.sm}));var Box=__webpack_require__("./src/components/Box/index.tsx"),util=__webpack_require__("./src/util/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Container=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]);return react.createElement(Box.az,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({width:"100%",px:(0,util.R1)({xs:"16px",lg:"24px",xxl:0}),mx:"auto",maxWidth:"1120px"},props),children)};const Layouts_Container=Container;function HeroWrapper_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HeroWrapper_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function HeroWrapper_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}Container.__docgenInfo={description:"",methods:[],displayName:"Container",composes:["BackgroundProps","BorderProps","LayoutProps","PositionProps","SpaceProps","HTMLAttributes"]};var HeroWrapper=function(_param){var children=_param.children,props=HeroWrapper_object_without_properties(_param,["children"]);return react.createElement(Box.az,function HeroWrapper_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){HeroWrapper_define_property(target,key,source[key])}))}return target}({p:(0,util.R1)({xs:"96px 0 0",md:"104px 0 0"}),width:"100%"},props),children)};const Layouts_HeroWrapper=HeroWrapper;function ContainerCarousel_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ContainerCarousel_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function ContainerCarousel_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}HeroWrapper.__docgenInfo={description:"",methods:[],displayName:"HeroWrapper",composes:["BackgroundProps","BorderProps","LayoutProps","PositionProps","SpaceProps","HTMLAttributes"]};var ContainerCarousel=function(_param){var children=_param.children,props=ContainerCarousel_object_without_properties(_param,["children"]);return react.createElement(Box.az,function ContainerCarousel_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){ContainerCarousel_define_property(target,key,source[key])}))}return target}({px:(0,util.R1)({xs:0,sm:0,md:"16px",lg:"24px",xxl:0}),mx:"auto",maxWidth:"1120px"},props),children)};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_templateObject(){var data=function index_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  width: 100%;\n  background: #1fc7d4;\n  height: 300px;\n"]);return index_stories_templateObject=function _templateObject(){return data},data}ContainerCarousel.__docgenInfo={description:"",methods:[],displayName:"ContainerCarousel",composes:["BackgroundProps","BorderProps","LayoutProps","PositionProps","SpaceProps","HTMLAttributes"]};const index_stories={title:"Components/Layouts",argTypes:{}};var Stub=styled_components_browser_esm.Ay.div(index_stories_templateObject()),Base=function(){return react.createElement(BaseLayout,null,_to_consumable_array(Array(24)).map((function(value){return react.createElement(Stub,{key:value})})))},Cards=function(){return react.createElement(CardsLayout,null,_to_consumable_array(Array(10)).map((function(value){return react.createElement(Stub,{key:value})})))},ContainerLayout=function(){return react.createElement(Layouts_Container,null,react.createElement(Stub,null))},HeroWrap=function(){return react.createElement(Layouts_HeroWrapper,null,react.createElement(Stub,null))};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:"() => {\n  return <BaseLayout>\n      {[...Array(24)].map(value => <Stub key={value} />)}\n    </BaseLayout>;\n}",...Base.parameters?.docs?.source}}},Cards.parameters={...Cards.parameters,docs:{...Cards.parameters?.docs,source:{originalSource:"() => {\n  return <CardsLayout>\n      {[...Array(10)].map(value => <Stub key={value} />)}\n    </CardsLayout>;\n}",...Cards.parameters?.docs?.source}}},ContainerLayout.parameters={...ContainerLayout.parameters,docs:{...ContainerLayout.parameters?.docs,source:{originalSource:"() => {\n  return <Container>\n      <Stub />\n    </Container>;\n}",...ContainerLayout.parameters?.docs?.source}}},HeroWrap.parameters={...HeroWrap.parameters,docs:{...HeroWrap.parameters?.docs,source:{originalSource:"() => {\n  return <HeroWrapper>\n      <Stub />\n    </HeroWrapper>;\n}",...HeroWrap.parameters?.docs?.source}}};const __namedExportsOrder=["Base","Cards","ContainerLayout","HeroWrap"]},"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp,styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_0__.G1,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)},"./src/components/Box/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Box.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_1__.A)(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.pn)},"./src/components/Box/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Box.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: grid;\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_1__.A)(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.pn,styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg)},"./src/components/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{az:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.A,so:()=>_Flex__WEBPACK_IMPORTED_MODULE_1__.A,xA:()=>_Grid__WEBPACK_IMPORTED_MODULE_2__.A});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Flex.tsx"),_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Grid.tsx")},"./src/util/getRgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/util/getThemeValue.ts");const __WEBPACK_DEFAULT_EXPORT__=function(color,theme,alpha){var hex=/^#[0-9A-F]{6}$/i.test(color)?color:(0,_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.A)("colors.".concat(color),color)(theme),r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return alpha?"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(alpha,")"):"rgba(".concat(r,", ").concat(g,", ").concat(b,")")}},"./src/util/getThemeValue.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/get.js"),lodash_get__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=function(path,fallback){return function(theme){return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(theme,path,fallback)}}},"./src/util/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PS:()=>formatSpacingAmount,R1:()=>getResponsiveAttrs,l6:()=>getRgba.A,CN:()=>isTouchDevice.A});var formatSpacingAmount=function(x){if(x){var parts=x.toString().split(".");return parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),parts.join(".")}return null},getRgba=__webpack_require__("./src/util/getRgba.ts"),isTouchDevice=(__webpack_require__("./src/util/getThemeValue.ts"),__webpack_require__("./src/util/isTouchDevice.ts"));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultObject={xs:null,sm:null,md:null,lg:null,xl:null,xll:null,xxl:null},getResponsiveAttrs=function(obj){return Object.values(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},defaultObject,obj))}},"./src/util/isTouchDevice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(){return"undefined"!=typeof window&&("ontouchstart"in window||navigator.maxTouchPoints>0)}}}]);