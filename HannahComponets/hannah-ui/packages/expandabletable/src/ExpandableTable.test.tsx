import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ExpandableTable';

describe('ExpandableTable', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ExpandableTable'];
    expect(Component).toBeDefined();
  });
});
