import { describe, it, expect } from 'vitest';
import * as ComponentModule from './PricingCard';

describe('PricingCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['PricingCard'];
    expect(Component).toBeDefined();
  });
});
