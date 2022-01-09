/**
 * Provides a safe way to extract object property name with typechecking
 * @param name // property name
 * @returns // property name as a string
 */
export const propertyOf = <T>(name: keyof T):string => name as string;
