import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Modal';

describe('Modal', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Modal'];
    expect(Component).toBeDefined();
  });
});
