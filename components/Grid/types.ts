import React from 'react';

export type ColType = any;

export type GridProps = {
    children: React.ReactNode;
    centered?: boolean;
    cols?: ColType;
    className?: string;
};
