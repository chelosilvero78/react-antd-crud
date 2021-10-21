"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./CounterUseRef.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Counter({
  value = 1
}) {
  const [count, setCount] = (0, _react.useState)(value);
  const prevCountRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current; // handleAdd

  const handleAdd = () => {
    setCount(count + 1); // setCounter( (c) => c + 1 );
  };

  const handleSubtract = () => setCount(count - 1);

  const handleReset = () => setCount(value);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "render-div"
  }, /*#__PURE__*/_react.default.createElement("h1", null, " Contador-masr "), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h3", null, "Actual:", /*#__PURE__*/_react.default.createElement("span", {
    className: "render-now"
  }, count), ", Anterior:", /*#__PURE__*/_react.default.createElement("span", {
    className: "render-before"
  }, prevCount)), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSubtract
  }, " -1 "), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleReset
  }, " Reset "), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleAdd
  }, " +1 "));
}

var _default = Counter;
exports.default = _default;