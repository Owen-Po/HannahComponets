import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Chip';

describe('Chip', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Chip'];
    expect(Component).toBeDefined();
  });
});
