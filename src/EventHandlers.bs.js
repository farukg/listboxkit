// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function onKeyDown(hideMenu, highlightFirst, highlightLast, highlightNext, highlightPrev, menuVisible, selectHighlighted, selectNext, selectPrev, showMenu, $$event) {
  var key = $$event.key;
  var shiftKey = $$event.shiftKey;
  if (key !== "Tab") {
    $$event.preventDefault();
  }
  switch (key) {
    case "ArrowDown" :
        if (menuVisible) {
          if (shiftKey) {
            return Curry._1(selectNext, undefined);
          } else {
            return Curry._1(highlightNext, undefined);
          }
        } else {
          return Curry._1(showMenu, undefined);
        }
    case "ArrowUp" :
        if (menuVisible) {
          if (shiftKey) {
            return Curry._1(selectPrev, undefined);
          } else {
            return Curry._1(highlightPrev, undefined);
          }
        } else {
          return Curry._1(showMenu, undefined);
        }
    case "End" :
        if (menuVisible) {
          return Curry._1(highlightLast, undefined);
        } else {
          return ;
        }
    case " " :
    case "Enter" :
        if (menuVisible) {
          Curry._1(selectHighlighted, undefined);
          return Curry._1(hideMenu, undefined);
        } else {
          return Curry._1(showMenu, undefined);
        }
    case "Escape" :
        if (menuVisible) {
          return Curry._1(hideMenu, undefined);
        } else {
          return ;
        }
    case "Home" :
        if (menuVisible) {
          return Curry._1(highlightFirst, undefined);
        } else {
          return ;
        }
    default:
      return ;
  }
}

function onBlur(resetHighlighted, hideMenu, menuVisible, _event) {
  if (menuVisible !== undefined && menuVisible && hideMenu !== undefined) {
    return Curry._1(hideMenu, undefined);
  } else {
    return Curry._1(resetHighlighted, undefined);
  }
}

function onFocus(selectedIndexes, highlightIndex, _event) {
  return Curry._1(highlightIndex, Belt_Option.getWithDefault(Belt_Array.get(Belt_Array.reverse(selectedIndexes), 0), 0));
}

function onClick(index, selectIndex, _event) {
  return Curry._1(selectIndex, index);
}

function onDropdownClick(menuVisible, hideMenu, showMenu, _event) {
  if (menuVisible) {
    return Curry._1(hideMenu, undefined);
  } else {
    return Curry._1(showMenu, undefined);
  }
}

exports.onKeyDown = onKeyDown;
exports.onBlur = onBlur;
exports.onFocus = onFocus;
exports.onClick = onClick;
exports.onDropdownClick = onDropdownClick;
/* No side effect */
