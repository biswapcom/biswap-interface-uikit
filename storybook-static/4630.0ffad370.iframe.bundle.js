"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[4630],{"./src/components/MenuItem/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MenuItem_MenuItem});var react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./src/widgets/Menu/context.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n\n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n        padding: 0 8px;\n        height: 72px;\n        "," {\n          padding: 0 12px;\n        }\n      "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n        padding: 4px 4px 0px 4px;\n        height: 42px;\n      "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  transition: color 0.4s ease;\n\n  ","\n\n  ","\n\n  &:hover {\n    div {\n      color: ",";\n    }\n    svg {\n      fill: ",";\n    }\n    ",";\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  ",";\n"]);return _templateObject4=function _templateObject(){return data},data}var StyledMenuItemContainer=styled_components_browser_esm.Ay.div(_templateObject(),(function(param){var $isActive=param.$isActive,$variant=param.$variant;return $isActive&&"subMenu"===$variant&&'\n      &:after{\n        content: "";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        border-radius: 2px 2px 0 0;\n      }\n    '}));const styles=styled_components_browser_esm.Ay.a(_templateObject4(),(function(param){var $isActive=param.$isActive,$statusColor=param.$statusColor,$variant=param.$variant,$highlightTitle=param.$highlightTitle;return(0,styled_components_browser_esm.AH)(_templateObject3(),$isActive?function(param){return param.theme.colors.secondary}:function(param){return param.theme.colors.white},$statusColor&&'\n    &:after {\n      content: "";\n      border-radius: 100%;\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n    ',"default"===$variant?(0,styled_components_browser_esm.AH)(_templateObject1(),(function(param){return param.theme.mediaQueries.lg})):(0,styled_components_browser_esm.AH)(_templateObject2()),(function(param){var theme=param.theme;return $highlightTitle?theme.colors.warningHover:theme.colors.pastelBlue}),(function(param){return param.theme.colors.pastelBlue}),"default"===$variant&&"border-radius: 16px;")}));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var MenuItem=function(_param){var children=_param.children,href=_param.href,_param_isActive=_param.isActive,isActive=void 0!==_param_isActive&&_param_isActive,_param_variant=_param.variant,variant=void 0===_param_variant?"default":_param_variant,statusColor=_param.statusColor,highlightTitle=_param.highlightTitle,props=_object_without_properties(_param,["children","href","isActive","variant","statusColor","highlightTitle"]),linkComponent=(0,react.useContext)(context.x).linkComponent,itemLinkProps=href?{as:linkComponent,href}:{as:"div"};return react.createElement(StyledMenuItemContainer,{$isActive:isActive,$variant:variant},react.createElement(styles,_object_spread(_object_spread_props(_object_spread({},itemLinkProps),{$isActive:isActive,$variant:variant,$statusColor:statusColor,$highlightTitle:highlightTitle}),props),children))};const MenuItem_MenuItem=MenuItem;MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "subMenu"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"subMenu"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},statusColor:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  //Brand color\n  binance: string;\n  polygon: string;\n  telegram: string;\n  twitter: string;\n\n  //BS ---------------------------\n  //Base colors\n  primary: string;\n  secondary: string;\n  success: string;\n  warning: string;\n  boost: string;\n  backgroundDark: string;\n  backgroundLight: string;\n  white: string;\n  pastelBlue: string;\n  tooltip: string;\n\n  //BS Additional colors\n  primaryHover: string;\n  primaryPress: string;\n  secondaryHover: string;\n  secondaryPress: string;\n  successHover: string;\n  successPress: string;\n  warningHover: string;\n  warningPress: string;\n  boostHover: string;\n  boostPress: string;\n\n  //Button additional colors\n  btnTertiary: string;\n\n  btnTertiaryOut: string;\n  btnTertiaryOutPress: string;\n\n  btnLightOutBorder: string;\n  btnLightOutBgHover: string;\n  btnLightOutBgPress: string;\n\n  btnLight: string;\n\n  toggleBg: string;\n\n  //BS dark palette\n  dark900: string;\n  dark800: string;\n  dark700: string;\n  dark600: string;\n  dark500: string;\n  dark400: string;\n  dark300: string;\n  dark200: string;\n  dark100: string;\n\n  //BS light palette\n  gray900: string;\n  gray800: string;\n  gray700: string;\n  gray600: string;\n  gray500: string;\n  gray400: string;\n  gray300: string;\n  gray200: string;\n  gray100: string;\n\n  //badgeSpecialColors\n  successOpacity: string;\n  secondaryOpacity: string;\n  primaryOpacity: string;\n  warningOpacity: string;\n}",signature:{properties:[{key:"binance",value:{name:"string",required:!0}},{key:"polygon",value:{name:"string",required:!0}},{key:"telegram",value:{name:"string",required:!0}},{key:"twitter",value:{name:"string",required:!0}},{key:"primary",value:{name:"string",required:!0}},{key:"secondary",value:{name:"string",required:!0}},{key:"success",value:{name:"string",required:!0}},{key:"warning",value:{name:"string",required:!0}},{key:"boost",value:{name:"string",required:!0}},{key:"backgroundDark",value:{name:"string",required:!0}},{key:"backgroundLight",value:{name:"string",required:!0}},{key:"white",value:{name:"string",required:!0}},{key:"pastelBlue",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"primaryHover",value:{name:"string",required:!0}},{key:"primaryPress",value:{name:"string",required:!0}},{key:"secondaryHover",value:{name:"string",required:!0}},{key:"secondaryPress",value:{name:"string",required:!0}},{key:"successHover",value:{name:"string",required:!0}},{key:"successPress",value:{name:"string",required:!0}},{key:"warningHover",value:{name:"string",required:!0}},{key:"warningPress",value:{name:"string",required:!0}},{key:"boostHover",value:{name:"string",required:!0}},{key:"boostPress",value:{name:"string",required:!0}},{key:"btnTertiary",value:{name:"string",required:!0}},{key:"btnTertiaryOut",value:{name:"string",required:!0}},{key:"btnTertiaryOutPress",value:{name:"string",required:!0}},{key:"btnLightOutBorder",value:{name:"string",required:!0}},{key:"btnLightOutBgHover",value:{name:"string",required:!0}},{key:"btnLightOutBgPress",value:{name:"string",required:!0}},{key:"btnLight",value:{name:"string",required:!0}},{key:"toggleBg",value:{name:"string",required:!0}},{key:"dark900",value:{name:"string",required:!0}},{key:"dark800",value:{name:"string",required:!0}},{key:"dark700",value:{name:"string",required:!0}},{key:"dark600",value:{name:"string",required:!0}},{key:"dark500",value:{name:"string",required:!0}},{key:"dark400",value:{name:"string",required:!0}},{key:"dark300",value:{name:"string",required:!0}},{key:"dark200",value:{name:"string",required:!0}},{key:"dark100",value:{name:"string",required:!0}},{key:"gray900",value:{name:"string",required:!0}},{key:"gray800",value:{name:"string",required:!0}},{key:"gray700",value:{name:"string",required:!0}},{key:"gray600",value:{name:"string",required:!0}},{key:"gray500",value:{name:"string",required:!0}},{key:"gray400",value:{name:"string",required:!0}},{key:"gray300",value:{name:"string",required:!0}},{key:"gray200",value:{name:"string",required:!0}},{key:"gray100",value:{name:"string",required:!0}},{key:"successOpacity",value:{name:"string",required:!0}},{key:"secondaryOpacity",value:{name:"string",required:!0}},{key:"primaryOpacity",value:{name:"string",required:!0}},{key:"warningOpacity",value:{name:"string",required:!0}}]}},description:""},highlightTitle:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}}}]);