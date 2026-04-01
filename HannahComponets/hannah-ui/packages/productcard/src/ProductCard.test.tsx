import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ProductCard';

describe('ProductCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ProductCard'];
    expect(Component).toBeDefined();
  });
});
