import * as React from "react";
import { configure, HTMLAttributes, shallow, ShallowWrapper } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import TestDrive from "../testdrive";

configure({ adapter: new Adapter() });

let testDrive: ShallowWrapper<{}, {}>;

beforeEach(() =>
  testDrive = shallow(<TestDrive />));

  // checking that all is fine and component has been rendered
  it("should render without error", () =>
    expect(testDrive.length).toBe(1));
