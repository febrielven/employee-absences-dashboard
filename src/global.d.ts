declare module '*.jpg';
declare module '*.png';

type Nullable<T> = T | null;
type ObjectKey<T = any> = {[key: string]: T};