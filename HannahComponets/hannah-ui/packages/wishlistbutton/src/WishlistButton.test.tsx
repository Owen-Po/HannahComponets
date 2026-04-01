import { describe, it, expect } from 'vitest';
import * as ComponentModule from './WishlistButton';

describe('WishlistButton', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['WishlistButton'];
    expect(Component).toBeDefined();
  });
});
