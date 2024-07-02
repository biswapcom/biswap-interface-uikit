"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[3816],{"./src/components/ButtonMenu/ButtonMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ButtonMenu/types.ts"),_util_getRgba__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/util/getRgba.ts"),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ButtonMenu/helpers.ts"),_contexts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/contexts/index.ts"),_Box__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Box/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n      overflow-x: scroll;\n    "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n      border-radius: 0 0 8px 8px;\n      padding: 0;\n    "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n      border-radius: 8px 8px 0 0;\n      padding: 0;\n    "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  position: relative;\n  display: ",";\n  width: ",";\n  padding: 4px;\n  border-radius: 10px;\n  background-color: ",";\n  overflow: hidden;\n\n  ",";\n\n  ","\n\n  ","\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ","\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n        flex: 1;\n      "]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  position: relative;\n  display: ",";\n  width: ",";\n\n  & > button,\n  & > div,\n  & > a {\n    flex-grow: 1;\n\n    ","\n  }\n\n  & > button,\n  & > div,\n  & a {\n    box-shadow: none;\n  }\n\n  ","\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n      transition:\n        left 0.3s ease,\n        width 0.3s ease;\n    "]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal(["\n      border-radius: ",";\n      height: calc(100% - 4px);\n      top: calc(50% - 2px);\n    "]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal(["\n      border-radius: ",";\n      height: calc(100% - 4px);\n      top: calc(50% + 2px);\n    "]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal(["\n  position: absolute;\n  top: 50%;\n  left: ",";\n  width: ",";\n  height: calc(100% - 8px);\n  border-radius: ",";\n  background-color: ",";\n  transform: translateY(-50%);\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n"]);return _templateObject9=function _templateObject(){return data},data}var Wrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_6__.az)(_templateObject3(),(function(param){return param.fullWidth?"flex":"inline-flex"}),(function(param){return param.fullWidth?"100%":"auto"}),(function(param){var theme=param.theme,withoutBackground=param.withoutBackground,variant=param.variant;return withoutBackground?"transparent":variant===_types__WEBPACK_IMPORTED_MODULE_2__.l.DARK?theme.colors.tooltip:(0,_util_getRgba__WEBPACK_IMPORTED_MODULE_3__.A)(theme.colors.pastelBlue,theme,.08)}),(function(param){return param.scrollX&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject())}),(function(param){return param.flatTop&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject1())}),(function(param){return param.flatBottom&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject2())}),styled_system__WEBPACK_IMPORTED_MODULE_1__.xe),StyledButtonMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_6__.az)(_templateObject5(),(function(param){return param.fullWidth?"flex":"inline-flex"}),(function(param){return param.fullWidth?"100%":"auto"}),(function(param){return param.equalElementWidth&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject4())}),(function(param){var disabled=param.disabled,theme=param.theme,variant=param.variant;return disabled?"\n        opacity: 0.32;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(variant===_types__WEBPACK_IMPORTED_MODULE_2__.l.DARK?theme.colors.pastelBlue:theme.colors.gray900,";\n        }\n    "):""})),Selection=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_6__.az)(_templateObject9(),(function(param){var offset=param.offset;return"".concat(offset,"px")}),(function(param){var width=param.width;return"".concat(width,"px")}),(function(param){return param.scale===_types__WEBPACK_IMPORTED_MODULE_2__.G.SM?"6px":"8px"}),(function(param){var theme=param.theme,variant=param.variant;return theme.colors[variant===_types__WEBPACK_IMPORTED_MODULE_2__.l.DARK?"dark500":variant===_types__WEBPACK_IMPORTED_MODULE_2__.l.LIGHT?"white":"warning"]}),(function(param){return!param.withoutAnimation&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject6())}),(function(param){var flatTop=param.flatTop,scale=param.scale;return flatTop&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject7(),scale===_types__WEBPACK_IMPORTED_MODULE_2__.G.SM?"0 0 6px 6px":"0 0 8px 8px")}),(function(param){var flatBottom=param.flatBottom,scale=param.scale;return flatBottom&&(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject8(),scale===_types__WEBPACK_IMPORTED_MODULE_2__.G.SM?"6px 6px 0 0":"8px 8px 0 0")}),(function(param){var theme=param.theme;return param.variant===_types__WEBPACK_IMPORTED_MODULE_2__.l.DARK&&"box-shadow: 0 2px 4px ".concat((0,_util_getRgba__WEBPACK_IMPORTED_MODULE_3__.A)(theme.colors.backgroundDark,theme,.08))})),ButtonMenu=function(_param){var _param_activeIndex=_param.activeIndex,activeIndex=void 0===_param_activeIndex?0:_param_activeIndex,_param_scale=_param.scale,scale=void 0===_param_scale?_types__WEBPACK_IMPORTED_MODULE_2__.G.MD:_param_scale,_param_variant=_param.variant,variant=void 0===_param_variant?_types__WEBPACK_IMPORTED_MODULE_2__.l.DARK:_param_variant,onItemClick=_param.onItemClick,disabled=_param.disabled,children=_param.children,_param_fullWidth=_param.fullWidth,fullWidth=void 0!==_param_fullWidth&&_param_fullWidth,_param_flatBottom=_param.flatBottom,flatBottom=void 0!==_param_flatBottom&&_param_flatBottom,_param_flatTop=_param.flatTop,flatTop=void 0!==_param_flatTop&&_param_flatTop,_param_withoutBackground=_param.withoutBackground,withoutBackground=void 0!==_param_withoutBackground&&_param_withoutBackground,_param_scrollX=_param.scrollX,scrollX=void 0!==_param_scrollX&&_param_scrollX,equalElementWidth=_param.equalElementWidth,_param_withoutAnimation=_param.withoutAnimation,withoutAnimation=void 0!==_param_withoutAnimation&&_param_withoutAnimation,_param_itemsProperties=_param.itemsProperties,itemsProperties=void 0===_param_itemsProperties?[]:_param_itemsProperties,props=_object_without_properties(_param,["activeIndex","scale","variant","onItemClick","disabled","children","fullWidth","flatBottom","flatTop","withoutBackground","scrollX","equalElementWidth","withoutAnimation","itemsProperties"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),widthsArr=_useState[0],setWidthsArr=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),blockOffset=_useState1[0],setBlockOffset=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),activeButtonIndex=_useState2[0],setActiveButtonIndex=_useState2[1],_useMatchBreakpoints=(0,_contexts__WEBPACK_IMPORTED_MODULE_5__.Z)(),isDesktop=_useMatchBreakpoints.isDesktop,isMobile=_useMatchBreakpoints.isMobile,isTablet=_useMatchBreakpoints.isTablet;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setActiveButtonIndex(activeIndex)}),[activeIndex]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){null!==activeButtonIndex&&setBlockOffset(widthsArr.slice(0,activeButtonIndex).reduce((function(sum,elem){return sum+elem}),0))}),[widthsArr,activeButtonIndex,isDesktop,isMobile,isTablet]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,_object_spread({flatBottom,flatTop,fullWidth,withoutBackground,variant,scrollX},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Selection,{flatTop,flatBottom,scale,width:widthsArr[activeIndex],offset:(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.A3)(blockOffset,flatTop||flatBottom),variant,withoutAnimation}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButtonMenu,_object_spread({disabled,variant,fullWidth,withoutBackground,equalElementWidth},props),react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(function(child,index){return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{isActive:activeIndex===index,onItemClick:null==onItemClick?void 0:onItemClick(index),setWidth:setWidthsArr,itemIndex:index,activeButtonIndex,blockOffset,properties:itemsProperties.find((function(i){return i.index===index})),scale,variant,disabled,flatBottom,flatTop})}))))};const __WEBPACK_DEFAULT_EXPORT__=ButtonMenu;ButtonMenu.__docgenInfo={description:"",methods:[],displayName:"ButtonMenu",props:{variant:{required:!1,tsType:{name:"Variants"},description:"",defaultValue:{value:"Variants.DARK",computed:!0}},activeIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},scale:{required:!1,tsType:{name:"Scales"},description:"",defaultValue:{value:"Scales.MD",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},flatBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},flatTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withoutBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},scrollX:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},equalElementWidth:{required:!1,tsType:{name:"boolean"},description:""},withoutAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},itemsProperties:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  index: number;\n  markerColor?: keyof MarkerType;\n  tooltipText?: string;\n  dontShowTooltip?: boolean;\n}",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"markerColor",value:{name:"signature",type:"object",raw:"{\n  primary: string;\n  secondary: string;\n  success: string;\n  warning: string;\n}",signature:{properties:[{key:"primary",value:{name:"string",required:!0}},{key:"secondary",value:{name:"string",required:!0}},{key:"success",value:{name:"string",required:!0}},{key:"warning",value:{name:"string",required:!0}}]},required:!1}},{key:"tooltipText",value:{name:"string",required:!1}},{key:"dontShowTooltip",value:{name:"boolean",required:!1}}]}}],raw:"IPropertiesType[]"},description:"",defaultValue:{value:"[]",computed:!1}}},composes:["SpaceProps"]}},"./src/components/ButtonMenu/ButtonMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ButtonMenu_ButtonMenuItem});var _obj,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),types=__webpack_require__("./src/components/ButtonMenu/types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _obj1,_obj2,scaleVariants=(_define_property(_obj={},types.G.XL,{height:"48px",padding:"0 24px",borderRadius:"10px",fontSize:"16px"}),_define_property(_obj,types.G.LG,{height:"40px",padding:"0 16px",fontSize:"14px",borderRadius:"8px"}),_define_property(_obj,types.G.MD,{height:"32px",padding:"0 12px",fontSize:"12px",borderRadius:"8px"}),_define_property(_obj,types.G.SM,{height:"24px",padding:"0 8px",fontSize:"12px",borderRadius:"6px"}),_define_property(_obj,types.G.XS,{height:"20px",padding:"0 8px",fontSize:"12px",borderRadius:"6px"}),_obj),styleVariants=(_define_property(_obj1={},types.l.DARK,{color:"white",backgroundColor:"transparent",":active:not(:disabled)":{backgroundColor:"transparent"}}),_define_property(_obj1,types.l.LIGHT,{backgroundColor:"transparent",color:"dark800",":hover(:disabled)":{color:"dark800"},":active:not(:disabled)":{color:"text"}}),_define_property(_obj1,types.l.WARNING_DARK,{backgroundColor:"transparent",color:"dark800",":hover(:disabled)":{color:"dark800"},":active:not(:disabled)":{color:"dark800"},":active":{backgroundColor:"transparent"}}),_define_property(_obj1,types.l.WARNING_LIGHT,{backgroundColor:"transparent",color:"dark800",":hover(:disabled)":{color:"dark800"},":active:not(:disabled)":{color:"dark800"}}),_obj1),markerScales=(_define_property(_obj2={},types.G.XL,{top:"2px",right:"8px"}),_define_property(_obj2,types.G.LG,{top:"2px",right:"8px"}),_define_property(_obj2,types.G.MD,{top:"2px",right:"8px"}),_define_property(_obj2,types.G.SM,{top:"2px",right:"8px"}),_define_property(_obj2,types.G.XS,{top:"2px",right:"8px"}),_obj2),Box=__webpack_require__("./src/components/Box/index.tsx"),Marker=__webpack_require__("./src/components/MenuItem/Marker.tsx"),hooks=__webpack_require__("./src/hooks/index.ts"),contexts=__webpack_require__("./src/contexts/index.ts"),util=__webpack_require__("./src/util/index.ts"),helpers=__webpack_require__("./src/components/ButtonMenu/helpers.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ButtonMenuItem_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){ButtonMenuItem_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _templateObject(){var data=_tagged_template_literal(["\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n\n      &:hover:not(:disabled):not(:active) {\n        background-color: transparent;\n      }\n    "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  font-family: inherit;\n  font-weight: 600;\n  line-height: 1;\n  white-space: nowrap;\n  background-color: transparent;\n  cursor: ",";\n  transition:\n    background-color 0.2s,\n    opacity 0.3s,\n    color 0.3s;\n  -webkit-tap-highlight-color: transparent;\n\n  ","\n\n  ","\n\n  ","\n"]);return _templateObject1=function _templateObject(){return data},data}var MenuItemButton=styled_components_browser_esm.Ay.button(_templateObject1(),(function(param){return param.disabled?"not-allowed":"pointer"}),(0,index_esm.Ox)({variants:styleVariants}),(0,index_esm.Ox)({prop:"scale",variants:scaleVariants}),(function(param){var isActive=param.isActive,colorKey=param.colorKey,hoverKey=param.hoverKey;return!isActive&&(0,styled_components_browser_esm.AH)(_templateObject(),(function(param){return param.theme.colors[colorKey]}),(function(param){return param.theme.colors[hoverKey]}))})),ButtonMenuItem=function(_param){var _ref_current,_ref_current_clientWidth,_param_isActive=_param.isActive,isActive=void 0!==_param_isActive&&_param_isActive,_param_variant=_param.variant,variant=void 0===_param_variant?types.l.DARK:_param_variant,properties=_param.properties,_param_scale=_param.scale,scale=void 0===_param_scale?types.G.MD:_param_scale,as=_param.as,setWidth=_param.setWidth,_param_itemIndex=_param.itemIndex,itemIndex=void 0===_param_itemIndex?0:_param_itemIndex,activeButtonIndex=_param.activeButtonIndex,blockOffset=_param.blockOffset,onItemClick=_param.onItemClick,onClick=_param.onClick,props=_object_without_properties(_param,["isActive","variant","properties","scale","as","setWidth","itemIndex","activeButtonIndex","blockOffset","onItemClick","onClick"]),ref=(0,react.useRef)(null),_useMatchBreakpoints=(0,contexts.Z)(),isMobile=_useMatchBreakpoints.isMobile,isTablet=_useMatchBreakpoints.isTablet,isXs=_useMatchBreakpoints.isXs,isSm=_useMatchBreakpoints.isSm,isMs=_useMatchBreakpoints.isMs,isLg=_useMatchBreakpoints.isLg,isXl=_useMatchBreakpoints.isXl,isXll=_useMatchBreakpoints.isXll,isXxl=_useMatchBreakpoints.isXxl,disableStopPropagation=isMobile||isTablet||(0,util.CN)(),itemWidth=null!==(_ref_current_clientWidth=null==ref||null===(_ref_current=ref.current)||void 0===_ref_current?void 0:_ref_current.clientWidth)&&void 0!==_ref_current_clientWidth?_ref_current_clientWidth:0,_useTooltip=(0,hooks.fS)(null==properties?void 0:properties.tooltipText,{placement:"top",disableStopPropagation}),targetRef=_useTooltip.targetRef,tooltip=_useTooltip.tooltip,tooltipVisible=_useTooltip.tooltipVisible;(0,react.useEffect)((function(){itemWidth&&setWidth&&setWidth((function(prev){return prev.length>itemIndex?prev.map((function(i,index){return index===itemIndex?itemWidth:i})):_to_consumable_array(prev).concat([itemWidth,itemIndex])}))}),[blockOffset,activeButtonIndex,itemWidth,isXs,isSm,isMs,isLg,isXl,isXll,isXxl]);return react.createElement(Box.az,{ref:targetRef,position:"relative",width:"100%"},(null==properties?void 0:properties.tooltipText)&&!properties.dontShowTooltip&&tooltipVisible&&tooltip,react.createElement(MenuItemButton,_object_spread({onClick:function(e){onItemClick&&onItemClick(itemIndex),onClick&&onClick(),disableStopPropagation&&e.stopPropagation()},isActive,ref,as,variant,hoverKey:(0,helpers.Mw)(variant),colorKey:(0,helpers.FK)(variant),scale},props)),(null==properties?void 0:properties.markerColor)&&react.createElement(Marker.A,_object_spread({color:(null==properties?void 0:properties.markerColor)||"success"},markerScales[scale])))};const ButtonMenu_ButtonMenuItem=ButtonMenuItem;ButtonMenuItem.__docgenInfo={description:"",methods:[],displayName:"ButtonMenuItem",props:{as:{required:!1,tsType:{name:"union",raw:'"a" | "button" | ElementType',elements:[{name:"literal",value:'"a"'},{name:"literal",value:'"button"'},{name:"ElementType"}]},description:""},external:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},loadingTitle:{required:!1,tsType:{name:"string"},description:""},scale:{required:!1,tsType:{name:"Scales"},description:"",defaultValue:{value:"Scales.MD",computed:!0}},variant:{required:!1,tsType:{name:"Variants"},description:"",defaultValue:{value:"Variants.DARK",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},flatBottom:{required:!1,tsType:{name:"boolean"},description:""},flatTop:{required:!1,tsType:{name:"boolean"},description:""},flat:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setWidth:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"SetStateAction<number[]>"}],raw:"Dispatch<SetStateAction<number[]>>"},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},activeButtonIndex:{required:!1,tsType:{name:"number"},description:""},blockOffset:{required:!1,tsType:{name:"number"},description:""},elementRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLButtonElement"}],raw:"RefObject<HTMLButtonElement>"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},properties:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  index: number;\n  markerColor?: keyof MarkerType;\n  tooltipText?: string;\n  dontShowTooltip?: boolean;\n}",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"markerColor",value:{name:"signature",type:"object",raw:"{\n  primary: string;\n  secondary: string;\n  success: string;\n  warning: string;\n}",signature:{properties:[{key:"primary",value:{name:"string",required:!0}},{key:"secondary",value:{name:"string",required:!0}},{key:"success",value:{name:"string",required:!0}},{key:"warning",value:{name:"string",required:!0}}]},required:!1}},{key:"tooltipText",value:{name:"string",required:!1}},{key:"dontShowTooltip",value:{name:"boolean",required:!1}}]}},description:""}},composes:["LayoutProps","SpaceProps"]}},"./src/components/ButtonMenu/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A3:()=>getOffset,FK:()=>getColorKey,Mw:()=>getHoverKey});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ButtonMenu/types.ts"),getColorKey=function(variant){switch(variant){case _types__WEBPACK_IMPORTED_MODULE_0__.l.DARK:return"pastelBlue";case _types__WEBPACK_IMPORTED_MODULE_0__.l.LIGHT:case _types__WEBPACK_IMPORTED_MODULE_0__.l.WARNING_LIGHT:return"gray900";case _types__WEBPACK_IMPORTED_MODULE_0__.l.WARNING_DARK:return"pastelBlue"}},getHoverKey=function(variant){switch(variant){case _types__WEBPACK_IMPORTED_MODULE_0__.l.DARK:return"white";case _types__WEBPACK_IMPORTED_MODULE_0__.l.LIGHT:case _types__WEBPACK_IMPORTED_MODULE_0__.l.WARNING_LIGHT:return"dark800";case _types__WEBPACK_IMPORTED_MODULE_0__.l.WARNING_DARK:return"white"}},getOffset=function(offset,isFlat){return isFlat?offset:offset+4}},"./src/components/ButtonMenu/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Scales,Variants;__webpack_require__.d(__webpack_exports__,{G:()=>Scales,l:()=>Variants}),function(Scales){Scales.XL="xl",Scales.LG="lg",Scales.MD="md",Scales.SM="sm",Scales.XS="xs"}(Scales||(Scales={})),function(Variants){Variants.DARK="dark",Variants.LIGHT="light",Variants.WARNING_LIGHT="warningLight",Variants.WARNING_DARK="warningDark"}(Variants||(Variants={}))},"./src/components/MenuItem/Marker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/index.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: ",';\n  transform: translateX(100%);\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    z-index: 1;\n    animation: '," 2s infinite;\n  }\n"]);return _templateObject4=function _templateObject(){return data},data}var PULSE_SUCCESS=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.i7)(_templateObject()),PULSE_WARNING=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.i7)(_templateObject1()),PULSES={PRIMARY:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.i7)(_templateObject2()),SECONDARY:(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.i7)(_templateObject3()),WARNING:PULSE_WARNING,SUCCESS:PULSE_SUCCESS};const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_0__.az)(_templateObject4(),(function(param){var top=param.top;return null!=top?top:0}),(function(param){var right=param.right;return null!=right?right:"-4px"}),(function(param){var theme=param.theme,color=param.color;return color?theme.colors[color]:theme.colors.success}),(function(param){var color=param.color;return color?PULSES[color.toUpperCase()]:PULSE_SUCCESS}))}}]);