import { describe, it, expect } from 'vitest';
import * as ComponentModule from './KPICard';

describe('KPICard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['KPICard'];
    expect(Component).toBeDefined();
  });
});
