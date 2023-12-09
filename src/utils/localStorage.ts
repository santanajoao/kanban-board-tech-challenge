'use client';

export function get<T>(key: string, defaultValue?: T): T | undefined {
  try {
    const jsonObject = localStorage.getItem(key);
    if (!jsonObject) return defaultValue;
  
    const object = JSON.parse(jsonObject) as T;
    return object;
  } catch {
    console.warn('error parsing json');
    return defaultValue;
  }
}

export function set<T>(key: string, value: T): void {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}
