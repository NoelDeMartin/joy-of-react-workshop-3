import dynamic from 'next/dynamic';

export default {
    pre: dynamic(() => import('@/components/CodeSnippet')),
    CircularColorsDemo: dynamic(() => import('@/components/CircularColorsDemo')),
    DivisionGroupsDemo: dynamic(() => import('@/components/DivisionGroupsDemo')),
};
