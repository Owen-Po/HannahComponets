import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Breadcrumb';

describe('Breadcrumb', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Breadcrumb'];
    expect(Component).toBeDefined();
  });
});
