import {
  CONTENT_ORDERED_LIST_TYPES,
  ContentOrderedList,
} from "src/elements/content/content-ordered-list";
import { ContentOrderedListItem } from "src/elements/content/content-ordered-list-item";

import {
  hasProperties,
  makeGenericHOCShallowWrapperInContextConsumer,
  makeNodeFactory,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
  validateOneOfPropType,
} from "src/__tests__/testing";

const COMPONENT = ContentOrderedList;
const COMPONENT_NAME = "ContentOrderedList";
const DEFAULT_ELEMENT = "ol";
const BULMA_CLASS_NAME = undefined;

const makeNode = makeNodeFactory(COMPONENT);

describe(`${COMPONENT_NAME} component`, () => {
  hasProperties(COMPONENT, {
    Item: ContentOrderedListItem,
    defaultProps: { as: DEFAULT_ELEMENT },
  });

  testForwardRefAsExoticComponentIntegration(
    makeNode,
    makeGenericHOCShallowWrapperInContextConsumer,
    DEFAULT_ELEMENT,
    BULMA_CLASS_NAME,
  );

  testThemeIntegration(makeNode, makeGenericHOCShallowWrapperInContextConsumer);

  describe("props", () => {
    const { propTypes } = COMPONENT;

    describe("type", () => {
      validateOneOfPropType(propTypes, "type", CONTENT_ORDERED_LIST_TYPES);

      CONTENT_ORDERED_LIST_TYPES.map(isType => {
        it(`should be ${isType}`, () => {
          const node = makeNode({ type: isType });
          const wrapper = makeGenericHOCShallowWrapperInContextConsumer(node);
          expect(wrapper.hasClass(`is-${isType}`)).toBe(true);
        });
      });
    });
  });
});
