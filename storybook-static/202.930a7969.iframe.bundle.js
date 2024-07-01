"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[202],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.A,A6:()=>_types__WEBPACK_IMPORTED_MODULE_3__.G,K0:()=>_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,Zs:()=>_ExpandableButton__WEBPACK_IMPORTED_MODULE_2__.Z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx"),_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/IconButton.tsx"),_ExpandableButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/ExpandableButton.tsx"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/types.ts")},"./src/components/IconComponent/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent_IconComponent});var react=__webpack_require__("./node_modules/react/index.js");function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Icons=__webpack_require__("./src/components/Svg/index.tsx"),IconComponent=function(_param){var iconName=_param.iconName,props=_object_without_properties(_param,["iconName"]),IconElement=Icons["".concat(iconName,"Icon")];return IconElement?react.createElement(IconElement,props):null};const IconComponent_IconComponent=IconComponent;IconComponent.__docgenInfo={description:"",methods:[],displayName:"IconComponent",props:{iconName:{required:!0,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"DefaultTheme"},description:""},spin:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SVGAttributes","SpaceProps"]}},"./src/components/Image/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Image_Image});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),Box=__webpack_require__("./src/components/Box/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: relative;\n  width: 100%;\n  max-width: ","px;\n  max-height: ",'px;\n\n  &:after {\n    content: "";\n    display: block;\n    padding-top: ',"%;\n  }\n\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}var StyledWrapper=(0,styled_components_browser_esm.Ay)(Box.az)(_templateObject(),(function(param){return param.$width}),(function(param){return param.$height}),(function(param){var $width=param.$width;return param.$height/$width*100}),index_esm.xe),Wrapper=(0,react.forwardRef)((function(_param,ref){var width=_param.width,height=_param.height,props=_object_without_properties(_param,["width","height"]);return react.createElement(StyledWrapper,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref,$width:width,$height:height},props))}));const Image_Wrapper=Wrapper;function Placeholder_templateObject(){var data=function Placeholder_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return Placeholder_templateObject=function _templateObject(){return data},data}Wrapper.__docgenInfo={description:"",methods:[],displayName:"Wrapper"};const Image_Placeholder=(0,styled_components_browser_esm.Ay)(Box.az)(Placeholder_templateObject()),options={root:null,rootMargin:"200px",threshold:0};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Image_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Image_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Image_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Image_templateObject(){var data=function Image_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return Image_templateObject=function _templateObject(){return data},data}var StyledImage=styled_components_browser_esm.Ay.img(Image_templateObject()),Image=function(_param){var src=_param.src,alt=_param.alt,width=_param.width,height=_param.height,props=Image_object_without_properties(_param,["src","alt","width","height"]),_useState=_sliced_to_array((0,react.useState)(!1),2),isLoaded=_useState[0],setIsLoaded=_useState[1],imgRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){var observer;return imgRef.current&&(observer=new IntersectionObserver((function(entries){entries.forEach((function(entry){entry.isIntersecting&&(setIsLoaded(!0),observer.disconnect())}))}),options)).observe(imgRef.current),function(){observer&&observer.disconnect()}}),[src]),react.createElement(Image_Wrapper,function Image_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Image_define_property(target,key,source[key])}))}return target}({ref:imgRef,height,width},props),isLoaded?react.createElement(StyledImage,{src,alt}):react.createElement(Image_Placeholder,null))};const Image_Image=Image;Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},wrapperProps:{required:!1,tsType:{name:"WrapperProps"},description:""}},composes:["ImgHTMLAttributes","SpaceProps"]}},"./src/components/SocialShareButton/SocialShareButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SocialShareButton_SocialShareButton});var Variants,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),Box=__webpack_require__("./src/components/Box/index.tsx"),Image=__webpack_require__("./src/components/Image/Image.tsx");!function(Variants){Variants.DEFAULT="default",Variants.INVERTED="inverted"}(Variants||(Variants={}));var types=__webpack_require__("./src/components/SocialShareButton/types.ts"),config=__webpack_require__("./src/components/SocialShareButton/config.tsx");const gift_namespaceObject=__webpack_require__.p+"static/media/gift.2a2a2995.png";function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n  width: ",";\n  cursor: ",";\n  transition: opacity .3s ease-in-out;\n  opacity: ",";\n  \n  &:hover {\n    opacity: ",";\n  },\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: ",";\n  width: 37px;\n  height: 32px;\n"]);return _templateObject1=function _templateObject(){return data},data}var Wrapper=(0,styled_components_browser_esm.Ay)(Box.az)(_templateObject(),(function(param){var width=param.width;return null!=width?width:"auto"}),(function(param){return param.disabled?"not-allowed":"pointer"}),(function(param){return param.disabled?.3:1}),(function(param){return param.disabled?.3:.84})),GiftWrap=(0,styled_components_browser_esm.Ay)(Box.so)(_templateObject1(),(function(param){return param.withGift?"block":"none"})),SocialShareButton=function(_param){var _param_social=_param.social,social=void 0===_param_social?types.l.TELEGRAM:_param_social,link=_param.link,name=_param.name,message=_param.message,_param_scale=_param.scale,scale=void 0===_param_scale?Button.A6.LG:_param_scale,_param_target=_param.target,target=void 0===_param_target?"_blank":_param_target,_param_width=_param.width,width=void 0===_param_width?"auto":_param_width,withGift=_param.withGift,disabled=_param.disabled,props=_object_without_properties(_param,["social","link","name","message","scale","target","width","withGift","disabled"]),theme=(0,styled_components_browser_esm.DP)(),defaultName=social.charAt(0).toUpperCase()+social.slice(1),_socialStyles_social=(0,config.K)({theme,disabled})[social],icon=_socialStyles_social.icon,backgroundColor=_socialStyles_social.backgroundColor;return react.createElement(Wrapper,_object_spread({disabled,width},props),react.createElement(Button.$n,_object_spread({as:"a",href:config.l[social]({link,message}),scale,startIcon:icon,style:{backgroundColor,pointerEvents:disabled?"none":"auto"},target,width:"100%",external:!0,pr:withGift?"20px":"16px"},props),name||defaultName),react.createElement(GiftWrap,{withGift},react.createElement(Image.A,{width:37,height:32,src:gift_namespaceObject})))};const SocialShareButton_SocialShareButton=SocialShareButton;SocialShareButton.__docgenInfo={description:"",methods:[],displayName:"SocialShareButton",props:{as:{required:!1,tsType:{name:"union",raw:'"a" | "button" | ElementType',elements:[{name:"literal",value:'"a"'},{name:"literal",value:'"button"'},{name:"ElementType"}]},description:""},external:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},loadingTitle:{required:!1,tsType:{name:"string"},description:""},scale:{required:!1,tsType:{name:"ButtonScales"},description:"",defaultValue:{value:"ButtonScales.LG",computed:!0}},variant:{required:!1,tsType:{name:"Variants"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},flatBottom:{required:!1,tsType:{name:"boolean"},description:""},flatTop:{required:!1,tsType:{name:"boolean"},description:""},flat:{required:!1,tsType:{name:"boolean"},description:""},addBubble:{required:!1,tsType:{name:"boolean"},description:""},bubbleColor:{required:!1,tsType:{name:"string"},description:""},social:{required:!1,tsType:{name:"Socials"},description:"",defaultValue:{value:"Socials.TELEGRAM",computed:!0}},link:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_blank"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"auto"',computed:!1}},withGift:{required:!1,tsType:{name:"boolean"},description:""}},composes:["LayoutProps","SpaceProps","AnchorHTMLAttributes"]}},"./src/components/SocialShareButton/SocialShareButtonCircle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SocialShareButton/config.tsx"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/index.tsx"),_IconComponent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconComponent/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SocialShareButtonCircle=function(_param){var social=_param.social,label=_param.label,link=_param.link,message=_param.message,_param_color=_param.color,color=void 0===_param_color?"white":_param_color,_param_width=_param.width,width=void 0===_param_width?"24px":_param_width,props=_object_without_properties(_param,["social","label","link","message","color","width"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.so,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({as:"a",href:_config__WEBPACK_IMPORTED_MODULE_1__.l[social]({link,message}),target:"_blank",alignItems:"center",justifyContent:"center"},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconComponent__WEBPACK_IMPORTED_MODULE_3__.R,{iconName:label,width,color}))};const __WEBPACK_DEFAULT_EXPORT__=SocialShareButtonCircle;SocialShareButtonCircle.__docgenInfo={description:"",methods:[],displayName:"SocialShareButtonCircle",props:{social:{required:!0,tsType:{name:"Socials"},description:""},label:{required:!0,tsType:{name:"string"},description:""},link:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"white"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"24px"',computed:!1}}},composes:["FlexboxProps"]}},"./src/components/SocialShareButton/config.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>socialStyles,l:()=>socialLinks});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Svg/index.tsx"),socialLinks={twitter:function(param){var _param_message=param.message,message=void 0===_param_message?"":_param_message,_param_link=param.link,link=void 0===_param_link?"":_param_link;return"https://twitter.com/intent/tweet/?text=".concat(encodeURIComponent(message),"&url=").concat(encodeURIComponent(link))},telegram:function(param){var _param_message=param.message,message=void 0===_param_message?"":_param_message,_param_link=param.link,link=void 0===_param_link?"":_param_link;return"https://telegram.me/share/url?text=".concat(encodeURIComponent(message),"&url=").concat(encodeURIComponent(link))}},socialStyles=function(param){var theme=param.theme,_param_size=param.size,size=void 0===_param_size?"20px":_param_size,_param_color=param.color,color=void 0===_param_color?"white":_param_color,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled;return{twitter:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_1__.TwitterIcon,{width:size,color}),backgroundColor:disabled?theme.colors.dark500:theme.colors.twitter},telegram:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Svg__WEBPACK_IMPORTED_MODULE_1__.TelegramIcon,{width:size,color}),backgroundColor:disabled?theme.colors.dark500:theme.colors.telegram}}}},"./src/components/SocialShareButton/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var Socials,SocialsList;__webpack_require__.d(__webpack_exports__,{l:()=>Socials}),function(Socials){Socials.TWITTER="twitter",Socials.TELEGRAM="telegram"}(Socials||(Socials={})),function(SocialsList){SocialsList[SocialsList.twitter=0]="twitter",SocialsList[SocialsList.telegram=1]="telegram"}(SocialsList||(SocialsList={}))}}]);