import "@testing-library/jest-dom";

jest.mock("next/image", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const React = require("react");

  return function MockedNextImage(props: any) {
    // next/image passes through to an img-like component in tests
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return React.createElement("img", props);
  };
});


