<script setup>
import Card from "./Card.vue";
import CurrencyDisplay from "./CurrencyDisplay.vue";

const props = defineProps({
    bill: {
        type: Number,
        required: false,
        default: 0,
    },
    billDivide: {
        type: Number,
        required: false,
        default: 1,
    },
});
</script>

<template>
    <Transition name="slide-fade">
        <Card v-if="billDivide > 1" class="outer">
            <template #header> Bill Divided </template>
            <div class="inner">
                <CurrencyDisplay
                    title="Per Person"
                    :amount="bill"
                ></CurrencyDisplay>
            </div>
        </Card>
    </Transition>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    /* transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1); */
    transition: all 0.3s ease-out;
    transition-delay: 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.slide-fade-enter-active .inner,
.slide-fade-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-active .inner {
    transition-delay: 0.1s;
}

.slide-fade-enter-from .inner,
.slide-fade-leave-to .inner {
    transform: translateY(10px);
    opacity: 0;
}
</style>
