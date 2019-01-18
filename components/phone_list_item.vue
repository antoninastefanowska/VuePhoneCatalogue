<template>
    <div>
        {{ phone.name }}
        {{ phone.brand.name }}
    </div>
</template>

<script>
    module.exports = {
        props: {
            phone: {
                type: Phone,
                required: true
            }
        }
    }
</script>

<style>
</style>