import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Divider';

describe('Divider', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Divider'];
    expect(Component).toBeDefined();
  });
});
