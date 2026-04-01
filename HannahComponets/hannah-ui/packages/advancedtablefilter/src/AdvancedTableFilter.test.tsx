import { describe, it, expect } from 'vitest';
import * as ComponentModule from './AdvancedTableFilter';

describe('AdvancedTableFilter', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['AdvancedTableFilter'];
    expect(Component).toBeDefined();
  });
});
