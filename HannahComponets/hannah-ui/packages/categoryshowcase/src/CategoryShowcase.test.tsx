import { describe, it, expect } from 'vitest';
import * as ComponentModule from './CategoryShowcase';

describe('CategoryShowcase', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['CategoryShowcase'];
    expect(Component).toBeDefined();
  });
});
