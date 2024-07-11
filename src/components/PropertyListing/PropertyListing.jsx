import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useFetchProperties from '../../hooks/useFetchProperties';

const PropertyListing = () => {
    // Data result from the custom hook is passed along to the component
    // Ideally, we'd get the error/loading data, but it's outside of the project scope
    const { properties } = useFetchProperties();

    return (
        <ul className="PropertyListing">
            {properties &&
                properties.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
