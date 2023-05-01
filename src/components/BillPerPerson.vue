<script setup>
import Card from "./Card.vue";
import Currency from "../utils/CurrencyFormat.js";

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
            <template #header> Per person </template>
            <div class="inner">
                <div class="bill-per-person__amount">
                    {{ Currency(bill / billDivide) }}
                </div>
            </div>
        </Card>
    </Transition>
</template>

<style scoped>
.bill-per-person__label {
    font-size: 1.2rem;
    margin: 0.5rem;
    background-color: var(--primary);
    color: var(--black);
    font-weight: 500;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.bill-per-person__amount {
    font-size: 1.2rem;
    margin: 0.5rem;
    background-color: var(--primary);
    color: var(--black);
    font-weight: 500;
    padding: 0.4rem;
    border-radius: 0.5rem;
}

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
