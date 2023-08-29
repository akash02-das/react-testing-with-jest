import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButtonElement).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup();

    render(<Counter />);

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(incrementButtonElement);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup();

    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButtonElement = screen.getByRole('button', {
      name: 'Set',
    });
    await user.click(setButtonElement);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    user.setup();

    render(<Counter />);

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    const amountInput = screen.getByRole('spinbutton');
    const setButtonElement = screen.getByRole('button', {
      name: 'Set',
    });

    await user.tab();
    expect(incrementButtonElement).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
