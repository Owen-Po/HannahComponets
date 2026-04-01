import { describe, it, expect } from 'vitest';
import * as ComponentModule from './PaymentMethodCard';

describe('PaymentMethodCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['PaymentMethodCard'];
    expect(Component).toBeDefined();
  });
});
