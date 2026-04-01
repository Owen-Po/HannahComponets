import { describe, it, expect } from 'vitest';
import * as ComponentModule from './InteractiveCreditCard';

describe('InteractiveCreditCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['InteractiveCreditCard'];
    expect(Component).toBeDefined();
  });
});
