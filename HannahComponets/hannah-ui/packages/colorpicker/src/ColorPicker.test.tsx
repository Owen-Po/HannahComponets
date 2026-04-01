import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ColorPicker';

describe('ColorPicker', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ColorPicker'];
    expect(Component).toBeDefined();
  });
});
