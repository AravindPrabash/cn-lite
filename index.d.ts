type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassValue[]
  | { [key: string]: boolean };

declare function combineClassNames(...args: ClassValue[]): string;

export default combineClassNames;
