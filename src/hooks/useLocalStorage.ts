'use client';

import { useEffect, useState } from 'react';
import * as localStorageUtils from '@/utils/localStorage';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const localStorageValue = localStorageUtils.get<T>(key);
    if (localStorageValue) {
      setValue(localStorageValue);
    } else {
      localStorageUtils.set(key, initialValue);
    }
  }, []);

  function set(value: T) {
    setValue(value);
    localStorageUtils.set(key, value);
  }
 
  return { value, set };
}
