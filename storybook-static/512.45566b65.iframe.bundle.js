"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[512],{"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp,styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_0__.G1,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)},"./src/components/Box/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Box.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_1__.A)(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.pn)},"./src/components/Box/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Box.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: grid;\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_1__.A)(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.pn,styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg)},"./src/components/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{az:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.A,so:()=>_Flex__WEBPACK_IMPORTED_MODULE_1__.A,xA:()=>_Grid__WEBPACK_IMPORTED_MODULE_2__.A});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Flex.tsx"),_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Grid.tsx")},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var _obj,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getExternalLinkProps=__webpack_require__("./src/util/getExternalLinkProps.ts"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),types=__webpack_require__("./src/components/Button/types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _obj1,scaleVariants=(_define_property(_obj={},types.G.XL,{height:"48px",fontSize:"16px",padding:"0 24px",borderRadius:"10px"}),_define_property(_obj,types.G.LG,{height:"40px",padding:"0 16px",fontSize:"14px",borderRadius:"8px"}),_define_property(_obj,types.G.MD,{height:"32px",padding:"0 12px",fontSize:"12px",borderRadius:"8px"}),_define_property(_obj,types.G.SM,{height:"24px",padding:"0 8px",fontSize:"12px",borderRadius:"6px"}),_define_property(_obj,types.G.XS,{height:"20px",padding:"0 8px",fontSize:"12px",borderRadius:"6px"}),_obj),styleVariants=(_define_property(_obj1={},types.l.PRIMARY,{backgroundColor:"primary",color:"white",":hover:not(:disabled)":{backgroundColor:"primaryHover"},":active:not(:disabled)":{backgroundColor:"primaryPress"}}),_define_property(_obj1,types.l.DANGER,{backgroundColor:"secondary",color:"white",":hover:not(:disabled)":{backgroundColor:"secondaryHover"},":active:not(:disabled)":{backgroundColor:"secondaryPress"}}),_define_property(_obj1,types.l.SUCCESS,{backgroundColor:"success",color:"white",":hover:not(:disabled)":{backgroundColor:"successHover"},":active:not(:disabled)":{backgroundColor:"successPress"}}),_define_property(_obj1,types.l.WARNING,{backgroundColor:"warning",color:"dark800",":hover:not(:disabled)":{backgroundColor:"warningHover"},":active:not(:disabled)":{backgroundColor:"warningPress"}}),_define_property(_obj1,types.l.BOOST,{backgroundColor:"boost",color:"white",":hover:not(:disabled)":{backgroundColor:"boostHover"},":active:not(:disabled)":{backgroundColor:"boostPress"}}),_define_property(_obj1,types.l.TERTIARY,{backgroundColor:"btnTertiary",color:"primary",border:"1px solid transparent",":hover:not(:disabled)":{backgroundColor:"transparent",borderColor:"btnTertiary"},":active:not(:disabled)":{backgroundColor:"transparent",borderColor:"primary"}}),_define_property(_obj1,types.l.TERTIARY_OUT,{color:"primary",backgroundColor:"transparent",border:"1px solid",borderColor:"btnTertiaryOut",":hover:not(:disabled)":{backgroundColor:"btnTertiaryOut",borderColor:"transparent"},":active:not(:disabled)":{backgroundColor:"btnTertiaryOutPress",borderColor:"transparent"}}),_define_property(_obj1,types.l.LIGHT_OUT,{color:"white",border:"1px solid",borderColor:"btnLightOutBorder",backgroundColor:"transparent",":hover:not(:disabled)":{backgroundColor:"btnLightOutBgHover",borderColor:"transparent"},":active:not(:disabled)":{backgroundColor:"btnLightOutBgPress",borderColor:"transparent"}}),_define_property(_obj1,types.l.LIGHT,{backgroundColor:"btnLight",color:"white",border:"1px solid transparent",":hover:not(:disabled)":{backgroundColor:"transparent",borderColor:"btnLight"},":active:not(:disabled)":{backgroundColor:"transparent",borderColor:"white"}}),_define_property(_obj1,types.l.TEXT,{backgroundColor:"transparent",color:"primary",boxShadow:"none",":hover:not(:disabled)":{color:"primaryHover"},":active:not(:disabled)":{color:"primaryPress"}}),_define_property(_obj1,types.l.TEXT_DARK,{backgroundColor:"transparent",color:"primaryHover",boxShadow:"none",":hover:not(:disabled)":{color:"primary"},":active:not(:disabled)":{color:"primaryPress"}}),_obj1);function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1;\n  opacity: ",";\n  outline: 0;\n  transition:\n    background-color 0.3s ease-in-out,\n    opacity 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n  white-space: nowrap;\n  cursor: pointer;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const Button_StyledButton=styled_components_browser_esm.Ay.button(_templateObject(),(function(param){var _param_$isLoading=param.$isLoading;return void 0!==_param_$isLoading&&_param_$isLoading?".5":"1"}),(function(param){return!0===param.$isLoading?"\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ":"\n    &:disabled,\n    &.button--disabled {\n      opacity: .32;\n      cursor: not-allowed;\n    }\n  "}),(0,index_esm.Ox)({prop:"scale",variants:scaleVariants}),(0,index_esm.Ox)({variants:styleVariants}),index_esm.Zp,index_esm.xe,(function(param){var _param_flatBottom=param.flatBottom,flatBottom=void 0!==_param_flatBottom&&_param_flatBottom,_param_flatTop=param.flatTop,flatTop=void 0!==_param_flatTop&&_param_flatTop,_param_flat=param.flat;return flatBottom?"\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n    ":flatTop?"\n      border-top-right-radius: 0;\n      border-top-left-radius: 0;\n    ":void 0!==_param_flat&&_param_flat?"\n      border-radius: 0;\n    ":void 0}));var Svg=__webpack_require__("./src/components/Svg/index.tsx");function Button_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Button_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Button_templateObject(){var data=Button_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);\n  }\n"]);return Button_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=Button_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=Button_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=Button_tagged_template_literal(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=Button_tagged_template_literal(["\n  position: absolute;\n  top: 14%;\n  right: 11%;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: ",';\n  transform: translateX(100%);\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    z-index: 1;\n    animation: '," 2s infinite;\n  }\n"]);return _templateObject4=function _templateObject(){return data},data}var PULSE_SUCCESS=(0,styled_components_browser_esm.i7)(Button_templateObject()),PULSE_WARNING=(0,styled_components_browser_esm.i7)(_templateObject1()),PULSES={PRIMARY:(0,styled_components_browser_esm.i7)(_templateObject2()),SECONDARY:(0,styled_components_browser_esm.i7)(_templateObject3()),WARNING:PULSE_WARNING,SUCCESS:PULSE_SUCCESS},Bubble=styled_components_browser_esm.Ay.span(_templateObject4(),(function(param){var theme=param.theme,bubbleColor=param.bubbleColor;return bubbleColor?theme.colors[bubbleColor]:theme.colors.success}),(function(param){var color=param.color;return color?PULSES[color.toUpperCase()]:PULSE_SUCCESS})),Button=function(props){var addBubble=props.addBubble,startIcon=props.startIcon,endIcon=props.endIcon,_props_external=props.external,external=void 0!==_props_external&&_props_external,className=props.className,_props_isLoading=props.isLoading,isLoading=void 0!==_props_isLoading&&_props_isLoading,_props_disabled=props.disabled,disabled=void 0!==_props_disabled&&_props_disabled,children=props.children,loadingTitle=props.loadingTitle,_props_variant=props.variant,variant=void 0===_props_variant?types.l.PRIMARY:_props_variant,_props_scale=props.scale,scale=void 0===_props_scale?types.G.MD:_props_scale,rest=_object_without_properties(props,["addBubble","startIcon","endIcon","external","className","isLoading","disabled","children","loadingTitle","variant","scale"]),internalProps=external?(0,getExternalLinkProps.A)():{},isDisabled=isLoading||disabled,classNames=className?[className]:[],loadingText=null!=loadingTitle?loadingTitle:"Loading...",endIconElement=isLoading?react.createElement(Svg.AutoRenewAnimateIcon,{color:"contrast"}):endIcon;return isLoading&&classNames.push("button--loading"),isDisabled&&!isLoading&&classNames.push("button--disabled"),react.createElement(Button_StyledButton,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Button_define_property(target,key,source[key])}))}return target}({$isLoading:isLoading,className:classNames.join(" "),disabled:isDisabled,variant,scale},internalProps,rest),react.createElement(react.Fragment,null,addBubble&&react.createElement(Bubble,null),(0,react.isValidElement)(startIcon)&&(0,react.cloneElement)(startIcon,{mr:"0.5rem"}),isLoading?loadingText:children,(0,react.isValidElement)(endIconElement)&&(0,react.cloneElement)(endIconElement,{ml:"0.5rem"})))};const Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{required:!1,tsType:{name:"E"},description:""}}}},"./src/components/Button/ExpandableButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ExpandableButton,d:()=>ExpandableLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Svg/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Button.tsx"),_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/IconButton.tsx"),_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/types.ts"),ExpandableButton=function(param){var onClick=param.onClick,_param_expanded=param.expanded,expanded=void 0!==_param_expanded&&_param_expanded,children=param.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_3__.A,{"aria-label":"Hide or show expandable content",onClick},children,expanded?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_1__.ChevronUpIcon,{color:"invertedContrast"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{color:"invertedContrast"}))},ExpandableLabel=function(param){var onClick=param.onClick,_param_expanded=param.expanded,expanded=void 0!==_param_expanded&&_param_expanded,children=param.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:_types__WEBPACK_IMPORTED_MODULE_4__.l.TEXT,"aria-label":"Hide or show expandable content",onClick,endIcon:expanded?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_1__.ChevronUpIcon,{color:"primary"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{color:"primary"})},children)};ExpandableButton.__docgenInfo={description:"",methods:[],displayName:"ExpandableButton",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}},ExpandableLabel.__docgenInfo={description:"",methods:[],displayName:"ExpandableLabel",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./src/components/Button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  padding: 0;\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_Button__WEBPACK_IMPORTED_MODULE_0__.A)(_templateObject())},"./src/components/Button/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Scales,Variants;__webpack_require__.d(__webpack_exports__,{G:()=>Scales,l:()=>Variants}),function(Scales){Scales.XL="xl",Scales.LG="lg",Scales.MD="md",Scales.SM="sm",Scales.XS="xs"}(Scales||(Scales={})),function(Variants){Variants.PRIMARY="primary",Variants.DANGER="danger",Variants.SUCCESS="success",Variants.WARNING="warning",Variants.BOOST="boost",Variants.LIGHT_OUT="lightOut",Variants.LIGHT="light",Variants.TERTIARY="tertiary",Variants.TERTIARY_OUT="tertiaryOut",Variants.TEXT="text",Variants.TEXT_DARK="textDark"}(Variants||(Variants={}))},"./src/util/getExternalLinkProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(){return{target:"_blank",rel:"noreferrer noopener"}}}}]);