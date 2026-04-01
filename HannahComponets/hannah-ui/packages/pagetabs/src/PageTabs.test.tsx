import { describe, it, expect } from 'vitest';
import * as ComponentModule from './PageTabs';

describe('PageTabs', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['PageTabs'];
    expect(Component).toBeDefined();
  });
});
