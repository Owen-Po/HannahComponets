import { describe, it, expect } from 'vitest';
import * as ComponentModule from './HelpModal';

describe('HelpModal', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['HelpModal'];
    expect(Component).toBeDefined();
  });
});
