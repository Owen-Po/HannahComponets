import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Register';

describe('Register', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Register'];
    expect(Component).toBeDefined();
  });
});
