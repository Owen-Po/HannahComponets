import { describe, it, expect } from 'vitest';
import * as ComponentModule from './StickyTable';

describe('StickyTable', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['StickyTable'];
    expect(Component).toBeDefined();
  });
});
