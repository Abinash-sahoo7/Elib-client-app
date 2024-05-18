'use client'

import React from 'react'

const DownloadButton = ({fileLink} : {fileLink: string}) => {

    function handleDownload() {
        window.open(fileLink, '_blank')
    }

  return (
    <button onClick={handleDownload} className='m-5 px-6 py-4 rounded-md bg-primary-600 text-white font-medium transition-all
            hover:bg-primary-800 active:bg-primary-200'>Download this Book
    </button>
  )
}

export default DownloadButton