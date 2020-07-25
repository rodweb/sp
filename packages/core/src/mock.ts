type DeepPartial<T> = Partial<T>

export const mock = <T>(obj: DeepPartial<T> = {}): T => obj as T;
