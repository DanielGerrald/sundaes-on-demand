import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Check that termsCheckbox is unchecked and the confButton is disabled", () => {
  render(<SummaryForm />);

  // Find an element with the role of checkbox and name of "I agree to Terms and Conditions"
  const termsCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  // Find and element with the role of button and the name of "Confirm"
  const confButton = screen.getByRole("button", { name: "Confirm Order" });

  // check that the TermsCheckbox is unchecked
  expect(termsCheckbox).not.toBeChecked();

  // check that the button is disabled
  expect(confButton).toBeDisabled();
});

test("Check that checking the termsCheckbox enables the confButton", () => {
  render(<SummaryForm />);

  // Find an element with the role of checkbox and name of "I agree to Terms and Conditions"
  const termsCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  // Find and element with the role of button and the name of "Confirm"
  const confButton = screen.getByRole("button", { name: "Confirm Order" });

  // check the TermsCheckbox
  fireEvent.click(termsCheckbox);

  // check that the ConfButton is enabled
  expect(confButton).toBeEnabled();
});

test("Check that unchecking the termsCheckbox disables the confButton", () => {
  render(<SummaryForm />);

  // Find an element with the role of checkbox and name of "I agree to Terms and Conditions"
  const termsCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  // Find and element with the role of button and the name of "Confirm"
  const confButton = screen.getByRole("button", { name: "Confirm Order" });

  // check the TermsCheckbox
  fireEvent.click(termsCheckbox);
  
  // check that the ConfButton is enabled
  expect(confButton).toBeEnabled();
  
  // uncheck the TermsCheckbox
  fireEvent.click(termsCheckbox);

  // check to see if the button is disabled
  expect(confButton).toBeDisabled();
});
