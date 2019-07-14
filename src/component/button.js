import React from 'react';
import { Button, Text } from '@rebass/emotion';

export const PrimaryButton = ({ onClick, title, href, children, ...props }) => {
  return (
    <Button
      onClick={onClick}
      as={href ? 'a' : undefined}
      title={title}
      href={href}
      variant="primary"
      color="white"
      bg="orange300"
      borderColor="orange400"
      borderWidth="2px"
      boxShadow="1px 1px 1px black"
      px={'425'}
      py={'425'}
      {...props}
    >
      <Text fontFamily="mono" fontWeight="400" fontSize="300">
        {children}
      </Text>
    </Button>
  );
};
