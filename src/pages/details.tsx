import React from 'react';
import styled from 'styled-components';

interface DetailsPageProps {
    data: any;
}

const DetailsPage = (props: DetailsPageProps) => {
    const { data } = props;

    return (
        <h1>{data ? data.name : 'No data'}</h1>
    )
}

export default DetailsPage;
