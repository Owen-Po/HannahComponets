import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Login';

describe('Login', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Login'];
    expect(Component).toBeDefined();
  });
});
