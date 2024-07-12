'use client';

import { useRouter } from 'next/navigation';
/* eslint-disable react-hooks/exhaustive-deps */

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type KeyTypes = 'theme' | 'isMenuOpen';
type ValueTypes = 'light' | 'dark' | boolean;

const GetThemeSettings = createContext<any>(null);
const SetThemeSettings = createContext<any>(null);

export const useGetThemeSettings = () => useContext(GetThemeSettings);
export const useSetThemeSettings = () => useContext(SetThemeSettings);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState({});
  const navigation = useRouter();

  useEffect(() => {
    setSettings({ ...settings, isMenuOpen: false });
  }, [navigation]);

  useEffect(() => {
    if (window) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDarkMode.matches) {
        setSettings({ theme: 'dark', isMenuOpen: false });
      } else {
        setSettings({ theme: 'light', isMenuOpen: false });
      }
    }
  }, []);

  const changeTheme = (key: KeyTypes, value: ValueTypes) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <GetThemeSettings.Provider value={settings}>
      <SetThemeSettings.Provider value={changeTheme}>
        {children}
      </SetThemeSettings.Provider>
    </GetThemeSettings.Provider>
  );
};
