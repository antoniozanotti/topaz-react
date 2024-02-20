export function useFocusClasses() {
  return 'focus:outline focus:outline-offset-2 focus:outline-2';
}

export function useVariantClasses(variant = 'accent', filled = true) {
  // variants and filled
  let variantClasses = '';
  if (filled) {
    // filled
    if (variant == 'accent') {
      // filled -> accent
      variantClasses +=
        ' bg-accent hover:bg-accent-1 active:bg-accent-2 focus:outline-accent dark:bg-dark-accent dark:hover:bg-dark-accent-1 dark:active:bg-dark-accent-2 dark:focus:outline-dark-accent';
    } else if (variant == 'primary') {
      // filled -> primary
      variantClasses +=
        ' bg-primary hover:bg-primary-1 active:bg-primary-2 focus:outline-primary dark:bg-dark-primary dark:hover:bg-dark-primary-1 dark:active:bg-dark-primary-2 dark:focus:outline-dark-primary';
    } else if (variant == 'secondary') {
      // filled -> secondary
      variantClasses +=
        ' bg-secondary hover:bg-secondary-1 active:bg-secondary-2 focus:outline-secondary dark:bg-dark-secondary dark:hover:bg-dark-secondary-1 dark:active:bg-dark-secondary-2 dark:focus:outline-dark-secondary';
    } else if (variant == 'negative') {
      // filled -> negative
      variantClasses +=
        ' bg-negative hover:bg-negative-1 active:bg-negative-2 focus:outline-negative dark:bg-dark-negative dark:hover:bg-dark-negative-1 dark:active:bg-dark-negative-2 dark:focus:outline-dark-negative';
    } else if (variant == 'dark') {
      // filled -> dark
      variantClasses +=
        ' bg-dark hover:bg-dark-2 active:bg-dark-1 focus:outline-dark dark:bg-dark-dark dark:hover:bg-dark-dark-2 dark:active:bg-dark-dark-1 dark:focus:outline-dark-dark';
    } else if (variant == 'light') {
      // filled -> white
      variantClasses +=
        ' bg-light hover:bg-light-1 active:bg-light-2 focus:outline-light dark:bg-dark-light dark:hover:bg-dark-light-1 dark:active:bg-dark-light-2 dark:focus:outline-dark-light';
    }
  } else if (!filled) {
    variantClasses = 'outline outline-px';
    // outline
    if (variant == 'accent') {
      // outline -> accent
      variantClasses +=
        ' outline-accent hover:outline-accent-1 active:outline-accent-2 text-accent dark:outline-accent dark:hover:outline-accent-1 dark:active:outline-accent-2 dark:text-dark-accent';
    } else if (variant == 'primary') {
      // outline -> primary
      variantClasses +=
        ' outline-primary hover:outline-primary-1 active:outline-primary-2 text-primary dark:outline-dark-primary dark:hover:outline-dark-primary-1 dark:active:outline-dark-primary-2 dark:text-dark-primary';
    } else if (variant == 'secondary') {
      // outline -> secondary
      variantClasses +=
        ' outline-secondary hover:outline-secondary-1 active:outline-secondary-2 text-secondary dark:outline-dark-secondary dark:hover:outline-dark-secondary-1 dark:active:outline-dark-secondary-2 dark:text-dark-secondary';
    } else if (variant == 'negative') {
      // outline -> negative
      variantClasses +=
        ' outline-negative hover:outline-negative-1 active:outline-negative-2 text-negative dark:outline-dark-negative dark:hover:outline-dark-negative-1 dark:active:outline-dark-negative-2 dark:text-dark-negative';
    } else if (variant == 'dark') {
      // outline -> black
      variantClasses +=
        ' outline-dark hover:outline-dark-1 active:outline-dark-2 text-dark dark:outline-dark-dark dark:hover:outline-dark-dark-1 dark:active:outline-dark-dark-2 dark:text-dark-dark';
    } else if (variant == 'light') {
      // outline -> white
      variantClasses +=
        ' outline-light hover:outline-light-1 active:outline-light-2 text-light dark:outline-dark-light dark:hover:outline-dark-light-1 dark:active:outline-dark-light-2 dark:text-dark-light';
    }
  }
  if (filled) {
    switch (variant) {
      case 'accent':
        variantClasses += ' text-inverse-accent dark:text-inverse-dark-accent';
        break;
      case 'primary':
        variantClasses +=
          ' text-inverse-primary dark:text-inverse-dark-primary';
        break;
      case 'secondary':
        variantClasses +=
          ' text-inverse-secondary dark:text-inverse-dark-secondary';
        break;
      case 'negative':
        variantClasses +=
          ' text-inverse-negative dark:text-inverse-dark-negative';
        break;
      case 'dark':
        variantClasses += ' text-inverse-dark dark:text-inverse-dark-dark';
        break;
      case 'light':
        variantClasses += ' text-inverse-light dark:text-inverse-dark-light';
        break;
    }
  }
  return variantClasses;
}
