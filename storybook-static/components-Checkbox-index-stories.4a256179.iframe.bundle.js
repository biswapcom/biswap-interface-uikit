"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[3652],{"./src/components/Checkbox/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),scales_SM="sm",scales_MD="md",getRgba=__webpack_require__("./src/util/getRgba.ts"),Text=__webpack_require__("./src/components/Text/index.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: inline-flex;\n  align-items: ",";\n  flex-direction: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  min-height: ",";\n  width: ",";\n  min-width: ",";\n  border: 2px solid transparent;\n  border-radius: 4px;\n  background-color: ",';\n  transition:\n    background-color 0.4s ease-in-out,\n    border-color 0.4s ease;\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 25%;\n    left: 0;\n    right: 0;\n    width: 65%;\n    height: 37%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ',";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:checked + span {\n    background: ",";\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  transition: color 0.4s ease-in-out;\n"]);return _templateObject2=function _templateObject(){return data},data}var getScale=function(param){return param.scale===scales_SM?"16px":"20px"},Wrapper=styled_components_browser_esm.Ay.label(_templateObject(),(function(param){var checkboxPosition=param.checkboxPosition;return null!=checkboxPosition?checkboxPosition:"center"}),(function(param){return"left"===param.labelOrientation?"row-reverse":"row"})),CheckboxInput=styled_components_browser_esm.Ay.input.attrs({type:"checkbox"})(_templateObject1(),getScale,getScale,getScale,getScale,(function(param){var theme=param.theme;return(0,getRgba.A)(theme.colors.pastelBlue,theme,.16)}),(function(param){return param.theme.colors.success}),(function(param){return param.theme.colors.success}),(function(param){return param.colorVariant}),(function(param){var theme=param.theme,colorVariant=param.colorVariant;return"dark"===colorVariant?theme.colors.white:"light"===colorVariant?theme.colors.dark800:theme.colors.gray900})),StyledText=(0,styled_components_browser_esm.Ay)(Text.E)(_templateObject2()),Checkbox=function(param){var _param_labelOrientation=param.labelOrientation,labelOrientation=void 0===_param_labelOrientation?"left":_param_labelOrientation,label=param.label,_param_scale=param.scale,scale=void 0===_param_scale?scales_MD:_param_scale,_param_colorVariant=param.colorVariant,colorVariant=void 0===_param_colorVariant?"light":_param_colorVariant,id=param.id,defaultChecked=param.defaultChecked,onChange=param.onChange,value=param.value,disabled=param.disabled,inputMargin=param.inputMargin,checkboxPosition=param.checkboxPosition;return react.createElement(Wrapper,{checkboxPosition,labelOrientation},react.createElement(CheckboxInput,{checked:value,scale,colorVariant,id,defaultChecked,onChange,disabled}),label&&labelOrientation&&react.createElement(StyledText,{as:"span",fontSize:"12px",fontWeight:"600",color:"gray900",mr:"left"===labelOrientation?null!=inputMargin?inputMargin:"12px":0,ml:"right"===labelOrientation?null!=inputMargin?inputMargin:"12px":0},label))};const Checkbox_Checkbox=Checkbox;function index_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function index_stories_templateObject(){var data=index_stories_tagged_template_literal(["\n  background: #f9fafd;\n  padding: 24px 32px;\n  height: 200px;\n"]);return index_stories_templateObject=function _templateObject(){return data},data}function index_stories_templateObject1(){var data=index_stories_tagged_template_literal(["\n  background: #07162d;\n  padding: 24px 32px;\n  height: 200px;\n"]);return index_stories_templateObject1=function _templateObject(){return data},data}Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{scale:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof scales)[keyof typeof scales]"},description:"",defaultValue:{value:'"md"',computed:!1}},labelOrientation:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"left"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},colorVariant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"light"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputMargin:{required:!1,tsType:{name:"string"},description:""},checkboxPosition:{required:!1,tsType:{name:"string"},description:""}}};const index_stories={title:"Components/Checkbox",component:Checkbox_Checkbox,argTypes:{}};var WrapperLight=styled_components_browser_esm.Ay.div(index_stories_templateObject()),WrapperDark=styled_components_browser_esm.Ay.div(index_stories_templateObject1()),Default=function(){return react.createElement(react.Fragment,null,react.createElement(WrapperLight,null,react.createElement("div",null,react.createElement(Checkbox_Checkbox,{labelOrientation:"left",colorVariant:"light",label:"On left label"}),react.createElement(Checkbox_Checkbox,{labelOrientation:"right",colorVariant:"light",label:"On right label"})),react.createElement("div",{style:{marginBottom:"24px"}},react.createElement(Checkbox_Checkbox,{scale:"sm",labelOrientation:"left",colorVariant:"light",label:"On left label"}),react.createElement(Checkbox_Checkbox,{scale:"sm",labelOrientation:"right",colorVariant:"light",label:"On right label"})),react.createElement("div",null,react.createElement(Checkbox_Checkbox,null)),react.createElement("div",null,react.createElement(Checkbox_Checkbox,{scale:"sm"}))),react.createElement(WrapperDark,null,react.createElement("div",null,react.createElement(Checkbox_Checkbox,{labelOrientation:"left",colorVariant:"dark",label:"On left label"}),react.createElement(Checkbox_Checkbox,{labelOrientation:"right",colorVariant:"dark",label:"On right label"})),react.createElement("div",{style:{marginBottom:"24px"}},react.createElement(Checkbox_Checkbox,{scale:"sm",labelOrientation:"left",colorVariant:"dark",label:"On left label"}),react.createElement(Checkbox_Checkbox,{scale:"sm",labelOrientation:"right",colorVariant:"dark",label:"On right label"})),react.createElement("div",null,react.createElement(Checkbox_Checkbox,null)),react.createElement("div",null,react.createElement(Checkbox_Checkbox,{scale:"sm"}))))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => {\n  return <>\n      <WrapperLight>\n        <div>\n          <Checkbox labelOrientation="left" colorVariant="light" label="On left label" />\n          <Checkbox labelOrientation="right" colorVariant="light" label="On right label" />\n        </div>\n        <div style={{\n        marginBottom: "24px"\n      }}>\n          <Checkbox scale="sm" labelOrientation="left" colorVariant="light" label="On left label" />\n          <Checkbox scale="sm" labelOrientation="right" colorVariant="light" label="On right label" />\n        </div>\n        <div>\n          <Checkbox />\n        </div>\n        <div>\n          <Checkbox scale="sm" />\n        </div>\n      </WrapperLight>\n\n      <WrapperDark>\n        <div>\n          <Checkbox labelOrientation="left" colorVariant="dark" label="On left label" />\n          <Checkbox labelOrientation="right" colorVariant="dark" label="On right label" />\n        </div>\n        <div style={{\n        marginBottom: "24px"\n      }}>\n          <Checkbox scale="sm" labelOrientation="left" colorVariant="dark" label="On left label" />\n          <Checkbox scale="sm" labelOrientation="right" colorVariant="dark" label="On right label" />\n        </div>\n        <div>\n          <Checkbox />\n        </div>\n        <div>\n          <Checkbox scale="sm" />\n        </div>\n      </WrapperDark>\n    </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_util_getThemeValue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/getThemeValue.ts");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.5;\n  ","\n  ","\n\n  ","\n  \n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}var Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),(function(param){var color=param.color,theme=param.theme;return(0,_util_getThemeValue__WEBPACK_IMPORTED_MODULE_1__.A)("colors.".concat(color),color)(theme)}),(function(param){var fontSize=param.fontSize;return param.small?"14px":fontSize||"16px"}),(function(param){return param.bold?600:400}),(function(param){var textTransform=param.textTransform;return textTransform&&"text-transform: ".concat(textTransform,";")}),(function(param){return param.ellipsis&&"white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;"}),(function(param){return param.noWrap&&"white-space: nowrap;"}),styled_system__WEBPACK_IMPORTED_MODULE_0__.xe,styled_system__WEBPACK_IMPORTED_MODULE_0__.Il,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp);Text.defaultProps={color:"pastelBlue",small:!1,ellipsis:!1};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/components/Text/TooltipText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/Text.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  text-decoration: ",";\n  text-underline-offset: 0.1em;\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_Text__WEBPACK_IMPORTED_MODULE_0__.A)(_templateObject(),(function(param){var theme=param.theme;return"underline dotted ".concat(theme.colors.pastelBlue)}))},"./src/components/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.A});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/Text.tsx");__webpack_require__("./src/components/Text/TooltipText.tsx")},"./src/util/getRgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/util/getThemeValue.ts");const __WEBPACK_DEFAULT_EXPORT__=function(color,theme,alpha){var hex=/^#[0-9A-F]{6}$/i.test(color)?color:(0,_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.A)("colors.".concat(color),color)(theme),r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return alpha?"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(alpha,")"):"rgba(".concat(r,", ").concat(g,", ").concat(b,")")}},"./src/util/getThemeValue.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/get.js"),lodash_get__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=function(path,fallback){return function(theme){return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(theme,path,fallback)}}}}]);