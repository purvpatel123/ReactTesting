import Greet from "./greet";
import { render, screen } from "@testing-library/react";

test("renders Greet component", () => {
    render(<Greet/>);
    const headingElement = screen.getByText(/hello,first testing/i);
    expect(headingElement).toBeInTheDocument();
});