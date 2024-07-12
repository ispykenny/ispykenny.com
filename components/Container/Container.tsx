import { cn } from '@/utils';
import React from 'react';

export const Container = ({
  classes,
  children,
}: {
  classes?: string;
  children: React.ReactNode;
}) => (
  <div className={cn('w-5/6 m-auto max-w-[1280px]', classes)}>{children}</div>
);
