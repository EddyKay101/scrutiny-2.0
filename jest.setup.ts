import { TextEncoder, TextDecoder } from "util";
import "@testing-library/jest-dom/extend-expect";
import "jest-axe/extend-expect";
import "@testing-library/jest-dom";
import fetch from "cross-fetch";
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

global.fetch = fetch;
// Enzyme.configure({ adapter: new Adapter() });

// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;
