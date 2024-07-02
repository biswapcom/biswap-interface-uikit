"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[8359],{"./src/components/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Dropdown_Dropdown});var _obj,react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),types=__webpack_require__("./src/components/Dropdown/types.ts"),IconComponent=__webpack_require__("./src/components/Svg/IconComponent.tsx"),ChevronDown=__webpack_require__("./src/components/Svg/Icons/Arrows/ChevronDown.tsx"),Box=__webpack_require__("./src/components/Box/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n        border-color: "," !important;\n        color: "," !important;\n      "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n        border-color: "," !important;\n        color: "," !important;\n      "]);return _templateObject1=function _templateObject(){return data},data}var _obj1,_obj2,_obj3,_obj4,scaleVariantsContainer=(_define_property(_obj={},types.$s.LG,{height:"48px"}),_define_property(_obj,types.$s.MD,{height:"40px"}),_define_property(_obj,types.$s.SM,{height:"32px"}),_obj),scaleVariantsTop=(_define_property(_obj1={},types.$s.LG,{padding:"0 12px 0 24px",fontSize:"16px",borderRadius:"10px",svg:{width:"24px",marginRight:"12px"},img:{marginRight:"12px"}}),_define_property(_obj1,types.$s.MD,{padding:"0 10px 0 16px",fontSize:"14px",borderRadius:"8px",svg:{width:"20px",marginRight:"8px"},img:{marginRight:"8px"}}),_define_property(_obj1,types.$s.SM,{padding:"0 8px 0 12px",fontSize:"12px",borderRadius:"8px",svg:{width:"16px",marginRight:"8px"},img:{marginRight:"8px"}}),_obj1),scaleVariantsContent=(_define_property(_obj2={},types.$s.LG,{borderRadius:"10px"}),_define_property(_obj2,types.$s.MD,{borderRadius:"8px"}),_define_property(_obj2,types.$s.SM,{borderRadius:"8px"}),_obj2),scaleVariantItem=(_define_property(_obj3={},types.$s.LG,{height:"48px",fontSize:"16px",padding:"0 25px",svg:{width:"24px",marginRight:"12px"},img:{marginRight:"12px"}}),_define_property(_obj3,types.$s.MD,{height:"40px",fontSize:"14px",padding:"0 17px",svg:{width:"20px",marginRight:"8px"},img:{marginRight:"8px"}}),_define_property(_obj3,types.$s.SM,{height:"32px",fontSize:"12px",padding:"0 13px",svg:{width:"16px",marginRight:"8px"},img:{marginRight:"8px"}}),_obj3),styleVariantsTop=(_define_property(_obj4={},types.Kj.LIGHT,{borderColor:"gray300",color:"gray900",".arrow":{fill:"gray900"},":hover":{color:"dark800",borderColor:"gray500"},"&.open":{color:"dark800",borderColor:"primary",":hover":{color:"dark800",borderColor:"primary"},".arrow":{fill:"primary"}}}),_define_property(_obj4,types.Kj.DARK,{borderColor:"pastelBlue",color:"white",".arrow":{fill:"pastelBlue"},":hover":{color:"white",borderColor:"pastelBlue"},"&.open":{color:"white",borderColor:"primary",":hover":{color:"white",borderColor:"primary"},".arrow":{fill:"primary"}}}),_obj4);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Dropdown_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dropdown_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Dropdown_templateObject(){var data=Dropdown_tagged_template_literal(["\n  position: relative;\n  width: 100%;\n  max-width: ",";\n  min-width: ",";\n\n  ","\n\n  ","\n"]);return Dropdown_templateObject=function _templateObject(){return data},data}function Dropdown_templateObject1(){var data=Dropdown_tagged_template_literal(["\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  font-weight: 600;\n  cursor: ",";\n  transition: all 0.4s ease-in-out;\n  opacity: ",";\n\n  ","\n  ","\n\n  ","\n"]);return Dropdown_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=Dropdown_tagged_template_literal(["\n  flex-grow: 1;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=Dropdown_tagged_template_literal(["\n  transition: transform 0.4s ease-in-out;\n  transform: ",";\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=Dropdown_tagged_template_literal(["\n  position: absolute;\n  left: 0;\n  bottom: ",";\n  width: 100%;\n  box-shadow: ",";\n  background: ",";\n  overflow: hidden;\n  z-index: 101;\n  transform: ",";\n\n  ","\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=Dropdown_tagged_template_literal(["\n  align-items: center;\n  color: ",";\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.4s ease-out;\n\n  ","\n\n  &:hover {\n    background: ",";\n  }\n"]);return _templateObject5=function _templateObject(){return data},data}var Container=(0,styled_components_browser_esm.Ay)(Box.az)(Dropdown_templateObject(),(function(param){return param.maxWidth||"none"}),(function(param){return param.minWidth||"0"}),(0,index_esm.Ox)({prop:"scale",variants:scaleVariantsContainer}),index_esm.xe),DropdownTop=(0,styled_components_browser_esm.Ay)(Box.so)(Dropdown_templateObject1(),(function(param){return param.disabled?"not-allowed":"pointer"}),(function(param){return param.disabled?".56":"1"}),(0,index_esm.Ox)({prop:"scale",variants:scaleVariantsTop}),(0,index_esm.Ox)({variants:styleVariantsTop}),(function(param){var disabled=param.disabled,variant=param.variant;return disabled&&function(variant){switch(variant){case types.Kj.LIGHT:return(0,styled_components_browser_esm.AH)(_templateObject(),(function(param){return param.theme.colors.gray300}),(function(param){return param.theme.colors.gray900}));case types.Kj.DARK:default:return(0,styled_components_browser_esm.AH)(_templateObject1(),(function(param){return param.theme.colors.dark500}),(function(param){return param.theme.colors.pastelBlue}))}}(variant)})),Label=styled_components_browser_esm.Ay.span(_templateObject2()),StyledArrow=(0,styled_components_browser_esm.Ay)(ChevronDown.default)(_templateObject3(),(function(param){return param.isOpen?"scale(1,-1)":"scale(1,1)"})),DropdownContent=styled_components_browser_esm.Ay.div(_templateObject4(),(function(param){return param.position===types.nU.TOP?"calc(100% + 8px)":"-8px"}),(function(param){return param.position===types.nU.BOTTOM?"0 16px 32px rgba(0, 26, 67, 0.24)":"box-shadow: 0 -16px 32px rgba(0, 26, 67, 0.24);"}),(function(param){return param.theme.colors.white}),(function(param){return param.position===types.nU.BOTTOM?"translateY(100%)":"translateY(0)"}),(0,index_esm.Ox)({prop:"scale",variants:scaleVariantsContent})),DropdownItem=(0,styled_components_browser_esm.Ay)(Box.so)(_templateObject5(),(function(param){var theme=param.theme;return param.selected?theme.colors.primary:theme.colors.dark800}),(0,index_esm.Ox)({prop:"scale",variants:scaleVariantItem}),(function(param){return param.theme.colors.gray200})),Dropdown=function(_param){var _param_position=_param.position,position=void 0===_param_position?types.nU.BOTTOM:_param_position,maxWidth=_param.maxWidth,minWidth=_param.minWidth,scale=_param.scale,variant=_param.variant,disabled=_param.disabled,options=_param.options,onChange=_param.onChange,selectedItem=_param.selectedItem,props=_object_without_properties(_param,["position","maxWidth","minWidth","scale","variant","disabled","options","onChange","selectedItem"]),_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=_sliced_to_array((0,react.useState)(selectedItem||options[0]),2),selectedOption=_useState1[0],setSelectedOption=_useState1[1],wrapperRef=(0,react.useRef)(null);(0,react.useEffect)((function(){selectedItem&&(null==selectedItem?void 0:selectedItem.value)!==(null==selectedOption?void 0:selectedOption.value)&&setSelectedOption(selectedItem)}),[selectedItem,selectedOption]),(0,react.useEffect)((function(){var handleClickOutside=function(param){var _wrapperRef_current,target=param.target;(null===(_wrapperRef_current=wrapperRef.current)||void 0===_wrapperRef_current?void 0:_wrapperRef_current.contains(target))||setIsOpen(!1)};return document.addEventListener("mousedown",handleClickOutside,{passive:!0}),function(){document.removeEventListener("mousedown",handleClickOutside)}}),[wrapperRef]);var onOptionClicked=function(option){return function(){setIsOpen(!1),setSelectedOption(options[options.indexOf(option)]),onChange&&onChange(option)}},scaleVariantsImage=function(scaleItem){switch(scaleItem){case types.$s.LG:return 24;case types.$s.MD:return 20;case types.$s.SM:default:return 16}};return react.createElement(Container,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Dropdown_define_property(target,key,source[key])}))}return target}({maxWidth,minWidth,ref:wrapperRef,scale},props),react.createElement(DropdownTop,{scale,variant,onClick:function(event){disabled||(setIsOpen(!isOpen),event.stopPropagation())},disabled,className:isOpen?"open":disabled?"disabled":""},selectedOption.icon&&(selectedOption.icon.isAws?react.createElement(image_default(),{src:selectedOption.icon.name,width:scaleVariantsImage(scale),height:scaleVariantsImage(scale),quality:90,alt:"icon"}):react.createElement(IconComponent.A,{iconName:selectedOption.icon.name,color:selectedOption.icon.color})),react.createElement(Label,null,selectedOption.label),react.createElement(StyledArrow,{className:"arrow",isOpen})),isOpen&&react.createElement(DropdownContent,{position,scale},options.map((function(option){return react.createElement(DropdownItem,{scale,selected:option.label===selectedOption.label,onClick:onOptionClicked(option),key:option.label},option.icon&&(option.icon.isAws?react.createElement(image_default(),{src:option.icon.name,width:scaleVariantsImage(scale),height:scaleVariantsImage(scale),quality:90,alt:"icon"}):react.createElement(IconComponent.A,{iconName:option.icon.name,color:option.icon.color})),react.createElement("span",null,option.label))}))))};const Dropdown_Dropdown=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{position:{required:!1,tsType:{name:"DropdownPosition"},description:"",defaultValue:{value:"DropdownPosition.BOTTOM",computed:!0}},maxWidth:{required:!1,tsType:{name:"string"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""},withIcon:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"DropdownVariants"},description:""},scale:{required:!0,tsType:{name:"DropdownScales"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"OptionProps"}],raw:"Array<OptionProps>"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: OptionProps) => void",signature:{arguments:[{type:{name:"OptionProps"},name:"option"}],return:{name:"void"}}},description:""},selectedItem:{required:!1,tsType:{name:"OptionProps"},description:""}},composes:["SpaceProps"]}},"./src/components/Dropdown/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DropdownPosition,DropdownScales,DropdownVariants;__webpack_require__.d(__webpack_exports__,{$s:()=>DropdownScales,Kj:()=>DropdownVariants,nU:()=>DropdownPosition}),function(DropdownPosition){DropdownPosition.TOP="top",DropdownPosition.BOTTOM="bottom"}(DropdownPosition||(DropdownPosition={})),function(DropdownScales){DropdownScales.LG="lg",DropdownScales.MD="md",DropdownScales.SM="sm"}(DropdownScales||(DropdownScales={})),function(DropdownVariants){DropdownVariants.DARK="dark",DropdownVariants.LIGHT="light"}(DropdownVariants||(DropdownVariants={}))}}]);