import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Textarea';

describe('Textarea', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Textarea'];
    expect(Component).toBeDefined();
  });
});
