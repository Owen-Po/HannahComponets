import { describe, it, expect } from 'vitest';
import * as ComponentModule from './SearchableSelect';

describe('SearchableSelect', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['SearchableSelect'];
    expect(Component).toBeDefined();
  });
});
