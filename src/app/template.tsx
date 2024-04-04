'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useId } from 'react';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import dynamic from 'next/dynamic';
const ErrorRoot = dynamic(() => import('@/app/error'));

const RootTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ErrorBoundary errorComponent={ErrorRoot}>{children}</ErrorBoundary>
    </QueryClientProvider>
  );
};

export default RootTemplate;
