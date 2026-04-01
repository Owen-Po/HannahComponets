import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ExportModal';

describe('ExportModal', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ExportModal'];
    expect(Component).toBeDefined();
  });
});
