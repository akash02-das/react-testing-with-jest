import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['React', 'JavaScript', 'TypeScript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', {
      name: 'LogIn',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('start learning button not is rendered', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);

    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 }
    );
    // screen.debug();

    expect(startLearningButton).toBeInTheDocument();
  });
});
