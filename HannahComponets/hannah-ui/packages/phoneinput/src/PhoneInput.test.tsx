import { describe, it, expect } from 'vitest';
import * as ComponentModule from './PhoneInput';

describe('PhoneInput', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['PhoneInput'];
    expect(Component).toBeDefined();
  });
});
