import React from "react";
import { shallow } from "enzyme";
import List from "./List.test";

describe("List", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
});
