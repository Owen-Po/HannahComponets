import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Select';

describe('Select', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Select'];
    expect(Component).toBeDefined();
  });
});
