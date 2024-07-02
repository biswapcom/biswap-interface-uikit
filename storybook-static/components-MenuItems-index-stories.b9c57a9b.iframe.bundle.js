"use strict";(self.webpackChunktestnewkit=self.webpackChunktestnewkit||[]).push([[6412],{"./src/components/MenuItems/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),MenuItems=__webpack_require__("./src/components/MenuItems/MenuItems.tsx"),mock=__webpack_require__("./src/components/DropdownMenu/mock.tsx");const MenuItems_mock=[{label:"Home",href:"/",items:mock.A},{label:"Earn",href:"/",items:mock.A},{label:"Win",href:"/",items:mock.A},{label:"NFT",href:"/",items:[mock.A[0]]},{label:"...",href:"/",items:mock.A}];function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const index_stories={title:"Components/Menu/MenuItems",component:MenuItems.A};var Default=function(_param){var _param_items=_param.items,items=void 0===_param_items?MenuItems_mock:_param_items,_param_activeItem=_param.activeItem,activeItem=void 0===_param_activeItem?"Trade":_param_activeItem,props=_object_without_properties(_param,["items","activeItem"]);return react.createElement(dist.Kd,null,react.createElement(MenuItems.A,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({items,activeItem},props)))};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  items = MenuItemsMock,\n  activeItem = "Trade",\n  ...props\n}) => {\n  return <BrowserRouter>\n      <MenuItems items={items} activeItem={activeItem} {...props} />\n    </BrowserRouter>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/DropdownMenu/mock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DropdownMenu/types.ts");const __WEBPACK_DEFAULT_EXPORT__=[{label:"Swap",href:"/swap",leftIcon:"Swap",description:"Item description"},{label:"Expert Trade",href:"/pool",leftIcon:"ExpertTrade",rightIconFill:"primary",description:"Item description",links:[{label:"Label",href:"/polar"},{label:"Label 2",href:"/polar"},{label:"Label 3",href:"/polar"},{label:"Label 4",href:"/polar"}]},{label:"Expert Trade",href:"/pool",leftIcon:"ExpertTrade",rightIcon:"ArrowRightIcon",rightIconFill:"primary",description:"Item description"},{label:"Liquidity",href:"/pool",leftIcon:"Liquidity",description:"Item description"},{label:"Farms",href:"/pool",leftIcon:"Farms",description:"Item description"},{label:"LaunchPools",href:"/pool",leftIcon:"Launch",description:"Item description",links:[{label:"Stake BSW",href:"/polar"},{label:"Stake tokens",href:"/polar"}]},{label:"Referral Program",href:"/pool",description:"Item description"},{label:"IDO",href:"/pool",description:"Item description"},{label:"Lottery",href:"/pool",description:"Item description"},{label:"Competitions",href:"/pool",description:"Item description"},{label:"NFT Launchpad",href:"/pool",description:"Item description",type:_types__WEBPACK_IMPORTED_MODULE_0__.C.EXTERNAL_LINK},{label:"NFT Earn",href:"/pool",description:"Item description",type:_types__WEBPACK_IMPORTED_MODULE_0__.C.EXTERNAL_LINK},{label:"Marketplace",href:"/pool",leftIcon:"MarketMenu",description:"Item description",type:_types__WEBPACK_IMPORTED_MODULE_0__.C.EXTERNAL_LINK},{label:"GameFi",href:"/pool",description:"Item description",type:_types__WEBPACK_IMPORTED_MODULE_0__.C.EXTERNAL_LINK}]}}]);