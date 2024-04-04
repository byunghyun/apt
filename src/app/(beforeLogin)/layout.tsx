import React from 'react';

const BeforeLoginLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default BeforeLoginLayout;
