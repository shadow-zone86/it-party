<template>
  <button
    :class="['button', `button--${variant}`, `button--${size}`]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped lang="scss">
.button {
  @include flex(row, center, center);
  padding: spacing(2) spacing(4);
  border: none;
  border-radius: 4px;
  font-family: $font-family-primary;
  font-weight: $font-weight-medium;
  cursor: pointer;
  transition: all $transition-base;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--primary {
    background-color: $color-primary;
    color: white;

    &:hover:not(:disabled) {
      background-color: $color-primary-dark;
    }
  }

  &--secondary {
    background-color: $color-secondary;
    color: white;

    &:hover:not(:disabled) {
      background-color: $color-secondary-dark;
    }
  }

  &--outline {
    background-color: transparent;
    color: $color-primary;
    border: 2px solid $color-primary;

    &:hover:not(:disabled) {
      background-color: $color-primary;
      color: white;
    }
  }

  &--sm {
    padding: spacing(1.5) spacing(3);
    font-size: $font-size-sm;
  }

  &--md {
    padding: spacing(2) spacing(4);
    font-size: $font-size-base;
  }

  &--lg {
    padding: spacing(3) spacing(6);
    font-size: $font-size-lg;
  }
}
</style>
