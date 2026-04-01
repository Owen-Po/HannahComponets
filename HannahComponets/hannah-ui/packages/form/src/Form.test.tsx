import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Form';

describe('Form', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Form'];
    expect(Component).toBeDefined();
  });
});
