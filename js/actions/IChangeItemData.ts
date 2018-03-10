import { ChangeEvent } from 'react';

interface IChangeItemData {
  type: 'description' | 'rate';
  event: ChangeEvent<HTMLInputElement>;
  getValue(): string;
};

export default IChangeItemData;