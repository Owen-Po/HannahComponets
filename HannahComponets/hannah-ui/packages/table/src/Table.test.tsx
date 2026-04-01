import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Table';

describe('Table', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Table'];
    expect(Component).toBeDefined();
  });
});
