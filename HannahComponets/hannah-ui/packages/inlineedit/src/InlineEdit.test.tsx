import { describe, it, expect } from 'vitest';
import * as ComponentModule from './InlineEdit';

describe('InlineEdit', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['InlineEdit'];
    expect(Component).toBeDefined();
  });
});
