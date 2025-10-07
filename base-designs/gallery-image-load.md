I have a gallery that displays one image at a time (carousel/slideshow style) with 25 images total. Each image is in WebP format, approximately 195KB in size. I need you to implement a progressive loading system that optimizes performance.
Requirements:

Initial Load

Load only the first image when the gallery initializes
Display a loading placeholder/spinner while the first image loads


Preloading Strategy

When displaying any image, preload the next 1-2 images in the sequence
Also preload the previous image (for back navigation)
At any given time, keep maximum 3-4 images in memory: [previous, current, next, next+1]


Navigation Handling

When user clicks next/previous or uses keyboard arrows, the image should appear instantly (because it's already preloaded)
Start preloading the new "next" or "previous" image immediately after navigation
Handle edge cases (first and last images in the gallery)


Memory Management

Unload images that are more than 2 positions away from current
Use proper cleanup to prevent memory leaks


Loading States

Show a subtle loading indicator if user navigates to an image that hasn't finished preloading yet
Implement smooth transitions between images


Fallback Behavior

If user rapidly clicks through images (faster than preload), handle gracefully with loading states
Support both mouse/touch navigation and keyboard arrows