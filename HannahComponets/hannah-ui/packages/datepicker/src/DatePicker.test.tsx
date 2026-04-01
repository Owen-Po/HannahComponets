import { describe, it, expect } from 'vitest';
import * as ComponentModule from './DatePicker';

describe('DatePicker', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['DatePicker'];
    expect(Component).toBeDefined();
  });
});
