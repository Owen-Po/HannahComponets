import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Sidebar';

describe('Sidebar', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Sidebar'];
    expect(Component).toBeDefined();
  });
});
