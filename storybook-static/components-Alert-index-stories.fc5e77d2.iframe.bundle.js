(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[549],{"./src/components/Alert/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithHandler:()=>WithHandler,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__),_Alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Alert/Alert.tsx"),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/index.tsx"),_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Box/index.tsx"),_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Alert/types.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: 400px;\n  padding: 32px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  position: relative;\n  margin-bottom: 32px;\n"]);return _templateObject1=function _templateObject(){return data},data}var Wrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_4__.az)(_templateObject()),Row=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_4__.az)(_templateObject1());const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",component:_Alert__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{}};var Default=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Info",progress:0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{as:"p"},"This is a description"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Success",variant:_types__WEBPACK_IMPORTED_MODULE_5__.l.SUCCESS,progress:25},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{as:"p"},"This is a description"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Warning",variant:_types__WEBPACK_IMPORTED_MODULE_5__.l.WARNING,progress:50},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{as:"p"},"This is a description"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Danger",variant:_types__WEBPACK_IMPORTED_MODULE_5__.l.DANGER,progress:75},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.E,{as:"p"},"This is a description"))))},handleClick=lodash_noop__WEBPACK_IMPORTED_MODULE_1___default(),WithHandler=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:handleClick,title:"Info",progress:0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:handleClick,title:"Success",variant:_types__WEBPACK_IMPORTED_MODULE_5__.l.SUCCESS,progress:25},"A description of the success alert")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:handleClick,title:"Danger A Long Title",variant:_types__WEBPACK_IMPORTED_MODULE_5__.l.DANGER,progress:50})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:handleClick,title:"Warning",variant:_types__WEBPACK_IMPORTED_MODULE_5__.l.DANGER,progress:75})))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => {\n  return <Wrapper>\n      <Row>\n        <Alert title="Info" progress={0}>\n          <Text as="p">This is a description</Text>\n        </Alert>\n      </Row>\n      <Row>\n        <Alert title="Success" variant={Variants.SUCCESS} progress={25}>\n          <Text as="p">This is a description</Text>\n        </Alert>\n      </Row>\n      <Row>\n        <Alert title="Warning" variant={Variants.WARNING} progress={50}>\n          <Text as="p">This is a description</Text>\n        </Alert>\n      </Row>\n      <Row>\n        <Alert title="Danger" variant={Variants.DANGER} progress={75}>\n          <Text as="p">This is a description</Text>\n        </Alert>\n      </Row>\n    </Wrapper>;\n}',...Default.parameters?.docs?.source}}},WithHandler.parameters={...WithHandler.parameters,docs:{...WithHandler.parameters?.docs,source:{originalSource:'() => {\n  return <Wrapper>\n      <Row>\n        <Alert onClick={handleClick} title="Info" progress={0} />\n      </Row>\n      <Row>\n        <Alert onClick={handleClick} title="Success" variant={Variants.SUCCESS} progress={25}>\n          A description of the success alert\n        </Alert>\n      </Row>\n      <Row>\n        <Alert onClick={handleClick} title="Danger A Long Title" variant={Variants.DANGER} progress={50} />\n      </Row>\n      <Row>\n        <Alert onClick={handleClick} title="Warning" variant={Variants.DANGER} progress={75} />\n      </Row>\n    </Wrapper>;\n}',...WithHandler.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithHandler"]},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Alert_Alert});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Svg=__webpack_require__("./src/components/Svg/index.tsx"),Text=__webpack_require__("./src/components/Text/index.tsx"),Box=__webpack_require__("./src/components/Box/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n  top: -10px;\n  left: -25%;\n  width: 43px;\n  height: 42px;\n  overflow: visible;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  fill: #000;\n  transform: translate(49%, 25%);\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"]);return _templateObject2=function _templateObject(){return data},data}var SvgDiag=styled_components_browser_esm.Ay.svg(_templateObject()),Content=styled_components_browser_esm.Ay.g(_templateObject1()),StyledButton=styled_components_browser_esm.Ay.button(_templateObject2()),ProgressCircle=function(param){var _param_filled=param.filled,filled=void 0===_param_filled?0:_param_filled,_param_notFilled=param.notFilled,notFilled=void 0===_param_notFilled?100:_param_notFilled,onClick=param.onClick,_useState=_sliced_to_array((0,react.useState)("0 100"),2),percentToDisplay=_useState[0],setPercentToDisplay=_useState[1];return(0,react.useEffect)((function(){setPercentToDisplay("".concat(Number(filled).toFixed()," ").concat(Number(notFilled).toFixed()))}),[filled,notFilled]),react.createElement(StyledButton,{onClick},react.createElement(SvgDiag,{viewBox:"0 0 42 42"},react.createElement("circle",{cx:"31",cy:"31",r:"15.91549430918954",fill:"transparent"}),react.createElement("circle",{cx:"30",cy:"31",r:"15.91549430918954",fill:"transparent",stroke:"url(#diag-color)",strokeWidth:"1",strokeDasharray:"100 0",strokeDashoffset:"0"}),react.createElement("circle",{className:"diag-circle",cx:"30",cy:"31",r:"15.91549430918954",fill:"transparent",stroke:"#1DC872",strokeWidth:"1",strokeDasharray:percentToDisplay,strokeDashoffset:"25",strokeLinecap:"round"}),react.createElement("defs",null,react.createElement("linearGradient",{id:"diag-color",x1:"4.653",y1:"13.461",x2:"13.086",y2:"0.7",gradientUnits:"userSpaceOnUse"},react.createElement("stop",{stopColor:"rgba(196, 196, 196, 0.3)"}))),react.createElement(Content,null,react.createElement(Svg.CloseIcon,{width:"20px",color:"currentColor"}))))};const Toast_ProgressCircle=ProgressCircle;ProgressCircle.__docgenInfo={description:"",methods:[],displayName:"ProgressCircle",props:{filled:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},notFilled:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},onClick:{required:!0,tsType:{name:"any"},description:""}}};var types=__webpack_require__("./src/components/Alert/types.ts");function Alert_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Alert_templateObject(){var data=Alert_tagged_template_literal(["\n  justify-content: center;\n  align-items: center;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: ",";\n"]);return Alert_templateObject=function _templateObject(){return data},data}function Alert_templateObject1(){var data=Alert_tagged_template_literal(["\n  padding: 12px 60px 12px 12px;\n  border-radius: 16px;\n  box-shadow:\n    0 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0 1px 1px rgba(0, 0, 0, 0.05);\n  background-color: ",";\n"]);return Alert_templateObject1=function _templateObject(){return data},data}function Alert_templateObject2(){var data=Alert_tagged_template_literal(["\n  position: absolute;\n  right: 8px;\n"]);return Alert_templateObject2=function _templateObject(){return data},data}var IconLabel=(0,styled_components_browser_esm.Ay)(Box.so)(Alert_templateObject(),(function(param){var _param_variant=param.variant;switch(void 0===_param_variant?types.l.INFO:_param_variant){case types.l.DANGER:return"rgba(249, 59, 93, 0.16)";case types.l.WARNING:return"rgba(255, 219, 28, 0.16)";case types.l.SUCCESS:return"rgba(29, 200, 114, 0.16)";case types.l.INFO:default:return"rgba(18, 99, 241, 0.16)"}})),StyledAlert=(0,styled_components_browser_esm.Ay)(Box.so)(Alert_templateObject1(),(function(param){return param.theme.alert.background})),StyledBox=(0,styled_components_browser_esm.Ay)(Box.az)(Alert_templateObject2()),Alert=function(param){var title=param.title,children=param.children,variant=param.variant,onClick=param.onClick,progress=param.progress,Icon=function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:types.l.INFO){case types.l.DANGER:return Svg.CloseCircleSolidIcon;case types.l.WARNING:return Svg.WarningSolidIcon;case types.l.SUCCESS:return Svg.CheckSolidIcon;case types.l.INFO:default:return Svg.InfoSolidIcon}}(variant),IconColor=function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:types.l.INFO){case types.l.DANGER:return"secondary";case types.l.WARNING:return"warning";case types.l.SUCCESS:return"success";case types.l.INFO:default:return"primary"}}(variant);return react.createElement(StyledAlert,null,react.createElement(Box.az,null,react.createElement(IconLabel,{variant},react.createElement(Icon,{width:"24px",color:IconColor}))),react.createElement(Box.so,null,react.createElement(Box.az,{ml:"10px"},react.createElement(Text.E,{fontSize:"16px",color:"dark",bold:!0},title),"string"==typeof children?react.createElement(Text.E,{as:"p"},children):children),react.createElement(StyledBox,null,react.createElement(Toast_ProgressCircle,{onClick,filled:progress,notFilled:progress?100-progress:0}))))};const Alert_Alert=Alert;Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"Variants"},description:""},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"evt"}],return:{name:"void"}}},description:""},progress:{required:!0,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""}}}},"./src/components/Alert/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Variants,ColoredVariants;__webpack_require__.d(__webpack_exports__,{V:()=>ColoredVariants,l:()=>Variants}),function(Variants){Variants.INFO="info",Variants.DANGER="danger",Variants.SUCCESS="success",Variants.WARNING="warning"}(Variants||(Variants={})),function(ColoredVariants){ColoredVariants.DANGER="danger",ColoredVariants.SUCCESS="success"}(ColoredVariants||(ColoredVariants={}))},"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.Tp,styled_system__WEBPACK_IMPORTED_MODULE_0__.PQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp,styled_system__WEBPACK_IMPORTED_MODULE_0__.G1,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)},"./src/components/Box/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Box.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_1__.A)(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.pn)},"./src/components/Box/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Box.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: grid;\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Box__WEBPACK_IMPORTED_MODULE_1__.A)(_templateObject(),styled_system__WEBPACK_IMPORTED_MODULE_0__.pn,styled_system__WEBPACK_IMPORTED_MODULE_0__.Vg)},"./src/components/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{az:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.A,so:()=>_Flex__WEBPACK_IMPORTED_MODULE_1__.A});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.tsx"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Flex.tsx");__webpack_require__("./src/components/Box/Grid.tsx")},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_util_getThemeValue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/getThemeValue.ts");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.5;\n  ","\n  ","\n\n  ","\n  \n  ","\n  ","\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}var Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),(function(param){var color=param.color,theme=param.theme;return(0,_util_getThemeValue__WEBPACK_IMPORTED_MODULE_1__.A)("colors.".concat(color),color)(theme)}),(function(param){var fontSize=param.fontSize;return param.small?"14px":fontSize||"16px"}),(function(param){return param.bold?600:400}),(function(param){var textTransform=param.textTransform;return textTransform&&"text-transform: ".concat(textTransform,";")}),(function(param){return param.ellipsis&&"white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;"}),(function(param){return param.noWrap&&"white-space: nowrap;"}),styled_system__WEBPACK_IMPORTED_MODULE_0__.xe,styled_system__WEBPACK_IMPORTED_MODULE_0__.Il,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zp);Text.defaultProps={color:"pastelBlue",small:!1,ellipsis:!1};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/components/Text/TooltipText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/Text.tsx");function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  text-decoration: ",";\n  text-underline-offset: 0.1em;\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_Text__WEBPACK_IMPORTED_MODULE_0__.A)(_templateObject(),(function(param){var theme=param.theme;return"underline dotted ".concat(theme.colors.pastelBlue)}))},"./src/components/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.A});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/Text.tsx");__webpack_require__("./src/components/Text/TooltipText.tsx")}}]);