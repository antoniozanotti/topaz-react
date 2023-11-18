import React from 'react';
import * as heroIcons from "@heroicons/react/20/solid";
type IconName = keyof typeof heroIcons;

interface TzButtonProps {
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
  isLoading = false,
  ...props
}: TzButtonProps) => {
  

  /*const label = {
    if (props.isLoading) {
      return "loading";
    }
    return props.label ?? "";
  };

  const iconName = () => {
    if (isLoading) {
      return heroIcons["ArrowPathIcon"];
    }
    return iconName ? heroIcons[iconName] : "";
  });

  const variantStyleMode = computed(() => {
    if (document.documentElement.classList.contains("dark")) {
      if (props.variant == "primary") {
        return "secondary";
      }
      if (props.variant == "secondary") {
        return "primary";
      }
      if (props.variant == "black") {
        return "white";
      }
      if (props.variant == "white") {
        return "black";
      }
    }
    return props.variant;
  });

  /* button classes */
  /*const buttonClasses = computed(() => ({
    // default
    "rounded-full font-medium flex justify-center items-center": true,

    // focus
    "focus:outline focus:outline-offset-2px focus:outline-2px": true,

    // size
    // size -> small
    "text-sm min-h-42px min-w-42px lg:text-xs lg:min-h-34px lg:min-w-34px":
      props.size == "small",
    // size -> base
    "text-base min-h-60px min-w-60px lg:text-sm lg:min-h-48px lg:min-w-48px":
      props.size == "medium",
    // size -> large
    "text-lg min-h-72px min-w-72px lg:text-base lg:min-h-58px lg:min-w-58px":
      props.size == "large",

    // padding only with text
    "px-21px lg:px-17px": props.size == "small" && props.label != "",
    "px-30px lg:px-24px": props.size == "medium" && props.label != "",
    "px-36px lg:px-29px": props.size == "large" && props.label != "",

    // fill
    // fill -> accent
    "bg-accent hover:bg-accent-600 active:bg-accent-700 text-light dark:text-dark focus:outline-accent":
      props.style == "fill" && variantStyleMode.value == "accent",
    // fill -> primary
    "bg-primary hover:bg-primary-600 active:bg-primary-700 text-light focus:outline-primary":
      props.style == "fill" && variantStyleMode.value == "primary",
    // fill -> secondary
    "bg-secondary hover:bg-secondary-600 active:bg-secondary-700 text-primary focus:outline-secondary":
      props.style == "fill" && variantStyleMode.value == "secondary",
    // fill -> negative
    "bg-negative hover:bg-negative-600 active:bg-negative-700 text-light dark:text-dark focus:outline-negative":
      props.style == "fill" && variantStyleMode.value == "negative",
    // fill -> black
    "bg-dark hover:bg-dark-700 active:bg-dark-600 text-light focus:outline-dark":
      props.style == "fill" && variantStyleMode.value == "black",
    // fill -> white
    "bg-light hover:bg-light-600 active:bg-light-700 text-dark focus:outline-light":
      props.style == "fill" && variantStyleMode.value == "white",

    // outline
    "outline outline-1px": props.style == "outline",
    // outline -> accent
    "outline-accent hover:outline-accent-600 active:outline-accent-700 active: text-accent":
      props.style == "outline" && variantStyleMode.value == "accent",
    // outline -> primary
    "outline-primary hover:outline-primary-600 active:outline-primary-700 text-primary":
      props.style == "outline" && variantStyleMode.value == "primary",
    // outline -> secondary
    "outline-secondary hover:outline-secondary-600 active:outline-secondary-700 text-primary":
      props.style == "outline" && variantStyleMode.value == "secondary",
    // outline -> negative
    "outline-negative hover:outline-negative-600 active:outline-negative-700 text-negative":
      props.style == "outline" && variantStyleMode.value == "negative",
    // outline -> black
    "outline-dark hover:outline-dark-700 active:outline-dark-600 text-dark":
      props.style == "outline" && variantStyleMode.value == "black",
    // outline -> white
    "outline-light hover:outline-light-600 active:outline-light-700 text-light":
      props.style == "outline" && variantStyleMode.value == "white",

    // is disabled
    "opacity-50 pointer-events-none": props.isDisabled || props.isLoading,
  }));*/

  /* icon classes */
  /*const iconClasses = computed(() => ({
    // size
    "h-18px w-18px lg:h-14px lg:w-14px": props.size == "small",
    "h-30px w-30px lg:h-24px lg:w-24px": props.size == "medium",
    "h-36px w-36px lg:h-29px lg:w-29px": props.size == "large",

    // is loading
    "animate-spin": props.isLoading,
  }));*/

  /* label classes */
  /*const labelClasses = computed(() => ({
    // padding between icon and text
    "pl-7px": iconName.value != "" && !props.isIconAfterLabel,
    "pr-7px": iconName.value != "" && props.isIconAfterLabel,
  }));*/

  const buttonClasses = "rounded-full font-medium flex justify-center items-center";
  const labelClasses = "";
  //const label = "";

  return (
    <button className={buttonClasses} disabled={isDisabled}>
      <span className={labelClasses}>{ label }</span>
    </button>
  );
};