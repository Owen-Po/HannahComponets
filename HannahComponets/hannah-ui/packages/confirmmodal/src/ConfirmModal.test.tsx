import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ConfirmModal';

describe('ConfirmModal', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ConfirmModal'];
    expect(Component).toBeDefined();
  });
});
