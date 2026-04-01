import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Avatar';

describe('Avatar', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Avatar'];
    expect(Component).toBeDefined();
  });
});
