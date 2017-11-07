# Search

A pure javascript implementation of a basic image search grid. Check out the finished project at [https://agconti.github.io/search](https://agconti.github.io/search/).

## Features:
- Leverages [Bing's Image Search](https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/) api to retrieve images
- Responsive search results images grid
- A lightbox on image click that renders a higher resolution version of the image.
- Keyboard navigation when viewing the lightbox. The left and right arrow keys will navigate the user through the grid while the escape key exits the lightbox.
- A redux architecture that supports a strict unidirectional data flow and makes it easy for components to share the same application state.

## Setup

Clone the repository:
```
git clone git@github.com:agconti/tv.git
```

Install the projects dependencies:
```
npm install
```

Start the dev server
```
npm start
```
