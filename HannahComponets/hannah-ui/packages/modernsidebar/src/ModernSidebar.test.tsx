import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ModernSidebar';

describe('ModernSidebar', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ModernSidebar'];
    expect(Component).toBeDefined();
  });
});
