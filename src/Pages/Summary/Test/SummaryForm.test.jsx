import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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
  userEvent.click(termsCheckbox);

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
  userEvent.click(termsCheckbox);

  // check that the ConfButton is enabled
  expect(confButton).toBeEnabled();

  // uncheck the TermsCheckbox
  userEvent.click(termsCheckbox);

  // check to see if the button is disabled
  expect(confButton).toBeDisabled();
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when mouse out
  userEvent.unhover(termsAndConditions);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
