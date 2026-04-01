import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Pagination';

describe('Pagination', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Pagination'];
    expect(Component).toBeDefined();
  });
});
