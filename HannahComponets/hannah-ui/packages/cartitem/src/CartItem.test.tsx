import { describe, it, expect } from 'vitest';
import * as ComponentModule from './CartItem';

describe('CartItem', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['CartItem'];
    expect(Component).toBeDefined();
  });
});
