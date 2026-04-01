import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Dock';

describe('Dock', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Dock'];
    expect(Component).toBeDefined();
  });
});
