<script setup>
 defineProps({
    tag: {
        type: String,
        default: 'h3'
    }
})
</script>

<template>
    <tag class="title">
        <slot></slot>
    </tag>
</template>
<style scoped></style>
