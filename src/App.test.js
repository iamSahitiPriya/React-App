import React from "react";
import { getAllByText, render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import Form from "./components/Form";
import Todo from "./components/Todo";


describe("basic rendering of the form page", ()=>{
  it("button should not be disabled",()=>{
    const {getByTestId} = render(<Form />);
  expect(getByTestId("Add")).not.toHaveAttribute("disabled");
  })
});

describe("basic rendering of the todo page",()=>{
  it("delete button should not in disabled state",()=>{
    const {getByTestId}=render(<Todo />);
    expect(getByTestId("delete")).not.toHaveAttribute("disabled");
  })
});


describe("the functionality of form page",()=>{
  it("shoould Add button renders correctly",()=>{
    const {getByTestId}=render(<Form label="Add"/>);
    expect(getByTestId("Add")).toHaveTextContent("Add");
  })
  const mockedset=jest.fn();

  it('should be able to type into input', () => {
    render(
        <Form
            name={[]}
            setName={mockedset}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Go get task" } })
    expect(inputElement.value).toBe("Go get task");

});
});
