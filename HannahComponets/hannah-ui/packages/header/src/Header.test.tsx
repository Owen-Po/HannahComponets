import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Header';

describe('Header', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Header'];
    expect(Component).toBeDefined();
  });
});
