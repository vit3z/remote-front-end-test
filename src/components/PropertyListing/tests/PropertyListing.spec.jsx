import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

import useFetchProperties from '../../../hooks/useFetchProperties';
jest.mock('../../../hooks/useFetchProperties');

describe('PropertyListing', () => {
    const DUMMY_DATA = [
        {
            id: 1,
            bedrooms: 3,
            summary: 'Property 1',
            displayAddress: '2 CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950001,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-1.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=1',
            propertyTitle: '3 bedroom flat for sale',
            mainImage:
                'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
        },
        {
            id: 2,
            bedrooms: 3,
            summary: 'Property 2',
            displayAddress: '2 CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950002,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-2.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=2',
            propertyTitle: '3 bedroom flat for sale',
            mainImage:
                'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
        },
        {
            id: 3,
            bedrooms: 3,
            summary: 'Property 3',
            displayAddress: '3 CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950003,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-3.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=3',
            propertyTitle: '3 bedroom flat for sale',
            mainImage:
                'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
        },
        {
            id: 4,
            bedrooms: 3,
            summary: 'Property 4',
            displayAddress: '4 CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950004,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-4.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=4',
            propertyTitle: '3 bedroom flat for sale',
            mainImage:
                'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
        },
        {
            id: 5,
            bedrooms: 3,
            summary: 'Property 5',
            displayAddress: '5 CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950005,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-5.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=5',
            propertyTitle: '3 bedroom flat for sale',
            mainImage:
                'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
        },
    ];

    const mockUseFetchProperties = jest.mocked(useFetchProperties);
    beforeEach(() => {
        jest.clearAllMocks();
        mockUseFetchProperties.mockReturnValue({
            properties: DUMMY_DATA,
            error: null,
            loading: false,
        });
    });
    it('should render five property cards', async () => {
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
