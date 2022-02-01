import React from 'react';
import { Box, ChakraProps, css } from '@chakra-ui/react';

function Logo(props: ChakraProps) {
  return (
    <Box
      rounded="full"
      objectFit="cover"
      objectPosition="center"
      overflow="hidden"
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="255" height="64" fill="none">
        <path stroke="white" d="M81.5 12v36"/>
        <path fill="white" d="M106.439 36.8733c4.674 0 7.506-2.7655 7.506-7.3507 0-4.5709-2.832-7.322-7.461-7.322H101v14.6727h5.439Zm-2.195-2.658v-9.3567h2.067c2.877 0 4.398 1.4042 4.398 4.664 0 3.2742-1.521 4.6927-4.405 4.6927h-2.06Zm17.288 2.8729c2.846 0 4.764-1.3254 5.214-3.3672l-2.952-.1863c-.322.8382-1.146 1.2753-2.21 1.2753-1.595 0-2.607-1.0102-2.607-2.6509v-.0071h7.836v-.8383c0-3.7398-2.367-5.5882-5.409-5.5882-3.386 0-5.581 2.2998-5.581 5.6957 0 3.4891 2.165 5.667 5.709 5.667Zm-2.555-6.8276c.068-1.2538 1.064-2.2568 2.48-2.2568 1.386 0 2.345.9457 2.352 2.2568h-4.832Zm20.317-4.3918h-3.379l-2.382 7.8737h-.12l-2.39-7.8737h-3.371l4.023 11.0045h3.596l4.023-11.0045Zm6.485 11.2194c2.847 0 4.765-1.3254 5.214-3.3672l-2.952-.1863c-.322.8382-1.146 1.2753-2.209 1.2753-1.596 0-2.607-1.0102-2.607-2.6509v-.0071h7.835v-.8383c0-3.7398-2.367-5.5882-5.408-5.5882-3.386 0-5.581 2.2998-5.581 5.6957 0 3.4891 2.165 5.667 5.708 5.667Zm-2.554-6.8276c.067-1.2538 1.063-2.2568 2.479-2.2568 1.386 0 2.345.9457 2.352 2.2568h-4.831Zm13.109-8.06h-3.191v14.6727h3.191V22.2006Zm7.756 14.8876c3.491 0 5.663-2.2854 5.663-5.6742 0-3.4102-2.172-5.6885-5.663-5.6885s-5.664 2.2783-5.664 5.6885c0 3.3888 2.173 5.6742 5.664 5.6742Zm.015-2.3642c-1.611 0-2.435-1.4114-2.435-3.3315 0-1.92.824-3.3386 2.435-3.3386 1.58 0 2.404 1.4186 2.404 3.3386 0 1.9201-.824 3.3315-2.404 3.3315ZM171.828 41h3.191v-5.8891h.098c.442.917 1.408 1.9415 3.266 1.9415 2.622 0 4.667-1.9845 4.667-5.667 0-3.7828-2.135-5.6599-4.66-5.6599-1.925 0-2.846 1.0961-3.273 1.9917h-.143v-1.8484h-3.146V41Zm3.124-9.629c0-1.963.869-3.2168 2.42-3.2168 1.58 0 2.419 1.3111 2.419 3.2168 0 1.9201-.854 3.2527-2.419 3.2527-1.536 0-2.42-1.2896-2.42-3.2527Zm15.469 5.7172c2.847 0 4.765-1.3254 5.214-3.3672l-2.951-.1863c-.322.8382-1.146 1.2753-2.21 1.2753-1.596 0-2.607-1.0102-2.607-2.6509v-.0071h7.836v-.8383c0-3.7398-2.367-5.5882-5.409-5.5882-3.386 0-5.581 2.2998-5.581 5.6957 0 3.4891 2.165 5.667 5.708 5.667Zm-2.554-6.8276c.067-1.2538 1.064-2.2568 2.48-2.2568 1.385 0 2.344.9457 2.352 2.2568h-4.832Zm9.918 6.6127h3.192v-6.2259c0-1.354 1.033-2.2854 2.442-2.2854.442 0 1.049.0716 1.348.1648v-2.7082c-.284-.0645-.681-.1074-1.004-.1074-1.288 0-2.344.7164-2.764 2.0776h-.12v-1.92h-3.094v11.0045Zm19.013 0c4.675 0 7.507-2.7655 7.507-7.3507 0-4.5709-2.832-7.322-7.462-7.322h-5.483v14.6727h5.438Zm-2.195-2.658v-9.3567h2.068c2.877 0 4.397 1.4042 4.397 4.664 0 3.2742-1.52 4.6927-4.405 4.6927h-2.06Zm13.884 2.658 1.138-3.3458h5.536l1.139 3.3458h3.476l-5.289-14.6727h-4.18l-5.296 14.6727h3.476Zm1.962-5.7673 1.888-5.5525h.12l1.888 5.5525h-3.896ZM255 29.537c0-4.8002-3.116-7.537-7.184-7.537-4.09 0-7.184 2.7368-7.184 7.537 0 4.7786 3.094 7.5369 7.184 7.5369 4.068 0 7.184-2.7368 7.184-7.5369Zm-3.289 0c0 3.1093-1.543 4.7929-3.895 4.7929-2.36 0-3.896-1.6836-3.896-4.7929 0-3.1094 1.536-4.793 3.896-4.793 2.352 0 3.895 1.6836 3.895 4.793Z"/>
        <rect width="64" height="64" fill="white" rx="32"/>
        <path fill="black" d="M38 41v4H25v-4z"/>
        <path fill="black" fillRule="evenodd" d="M6 20v21h7.4118C19.2595 41 24 36.299 24 30.5S19.2595 20 13.4118 20H6Zm4.5378 4.5v12h2.874c3.3415 0 6.0504-2.6863 6.0504-6s-2.7089-6-6.0504-6h-2.874ZM41 20v21h7.4118C54.2595 41 59 36.299 59 30.5S54.2595 20 48.4118 20H41Zm4.5378 4.5v12h2.874c3.3415 0 6.0504-2.6863 6.0504-6s-2.7089-6-6.0504-6h-2.874Z" clipRule="evenodd"/>
      </svg>
    </Box>
  );
}

export default Logo;
