"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[258],{"./src/components/Skeleton/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animation:()=>Animation,Avatar:()=>Avatar,Default:()=>Default,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Skeleton/Skeleton.tsx"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/index.tsx"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Skeleton/types.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Skeleton",component:_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{width:{control:"number"},height:{control:"number"}}};var Default=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.az,{width:"500px",mt:"24px",ml:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,args),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"400px",height:"32px",mt:"16px"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"400px",height:"48px",mt:"16px",variant:_types__WEBPACK_IMPORTED_MODULE_3__.l.MD}))},Avatar=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.az,{width:"500px",mt:"24px",ml:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{width:"40px",height:"40px",variant:_types__WEBPACK_IMPORTED_MODULE_3__.l.CIRCLE}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"400px",height:"32px",mt:"16px"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"400px",height:"48px",mt:"16px",variant:_types__WEBPACK_IMPORTED_MODULE_3__.l.MD}))},Animation=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.az,{width:"500px",mt:"24px",ml:"24px"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"100px",height:"200px"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"400px",height:"32px",mt:"16px"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,{animation:_types__WEBPACK_IMPORTED_MODULE_3__.Q.WAVES,width:"400px",height:"48px",mt:"16px",variant:_types__WEBPACK_IMPORTED_MODULE_3__.l.MD}))},Text=function(args){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),loading=_useState[0],setLoading=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var timer=setTimeout((function(){setLoading(!1)}),2e3);return function(){return clearTimeout(timer)}}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{style:{width:200}},loading?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.A,args):"H1"))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  return <Box width="500px" mt="24px" ml="24px">\n      <Skeleton {...args} />\n      <Skeleton animation={Animations.WAVES} width="400px" height="32px" mt="16px" />\n      <Skeleton animation={Animations.WAVES} width="400px" height="48px" mt="16px" variant={Variants.MD} />\n    </Box>;\n}',...Default.parameters?.docs?.source}}},Avatar.parameters={...Avatar.parameters,docs:{...Avatar.parameters?.docs,source:{originalSource:'() => {\n  return <Box width="500px" mt="24px" ml="24px">\n      <Skeleton width="40px" height="40px" variant={Variants.CIRCLE} />\n      <Skeleton animation={Animations.WAVES} width="400px" height="32px" mt="16px" />\n      <Skeleton animation={Animations.WAVES} width="400px" height="48px" mt="16px" variant={Variants.MD} />\n    </Box>;\n}',...Avatar.parameters?.docs?.source}}},Animation.parameters={...Animation.parameters,docs:{...Animation.parameters?.docs,source:{originalSource:'() => {\n  return <Box width="500px" mt="24px" ml="24px">\n      <Skeleton animation={Animations.WAVES} width="100px" height="200px" />\n      <Skeleton animation={Animations.WAVES} width="400px" height="32px" mt="16px" />\n      <Skeleton animation={Animations.WAVES} width="400px" height="48px" mt="16px" variant={Variants.MD} />\n    </Box>;\n}',...Animation.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'args => {\n  const [loading, setLoading] = useState<boolean>(true);\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      setLoading(false);\n    }, 2000);\n    return () => clearTimeout(timer);\n  }, []);\n  return <>\n      <h1 style={{\n      width: 200\n    }}>{loading ? <Skeleton {...args} /> : "H1"}</h1>\n    </>;\n}',...Text.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Avatar","Animation","Text"]},"./src/components/Skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Skeleton_Skeleton});var _obj,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),util=__webpack_require__("./src/util/index.ts"),types=__webpack_require__("./src/components/Skeleton/types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var variantsSkeleton=(_define_property(_obj={},types.l.CIRCLE,{borderRadius:"50%"}),_define_property(_obj,types.l.SM,{borderRadius:"4px"}),_define_property(_obj,types.l.MD,{borderRadius:"16px"}),_define_property(_obj,types.l.LG,{borderRadius:"24px"}),_obj),Box=__webpack_require__("./src/components/Box/index.tsx");function Skeleton_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Skeleton_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  0% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.1;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  min-height: 20px;\n  border-radius: ",";\n  background-color: ",";\n\n  ","\n  ","\n  ","\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  animation: "," 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n  background-color: ",";\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  position: relative;\n  top: 0;\n  left: -150px;\n  width: 150px;\n  height: 100%;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  animation: ",' 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n\n  &:before {\n    content: "";\n    position: absolute;\n    background: linear-gradient(\n      90deg,\n      rgba(116, 155, 216, 0) 0%,\n      rgba(116, 155, 216, 0.16) 50%,\n      rgba(116, 155, 216, 0) 100%\n    );\n  }\n']);return _templateObject4=function _templateObject(){return data},data}var waves=(0,styled_components_browser_esm.i7)(_templateObject()),pulse=(0,styled_components_browser_esm.i7)(_templateObject1()),Root=(0,styled_components_browser_esm.Ay)(Box.az)(_templateObject2(),(function(param){var variant=param.variant,theme=param.theme;return variant===types.l.CIRCLE?theme.radii.circle:theme.radii.small}),(function(param){var theme=param.theme;return(0,util.l6)(theme.colors.pastelBlue,theme,.16)}),index_esm.Zp,index_esm.xe,(0,index_esm.Ox)({variants:variantsSkeleton})),Pulse=(0,styled_components_browser_esm.Ay)(Root)(_templateObject3(),pulse,(function(param){return param.theme.colors.pastelBlue})),Waves=(0,styled_components_browser_esm.Ay)(Root)(_templateObject4(),waves),Skeleton=function(_param){var _param_variant=_param.variant,variant=void 0===_param_variant?types.l.RECT:_param_variant,_param_animation=_param.animation,animation=void 0===_param_animation?types.Q.PULSE:_param_animation,props=_object_without_properties(_param,["variant","animation"]);return animation===types.Q.WAVES?react.createElement(Waves,_object_spread({variant},props)):react.createElement(Pulse,_object_spread({variant},props))};const Skeleton_Skeleton=Skeleton;Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{animation:{required:!1,tsType:{name:"Animations"},description:"",defaultValue:{value:"Animations.PULSE",computed:!0}},variant:{required:!1,tsType:{name:"Variants"},description:"",defaultValue:{value:"Variants.RECT",computed:!0}}},composes:["SpaceProps","LayoutProps"]}},"./src/components/Skeleton/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Animations,Variants;__webpack_require__.d(__webpack_exports__,{Q:()=>Animations,l:()=>Variants}),function(Animations){Animations.WAVES="waves",Animations.PULSE="pulse"}(Animations||(Animations={})),function(Variants){Variants.RECT="rect",Variants.CIRCLE="circle",Variants.SM="sm",Variants.MD="md",Variants.LG="lg"}(Variants||(Variants={}))},"./src/util/getRgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/util/getThemeValue.ts");const __WEBPACK_DEFAULT_EXPORT__=function(color,theme,alpha){var hex=/^#[0-9A-F]{6}$/i.test(color)?color:(0,_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.A)("colors.".concat(color),color)(theme),r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return alpha?"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(alpha,")"):"rgba(".concat(r,", ").concat(g,", ").concat(b,")")}},"./src/util/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PS:()=>formatSpacingAmount,R1:()=>getResponsiveAttrs,l6:()=>getRgba.A,nv:()=>getThemeValue.A,CN:()=>isTouchDevice.A});var formatSpacingAmount=function(x){if(x){var parts=x.toString().split(".");return parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),parts.join(".")}return null},getRgba=__webpack_require__("./src/util/getRgba.ts"),getThemeValue=__webpack_require__("./src/util/getThemeValue.ts"),isTouchDevice=__webpack_require__("./src/util/isTouchDevice.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultObject={xs:null,sm:null,md:null,lg:null,xl:null,xll:null,xxl:null},getResponsiveAttrs=function(obj){return Object.values(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},defaultObject,obj))}},"./src/util/isTouchDevice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(){return"undefined"!=typeof window&&("ontouchstart"in window||navigator.maxTouchPoints>0)}}}]);