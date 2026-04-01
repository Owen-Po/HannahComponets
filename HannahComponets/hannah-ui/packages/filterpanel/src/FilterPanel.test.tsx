import { describe, it, expect } from 'vitest';
import * as ComponentModule from './FilterPanel';

describe('FilterPanel', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['FilterPanel'];
    expect(Component).toBeDefined();
  });
});
