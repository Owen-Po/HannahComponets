import { describe, it, expect } from 'vitest';
import * as ComponentModule from './CommandPalette';

describe('CommandPalette', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['CommandPalette'];
    expect(Component).toBeDefined();
  });
});
