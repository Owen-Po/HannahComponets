import { describe, it, expect } from 'vitest';
import * as ComponentModule from './SimpleTable';

describe('SimpleTable', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['SimpleTable'];
    expect(Component).toBeDefined();
  });
});
