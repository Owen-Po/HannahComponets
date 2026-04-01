import { describe, it, expect } from 'vitest';
import * as ComponentModule from './DropdownMenu';

describe('DropdownMenu', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['DropdownMenu'];
    expect(Component).toBeDefined();
  });
});
