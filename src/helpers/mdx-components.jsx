import dynamic from 'next/dynamic';

export default {
    pre: dynamic(() => import('@/components/CodeSnippet')),
    DivisionGroupsDemo: dynamic(() => import('@/components/DivisionGroupsDemo')),
};
