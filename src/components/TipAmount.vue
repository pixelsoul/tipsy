<script setup>
import { computed } from "vue";
import Card from "./Card.vue";
import Currency from "../utils/CurrencyFormat.js";

const props = defineProps({
    bill: {
        type: Number,
        required: false,
        default: 0,
    },
    tipPercent: {
        type: Number,
        required: false,
        default: 15,
    },
});

const tipAmount = computed(() => {
    return (props.bill * props.tipPercent) / 100;
});

const total = computed(() => {
    return props.bill + tipAmount.value;
});
</script>

<template>
    <Card>
        <template #header> {{ tipPercent }}% Tip </template>

        <div class="tip-amount__data">
            <div class="tip-amount__tip-amount">
                <span class="top-title">Tip</span>
                {{ Currency(tipAmount) }}
            </div>
            <div class="tip-amount__total">
                <span class="top-title">Total</span>
                {{ Currency(total) }}
            </div>
        </div>
    </Card>
</template>

<style scoped>
.tip-amount__data {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
}

.tip-amount__tip-amount,
.tip-amount__total {
    font-size: 1.2rem;
    margin: 0.5rem;
    /* background-color: var(--primary); */
    color: var(--white);
    font-weight: 500;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.top-title {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--primary);
    display: block;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
}

@media (min-width: 768px) {
    .tip-amount__data {
        flex-direction: row;
    }

    .tip-amount__tip-amount {
        margin-right: 0.5rem;
    }
}
</style>
