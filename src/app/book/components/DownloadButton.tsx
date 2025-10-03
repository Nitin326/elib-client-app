'use client';
import React from 'react';

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
    const handleDownload = () => {
        window.open(fileLink, '_blank');
    };

    return (
        <button
            onClick={handleDownload}
            className="mt-6 h-10 rounded-md text-black-500 bg-blue-100 px-4 py-2 text-sm font-mediu transition-all hover:bg-primary-600 active:bg-primary-700 cursor-pointer">
            Download the book
        </button>
    );
};

export default DownloadButton;