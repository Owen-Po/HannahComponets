import { describe, it, expect } from 'vitest';
import * as ComponentModule from './DataGrid';

describe('DataGrid', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['DataGrid'];
    expect(Component).toBeDefined();
  });
});
