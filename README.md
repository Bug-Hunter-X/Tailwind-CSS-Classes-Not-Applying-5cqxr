# Tailwind CSS Classes Not Applying

This repository demonstrates a common issue in Tailwind CSS where classes fail to apply to elements, even with seemingly correct syntax and configuration.  The problem often stems from the `purge` (or `content`) option in your Tailwind config, which removes unused CSS classes. If a class isn't detected as used, it's purged from the final CSS output, preventing it from being applied.

**Steps to Reproduce:**

1.  Clone this repository.
2.  Run `npm install` to install dependencies.
3.  Start the development server (e.g., using Vite).
4.  Observe that the hover effect doesn't work on the div element because the class `hover:bg-blue-700` has been purged.

**Solution:**

The solution involves configuring Tailwind to correctly identify the used CSS classes.  This can usually be accomplished by ensuring that the correct files or strings are listed in the `content` array within your `tailwind.config.js` file.