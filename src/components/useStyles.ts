export function useFocusStyles() {
  return 'focus:outline focus:outline-offset-2 focus:outline-2';
}

export function useVariantStyles(
  variant = 'accent',
  filled = true,
  interactive = true
) {
  // variants and filled
  let variantStyles = '';
  if (filled) {
    // filled
    if (variant == 'accent') {
      // filled -> accent
      variantStyles += ' bg-accent dark:bg-dark-accent';
      if (interactive) {
        variantStyles +=
          ' hover:bg-accent-1 active:bg-accent-2 focus:outline-accent dark:hover:bg-dark-accent-1 dark:active:bg-dark-accent-2 dark:focus:outline-dark-accent';
      }
    } else if (variant == 'primary') {
      // filled -> primary
      variantStyles += ' bg-primary dark:bg-dark-primary';
      if (interactive) {
        variantStyles +=
          ' hover:bg-primary-1 active:bg-primary-2 focus:outline-primary dark:hover:bg-dark-primary-1 dark:active:bg-dark-primary-2 dark:focus:outline-dark-primary';
      }
    } else if (variant == 'secondary') {
      // filled -> secondary
      variantStyles += ' bg-secondary dark:bg-dark-secondary';
      if (interactive) {
        variantStyles +=
          ' hover:bg-secondary-1 active:bg-secondary-2 focus:outline-secondary dark:hover:bg-dark-secondary-1 dark:active:bg-dark-secondary-2 dark:focus:outline-dark-secondary';
      }
    } else if (variant == 'negative') {
      // filled -> negative
      variantStyles += ' bg-negative dark:bg-dark-negative';
      if (interactive) {
        variantStyles +=
          ' hover:bg-negative-1 active:bg-negative-2 focus:outline-negative dark:hover:bg-dark-negative-1 dark:active:bg-dark-negative-2 dark:focus:outline-dark-negative';
      }
    } else if (variant == 'dark') {
      // filled -> dark
      variantStyles += ' bg-dark dark:bg-dark-dark';
      if (interactive) {
        variantStyles +=
          ' hover:bg-dark-2 active:bg-dark-1 focus:outline-dark dark:hover:bg-dark-dark-2 dark:active:bg-dark-dark-1 dark:focus:outline-dark-dark';
      }
    } else if (variant == 'light') {
      // filled -> white
      variantStyles += ' bg-light dark:bg-dark-light';
      if (interactive) {
        variantStyles +=
          ' hover:bg-light-1 active:bg-light-2 focus:outline-light dark:hover:bg-dark-light-1 dark:active:bg-dark-light-2 dark:focus:outline-dark-light';
      }
    }
  } else if (!filled) {
    variantStyles = 'outline outline-px';
    // outline
    if (variant == 'accent') {
      // outline -> accent
      variantStyles +=
        ' outline-accent text-accent dark:outline-accent dark:text-dark-accent';
      if (interactive) {
        variantStyles +=
          ' hover:outline-accent-1 active:outline-accent-2 dark:hover:outline-accent-1 dark:active:outline-accent-2';
      }
    } else if (variant == 'primary') {
      // outline -> primary
      variantStyles +=
        ' outline-primary text-primary dark:outline-dark-primary dark:text-dark-primary';
      if (interactive) {
        variantStyles +=
          ' hover:outline-primary-1 active:outline-primary-2 dark:hover:outline-dark-primary-1 dark:active:outline-dark-primary-2';
      }
    } else if (variant == 'secondary') {
      // outline -> secondary
      variantStyles +=
        ' outline-secondary text-secondary dark:outline-dark-secondary dark:text-dark-secondary';
      if (interactive) {
        variantStyles +=
          ' hover:outline-secondary-1 active:outline-secondary-2 dark:hover:outline-dark-secondary-1 dark:active:outline-dark-secondary-2';
      }
    } else if (variant == 'negative') {
      // outline -> negative
      variantStyles +=
        ' outline-negative text-negative dark:outline-dark-negative dark:text-dark-negative';
      if (interactive) {
        variantStyles +=
          ' hover:outline-negative-1 active:outline-negative-2 dark:hover:outline-dark-negative-1 dark:active:outline-dark-negative-2';
      }
    } else if (variant == 'dark') {
      // outline -> black
      variantStyles +=
        ' outline-dark text-dark dark:outline-dark-dark dark:text-dark-dark';
      if (interactive) {
        variantStyles +=
          ' hover:outline-dark-1 active:outline-dark-2 dark:hover:outline-dark-dark-1 dark:active:outline-dark-dark-2';
      }
    } else if (variant == 'light') {
      // outline -> white
      variantStyles +=
        ' outline-light text-light dark:outline-dark-light dark:text-dark-light';
      if (interactive) {
        variantStyles +=
          ' hover:outline-light-1 active:outline-light-2 dark:hover:outline-dark-light-1 dark:active:outline-dark-light-2';
      }
    }
  }
  if (filled) {
    switch (variant) {
      case 'accent':
        variantStyles += ' text-inverse-accent dark:text-inverse-dark-accent';
        break;
      case 'primary':
        variantStyles +=
          ' text-inverse-primary dark:text-inverse-dark-primary';
        break;
      case 'secondary':
        variantStyles +=
          ' text-inverse-secondary dark:text-inverse-dark-secondary';
        break;
      case 'negative':
        variantStyles +=
          ' text-inverse-negative dark:text-inverse-dark-negative';
        break;
      case 'dark':
        variantStyles += ' text-inverse-dark dark:text-inverse-dark-dark';
        break;
      case 'light':
        variantStyles += ' text-inverse-light dark:text-inverse-dark-light';
        break;
    }
  }
  return variantStyles;
}
