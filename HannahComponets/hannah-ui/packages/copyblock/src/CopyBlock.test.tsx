import { describe, it, expect } from 'vitest';
import * as ComponentModule from './CopyBlock';

describe('CopyBlock', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['CopyBlock'];
    expect(Component).toBeDefined();
  });
});
