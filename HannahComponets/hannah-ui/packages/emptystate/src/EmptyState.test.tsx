import { describe, it, expect } from 'vitest';
import * as ComponentModule from './EmptyState';

describe('EmptyState', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['EmptyState'];
    expect(Component).toBeDefined();
  });
});
