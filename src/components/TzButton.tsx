import React from "react";
import * as heroIcons from "@heroicons/react/20/solid";
type IconName = keyof typeof heroIcons;

export interface TzButtonProps {
  /**
   * The label of the button.
   */
  label?: string;
  /**
   * The icon of the button.
   */
  iconName?: IconName;
  /**
   * Is the icon after the label?
   */
  isIconAfterLabel?: boolean;
  /**
   * The size of the button.
   */
  size?: "small" | "medium" | "large";
  /**
   * The variant of the button.
   */
  variant?: "accent" | "primary" | "secondary" | "negative" | "black" | "white";
  /**
   * The style of the button.
   */
  style?: "fill" | "outline";
  /**
   * Is the button disabled?
   */
  isDisabled?: boolean;
  /**
   * Is the button loading?
   */
  isLoading?: boolean;
}

export const TzButton = ({
  label,
  iconName,
  isIconAfterLabel = false,
  size = "medium",
  variant = "accent",
  style = "fill",
  isDisabled = false,
  isLoading = false
}: TzButtonProps) => {
  let variantStyleMode = variant;
  if (document.documentElement.classList.contains("dark")) {
    if (variant == "primary") {
      variantStyleMode = "secondary";
    } else if (variant == "secondary") {
      variantStyleMode = "primary";
    } else if (variant == "black") {
      variantStyleMode = "white";
    } else if (variant == "white") {
      variantStyleMode = "black";
    }
  }

  /* button classes */
  let buttonClasses =
    "rounded-full font-medium flex justify-center items-center";

  // focus
  buttonClasses += " focus:outline focus:outline-offset-2 focus:outline-2";

  // size
  if (size == "small") {
    // size -> small
    buttonClasses +=
      " text-sm min-h-[theme(spacing.11)] min-w-[theme(spacing.11)] lg:text-xs lg:min-h-[theme(spacing.9)] lg:min-w-[theme(spacing.9)]";
  } else if (size == "medium") {
    // size -> medium
    buttonClasses +=
      " text-base min-h-[theme(spacing.12)] min-w-[theme(spacing.12)] lg:text-sm lg:min-h-[theme(spacing.10)] lg:min-w-[theme(spacing.10)]";
  } else if (size == "large") {
    // size -> large
    buttonClasses +=
      " text-lg min-h-[theme(spacing.14)] min-w-[theme(spacing.14)] lg:text-base lg:min-h-[theme(spacing.11)] lg:min-w-[theme(spacing.11)]";
  }

  // padding only with text
  if (label) {
    if (size == "small") {
      buttonClasses += " px-6 lg:px-4";
    } else if (size == "medium") {
      buttonClasses += " px-7 lg:px-5";
    } else if (size == "large") {
      buttonClasses += " px-8 lg:px-6";
    }
  }

  // variants and styles
  if (style == "fill") {
    // fill
    if (variantStyleMode == "accent") {
      // fill -> accent
      buttonClasses +=
        " bg-accent hover:bg-accent-600 active:bg-accent-700 text-light dark:text-dark focus:outline-accent";
    } else if (variantStyleMode == "primary") {
      // fill -> primary
      buttonClasses +=
        " bg-primary hover:bg-primary-600 active:bg-primary-700 text-light focus:outline-primary";
    } else if (variantStyleMode == "secondary") {
      // fill -> secondary
      buttonClasses +=
        " bg-secondary hover:bg-secondary-600 active:bg-secondary-700 text-primary focus:outline-secondary";
    } else if (variantStyleMode == "negative") {
      // fill -> negative
      buttonClasses +=
        " bg-negative hover:bg-negative-600 active:bg-negative-700 text-light dark:text-dark focus:outline-negative";
    } else if (variantStyleMode == "black") {
      // fill -> black
      buttonClasses +=
        " bg-dark hover:bg-dark-700 active:bg-dark-600 text-light focus:outline-dark";
    } else if (variantStyleMode == "white") {
      // fill -> white
      buttonClasses +=
        " bg-light hover:bg-light-600 active:bg-light-700 text-dark focus:outline-light";
    }
  } else if (style == "outline") {
    buttonClasses += " outline outline-px";
    // outline
    if (variantStyleMode == "accent") {
      // outline -> accent
      buttonClasses +=
        " outline-accent hover:outline-accent-600 active:outline-accent-700 active: text-accent";
    } else if (variantStyleMode == "primary") {
      // outline -> primary
      buttonClasses +=
        " outline-primary hover:outline-primary-600 active:outline-primary-700 text-primary";
    } else if (variantStyleMode == "secondary") {
      // outline -> secondary
      buttonClasses +=
        " outline-secondary hover:outline-secondary-600 active:outline-secondary-700 text-primary";
    } else if (variantStyleMode == "negative") {
      // outline -> negative
      buttonClasses +=
        " outline-negative hover:outline-negative-600 active:outline-negative-700 text-negative";
    } else if (variantStyleMode == "black") {
      // outline -> black
      buttonClasses +=
        " outline-dark hover:outline-dark-700 active:outline-dark-600 text-dark";
    } else if (variantStyleMode == "white") {
      // outline -> white
      buttonClasses +=
        " outline-light hover:outline-light-600 active:outline-light-700 text-light";
    }
  }

  // is disabled
  if (isDisabled || isLoading) {
    buttonClasses += " opacity-50 pointer-events-none";
  }

  /* icon classes */
  let iconClasses;
  // size
  if (size == "small") {
    iconClasses = "h-6 w-6 lg:h-4 lg:w-4";
  } else if (size == "medium") {
    iconClasses = "h-7 w-7 lg:h-5 lg:w-5";
  } else if (size == "large") {
    iconClasses = "h-8 w-8 lg:h-6 lg:w-6";
  }
  // is loading
  if (isLoading) {
    iconClasses += " animate-spin";
  }

  /* label classes */
  let labelClasses;
  // padding between icon and text
  if (iconName) {
    if (!isIconAfterLabel) {
      labelClasses = "pl-1.5";
    } else {
      labelClasses = "pr-1.5";
    }
  }

  // label
  if (isLoading) {
    label = "loading";
  }

  // icon
  let iconComponentName;
  if (isLoading) {
    iconComponentName = heroIcons["ArrowPathIcon"];
  } else {
    iconComponentName = iconName ? heroIcons[iconName] : "";
  }

  return (
    <button className={buttonClasses} disabled={isDisabled}>
      {iconName &&
        !isIconAfterLabel &&
        React.createElement(iconComponentName, {
          className: iconClasses,
        })}
      {label && <span className={labelClasses}>{label}</span>}
      {iconName &&
        isIconAfterLabel &&
        React.createElement(iconComponentName, {
          className: iconClasses,
        })}
    </button>
  );
};
