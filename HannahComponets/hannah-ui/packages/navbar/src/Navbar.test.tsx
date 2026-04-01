import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Navbar';

describe('Navbar', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Navbar'];
    expect(Component).toBeDefined();
  });
});
