import { describe, it, expect } from 'vitest';
import * as ComponentModule from './AppSelect';

describe('AppSelect', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['AppSelect'];
    expect(Component).toBeDefined();
  });
});
