import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Kbd';

describe('Kbd', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Kbd'];
    expect(Component).toBeDefined();
  });
});
