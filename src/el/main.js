/**
 * Base methods for handling html elements
 */

import grab from "./grab";
import { makeEl } from "./make";

function EL() {
  return {
    MAKE: (_tag, optionalPrams = {}) => makeEl(_tag, optionalPrams),
    GRAB: (_identifier, _options = null) => grab(_identifier, _options), //=> grab(_identifier),
    ENTRY: (_entryPoint = "") => entry(_entryPoint ? _entryPoint : null),
    PARENT: (_parentNode = "") => parent(_parentNode ? _parentNode : null),
    SIBLINGS: () => siblings(),
    STYLE: (_style) => style(_style),
    CLASS: (_class) => className(_class),
    TAG: (_tag) => tag(_tag),
    APPEND: (_items, _container) => append(_items, _container),
  };
}

export default EL();
