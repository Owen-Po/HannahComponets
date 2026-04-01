import { describe, it, expect } from 'vitest';
import * as ComponentModule from './PromoBanner';

describe('PromoBanner', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['PromoBanner'];
    expect(Component).toBeDefined();
  });
});
