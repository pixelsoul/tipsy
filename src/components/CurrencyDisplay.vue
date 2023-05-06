<script setup>
import Currency from "../utils/CurrencyFormat.js";
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: "",
    },
    amount: {
        type: Number,
        required: false,
        default: 0,
    },
});
</script>

<template>
    <div class="currency-display">
        <div class="currency-display__amount">
            <span class="currency-display__label">
                {{ title }}
            </span>
            {{ Currency(amount) }}
        </div>
    </div>
</template>

<style scoped>
.currency-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
}

.currency-display__label {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--primary);
    display: block;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.currency-display__amount {
    font-size: 1.2rem;
    margin: 0.5rem;
    color: var(--white);
    font-weight: 500;
    padding: 0.4rem;
    border-radius: 0.5rem;
}
</style>
