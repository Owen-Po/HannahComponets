import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ProductQuickView';

describe('ProductQuickView', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ProductQuickView'];
    expect(Component).toBeDefined();
  });
});
