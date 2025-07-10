import Greet from "./greet";
import ButtonClick from "./ButtonClick";
import { render, screen ,fireEvent } from "@testing-library/react";

test("renders Greet component", () => {
    render(<Greet/>);
    const headingElement = screen.getByText(/hello,first testing/i);
    expect(headingElement).toBeInTheDocument();
});

test("renders ButtonClick component", () => {
    render(<ButtonClick/>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    
    const headingElement = screen.getByText(/Button Clicked 2 times/i);
    expect(headingElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});