import React from "react";
import { shallow } from "enzyme";

import { ResultsPage } from "../ResultsPage.js";

describe("(component) ResultsPage", () => {
  let wrapper;

  beforeEach(() => {
    const requiredProps = {
      searchResults: [{ 1: "result1" }, { 2: "result2" }],
    };

    wrapper = shallow(<ResultsPage {...requiredProps} />);
  });

  describe("render", () => {
    it("IngredientsForm", () => {
      expect(wrapper).toExist();
    });
  });
});