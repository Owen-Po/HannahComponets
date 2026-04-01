import { describe, it, expect } from 'vitest';
import * as ComponentModule from './CartSummary';

describe('CartSummary', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['CartSummary'];
    expect(Component).toBeDefined();
  });
});
