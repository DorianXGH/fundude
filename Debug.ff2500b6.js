parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UOZF":[function(require,module,exports) {
"use strict";function e(){return exports.default=e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.apply(this,arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"m3yi":[function(require,module,exports) {
"use strict";function t(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"b9Zy":[function(require,module,exports) {
"use strict";function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"wYb7":[function(require,module,exports) {
"use strict";function t(t,r){if(t.length!==r.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0}function r(r,e){var n;void 0===e&&(e=t);var u,i=[],o=!1;return function(){for(var t=[],f=0;f<arguments.length;f++)t[f]=arguments[f];return o&&n===this&&e(t,i)?u:(u=r.apply(this,t),o=!0,n=this,i=t,u)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r;exports.default=e;
},{}],"EC4s":[function(require,module,exports) {
"use strict";function e(e,t){if(null==e)return{};var r,n,u={},f=Object.keys(e);for(n=0;n<f.length;n++)r=f[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"NDAd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.areEqual=j,exports.shouldComponentUpdate=G,exports.FixedSizeList=exports.FixedSizeGrid=exports.VariableSizeList=exports.VariableSizeGrid=void 0;var t=a(require("@babel/runtime/helpers/esm/extends")),e=a(require("@babel/runtime/helpers/esm/inheritsLoose")),r=a(require("@babel/runtime/helpers/esm/assertThisInitialized")),o=a(require("memoize-one")),n=require("react"),i=a(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));function a(t){return t&&t.__esModule?t:{default:t}}var l="object"==typeof performance&&"function"==typeof performance.now,s=l?function(){return performance.now()}:function(){return Date.now()};function c(t){cancelAnimationFrame(t.id)}function u(t,e){var r=s();var o={id:requestAnimationFrame(function n(){s()-r>=e?t.call(null):o.id=requestAnimationFrame(n)})};return o}var d=-1;function f(t){if(void 0===t&&(t=!1),-1===d||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),d=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return d}var h=150,m=function(t){var e=t.columnIndex;t.data;return t.rowIndex+":"+e},p=null,g=null;function S(i){var a,l,s=i.getColumnOffset,d=i.getColumnStartIndexForOffset,p=i.getColumnStopIndexForStartIndex,g=i.getColumnWidth,S=i.getEstimatedTotalHeight,I=i.getEstimatedTotalWidth,x=i.getOffsetForColumnAndAlignment,w=i.getOffsetForRowAndAlignment,M=i.getRowHeight,_=i.getRowOffset,C=i.getRowStartIndexForOffset,R=i.getRowStopIndexForStartIndex,z=i.initInstanceProps,y=i.shouldResetStyleCacheOnItemSizeChange,T=i.validateProps;return l=a=function(i){function a(t){var e;return(e=i.call(this,t)||this)._instanceProps=z(e.props,(0,r.default)((0,r.default)(e))),e._resetIsScrollingTimeoutId=null,e._outerRef=void 0,e.state={instance:(0,r.default)((0,r.default)(e)),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof e.props.initialScrollLeft?e.props.initialScrollLeft:0,scrollTop:"number"==typeof e.props.initialScrollTop?e.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},e._callOnItemsRendered=void 0,e._callOnItemsRendered=(0,o.default)(function(t,r,o,n,i,a,l,s){return e.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:r,overscanRowStartIndex:o,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})}),e._callOnScroll=void 0,e._callOnScroll=(0,o.default)(function(t,r,o,n,i){return e.props.onScroll({horizontalScrollDirection:o,scrollLeft:t,scrollTop:r,verticalScrollDirection:n,scrollUpdateWasRequested:i})}),e._getItemStyle=void 0,e._getItemStyle=function(t,r){var o,n,i=e.props,a=i.columnWidth,l=i.direction,c=i.rowHeight,u=e._getItemStyleCache(y&&a,y&&l,y&&c),d=t+":"+r;u.hasOwnProperty(d)?o=u[d]:u[d]=((n={position:"absolute"})["rtl"===l?"right":"left"]=s(e.props,r,e._instanceProps),n.top=_(e.props,t,e._instanceProps),n.height=M(e.props,t,e._instanceProps),n.width=g(e.props,r,e._instanceProps),o=n);return o},e._getItemStyleCache=void 0,e._getItemStyleCache=(0,o.default)(function(t,e,r){return{}}),e._onScroll=function(t){var r=t.currentTarget,o=r.clientWidth,n=r.scrollLeft,i=r.scrollTop,a=r.scrollWidth;e.setState(function(t){if(t.scrollLeft===n&&t.scrollTop===i)return null;var r=e.props.direction,l=n;return"rtl"===r&&(l=n<=0?-n:a-o-n),{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<n?"forward":"backward",scrollLeft:l,scrollTop:i,verticalScrollDirection:t.scrollTop<i?"forward":"backward",scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(t){var r=e.props.outerRef;e._outerRef=t,"function"==typeof r?r(t):null!=r&&"object"==typeof r&&r.hasOwnProperty("current")&&(r.current=t)},e._resetIsScrollingDebounced=function(){null!==e._resetIsScrollingTimeoutId&&c(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=u(e._resetIsScrolling,h)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1)})},e}(0,e.default)(a,i),a.getDerivedStateFromProps=function(t,e){return v(t,e),T(t),null};var l=a.prototype;return l.scrollTo=function(t){var e=t.scrollLeft,r=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==r&&(r=Math.max(0,r)),this.setState(function(t){return void 0===e&&(e=t.scrollLeft),void 0===r&&(r=t.scrollTop),t.scrollLeft===e&&t.scrollTop===r?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:r,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<r?"forward":"backward"}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t){var e=t.align,r=void 0===e?"auto":e,o=t.columnIndex,n=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,u=this.state,d=u.scrollLeft,h=u.scrollTop,m=f();void 0!==o&&(o=Math.max(0,Math.min(o,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var p=S(this.props,this._instanceProps),g=I(this.props,this._instanceProps)>c?m:0,v=p>l?m:0;this.scrollTo({scrollLeft:void 0!==o?x(this.props,o,r,d,this._instanceProps,v):d,scrollTop:void 0!==n?w(this.props,n,r,h,this._instanceProps,g):h})},l.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,r=t.initialScrollTop;"number"==typeof e&&null!=this._outerRef&&(this._outerRef.scrollLeft=e),"number"==typeof r&&null!=this._outerRef&&(this._outerRef.scrollTop=r),this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.state,e=t.scrollLeft,r=t.scrollTop;t.scrollUpdateWasRequested&&null!==this._outerRef&&(this._outerRef.scrollLeft=e,this._outerRef.scrollTop=r),this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId)},l.render=function(){var e=this.props,r=e.children,o=e.className,i=e.columnCount,a=e.direction,l=e.height,s=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemData,f=e.itemKey,h=void 0===f?m:f,p=e.outerElementType,g=e.outerTagName,v=e.rowCount,x=e.style,w=e.useIsScrolling,M=e.width,_=this.state.isScrolling,C=this._getHorizontalRangeToRender(),R=C[0],z=C[1],y=this._getVerticalRangeToRender(),T=y[0],O=y[1],b=[];if(i>0&&v)for(var P=T;P<=O;P++)for(var W=R;W<=z;W++)b.push((0,n.createElement)(r,{columnIndex:W,data:d,isScrolling:w?_:void 0,key:h({columnIndex:W,data:d,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var F=S(this.props,this._instanceProps),D=I(this.props,this._instanceProps);return(0,n.createElement)(p||g||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:(0,t.default)({position:"relative",height:l,width:M,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},x)},(0,n.createElement)(c||u||"div",{children:b,ref:s,style:{height:F,pointerEvents:_?"none":"",width:D}}))},l._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,r=t.onItemsRendered,o=t.onScroll,n=t.rowCount;if("function"==typeof r&&e>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),d=u[0],f=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,d,f,s,c,h,m)}if("function"==typeof o){var p=this.state,g=p.horizontalScrollDirection,S=p.scrollLeft,v=p.scrollTop,I=p.scrollUpdateWasRequested,x=p.verticalScrollDirection;this._callOnScroll(S,v,g,x,I)}},l._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanColumnsCount,o=t.overscanCount,n=t.rowCount,i=this.state,a=i.horizontalScrollDirection,l=i.isScrolling,s=i.scrollLeft,c=r||o||1;if(0===e||0===n)return[0,0,0,0];var u=d(this.props,s,this._instanceProps),f=p(this.props,u,s,this._instanceProps),h=l&&"backward"!==a?1:Math.max(1,c),m=l&&"forward"!==a?1:Math.max(1,c);return[Math.max(0,u-h),Math.max(0,Math.min(e-1,f+m)),u,f]},l._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanCount,o=t.overscanRowsCount,n=t.rowCount,i=this.state,a=i.isScrolling,l=i.verticalScrollDirection,s=i.scrollTop,c=o||r||1;if(0===e||0===n)return[0,0,0,0];var u=C(this.props,s,this._instanceProps),d=R(this.props,u,s,this._instanceProps),f=a&&"backward"!==l?1:Math.max(1,c),h=a&&"forward"!==l?1:Math.max(1,c);return[Math.max(0,u-f),Math.max(0,Math.min(n-1,d+h)),u,d]},a}(n.PureComponent),a.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},l}var v=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanCount,t.width,e.instance},I=50,x=function(t,e){var r=t.rowCount,o=e.rowMetadataMap,n=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},w=function(t,e){var r=t.columnCount,o=e.columnMetadataMap,n=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},M=function(t,e,r,o){var n,i,a;if("column"===t?(n=o.columnMetadataMap,i=e.columnWidth,a=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=e.rowHeight,a=o.lastMeasuredRowIndex),r>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=r;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===t?o.lastMeasuredColumnIndex=r:o.lastMeasuredRowIndex=r}return n[r]},_=function(t,e,r,o){var n,i;return"column"===t?(n=r.columnMetadataMap,i=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=r.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=o?C(t,e,r,i,0,o):R(t,e,r,Math.max(0,i),o)},C=function(t,e,r,o,n,i){for(;n<=o;){var a=n+Math.floor((o-n)/2),l=M(t,e,a,r).offset;if(l===i)return a;l<i?n=a+1:l>i&&(o=a-1)}return n>0?n-1:0},R=function(t,e,r,o,n){for(var i="column"===t?e.columnCount:e.rowCount,a=1;o<i&&M(t,e,o,r).offset<n;)o+=a,a*=2;return C(t,e,r,Math.min(o,i-1),Math.floor(o/2),n)},z=function(t,e,r,o,n,i,a){var l="column"===t?e.width:e.height,s=M(t,e,r,i),c="column"===t?w(e,i):x(e,i),u=Math.max(0,Math.min(c-l,s.offset)),d=Math.max(0,s.offset-l+a+s.size);switch("smart"===o&&(o=n>=d-l&&n<=u+l?"auto":"center"),o){case"start":return u;case"end":return d;case"center":return Math.round(d+(u-d)/2);case"auto":default:return n>=d&&n<=u?n:n-d<u-n?d:u}},y=S({getColumnOffset:function(t,e,r){return M("column",t,e,r).offset},getColumnStartIndexForOffset:function(t,e,r){return _("column",t,r,e)},getColumnStopIndexForStartIndex:function(t,e,r,o){for(var n=t.columnCount,i=t.width,a=M("column",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)s+=M("column",t,++c,o).size;return c},getColumnWidth:function(t,e,r){return r.columnMetadataMap[e].size},getEstimatedTotalHeight:x,getEstimatedTotalWidth:w,getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){return z("column",t,e,r,o,n,i)},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){return z("row",t,e,r,o,n,i)},getRowOffset:function(t,e,r){return M("row",t,e,r).offset},getRowHeight:function(t,e,r){return r.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,r){return _("row",t,r,e)},getRowStopIndexForStartIndex:function(t,e,r,o){for(var n=t.rowCount,i=t.height,a=M("row",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)s+=M("row",t,++c,o).size;return c},initInstanceProps:function(t,e){var r=t,o=r.estimatedColumnWidth,n=r.estimatedRowHeight,i={columnMetadataMap:{},estimatedColumnWidth:o||I,estimatedRowHeight:n||I,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:r})},e.resetAfterRowIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:r})},e.resetAfterIndices=function(t){var r=t.columnIndex,o=t.rowIndex,n=t.shouldForceUpdate,a=void 0===n||n;"number"==typeof r&&(i.lastMeasuredColumnIndex=Math.min(i.lastMeasuredColumnIndex,r-1)),"number"==typeof o&&(i.lastMeasuredRowIndex=Math.min(i.lastMeasuredRowIndex,o-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},i},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}});exports.VariableSizeGrid=y;var T=150,O=function(t,e){return t},b=null,P=null;function W(i){var a,l,s=i.getItemOffset,d=i.getEstimatedTotalSize,f=i.getItemSize,h=i.getOffsetForIndexAndAlignment,m=i.getStartIndexForOffset,p=i.getStopIndexForStartIndex,g=i.initInstanceProps,S=i.shouldResetStyleCacheOnItemSizeChange,v=i.validateProps;return l=a=function(i){function a(t){var e;return(e=i.call(this,t)||this)._instanceProps=g(e.props,(0,r.default)((0,r.default)(e))),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:(0,r.default)((0,r.default)(e)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof e.props.initialScrollOffset?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=(0,o.default)(function(t,r,o,n){return e.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:r,visibleStartIndex:o,visibleStopIndex:n})}),e._callOnScroll=void 0,e._callOnScroll=(0,o.default)(function(t,r,o){return e.props.onScroll({scrollDirection:t,scrollOffset:r,scrollUpdateWasRequested:o})}),e._getItemStyle=void 0,e._getItemStyle=function(t){var r,o=e.props,n=o.direction,i=o.itemSize,a=o.layout,l=e._getItemStyleCache(S&&i,S&&a,S&&n);if(l.hasOwnProperty(t))r=l[t];else{var c,u=s(e.props,t,e._instanceProps),d=f(e.props,t,e._instanceProps),h="horizontal"===n||"horizontal"===a;l[t]=((c={position:"absolute"})["rtl"===n?"right":"left"]=h?u:0,c.top=h?0:u,c.height=h?"100%":d,c.width=h?d:"100%",r=c)}return r},e._getItemStyleCache=void 0,e._getItemStyleCache=(0,o.default)(function(t,e,r){return{}}),e._onScrollHorizontal=function(t){var r=t.currentTarget,o=r.clientWidth,n=r.scrollLeft,i=r.scrollWidth;e.setState(function(t){if(t.scrollOffset===n)return null;var r=e.props.direction,a=n;return"rtl"===r&&(a=n<=0?-a:i-o-n),{isScrolling:!0,scrollDirection:t.scrollOffset<n?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(t){var r=t.currentTarget.scrollTop;e.setState(function(t){return t.scrollOffset===r?null:{isScrolling:!0,scrollDirection:t.scrollOffset<r?"forward":"backward",scrollOffset:r,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(t){var r=e.props.outerRef;e._outerRef=t,"function"==typeof r?r(t):null!=r&&"object"==typeof r&&r.hasOwnProperty("current")&&(r.current=t)},e._resetIsScrollingDebounced=function(){null!==e._resetIsScrollingTimeoutId&&c(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=u(e._resetIsScrolling,T)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}(0,e.default)(a,i),a.getDerivedStateFromProps=function(t,e){return F(t,e),v(t),null};var l=a.prototype;return l.scrollTo=function(t){t=Math.max(0,t),this.setState(function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props.itemCount,o=this.state.scrollOffset;t=Math.max(0,Math.min(t,r-1)),this.scrollTo(h(this.props,t,e,o,this._instanceProps))},l.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,o=t.layout;"number"==typeof r&&null!==this._outerRef&&("horizontal"===e||"horizontal"===o?this._outerRef.scrollLeft=r:this._outerRef.scrollTop=r),this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,o=this.state,n=o.scrollOffset;o.scrollUpdateWasRequested&&null!==this._outerRef&&("horizontal"===e||"horizontal"===r?this._outerRef.scrollLeft=n:this._outerRef.scrollTop=n),this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId)},l.render=function(){var e=this.props,r=e.children,o=e.className,i=e.direction,a=e.height,l=e.innerRef,s=e.innerElementType,c=e.innerTagName,u=e.itemCount,f=e.itemData,h=e.itemKey,m=void 0===h?O:h,p=e.layout,g=e.outerElementType,S=e.outerTagName,v=e.style,I=e.useIsScrolling,x=e.width,w=this.state.isScrolling,M="horizontal"===i||"horizontal"===p,_=M?this._onScrollHorizontal:this._onScrollVertical,C=this._getRangeToRender(),R=C[0],z=C[1],y=[];if(u>0)for(var T=R;T<=z;T++)y.push((0,n.createElement)(r,{data:f,key:m(T,f),index:T,isScrolling:I?w:void 0,style:this._getItemStyle(T)}));var b=d(this.props,this._instanceProps);return(0,n.createElement)(g||S||"div",{className:o,onScroll:_,ref:this._outerRefSetter,style:(0,t.default)({position:"relative",height:a,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},v)},(0,n.createElement)(s||c||"div",{children:y,ref:l,style:{height:M?"100%":b,pointerEvents:w?"none":"",width:M?b:"100%"}}))},l._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],o=t[2],n=t[3];this._callOnItemsRendered(e,r,o,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},l._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,o=this.state,n=o.isScrolling,i=o.scrollDirection,a=o.scrollOffset;if(0===e)return[0,0,0,0];var l=m(this.props,a,this._instanceProps),s=p(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,r),u=n&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},a}(n.PureComponent),a.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},l}var F=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},D=50,L=function(t,e,r){var o=t.itemSize,n=r.itemMetadataMap,i=r.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=o(s);n[s]={offset:a,size:c},a+=c}r.lastMeasuredIndex=e}return n[e]},A=function(t,e,r){var o=e.itemMetadataMap,n=e.lastMeasuredIndex;return(n>0?o[n].offset:0)>=r?H(t,e,n,0,r):E(t,e,Math.max(0,n),r)},H=function(t,e,r,o,n){for(;o<=r;){var i=o+Math.floor((r-o)/2),a=L(t,i,e).offset;if(a===n)return i;a<n?o=i+1:a>n&&(r=i-1)}return o>0?o-1:0},E=function(t,e,r,o){for(var n=t.itemCount,i=1;r<n&&L(t,r,e).offset<o;)r+=i,i*=2;return H(t,e,Math.min(r,n-1),Math.floor(r/2),o)},U=function(t,e){var r=t.itemCount,o=e.itemMetadataMap,n=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},q=W({getItemOffset:function(t,e,r){return L(t,e,r).offset},getItemSize:function(t,e,r){return r.itemMetadataMap[e].size},getEstimatedTotalSize:U,getOffsetForIndexAndAlignment:function(t,e,r,o,n){var i=t.direction,a=t.height,l=t.layout,s=t.width,c="horizontal"===i||"horizontal"===l?s:a,u=L(t,e,n),d=U(t,n),f=Math.max(0,Math.min(d-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=o>=h-c&&o<=f+c?"auto":"center"),r){case"start":return f;case"end":return h;case"center":return Math.round(h+(f-h)/2);case"auto":default:return o>=h&&o<=f?o:o-h<f-o?h:f}},getStartIndexForOffset:function(t,e,r){return A(t,r,e)},getStopIndexForStartIndex:function(t,e,r,o){for(var n=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===n||"horizontal"===l?s:i,u=L(t,e,o),d=r+c,f=u.offset+u.size,h=e;h<a-1&&f<d;)f+=L(t,++h,o).size;return h},initInstanceProps:function(t,e){var r={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||D,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,o){void 0===o&&(o=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),o&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});exports.VariableSizeList=q;var k=S({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,Math.min(a*l-s,e*l)),u=Math.max(0,e*l-s+i+l);switch("smart"===r&&(r=o>=u-s&&o<=c+s?"auto":"center"),r){case"start":return c;case"end":return u;case"center":return Math.round(u+(c-u)/2);case"auto":default:return o>=u&&o<=c?o:o-u<c-o?u:c}},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,Math.min(s*a-l,e*a)),u=Math.max(0,e*a-l+i+a);switch("smart"===r&&(r=o>=u-l&&o<=c+l?"auto":"center"),r){case"start":return c;case"end":return u;case"center":return Math.round(u+(c-u)/2);case"auto":default:return o>=u&&o<=c?o:o-u<c-o?u:c}},getColumnStartIndexForOffset:function(t,e){var r=t.columnWidth,o=t.columnCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getColumnStopIndexForStartIndex:function(t,e,r){var o=t.columnWidth,n=t.columnCount,i=t.width,a=e*o;return Math.max(0,Math.min(n-1,e+Math.floor((i+(r-a))/o)))},getRowStartIndexForOffset:function(t,e){var r=t.rowHeight,o=t.rowCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getRowStopIndexForStartIndex:function(t,e,r){var o=t.rowHeight,n=t.rowCount,i=t.height,a=e*o;return Math.max(0,Math.min(n-1,e+Math.floor((i+(r-a))/o)))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}});exports.FixedSizeGrid=k;var N=W({getItemOffset:function(t,e){var r=t.itemSize;t.size;return e*r},getItemSize:function(t,e){var r=t.itemSize;t.size;return r},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,o){var n=t.direction,i=t.height,a=t.itemCount,l=t.itemSize,s=t.layout,c=t.width,u="horizontal"===n||"horizontal"===s?c:i,d=Math.max(0,Math.min(a*l-u,e*l)),f=Math.max(0,e*l-u+l);switch("smart"===r&&(r=o>=f-u&&o<=d+u?"auto":"center"),r){case"start":return d;case"end":return f;case"center":return Math.round(f+(d-f)/2);case"auto":default:return o>=f&&o<=d?o:o-f<d-o?f:d}},getStartIndexForOffset:function(t,e){var r=t.itemCount,o=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getStopIndexForStartIndex:function(t,e,r){var o=t.direction,n=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===o||"horizontal"===l?s:n;return Math.max(0,Math.min(i-1,e+Math.floor((u+(r-c))/a)))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function V(t,e){for(var r in t)if(!(r in e))return!0;for(var o in e)if(t[o]!==e[o])return!0;return!1}function j(t,e){var r=t.style,o=(0,i.default)(t,["style"]),n=e.style,a=(0,i.default)(e,["style"]);return!V(r,n)&&!V(o,a)}function G(t,e){return!j(this.props,t)||V(this.state,e)}exports.FixedSizeList=N;
},{"@babel/runtime/helpers/esm/extends":"UOZF","@babel/runtime/helpers/esm/inheritsLoose":"m3yi","@babel/runtime/helpers/esm/assertThisInitialized":"b9Zy","memoize-one":"wYb7","react":"JpYJ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"EC4s"}],"np9x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react");function t(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:"x"in t?t.x:t.top,left:"y"in t?t.y:t.left,x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top,right:t.right,bottom:t.bottom}}function n(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).liveMeasure,i=void 0===n||n,r=(0,e.useState)({}),o=r[0],u=r[1],s=(0,e.useState)(null),a=s[0],d=s[1],l=(0,e.useCallback)(function(e){d(e)},[]);return(0,e.useLayoutEffect)(function(){if(a){var e=function(){return window.requestAnimationFrame(function(){return u(t(a))})};if(e(),i)return window.addEventListener("resize",e),window.addEventListener("scroll",e),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}}},[a]),[l,o,a]}var i=n;exports.default=i;
},{"react":"JpYJ"}],"qsZb":[function(require,module,exports) {
"use strict";function t(t){return t.toString(16).toUpperCase().padStart(2,"0")}function e(t){return t.toString(16).toUpperCase().padStart(4,"0")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hex2=t,exports.hex4=e;
},{}],"P2Gu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e=n(require("react")),t=n(require("classnames")),a=require("react-window"),l=n(require("react-use-dimensions")),r=n(require("../nano")),i=require("../smalldash"),c=require("./util");function n(e){return e&&e.__esModule?e:{default:e}}const s={root:r.default.rule({fontFamily:"monospace",display:"flex",flex:"1 1 auto"}),child:r.default.rule({display:"flex",cursor:"pointer","&.active":{boxShadow:"inset 0 0 0 1px black"}}),childSegment:r.default.rule({margin:"0 4px"}),breakpoint:r.default.rule({display:"inline-block",width:"10px",height:"10px",alignSelf:"center","&.active":{background:"red",borderRadius:"100%"}})};function d(r){const n=r.fd.cpu().PC(),[d,u]=e.default.useState({});e.default.useEffect(()=>{const e=r.fd.disassemble();u((0,i.fromEntries)(e))},[r.fd.cart]);const f=e.default.useRef();e.default.useEffect(()=>{f.current&&f.current.scrollToItem(n)},[f.current,n]);const[o,{height:m}]=(0,l.default)();return e.default.createElement("div",{ref:o,className:s.root},e.default.createElement(a.FixedSizeList,{ref:f,height:m||0,width:240,itemSize:15,itemCount:r.fd.cart.length},({index:a,style:l})=>e.default.createElement("div",{style:l,className:(0,t.default)(s.child,a===n&&"active"),onClick:()=>r.fd.setBreakpoint(a)},e.default.createElement("i",{className:"".concat(s.breakpoint," ").concat(r.fd.breakpoint===a?"active":"")}),e.default.createElement("span",{className:s.childSegment},"$",(0,c.hex4)(a)),e.default.createElement("span",{className:s.childSegment},(0,c.hex2)(r.fd.cart[a])),e.default.createElement("strong",{className:s.childSegment},d[a]||""))))}
},{"react":"JpYJ","classnames":"kpqe","react-window":"NDAd","react-use-dimensions":"np9x","../nano":"xt68","../smalldash":"kIaU","./util":"qsZb"}],"lm0G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=n(require("react")),t=n(require("../nano")),l=require("./util");function n(e){return e&&e.__esModule?e:{default:e}}const u={root:t.default.rule({display:"flex",textAlign:"center",fontFamily:"monospace",justifyContent:"space-between"})};function a(t){const n=t.reg();return e.default.createElement("dl",{className:u.root},e.default.createElement("div",null,e.default.createElement("dt",null,"AF"),e.default.createElement("dd",null,(0,l.hex4)(n.AF()))),e.default.createElement("div",null,e.default.createElement("dt",null,"BC"),e.default.createElement("dd",null,(0,l.hex4)(n.BC()))),e.default.createElement("div",null,e.default.createElement("dt",null,"DE"),e.default.createElement("dd",null,(0,l.hex4)(n.DE()))),e.default.createElement("div",null,e.default.createElement("dt",null,"HL"),e.default.createElement("dd",null,(0,l.hex4)(n.HL()))),e.default.createElement("div",null,e.default.createElement("dt",null,"SP"),e.default.createElement("dd",null,(0,l.hex4)(n.SP()))),e.default.createElement("div",null,e.default.createElement("dt",null,"PC"),e.default.createElement("dd",null,(0,l.hex4)(n.PC()))))}
},{"react":"JpYJ","../nano":"xt68","./util":"qsZb"}],"uKfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=r(require("react")),t=require("./smalldash");function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(null==e)return{};var r,n,o=u(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){if(null==e)return{};var r,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}function o(r){let{onSubmit:u,children:o}=r,l=n(r,["onSubmit","children"]);return e.default.createElement("form",Object.assign({onSubmit:function(e){e.preventDefault();const r=new FormData(e.currentTarget);u((0,t.fromEntries)(r))}},l),o)}
},{"react":"JpYJ","./smalldash":"kIaU"}],"tWjw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=h;var e=f(require("react")),t=f(require("classnames")),a=require("react-window"),l=f(require("react-use-dimensions")),r=f(require("../nano")),u=require("./util"),o=require("../../wasm"),n=f(require("../Form"));function f(e){return e&&e.__esModule?e:{default:e}}const c={root:r.default.rule({display:"flex",flexDirection:"column",flex:"1 1 0",maxHeight:"100vh"}),controls:r.default.rule({display:"flex",fontFamily:"monospace",textAlign:"center"}),custom:r.default.rule({display:"flex",width:"50px"}),output:r.default.rule({fontFamily:"monospace",textAlign:"center",flex:"1 1 0"}),outputCell:r.default.rule({"&.active":{boxShadow:"inset 0 0 0 1px black"}}),hl:r.default.rule({backgroundColor:"#d0ffff"}),sp:r.default.rule({backgroundColor:"#ffd0ff"})},d={vram:r.default.rule({backgroundColor:"#ffaaaa"}),ram:r.default.rule({backgroundColor:"#ffffaa"}),oam:r.default.rule({backgroundColor:"#aaffaa"}),io:r.default.rule({backgroundColor:"#aaffff"}),himem:r.default.rule({backgroundColor:"#aaaaff"})},s={};for(const p of o.MMU_OFFSETS.segments)for(let e=p.start;e<=p.end;e++)s[e]=d[p.name];const i=16;function m(r){const[n,{height:f}]=(0,l.default)(),d=e.default.createRef(),m=r.mem();return e.default.useEffect(()=>{const e=r.focus-o.MMU_OFFSETS.shift;d.current&&d.current.scrollToItem({columnIndex:e%i,rowIndex:e/i})},[d.current,r.focus]),e.default.createElement("div",{ref:n,className:c.output},e.default.createElement(a.FixedSizeGrid,{ref:d,height:f||0,width:430,columnCount:i,rowCount:m.length/i,columnWidth:25,rowHeight:15},({columnIndex:a,rowIndex:l,style:n})=>{const f=l*i+a,d=f+o.MMU_OFFSETS.shift;return e.default.createElement("div",{style:n,className:(0,t.default)(c.outputCell,r.highlightClasses[d],s[d],d===r.focus&&"active")},(0,u.hex2)(r.mem[f]||0))}))}function h(t){const[a,l]=e.default.useState(0),r=t.fd.cpu();return e.default.createElement("div",{className:c.root},e.default.createElement("div",{className:c.controls},o.MMU_OFFSETS.segments.map(t=>e.default.createElement("div",{key:t.name,className:d[t.name]},e.default.createElement("div",null,t.name),e.default.createElement("button",{onClick:()=>l(t.start)},(0,u.hex4)(t.start)),e.default.createElement("button",{onClick:()=>l(t.end)},(0,u.hex4)(t.end)))),e.default.createElement(n.default,{className:c.custom,onSubmit:({search:e})=>l(parseInt(String(e),16))},e.default.createElement("input",{name:"search",pattern:"[0-9a-fA-F]*",placeholder:"Addr"}))),e.default.createElement(m,{mem:()=>t.fd.mmu(),focus:a,highlightClasses:{[r.HL()]:c.hl,[r.SP()]:c.sp}}))}
},{"react":"JpYJ","classnames":"kpqe","react-window":"NDAd","react-use-dimensions":"np9x","../nano":"xt68","./util":"qsZb","../../wasm":"k65h","../Form":"uKfT"}],"ejJT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Left=i,exports.Right=c,exports.default=void 0;var e=d(require("react")),t=d(require("../nano")),l=d(require("../../wasm/react")),a=d(require("../Display")),n=d(require("./Disassembler")),u=d(require("./Cpu")),r=d(require("./Mmu"));function d(e){return e&&e.__esModule?e:{default:e}}const s={base:t.default.rule({display:"flex",flexDirection:"column",position:"relative",margin:"0 50px"}),controls:t.default.rule({display:"flex",justifyContent:"space-between"}),displays:t.default.rule({position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}),displayPatterns:t.default.rule({position:"absolute",top:0,left:"100%"})};function o(e){return function(t){const l=Date.now(),a=e(t);return console.log("".concat((Date.now()-l)/1e3,"s realtime -- 250s ingame")),a}}function i(){const{fd:t,run:a,pause:r}=e.default.useContext(l.default.Context);return e.default.createElement("div",{className:s.base},e.default.createElement("div",{className:s.controls},e.default.createElement("div",null,e.default.createElement("button",{onClick:a},"►"),e.default.createElement("button",{onClick:r},"❙❙")),e.default.createElement("div",null,e.default.createElement("button",{onClick:()=>t.step()&&r()},"Step"),e.default.createElement("button",{onClick:()=>t.stepMs(16.75)&&r()},"Frame"),e.default.createElement("button",{onClick:()=>t.stepMs(1e3)&&r()},"Sec"),e.default.createElement("button",{onClick:o(()=>t.stepMs(25e4)&&r())},"✈"))),e.default.createElement(u.default,{reg:()=>t.cpu()}),e.default.createElement(n.default,{fd:t}))}function f(t){const{fd:n}=e.default.useContext(l.default.Context),[u,r]=e.default.useState();e.default.useEffect(()=>{function e(){r(e=>!e)}return n.changed.add(e),()=>n.changed.remove(e)},[]);const d=n.mmu();return e.default.createElement(e.default.Fragment,null,e.default.createElement(a.default,{className:s.displayPatterns,pixels:()=>n.patterns(),gridColor:"lightgray"}),e.default.createElement(a.default,{pixels:()=>n.sprites(),window:[8,16],gridColor:"lightgray"}),e.default.createElement("div",{className:s.displays},e.default.createElement(a.default,{pixels:()=>n.background(),window:[d[32579],d[32578]],gridColor:"lightgray"}),e.default.createElement(a.default,{pixels:()=>n.window(),gridColor:"lightgray"})))}function c(){const{fd:t}=e.default.useContext(l.default.Context);return e.default.createElement("div",{className:s.base},e.default.createElement(f,{fd:t}),e.default.createElement(r.default,{fd:t}))}var m={Left:i,Right:c};exports.default=m;
},{"react":"JpYJ","../nano":"xt68","../../wasm/react":"BJDS","../Display":"onBP","./Disassembler":"P2Gu","./Cpu":"lm0G","./Mmu":"tWjw"}]},{},[], null)
//# sourceMappingURL=Debug.ff2500b6.js.map