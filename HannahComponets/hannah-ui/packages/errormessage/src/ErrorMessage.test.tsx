import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ErrorMessage';

describe('ErrorMessage', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ErrorMessage'];
    expect(Component).toBeDefined();
  });
});
