import { describe, it, expect } from 'vitest';
import * as ComponentModule from './QuantitySelector';

describe('QuantitySelector', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['QuantitySelector'];
    expect(Component).toBeDefined();
  });
});
