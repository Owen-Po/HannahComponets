import { describe, it, expect } from 'vitest';
import * as ComponentModule from './FormBuilder';

describe('FormBuilder', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['FormBuilder'];
    expect(Component).toBeDefined();
  });
});
