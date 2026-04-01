import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Stepper';

describe('Stepper', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Stepper'];
    expect(Component).toBeDefined();
  });
});
